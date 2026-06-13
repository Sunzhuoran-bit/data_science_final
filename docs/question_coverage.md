# PDF Question Coverage Audit

本报告由 `scripts/extract_pdf_questions.py` 与 `scripts/build_full_coverage_questions.py` 生成。
审计对象为 4 个作业反馈 PDF：`assignment_feedback_1.pdf` 至 `assignment_feedback_4.pdf`。

- PDF 题号总数：204
- 原网页题库题数：118
- 原题库已覆盖 PDF 题号：118
- 本次补齐题号：86

## PDF 原始题号统计

| PDF | 题型板块 | 题号数 |
|---|---:|---:|
| af1 | 判断题 | 14 |
| af1 | 选择题 | 14 |
| af1 | 填空题 | 10 |
| af2 | 判断题 | 23 |
| af2 | 单项选择题 | 8 |
| af2 | 填空题 | 11 |
| af3 | 判断题 | 23 |
| af3 | 选择题 | 33 |
| af3 | 填空题 | 10 |
| af4 | 判断题 | 12 |
| af4 | 单项选择题 | 29 |
| af4 | 填空题 | 15 |
| af4 | 简答/综合应用题 | 2 |

## 本次补齐题号统计

| PDF | 题型板块 | 补齐数 |
|---|---:|---:|
| af1 | 判断题 | 8 |
| af1 | 选择题 | 8 |
| af1 | 填空题 | 7 |
| af2 | 判断题 | 8 |
| af2 | 填空题 | 5 |
| af3 | 判断题 | 4 |
| af3 | 选择题 | 18 |
| af3 | 填空题 | 3 |
| af4 | 判断题 | 2 |
| af4 | 单项选择题 | 15 |
| af4 | 填空题 | 8 |

## 补齐题号按知识点分布

| 知识点 | 补齐数 |
|---|---:|
| uncategorized | 14 |
| pca_fa | 14 |
| tree_ensemble | 11 |
| linear_diagnostics | 10 |
| naive_bayes | 10 |
| log_linear_house | 9 |
| anova | 5 |
| clustering | 5 |
| model_selection | 4 |
| survival_ordinal_count | 3 |
| logistic_roc | 1 |

## 补齐题号明细

