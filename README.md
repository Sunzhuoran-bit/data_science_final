# data_science_final

期末复习项目，包含：

- 按知识点整理的讲义式学案：`docs/study_guides/data_science_final_study_workbook.docx`
- 全部题目答案与解析总表：`docs/answer_key.md`
- PDF 题号覆盖审计：`docs/question_coverage.md`
- 可交互网页端题库：`index.html`
- 双击即用的离线单文件网页：`data_science_final.html`
- PDF 原始资料与抽取文本：`data/raw`、`data/extracted`
- 题库数据与溯源字段：`data/question_bank.js`、`data/supplemental_questions.js`、`data/full_coverage_questions.js`、`data/final_bank_questions.js`
- 缺失答案补全补丁：`data/answer_overrides.js`

## Run

最简单方式：直接双击打开 `data_science_final.html`，无需启动 Python。

如果需要用本地服务预览多文件版，再运行：

```powershell
python -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Features

- 按知识点练习判断、选择、填空、开放题。
- 当前覆盖 4 个作业反馈 PDF 与 `作业反馈_期末题库.pdf` 的 286 道题。
- 每题显示原始 PDF、页码、题型和题号。
- 答错后自动进入错题本。
- 支持收藏题目。
- 保存本人作答次数、正确率、错题和每次预测卷记录。
- 286 道题均有参考答案和解析；原 PDF 仅保留题号但没有题干的 2 个条目保留在题库与答案表中，并明确标注来源空白。
- 期末预测卷按图片中的题型结构与重点，从 PDF 原题中抽取。

## Data Policy

题干只来自本地 PDF 或图片核对，不使用网络题源，不新增自编题。解析为基于原题和课程知识点的解释。图片中提到但 PDF 中没有完整原题的数据可视化/抢红包/二倍均值法，只在学案重点清单中标注，不进入题库造题。

当前版本是静态网页，统计保存在各自浏览器的 `localStorage`。分享给其他人后，对方可以运行或部署同一套网页，但答题记录、错题、收藏、正确率和训练记录只保存在对方自己的浏览器里，不会同步到公共统计或其他用户。

## Layout

```text
.
├── data/
│   ├── raw/              # original PDFs and image, renamed in English
│   ├── extracted/        # UTF-8 text extracted from PDFs
│   ├── derived/          # rendered pages used for visual checks
│   ├── question_bank.js  # base source-bound question bank
│   ├── supplemental_questions.js
│   ├── full_coverage_questions.js
│   ├── final_bank_questions.js
│   └── answer_overrides.js
├── docs/
│   ├── answer_key.md
│   ├── question_coverage.md
│   ├── study_guide.md
│   └── study_guides/
├── src/
│   ├── app.js
│   └── styles.css
├── index.html
├── data_science_final.html
└── README.md
```
