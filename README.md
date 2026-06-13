# Data Science Final Review

期末复习项目，包含：

- 按知识点整理的学案：`docs/study_guide.md`
- 可交互网页端题库：`index.html`
- PDF 原始资料与抽取文本：`data/raw`、`data/extracted`
- 题库数据与溯源字段：`data/question_bank.js`、`data/supplemental_questions.js`

## Run

```powershell
python -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Features

- 按知识点练习判断、选择、填空、开放题。
- 当前内置 120 道可追溯题目。
- 每题显示原始 PDF、页码、题型和题号。
- 答错后自动进入错题板块。
- 支持收藏题目。
- 保存本人作答次数、正确率、错题和每次预测卷记录。
- 期末预测卷按图片中的题型结构与重点，从 PDF 原题中抽取。

## Data Policy

题干只来自本地 PDF 或图片核对，不使用网络题源，不新增自编题。解析为基于原题和课程知识点的解释。图片中提到但 PDF 中没有完整原题的数据可视化/抢红包/二倍均值法，只在学案重点清单中标注，不进入题库造题。

当前版本是静态网页，统计保存在浏览器 `localStorage`。因此“全站统计”表示当前浏览器/当前站点存储下的累计统计；若要真实多人全站统计，需要后续接入后端数据库。

## Layout

```text
.
├── data/
│   ├── raw/              # original PDFs and image, renamed in English
│   ├── extracted/        # UTF-8 text extracted from PDFs
│   ├── derived/          # rendered pages used for visual checks
│   ├── question_bank.js  # base source-bound question bank
│   └── supplemental_questions.js
├── docs/
│   └── study_guide.md
├── src/
│   ├── app.js
│   └── styles.css
├── index.html
└── README.md
```