### af1
- `af1-tf-005`：判断题第 5 题，知识点 `model_selection`，p.1
- `af1-tf-007`：判断题第 7 题，知识点 `log_linear_house`，p.1
- `af1-tf-009`：判断题第 9 题，知识点 `model_selection`，p.1
- `af1-tf-010`：判断题第 10 题，知识点 `uncategorized`，p.1
- `af1-tf-011`：判断题第 11 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af1-tf-012`：判断题第 12 题，知识点 `linear_diagnostics`，p.1
- `af1-tf-013`：判断题第 13 题，知识点 `pca_fa`，p.1
- `af1-tf-014`：判断题第 14 题，知识点 `linear_diagnostics`，p.1
- `af1-sc-005`：选择题第 5 题，知识点 `linear_diagnostics`，p.1
- `af1-sc-007`：选择题第 7 题，知识点 `linear_diagnostics`，p.1
- `af1-sc-008`：选择题第 8 题，知识点 `anova`，p.1
- `af1-sc-009`：选择题第 9 题，知识点 `uncategorized`，p.1
- `af1-sc-011`：选择题第 11 题，知识点 `model_selection`，p.1
- `af1-sc-012`：选择题第 12 题，知识点 `log_linear_house`，p.1
- `af1-sc-013`：选择题第 13 题，知识点 `linear_diagnostics`，p.1
- `af1-sc-014`：选择题第 14 题，知识点 `anova`，p.1
- `af1-fill-003`：填空题第 3 题，知识点 `linear_diagnostics`，p.1
- `af1-fill-004`：填空题第 4 题，知识点 `log_linear_house`，p.1
- `af1-fill-005`：填空题第 5 题，知识点 `log_linear_house`，p.1
- `af1-fill-006`：填空题第 6 题，知识点 `linear_diagnostics`，p.1
- `af1-fill-007`：填空题第 7 题，知识点 `log_linear_house`，p.1
- `af1-fill-009`：填空题第 9 题，知识点 `linear_diagnostics`，p.1
- `af1-fill-010`：填空题第 10 题，知识点 `linear_diagnostics`，p.1

### af2
- `af2-tf-008`：判断题第 8 题，知识点 `anova`，p.1
- `af2-tf-009`：判断题第 9 题，知识点 `model_selection`，p.1
- `af2-tf-013`：判断题第 13 题，知识点 `linear_diagnostics`，p.1
- `af2-tf-014`：判断题第 14 题，知识点 `log_linear_house`，p.1
- `af2-tf-015`：判断题第 15 题，知识点 `log_linear_house`，p.1
- `af2-tf-016`：判断题第 16 题，知识点 `log_linear_house`，p.1
- `af2-tf-018`：判断题第 18 题，知识点 `anova`，p.1
- `af2-tf-022`：判断题第 22 题，知识点 `log_linear_house`，p.1
- `af2-fill-001`：填空题第 1 题，知识点 `logistic_roc`，p.1
- `af2-fill-002`：填空题第 2 题，知识点 `survival_ordinal_count`，p.1
- `af2-fill-004`：填空题第 4 题，知识点 `survival_ordinal_count`，p.1
- `af2-fill-005`：填空题第 5 题，知识点 `anova`，p.1
- `af2-fill-007`：填空题第 7 题，知识点 `survival_ordinal_count`，p.1

### af3
- `af3-tf-006`：判断题第 6 题，知识点 `pca_fa`，p.1
- `af3-tf-014`：判断题第 14 题，知识点 `pca_fa`，p.1
- `af3-tf-017`：判断题第 17 题，知识点 `pca_fa`，p.1
- `af3-tf-023`：判断题第 23 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-sc-006`：选择题第 6 题，知识点 `pca_fa`，p.1
- `af3-sc-007`：选择题第 7 题，知识点 `pca_fa`，p.1
- `af3-sc-009`：选择题第 9 题，知识点 `pca_fa`，p.1
- `af3-sc-010`：选择题第 10 题，知识点 `clustering`，p.1
- `af3-sc-011`：选择题第 11 题，知识点 `clustering`，p.1
- `af3-sc-015`：选择题第 15 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-sc-016`：选择题第 16 题，知识点 `pca_fa`，p.1
- `af3-mc-017`：选择题第 17 题，知识点 `pca_fa`，p.1
- `af3-sc-019`：选择题第 19 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-sc-022`：选择题第 22 题，知识点 `pca_fa`，p.1
- `af3-sc-023`：选择题第 23 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-sc-025`：选择题第 25 题，知识点 `clustering`，p.1
- `af3-sc-027`：选择题第 27 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-sc-028`：选择题第 28 题，知识点 `pca_fa`，p.1
- `af3-sc-029`：选择题第 29 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-sc-030`：选择题第 30 题，知识点 `pca_fa`，p.1
- `af3-sc-031`：选择题第 31 题，知识点 `clustering`，p.1
- `af3-sc-032`：选择题第 32 题，知识点 `clustering`，p.1
- `af3-fill-004`：填空题第 4 题，知识点 `pca_fa`，p.1
- `af3-fill-005`：填空题第 5 题，知识点 `uncategorized`，p.1；PDF 文本缺失
- `af3-fill-009`：填空题第 9 题，知识点 `uncategorized`，p.1；PDF 文本缺失

### af4
- `af4-tf-006`：判断题第 6 题，知识点 `naive_bayes`，p.1
- `af4-tf-009`：判断题第 9 题，知识点 `tree_ensemble`，p.1
- `af4-sc-005`：单项选择题第 5 题，知识点 `tree_ensemble`，p.1
- `af4-sc-007`：单项选择题第 7 题，知识点 `naive_bayes`，p.1
- `af4-sc-008`：单项选择题第 8 题，知识点 `naive_bayes`，p.1
- `af4-sc-011`：单项选择题第 11 题，知识点 `tree_ensemble`，p.1
- `af4-sc-012`：单项选择题第 12 题，知识点 `naive_bayes`，p.1
- `af4-sc-015`：单项选择题第 15 题，知识点 `tree_ensemble`，p.1
- `af4-sc-017`：单项选择题第 17 题，知识点 `tree_ensemble`，p.1
- `af4-sc-019`：单项选择题第 19 题，知识点 `naive_bayes`，p.1
- `af4-sc-021`：单项选择题第 21 题，知识点 `naive_bayes`，p.1
- `af4-sc-022`：单项选择题第 22 题，知识点 `naive_bayes`，p.1
- `af4-sc-023`：单项选择题第 23 题，知识点 `tree_ensemble`，p.1
- `af4-sc-024`：单项选择题第 24 题，知识点 `pca_fa`，p.1
- `af4-sc-025`：单项选择题第 25 题，知识点 `tree_ensemble`，p.1
- `af4-sc-026`：单项选择题第 26 题，知识点 `naive_bayes`，p.1
- `af4-sc-029`：单项选择题第 29 题，知识点 `tree_ensemble`，p.1
- `af4-fill-003`：填空题第 3 题，知识点 `naive_bayes`，p.1
- `af4-fill-006`：填空题第 6 题，知识点 `naive_bayes`，p.1
- `af4-fill-007`：填空题第 7 题，知识点 `tree_ensemble`，p.1
- `af4-fill-008`：填空题第 8 题，知识点 `tree_ensemble`，p.1
- `af4-fill-010`：填空题第 10 题，知识点 `uncategorized`，p.1
- `af4-fill-011`：填空题第 11 题，知识点 `tree_ensemble`，p.1
- `af4-fill-013`：填空题第 13 题，知识点 `uncategorized`，p.1
- `af4-fill-015`：填空题第 15 题，知识点 `uncategorized`，p.1

## PDF 文本提取为空但保留的题号

- `af1-tf-006`：af1 判断题第 6 题，p.1，已在原题库中恢复
- `af1-tf-008`：af1 判断题第 8 题，p.1，已在原题库中恢复
- `af1-tf-011`：af1 判断题第 11 题，p.1，已补入待核对
- `af1-fill-008`：af1 填空题第 8 题，p.1，已在原题库中恢复
- `af3-tf-023`：af3 判断题第 23 题，p.1，已补入待核对
- `af3-sc-015`：af3 选择题第 15 题，p.1，已补入待核对
- `af3-sc-019`：af3 选择题第 19 题，p.1，已补入待核对
- `af3-sc-023`：af3 选择题第 23 题，p.1，已补入待核对
- `af3-sc-027`：af3 选择题第 27 题，p.1，已补入待核对
- `af3-sc-029`：af3 选择题第 29 题，p.1，已补入待核对
- `af3-sc-033`：af3 选择题第 33 题，p.1，已在原题库中恢复
- `af3-fill-005`：af3 填空题第 5 题，p.1，已补入待核对
- `af3-fill-006`：af3 填空题第 6 题，p.1，已在原题库中恢复
- `af3-fill-007`：af3 填空题第 7 题，p.1，已在原题库中恢复
- `af3-fill-009`：af3 填空题第 9 题，p.1，已补入待核对
- `af3-fill-010`：af3 填空题第 10 题，p.1，已在原题库中恢复
