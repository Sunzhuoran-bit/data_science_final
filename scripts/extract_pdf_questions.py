from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
EXTRACTED_DIR = DATA_DIR / "extracted"
DERIVED_DIR = DATA_DIR / "derived"

SECTION_SPECS = {
    "assignment_feedback_1.txt": {
        "source_id": "af1",
        "sections": [("判断题", "true_false"), ("选择题", "single_choice"), ("填空题", "fill")],
    },
    "assignment_feedback_2.txt": {
        "source_id": "af2",
        "sections": [("判断题", "true_false"), ("单项选择题", "single_choice"), ("填空题", "fill")],
    },
    "assignment_feedback_3.txt": {
        "source_id": "af3",
        "sections": [("判断题", "true_false"), ("选择题", "single_choice"), ("填空题", "fill")],
    },
    "assignment_feedback_4.txt": {
        "source_id": "af4",
        "sections": [
            ("判断题", "true_false"),
            ("单项选择题", "single_choice"),
            ("填空题", "fill"),
            ("简答/综合应用题", "open"),
        ],
    },
}

TYPE_PREFIX = {
    "true_false": "tf",
    "single_choice": "sc",
    "multiple_choice": "mc",
    "fill": "fill",
    "open": "open",
}

TOPIC_RULES = [
    ("log_linear_house", ["二手房", "单位面积", "房价", "学区", "城区", "对数线性", "log(y)", "ln(y)", "school", "subway", "CATE"]),
    ("pca_fa", ["主成分", "PCA", "因子", "载荷", "共同度", "Varimax", "旋转", "特征值", "贡献率", "公共因子", "特殊因子"]),
    ("clustering", ["聚类", "K-Means", "K-means", "K 均值", "K均值", "层次", "树状图", "Ward", "WGSS", "GMM", "高斯混合", "质心"]),
    ("naive_bayes", ["朴素贝叶斯", "贝叶斯", "拉普拉斯", "TAN", "ODE", "半朴素", "文本", "分词", "词频", "稀疏", "后验概率"]),
    ("tree_ensemble", ["决策树", "随机森林", "XGBoost", "XGB", "LightGBM", "Bagging", "Boosting", "bootstrap", "Bootstrap", "信息增益", "增益率", "CART", "ID3", "C4.5", "基尼", "剪枝", "OOB"]),
    ("logistic_roc", ["逻辑回归", "logistic", "Logistic", "Logit", "ROC", "AUC", "混淆矩阵", "TPR", "FPR", "阈值", "odds", "发生比", "分类阈值"]),
    ("anova", ["方差分析", "ANOVA", "SST", "SSA", "SSE", "F 统计", "F统计", "单因素", "双因素", "组间", "组内", "均值"]),
    ("survival_ordinal_count", ["生存", "AFT", "Cox", "风险", "Log-rank", "Wilcoxon", "定序", "probit", "泊松", "过离散", "计数"]),
    ("linear_diagnostics", ["残差", "QQ", "Q-Q", "异方差", "Cook", "VIF", "多重共线性", "遗漏", "误差项", "同方差", "正态"]),
    ("model_selection", ["AIC", "BIC", "调整", "R²", "R2", "F 检验", "F检验", "t 检验", "t检验", "显著性", "模型选择", "step", "自由度"]),
]

QSTART_RE = re.compile(r"^\s*(\d{1,2})[.．、](?!\d)\s*(.*)$")
UPPER_OPTION_RE = re.compile(r"^\s*([A-D])\s*[.．]\s*(.*)$")
LOWER_OPTION_RE = re.compile(r"^\s*\(([a-d])\)\s*(.*)$")


def clean_text(value: str) -> str:
    value = re.sub(r"\s+", " ", value.replace("\u3000", " ")).strip()
    value = value.replace("（）", "（ ）").replace("()", "（ ）")
    return value


def read_lines_with_pages(path: Path) -> list[tuple[str, int]]:
    text = path.read_text(encoding="utf-8")
    lines: list[tuple[str, int]] = []
    page = 1
    for line in text.splitlines():
        if "\f" not in line:
            lines.append((line, page))
            continue
        parts = line.split("\f")
        if parts[0].strip():
            lines.append((parts[0], page))
        page += len(parts) - 1
        if parts[-1].strip():
            lines.append((parts[-1], page))
    return lines


def is_section_heading(line: str, heading: str) -> bool:
    stripped = line.strip()
    return stripped == heading or re.fullmatch(r"\d+\s+" + re.escape(heading), stripped) is not None


def section_indices(lines: list[tuple[str, int]], sections: list[tuple[str, str]]) -> list[tuple[int, str, str, int]]:
    found: list[tuple[int, str, str, int]] = []
    for index, (line, page) in enumerate(lines):
        for heading, qtype in sections:
            if is_section_heading(line, heading):
                found.append((index, heading, qtype, page))
                break
    return found


