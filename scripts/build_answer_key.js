const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "docs", "answer_key.md");
const files = [
  "data/question_bank.js",
  "data/supplemental_questions.js",
  "data/full_coverage_questions.js",
  "data/final_bank_questions.js",
  "data/answer_overrides.js",
  "data/merge_overrides.js"
];

const sandbox = {
  window: {},
  console
};
sandbox.window.window = sandbox.window;

for (const file of files) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInNewContext(code, sandbox, { filename: file });
}

const questions = sandbox.window.QUESTION_BANK || [];
const topics = new Map((sandbox.window.TOPICS || []).map((topic) => [topic.id, topic.name]));
const sourceFiles = sandbox.window.SOURCE_FILES || {};

function questionSources(question) {
  if (Array.isArray(question.sources) && question.sources.length) return question.sources;
  return question.source ? [question.source] : [];
}

function formatSource(source) {
  const file = sourceFiles[source.sourceId] || {};
  const fileName = file.originalFile || source.sourceId || "未知来源";
  return `${fileName}，p.${source.page || "?"}，${source.section || ""}第 ${source.question || "?"} 题`;
}

function sourceLabel(question) {
  return questionSources(question).map(formatSource).join(" & ") || "未知来源";
}

function needsPriorityReview(question) {
  return Boolean(question.reviewPriority) || questionSources(question).some((source) => {
    return source.sourceId === "final" || source.sourceId === "af3";
  });
}

function typeLabel(type) {
  return {
    true_false: "判断题",
    single_choice: "单选题",
    multiple_choice: "多选题",
    fill: "填空题",
    open: "开放题"
  }[type] || type;
}

function difficultyLabel(difficulty) {
  return {
    easy: "简单",
    medium: "中等",
    hard: "困难"
  }[difficulty] || "未标注";
}

function answerText(question) {
  if (question.answerPending) return "待核对";
  if (question.type === "true_false") return question.answer ? "正确" : "错误";
  if (question.type === "single_choice") return String(question.answer || "");
  if (question.type === "multiple_choice") return (question.answer || []).join("、");
  const answer = question.answer || {};
  return (answer.accepted || [""])[0];
}

function md(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

const lines = [
  "# Data Science Final Answer Key",
  "",
  "本答案总表按网页题号排列，题目均来自项目中的 PDF 题库文件。缺失答案由 `data/answer_overrides.js` 统一补全；原 PDF 仅保留题号但没有题干的条目会在答案中明确标注。",
  "",
  `- 题目总数：${questions.length}`,
  `- 已补答案覆盖文件：\`data/answer_overrides.js\``,
  "",
  "## 题目答案总表",
  ""
];

questions.forEach((question, index) => {
  lines.push(`### ${index + 1}. ${question.id}`);
  lines.push("");
  lines.push(`- 来源：${sourceLabel(question)}`);
  lines.push(`- 知识点：${topics.get(question.topic) || question.topic || "未归类"}`);
  lines.push(`- 题型：${typeLabel(question.type)}；难度：${difficultyLabel(question.difficulty)}`);
  if (needsPriorityReview(question)) {
    lines.push("- 重点标注：重点");
  }
  if (question.sourceTextMissing) {
    lines.push("- 来源状态：原 PDF 题干或选项不可机读，已按页面可见内容或空白题号说明处理");
  }
  lines.push("");
  lines.push("**题干**");
  lines.push("");
  lines.push(md(question.stem) || "（无可读题干）");
  lines.push("");
  if (Array.isArray(question.options) && question.options.length) {
    lines.push("**选项**");
    lines.push("");
    question.options.forEach((option) => {
      lines.push(`- ${option.key}. ${md(option.text)}`);
    });
    lines.push("");
  }
  lines.push(`**参考答案：** ${answerText(question)}`);
  lines.push("");
  lines.push(`**解析：** ${md(question.explanation) || "（暂无解析）"}`);
  lines.push("");
});

fs.writeFileSync(output, `${lines.join("\n")}\n`, "utf8");
console.log(output);