def split_items(lines: list[tuple[str, int]], start: int, end: int) -> list[dict]:
    items: list[dict] = []
    current: dict | None = None
    for line, page in lines[start + 1 : end]:
        stripped = line.strip()
        if not stripped or re.fullmatch(r"\d+", stripped) or re.fullmatch(r"共\s*\d+\s*题", stripped):
            continue
        match = QSTART_RE.match(line)
        if match:
            if current:
                items.append(current)
            current = {
                "number": int(match.group(1)),
                "page": page,
                "lines": [match.group(2).strip()] if match.group(2).strip() else [],
            }
        elif current:
            current["lines"].append(stripped)
    if current:
        items.append(current)
    return items


def split_options(lines: list[str]) -> tuple[str, list[dict]]:
    stem_lines: list[str] = []
    options: list[dict] = []
    current_option: dict | None = None
    for line in lines:
        upper = UPPER_OPTION_RE.match(line)
        lower = LOWER_OPTION_RE.match(line)
        if upper or lower:
            if current_option:
                options.append(current_option)
            match = upper or lower
            key = match.group(1).upper()
            current_option = {"key": key, "text_lines": [match.group(2).strip()] if match.group(2).strip() else []}
            continue
        if current_option:
            current_option["text_lines"].append(line)
        else:
            stem_lines.append(line)
    if current_option:
        options.append(current_option)
    option_rows = [{"key": item["key"], "text": clean_text(" ".join(item["text_lines"]))} for item in options]
    return clean_text(" ".join(stem_lines)), option_rows


def infer_difficulty(text: str) -> str:
    if "困难" in text or "较难" in text:
        return "hard"
    if "难" in text:
        return "hard"
    if "中" in text:
        return "medium"
    if "易" in text:
        return "easy"
    return "medium"


def infer_topic(text: str) -> str:
    for topic, keywords in TOPIC_RULES:
        if any(keyword in text for keyword in keywords):
            return topic
    return "uncategorized"


def normalize_stem(stem: str) -> str:
    stem = re.sub(r"^（?(易|中|难|较难|困难)）?\s*", "", stem)
    return clean_text(stem)


def should_be_multiple_choice(stem: str) -> bool:
    return any(phrase in stem for phrase in ["哪几项", "正确的有", "多选", "完全正确的是"])


def build_question(source_id: str, heading: str, qtype: str, item: dict) -> dict:
    raw_lines = [line for line in item["lines"] if line.strip()]
    raw_text = clean_text(" ".join(raw_lines))
    parsed_type = qtype
    options: list[dict] = []
    if qtype == "single_choice":
        stem, options = split_options(raw_lines)
        if should_be_multiple_choice(stem):
            parsed_type = "multiple_choice"
    else:
        stem = raw_text
    stem = normalize_stem(stem)
    missing_text = not stem
    if missing_text:
        stem = f"原 PDF 文本提取为空，请查看 {source_id} 的“{heading}”第 {item['number']} 题。"
    prefix = TYPE_PREFIX[parsed_type]
    question = {
        "id": f"{source_id}-{prefix}-{item['number']:03d}",
        "topic": infer_topic(raw_text) if raw_text else "uncategorized",
        "type": parsed_type,
        "difficulty": infer_difficulty(raw_text),
        "stem": stem,
        "source": {"sourceId": source_id, "page": item["page"], "section": heading, "question": str(item["number"])},
        "sourceTextMissing": missing_text,
    }
    if options:
        question["options"] = options
    return question


def extract_questions() -> list[dict]:
    questions: list[dict] = []
    for file_name, spec in SECTION_SPECS.items():
        lines = read_lines_with_pages(EXTRACTED_DIR / file_name)
        indices = section_indices(lines, spec["sections"])
        for offset, (start, heading, qtype, _page) in enumerate(indices):
            end = indices[offset + 1][0] if offset + 1 < len(indices) else len(lines)
            for item in split_items(lines, start, end):
                questions.append(build_question(spec["source_id"], heading, qtype, item))
    return questions


def write_outputs() -> None:
    DERIVED_DIR.mkdir(parents=True, exist_ok=True)
    questions = extract_questions()
    (DERIVED_DIR / "extracted_pdf_questions.json").write_text(
        json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    summary: dict[str, dict[str, int]] = {}
    missing_text: list[dict] = []
    for question in questions:
        source_id = question["source"]["sourceId"]
        section = question["source"]["section"]
        summary.setdefault(source_id, {})
        summary[source_id][section] = summary[source_id].get(section, 0) + 1
        if question.get("sourceTextMissing"):
            missing_text.append(question)
    payload = {"total": len(questions), "bySourceAndSection": summary, "sourceTextMissing": missing_text}
    (DERIVED_DIR / "extracted_pdf_questions_summary.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )


if __name__ == "__main__":
    write_outputs()
