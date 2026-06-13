window.SOURCE_FILES = {
  af1: {
    originalFile: "作业反馈1.pdf",
    file: "data/raw/assignment_feedback_1.pdf",
    extractedText: "data/extracted/assignment_feedback_1.txt",
    title: "课堂反馈 1"
  },
  af2: {
    originalFile: "作业反馈2.pdf",
    file: "data/raw/assignment_feedback_2.pdf",
    extractedText: "data/extracted/assignment_feedback_2.txt",
    title: "回归、方差分析、生存分析习题整合"
  },
  af3: {
    originalFile: "作业反馈3.pdf",
    file: "data/raw/assignment_feedback_3.pdf",
    extractedText: "data/extracted/assignment_feedback_3.txt",
    title: "课堂反馈 3"
  },
  af4: {
    originalFile: "作业反馈4.pdf",
    file: "data/raw/assignment_feedback_4.pdf",
    extractedText: "data/extracted/assignment_feedback_4.txt",
    title: "分类模型习题整合"
  },
  final: {
    originalFile: "作业反馈_期末题库.pdf",
    file: "data/raw/final_question_bank.pdf",
    extractedText: "data/extracted/final_question_bank.txt",
    title: "期末题库"
  },
  image: {
    originalFile: "97380512a700501ee87148c0e46b1608.jpg",
    file: "data/raw/exam_requirements.jpg",
    title: "老师课上强调的考试要求图片"
  }
};

window.EXAM_REQUIREMENTS = {
  source: "data/raw/exam_requirements.jpg",
  evidence: [
    "图片标题与正文写明：实战要靠考试来拉开分数。",
    "图片写明题型：判断10题、选择7题、填空10多个、简答在期末题库中、大题4道。",
    "图片写明题库来源：每次课程反馈或总体题库约70-80%，课堂反馈3要重点看。",
    "图片写明复习原则：不能光背，要懂；KMEANS错误要与上下题合并看。",
    "图片写明重点：数据可视化/数据生产要素、回归分析、无监督、少量机器学习、模型理解、计算、代码理解、随机森林与XGBoost同背景。"
  ],
  finalPaperShape: {
    trueFalse: 10,
    choice: 7,
    fill: 10,
    open: 4
  },
  topicPriority: [
    "pca_fa",
    "clustering",
    "linear_diagnostics",
    "model_selection",
    "log_linear_house",
    "tree_ensemble",
    "naive_bayes",
    "logistic_roc",
    "anova",
    "survival_ordinal_count"
  ]
};

window.TOPICS = [
  { id: "linear_diagnostics", name: "线性回归诊断与误差假设", group: "回归分析" },
  { id: "model_selection", name: "模型评价、AIC/BIC 与显著性检验", group: "回归分析" },
  { id: "log_linear_house", name: "对数线性模型、交互项与二手房案例", group: "回归分析" },
  { id: "anova", name: "方差分析与方差分解", group: "统计建模" },
  { id: "logistic_roc", name: "逻辑回归、ROC/AUC 与混淆矩阵", group: "统计建模" },
  { id: "survival_ordinal_count", name: "生存分析、定序回归与计数模型", group: "统计建模" },
  { id: "pca_fa", name: "主成分分析与因子分析", group: "无监督学习" },
  { id: "clustering", name: "K-means、层次聚类与 GMM 联系", group: "无监督学习" },
  { id: "naive_bayes", name: "朴素贝叶斯与文本分类", group: "机器学习" },
  { id: "tree_ensemble", name: "决策树、随机森林与 XGBoost", group: "机器学习" },
  { id: "uncategorized", name: "未归类题号", group: "待核对" }
];

window.QUESTION_BANK = [
  {
    id: "af1-tf-001",
    topic: "linear_diagnostics",
    type: "true_false",
    difficulty: "easy",
    stem: "在进行回归分析时，如果模型显示自变量 X（如：是否临近地铁）对因变量 Y（单位面积房价）的影响在统计学上显著，则可以判定 X 是导致 Y 变化的因果原因。",
    answer: false,
    explanation: "统计显著只说明在模型条件下相关关系显著，不能直接推出因果原因。因果判断还需要识别策略、实验或准实验设计等额外依据。",
    source: { sourceId: "af1", page: 1, section: "判断题", question: "1" },
    finalExam: true
  },
  {
    id: "af1-tf-002",
    topic: "model_selection",
    type: "true_false",
    difficulty: "medium",
    stem: "在进行线性回归模型选择时，由于 BIC 准则相比 AIC 准则对模型复杂度的惩罚力度更大（特别是当样本量较大时），因此在同一数据集上，使用 BIC 准则选出的最终模型包含的自变量个数往往多于使用 AIC 准则选出的变量个数。",
    answer: false,
    explanation: "BIC 的复杂度惩罚系数是 ln(n)，当 n 较大时通常大于 AIC 的 2，因此 BIC 往往保留更少变量。",
    source: { sourceId: "af1", page: 1, section: "判断题", question: "2" },
    finalExam: true
  },
  {
    id: "af1-tf-003",
    topic: "linear_diagnostics",
    type: "true_false",
    difficulty: "medium",
    stem: "在线性回归模型诊断中，若残差图呈现“喇叭状”，说明模型存在异方差现象，对因变量做对数变换是唯一的解决方法。",
    answer: false,
    explanation: "喇叭状通常指向异方差；对数变换是常见改进方案，但不是唯一方案，还可能使用加权最小二乘、稳健标准误或重新设定模型。",
    source: { sourceId: "af1", page: 1, section: "判断题", question: "3" },
    finalExam: true
  },
  {
    id: "af1-tf-004",
    topic: "model_selection",
    type: "true_false",
    difficulty: "easy",
    stem: "在线性回归模型的假设检验中，F 检验是用来检验每一个变量对因变量 Y 的影响是否显著的。",
    answer: false,
    explanation: "F 检验通常检验模型整体显著性；单个变量系数显著性一般看 t 检验。",
    source: { sourceId: "af1", page: 1, section: "判断题", question: "4" },
    finalExam: true
  },
  {
    id: "af1-tf-006",
    topic: "log_linear_house",
    type: "true_false",
    difficulty: "medium",
    stem: "在二手房数据集中，将模型改进为对数线性模型 log(y)=β0+β1x1+...+ε。若 school（是否为学区房）的系数估计值为 0.171，则可以解读为：在控制其他因素不变时，学区房单位面积房价比非学区房平均高出 0.171 万元/平方米。",
    answer: false,
    explanation: "log(y) 模型中的连续或虚拟变量系数通常解释为比例或百分比变化。0.171 约表示 17.1% 的相对变化，而不是 0.171 万元/平方米的绝对差。",
    source: { sourceId: "af1", page: 1, section: "判断题", question: "6" },
    finalExam: true
  },
  {
    id: "af1-tf-008",
    topic: "linear_diagnostics",
    type: "true_false",
    difficulty: "medium",
    stem: "对于包含截距项的多元线性回归模型 Yi=β0+β1X1i+β2X2i+μi，采用 OLS 估计。若模型遗漏了对 Y 具有显著正向影响的变量 Z，且 Z 与 X1、X2 的总体相关系数均为 0，则原有模型的 β1、β2 估计一定存在向上的遗漏变量偏误。",
    answer: false,
    explanation: "遗漏变量偏误需要遗漏变量同时影响 Y 且与已纳入解释变量相关。题干说明 Z 与 X1、X2 总体相关系数为 0，因此不能说 β1、β2 一定向上偏误。",
    source: { sourceId: "af1", page: 1, section: "判断题", question: "8" },
    finalExam: true
  },
  {
    id: "af1-sc-001",
    topic: "linear_diagnostics",
    type: "single_choice",
    difficulty: "medium",
    stem: "下列关于线性回归模型诊断与优化的说法中，错误的一项是（ ）",
    options: [
      { key: "A", text: "残差图呈现明显的喇叭状，是模型存在异方差问题的典型特征" },
      { key: "B", text: "对因变量做对数变换，可改善模型的异方差问题与残差非正态问题" },
      { key: "C", text: "自变量的方差膨胀因子为 6.2，说明该变量存在严重的多重共线性，须从模型中剔除" },
      { key: "D", text: "Cook 距离用于识别样本中的强影响点，判断单个样本对模型拟合结果的影响程度" }
    ],
    answer: "C",
    explanation: "VIF=6.2 说明需要关注共线性，但不能直接等同于“严重且必须剔除”。常见经验阈值是 5 或 10，是否剔除还要结合业务与模型目的。",
    source: { sourceId: "af1", page: 2, section: "选择题", question: "1" },
    finalExam: true
  },
  {
    id: "af1-sc-002",
    topic: "linear_diagnostics",
    type: "single_choice",
    difficulty: "medium",
    stem: "在评估线性回归模型的残差图时，如果观察到残差图呈现“喇叭状”，即残差的波动随着预测值的增加变得剧烈，这说明模型违反了哪项基本假设？PPT 中推荐的解决方案是什么？",
    options: [
      { key: "A", text: "存在多重共线性；解决方案是计算方差膨胀因子并剔除变量" },
      { key: "B", text: "遗漏了重要的自变量；解决方案是加入新的自变量，或者考虑非线性模型" },
      { key: "C", text: "误差不服从正态分布；解决方案是观察 QQ 图并剔除 Cook 距离过大的异常点" },
      { key: "D", text: "存在异方差现象；解决方案是对因变量做对数变换（如果因变量取值为正），再进行建模" }
    ],
    answer: "D",
    explanation: "残差波动随拟合值变大而扩大是异方差的典型图形信号；该题指定 PPT 推荐方案为对正因变量做对数变换。",
    source: { sourceId: "af1", page: 2, section: "选择题", question: "2" },
    finalExam: true
  },
  {
    id: "af1-sc-003",
    topic: "model_selection",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于线性回归模型中的 F 检验和 t 检验，下列说法正确的是（ ）",
    options: [
      { key: "A", text: "F 检验用于检验单个自变量的显著性，t 检验用于检验所有自变量的整体显著性" },
      { key: "B", text: "F 检验和 t 检验的作用完全相同，可以互换使用" },
      { key: "C", text: "F 检验用于检验所有自变量的整体显著性，t 检验用于检验单个自变量的显著性" },
      { key: "D", text: "F 检验只有在 t 检验结果不显著时才有必要使用" }
    ],
    answer: "C",
    explanation: "F 检验对应整体显著性或联合假设，t 检验对应单个系数显著性。",
    source: { sourceId: "af1", page: 2, section: "选择题", question: "3" },
    finalExam: true
  },
  {
    id: "af1-sc-004",
    topic: "linear_diagnostics",
    type: "single_choice",
    difficulty: "hard",
    stem: "关于线性回归模型的说法中，哪一项是错误的？",
    options: [
      { key: "A", text: "残差与预测值散点图呈抛物线形状，通常说明模型遗漏了重要自变量或者应考虑非线性模型" },
      { key: "B", text: "残差 Q-Q 图两侧尾巴明显偏离直线，说明残差与正态分布有差距，可以通过对数变换改善" },
      { key: "C", text: "可通过 VIF 检验多重共线性；VIF 超过 5 或 10 说明存在严重共线性，需要引起注意" },
      { key: "D", text: "Cook 距离是用来检验模型是否存在异方差现象的重要指标；Cook 距离越大说明该点处异方差越严重" }
    ],
    answer: "D",
    explanation: "Cook 距离识别强影响点，不是异方差检验指标。",
    source: { sourceId: "af1", page: 2, section: "选择题", question: "4" },
    finalExam: true
  },
  {
    id: "af1-sc-006",
    topic: "log_linear_house",
    type: "single_choice",
    difficulty: "hard",
    stem: "在北京市二手房房价的对数线性回归模型分析中，加入“城区 × 学区”交互项后，学区变量的主效应系数变为负值，以下对该结果的合理解释是（ ）",
    options: [
      { key: "A", text: "学区房对房价的正向影响完全消失，非学区房房价更高" },
      { key: "B", text: "学区房的溢价效应需结合城区来看，基准城区的学区房溢价不显著甚至存在小幅负向影响" },
      { key: "C", text: "模型出现多重共线性，结果完全不可信" },
      { key: "D", text: "数据存在异常值，需直接删除交互项重新建模" }
    ],
    answer: "B",
    explanation: "有交互项时，主效应系数是基准组条件下的效应，不代表所有城区的总体效应。",
    source: { sourceId: "af1", page: 3, section: "选择题", question: "6" },
    finalExam: true
  },
  {
    id: "af1-sc-010",
    topic: "model_selection",
    type: "single_choice",
    difficulty: "hard",
    stem: "全模型 price ~ CATE + bedrooms + halls + area + floor + subway + school；简化模型 price ~ CATE + area + floor + school。关于模型选择和评估，下列说法不正确的是（ ）",
    options: [
      { key: "A", text: "直接比较普通 R² 时，全模型的 R² 一定大于或等于简化模型，因此不能只靠普通 R² 判断是否剔除变量" },
      { key: "B", text: "调整后的 R² 引入样本量 n 和自变量个数 p 的惩罚机制，可用于比较全模型和简化模型" },
      { key: "C", text: "样本量 n>16000 时 log(n) 远大于 2，因此 BIC 对冗余变量的惩罚比 AIC 更大" },
      { key: "D", text: "通常情况下，BIC 选出的最终模型保留变量个数会多于 AIC 选出的变量个数" }
    ],
    answer: "D",
    explanation: "BIC 惩罚更强，通常比 AIC 更倾向于选择变量更少的模型。",
    source: { sourceId: "af1", page: 3, section: "选择题", question: "10" },
    finalExam: true
  },
  {
    id: "af1-fill-008",
    topic: "model_selection",
    type: "fill",
    difficulty: "hard",
    stem: "样本量 n=35，无约束模型含截距项+4 个解释变量，R²ur=0.78；约束模型（2 个系数联合为 0）R²r=0.72。计算约束 F 统计量为多少（保留 2 位小数）；在 5% 水平下临界值为 3.29，应如何处理原假设？",
    answer: { accepted: ["4.09；拒绝原假设"], keywords: ["4.09", "拒绝"] },
    explanation: "F=[(0.78-0.72)/2]/[(1-0.78)/(35-4-1)]=4.09。4.09>3.29，因此拒绝原假设。",
    source: { sourceId: "af1", page: 5, section: "填空题", question: "8" },
    finalExam: true
  },
  {
    id: "af1-fill-001",
    topic: "model_selection",
    type: "fill",
    difficulty: "easy",
    stem: "在线性回归的显著性检验中，______ 检验用于检验单个自变量对因变量的影响是否显著，______ 检验用于检验所有自变量整体对因变量的影响是否显著。",
    answer: { accepted: ["t 检验；F 检验"], keywords: ["t", "F"] },
    explanation: "单个系数看 t 检验，模型整体或联合显著性看 F 检验。",
    source: { sourceId: "af1", page: 4, section: "填空题", question: "1" },
    finalExam: true
  },
  {
    id: "af1-fill-002",
    topic: "model_selection",
    type: "fill",
    difficulty: "hard",
    stem: "AIC 准则的惩罚项系数是______，BIC 准则的惩罚项系数是______；当样本量 n≥8 时，由于______，BIC 比 AIC 的惩罚力度要大。因此 BIC 选出来的变量个数往往要______AIC。",
    answer: { accepted: ["2；ln(n)；ln(n)>2；少于"], keywords: ["2", "ln", "少于"] },
    explanation: "AIC 惩罚为 2p，BIC 惩罚为 p ln(n)。当 n≥8 时 ln(n)>2，所以 BIC 更保守，倾向于更少变量。",
    source: { sourceId: "af1", page: 4, section: "填空题", question: "2" },
    finalExam: true
  },
  {
    id: "af2-tf-001",
    topic: "anova",
    type: "true_false",
    difficulty: "medium",
    stem: "在进行方差分析（ANOVA）时，如果 F 检验的结果显著（p 值小于显著性水平如 0.05），这说明所有组的均值都不相等。",
    answer: false,
    explanation: "ANOVA 显著只说明至少有一组均值不同，不能直接判断所有组两两均不同。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "1" },
    finalExam: true
  },
  {
    id: "af2-tf-006",
    topic: "model_selection",
    type: "true_false",
    difficulty: "easy",
    stem: "在线性回归模型中，F 检验的原假设是“所有自变量的系数（不包括截距）都等于 0”。",
    answer: true,
    explanation: "整体 F 检验通常检验所有解释变量系数共同为 0。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "6" },
    finalExam: true
  },
  {
    id: "af2-tf-007",
    topic: "survival_ordinal_count",
    type: "true_false",
    difficulty: "medium",
    stem: "在生存分析中，AFT 模型和 Cox 比例风险模型对回归系数的解读方向是相同的；若某协变量在两个模型中的系数符号一致，则说明该变量对生存时间的影响方向也一致。",
    answer: false,
    explanation: "AFT 直接解释生存时间，Cox 解释瞬时风险；风险增加通常意味着生存时间缩短，因此两者系数方向不能按同一方式理解。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "7" },
    finalExam: true
  },
  {
    id: "af2-tf-019",
    topic: "logistic_roc",
    type: "true_false",
    difficulty: "medium",
    stem: "在逻辑回归中，如果某个解释变量的系数估计值为负，那么在控制其他变量不变时，该变量增加通常会降低 Y=1 的发生倾向。",
    answer: true,
    explanation: "逻辑回归系数为负表示 log odds 随该变量增加而下降，通常降低 Y=1 的发生倾向。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "19" },
    finalExam: true
  },
  {
    id: "af2-sc-001",
    topic: "logistic_roc",
    type: "single_choice",
    difficulty: "easy",
    stem: "在逻辑回归中，我们通常使用什么函数将线性回归的输出映射到 (0,1) 区间，以表示概率？",
    options: [
      { key: "A", text: "ReLU 函数" },
      { key: "B", text: "Sigmoid 函数（或 Logistic 函数）" },
      { key: "C", text: "Tanh 函数" },
      { key: "D", text: "Softmax 函数" }
    ],
    answer: "B",
    explanation: "二分类逻辑回归用 Sigmoid/Logistic 函数把线性预测值映射为概率。",
    source: { sourceId: "af2", page: 2, section: "单项选择题", question: "1" },
    finalExam: true
  },
  {
    id: "af2-sc-002",
    topic: "logistic_roc",
    type: "single_choice",
    difficulty: "medium",
    stem: "下列关于 ROC 曲线说法错误的是（ ）",
    options: [
      { key: "A", text: "ROC 的横纵轴分别是 FPR 和 TPR" },
      { key: "B", text: "FPR=FP/(FP+TP)，TPR=TP/(TP+FN)" },
      { key: "C", text: "ROC 曲线与横轴所围成的面积是 AUC" },
      { key: "D", text: "AUC 值越大预测效果越好" }
    ],
    answer: "B",
    explanation: "FPR 应为 FP/(FP+TN)，TPR 为 TP/(TP+FN)。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "2" },
    finalExam: true
  },
  {
    id: "af2-sc-003",
    topic: "survival_ordinal_count",
    type: "single_choice",
    difficulty: "hard",
    stem: "在新产品在架时间案例中，关于 AFT 生存回归模型和 Cox 生存回归模型的估计系数及解读，不正确的一项是（ ）",
    options: [
      { key: "A", text: "AFT 模型直接对生存时间建模；survreg 中变量系数为负表示该因素缩短预期在架时间" },
      { key: "B", text: "Cox 模型对风险函数建模；coxph 中变量系数为正表示增加下架风险" },
      { key: "C", text: "同一案例中，如果一个因素在 AFT 模型中的估计系数为负，那么它在 Cox 模型中的估计系数通常也应为负" },
      { key: "D", text: "AFT 需要假设生存分布，Cox 半参数模型不约束基准风险 h0(t) 的分布形式" }
    ],
    answer: "C",
    explanation: "AFT 负系数表示生存时间缩短；Cox 正系数表示风险增加，也会导致生存时间缩短，因此符号方向通常不是同向解释。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "3" },
    finalExam: true
  },
  {
    id: "af2-sc-007",
    topic: "survival_ordinal_count",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于各类回归与方差说法正确的是（ ）",
    options: [
      { key: "A", text: "进球计数用标准泊松（无过离散）" },
      { key: "B", text: "ANOVA 显著则全部组别均值不等" },
      { key: "C", text: "定序回归用潜变量划分区间" },
      { key: "D", text: "LR 用最小二乘" }
    ],
    answer: "C",
    explanation: "定序回归常通过潜变量与阈值切分解释不同等级。ANOVA 显著只说明至少一组不同，逻辑回归通常用极大似然。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "7" },
    finalExam: true
  },
  {
    id: "af2-fill-003",
    topic: "logistic_roc",
    type: "fill",
    difficulty: "medium",
    stem: "混淆矩阵：TP=90，FN=10，FP=20，TN=80。TPR=____，FPR=____。",
    answer: { accepted: ["TPR=0.90，FPR=0.20"], keywords: ["0.90", "0.20"] },
    explanation: "TPR=TP/(TP+FN)=90/100=0.90；FPR=FP/(FP+TN)=20/100=0.20。",
    source: { sourceId: "af2", page: 4, section: "填空题", question: "3" },
    finalExam: true
  },
  {
    id: "af2-fill-008",
    topic: "survival_ordinal_count",
    type: "fill",
    difficulty: "medium",
    stem: "在定序回归中，若因变量 Y 有 5 个类别，则模型中需要估计的阈值参数个数为多少？",
    answer: { accepted: ["4"], keywords: ["4"] },
    explanation: "K 个类别需要 K-1 个阈值；K=5，因此阈值个数为 4。",
    source: { sourceId: "af2", page: 4, section: "填空题", question: "8" },
    finalExam: true
  },
  {
    id: "af2-fill-010",
    topic: "survival_ordinal_count",
    type: "fill",
    difficulty: "medium",
    stem: "生存非参数方法是____；组间检验是____；Cox 风险比不随____变。",
    answer: { accepted: ["Kaplan-Meier；Log-rank；时间"], keywords: ["Kaplan", "Log", "时间"] },
    explanation: "生存曲线常用 Kaplan-Meier 非参数估计；组间曲线比较用 Log-rank；Cox 比例风险假设要求风险比不随时间变化。",
    source: { sourceId: "af2", page: 5, section: "填空题", question: "10" },
    finalExam: true
  },
  {
    id: "af3-tf-003",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "在主成分分析中，第一主成分是在所有原始变量的标准化线性组合中，使得方差最大的那个线性组合，且满足载荷向量的模长为 1 的约束条件。",
    answer: true,
    explanation: "PCA 的第一主成分是在单位长度约束下最大化方差的线性组合。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "3" },
    finalExam: true
  },
  {
    id: "af3-tf-004",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "因子分析中，因子及其载荷矩阵的估计不是唯一的，可以通过任意正交矩阵进行旋转，以寻找使因子结构更简单、解释更清晰的旋转方向。",
    answer: true,
    explanation: "正交旋转改变载荷表达但不改变模型能够解释的共同部分，用于提升解释性。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "4" },
    finalExam: true
  },
  {
    id: "af3-tf-011",
    topic: "clustering",
    type: "true_false",
    difficulty: "medium",
    stem: "在 K-Means 聚类算法中，由于采用了迭代优化的思想，因此只要初始中心点选择得当，算法一定能收敛到全局最优解，而不会陷入局部最优。",
    answer: false,
    explanation: "K-means 对初始质心敏感，迭代过程可能收敛到局部最优；nstart 多次初始化可以提升稳定性。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "11" },
    finalExam: true
  },
  {
    id: "af3-sc-001",
    topic: "clustering",
    type: "single_choice",
    difficulty: "easy",
    stem: "在聚类建模前，通常需要对变量进行标准化。最主要原因是（ ）",
    options: [
      { key: "A", text: "标准化可以自动消除异常值" },
      { key: "B", text: "标准化可以防止取值范围大的变量在距离计算中占据过大影响" },
      { key: "C", text: "标准化可以让聚类问题变成分类问题" },
      { key: "D", text: "标准化后类别数 K 就不需要再选择" }
    ],
    answer: "B",
    explanation: "距离型聚类会受量纲影响，取值范围大的变量会主导距离。",
    source: { sourceId: "af3", page: 2, section: "选择题", question: "1" },
    finalExam: true
  },
  {
    id: "af3-sc-002",
    topic: "pca_fa",
    type: "single_choice",
    difficulty: "medium",
    stem: "以下关于主成分分析（PCA）与因子分析（FA）的区别，描述正确的是（ ）",
    options: [
      { key: "A", text: "PCA 与 FA 本质上完全相同，只是名称不同" },
      { key: "B", text: "PCA 是模型方法，通过公共因子解释变量间相关性；FA 不涉及模型" },
      { key: "C", text: "PCA 不涉及模型，通过原变量线性组合构造综合指标；FA 是模型方法，假设变量由公共因子和特殊因子驱动" },
      { key: "D", text: "PCA 的估计结果不唯一，FA 的估计唯一" }
    ],
    answer: "C",
    explanation: "PCA 主要做方差重组和降维；FA 用公共因子解释原始变量之间的相关性。",
    source: { sourceId: "af3", page: 2, section: "选择题", question: "2" },
    finalExam: true
  },
  {
    id: "af3-sc-005",
    topic: "clustering",
    type: "multiple_choice",
    difficulty: "medium",
    stem: "关于层次聚类与 K-means 的比较，下列说法正确的有哪几项？",
    options: [
      { key: "A", text: "层次聚类可以通过树状图展示嵌套结构，通常不必一开始就规定类别数" },
      { key: "B", text: "层次聚类具有贪婪性，一旦某个观测值或类被合并，后续通常不能重新分配" },
      { key: "C", text: "K-means 中观测值一旦被分到某类，就永远不能改变" },
      { key: "D", text: "无论采用哪种聚类方法，最终类别都应结合业务理解进行解释和验证" },
      { key: "E", text: "K-means 试图寻找 K 个族群划分，使组内平方和 WGSS 尽可能小" }
    ],
    answer: ["A", "B", "D", "E"],
    explanation: "K-means 每轮会重新分配样本，因此 C 错；其余描述符合层次聚类和 K-means 的特点。",
    source: { sourceId: "af3", page: 3, section: "选择题", question: "5" },
    finalExam: true
  },
  {
    id: "af3-sc-014",
    topic: "pca_fa",
    type: "single_choice",
    difficulty: "hard",
    stem: "在因子分析中，为了让因子及载荷结构更简单、解释更清晰，常使用 Varimax 正交旋转。关于该旋转操作几何与代数特性的描述，以下正确的是？",
    options: [
      { key: "A", text: "旋转后，各原始变量的共同度会发生改变以适应新的因子" },
      { key: "B", text: "旋转后，样本点在因子空间中的相对位置和彼此间的几何距离会发生拉伸或缩放" },
      { key: "C", text: "旋转后，各个坐标轴之间的正交关系会被打破，因子之间变为相关" },
      { key: "D", text: "旋转仅仅改变参考坐标系的朝向，点距、夹角和共同度均维持原状" }
    ],
    answer: "D",
    explanation: "正交旋转保持坐标轴正交，不改变共同度和几何距离，只改变载荷结构的呈现方式。",
    source: { sourceId: "af3", page: 5, section: "选择题", question: "14" },
    finalExam: true
  },
  {
    id: "af3-sc-018",
    topic: "clustering",
    type: "single_choice",
    difficulty: "medium",
    stem: "某保险公司先对 14 项行驶指标降维，再根据降维结果将驾驶员分为不同风险等级。下列关于该分析流程的表述，错误的是（ ）",
    options: [
      { key: "A", text: "可先采用因子分析降维为若干公共因子，提取因子得分后再进行 K-means 聚类" },
      { key: "B", text: "聚类前必须对原始指标或因子得分进行标准化，否则量纲较大的变量会主导聚类结果" },
      { key: "C", text: "确定 K-means 聚类数时，可通过 WGSS 碎石图选择曲线下降最平缓处的 K 值作最优聚类数" },
      { key: "D", text: "层次聚类可用 Ward 法，通过最小化类内离差平方和增量来合并类" }
    ],
    answer: "C",
    explanation: "WGSS 碎石图通常看“肘部”，不是简单选择最平缓处。",
    source: { sourceId: "af3", page: 6, section: "选择题", question: "18" },
    finalExam: true
  },
  {
    id: "af3-sc-033",
    topic: "clustering",
    type: "single_choice",
    difficulty: "hard",
    stem: "设一维数据 x1=0, x2=2, x3=5, x4=6；考虑两个成分、同方差且混合权重相等的 GMM，当前 μ1=0、μ2=6。当 σ²→0 时，哪一项判断正确？",
    options: [
      { key: "A", text: "x1=0,x2=2 分到第1类，x3=5,x4=6 分到第2类；M 步更新 μ1=1、μ2=5.5，与初始中心 0,6 运行一次 K-means 的分配和更新结果一致" },
      { key: "B", text: "所有样本点都会以相同概率属于两个高斯成分，因此 GMM 不能退化为 K-means" },
      { key: "C", text: "x2=2 更接近 μ2=6，所以应分到第2类；更新 μ1=0、μ2=(2+5+6)/3" },
      { key: "D", text: "K-means 是 GMM 在 σ²→∞ 时的特殊情况" }
    ],
    answer: "A",
    explanation: "σ²→0 时后验分配趋近最近中心的硬分配，等价于一次 K-means 分配与均值更新。",
    source: { sourceId: "af3", page: 9, section: "选择题", question: "33" },
    finalExam: true
  },
  {
    id: "af3-fill-007",
    topic: "pca_fa",
    type: "fill",
    difficulty: "medium",
    stem: "PCA 中，为保证新变量不存在多重共线性，所有主成分在多维几何空间中必须严格相互____；Kaiser 准则保留特征值大于____的主成分；聚类质量的综合评价指标是____，取值范围为 [-1,1]。",
    answer: { accepted: ["正交；1；轮廓系数"], keywords: ["正交", "1", "轮廓"] },
    explanation: "主成分彼此正交；Kaiser 准则保留特征值大于 1 的主成分；轮廓系数同时考虑簇内紧密度和簇间分离度。",
    source: { sourceId: "af3", page: 11, section: "填空题", question: "7" },
    finalExam: true
  },
  {
    id: "af3-fill-010",
    topic: "pca_fa",
    type: "fill",
    difficulty: "hard",
    stem: "某班 4 门课程标准化后做 PCA，特征值 λ1=2.4、λ2=1.0、λ3=0.4、λ4=0.2，第一主成分载荷 a1=(0.5,0.5,0.5,0.5)^T，学生 x=(1,0,-1,2)^T。请填：总方差、第一主成分贡献率、前两个累计贡献率、超过80%至少保留几个主成分、该学生第一主成分得分。",
    answer: { accepted: ["4；60%；85%；2；1"], keywords: ["4", "60", "85", "2", "1"] },
    explanation: "相关系数矩阵下总方差为 4；贡献率 2.4/4=60%；前两个为 3.4/4=85%；超过 80% 保留 2 个；得分为 0.5(1+0-1+2)=1。",
    source: { sourceId: "af3", page: 11, section: "填空题", question: "10" },
    finalExam: true
  },
  {
    id: "af4-tf-001",
    topic: "tree_ensemble",
    type: "true_false",
    difficulty: "easy",
    stem: "随机森林的训练集抽样方式是 bootstrap 抽样，这是一种无放回随机抽样。",
    answer: false,
    explanation: "Bootstrap 是有放回抽样。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "1" },
    finalExam: true
  },
  {
    id: "af4-tf-004",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "easy",
    stem: "在政府热线平台案例中，投诉文本经过中文分词后可以转化为“样本 × 词语”的数值矩阵；由于大多数投诉只包含少量词语，这类矩阵通常包含大量 0，属于高维稀疏矩阵。",
    answer: true,
    explanation: "文本词袋矩阵通常词很多、每条文本只出现少数词，所以是高维稀疏矩阵。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "4" },
    finalExam: true
  },
  {
    id: "af4-tf-011",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "medium",
    stem: "在朴素贝叶斯分类器中，如果某个特征在训练集的某一类别下从未出现，则测试时该类别对应的后验概率一定会变为 0，无论其他特征如何取值。",
    answer: true,
    explanation: "未做平滑时，某个条件概率为 0 会使连乘后的后验概率为 0；这正是拉普拉斯修正要解决的问题。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "11" },
    finalExam: true
  },
  {
    id: "af4-sc-002",
    topic: "naive_bayes",
    type: "single_choice",
    difficulty: "easy",
    stem: "下列属于生成式模型的是（ ）",
    options: [
      { key: "A", text: "决策树" },
      { key: "B", text: "朴素贝叶斯分类器" },
      { key: "C", text: "SVM" },
      { key: "D", text: "逻辑回归" }
    ],
    answer: "B",
    explanation: "朴素贝叶斯通过建模类别先验与条件分布来得到后验，属于生成式模型。",
    source: { sourceId: "af4", page: 2, section: "单项选择题", question: "2" },
    finalExam: true
  },
  {
    id: "af4-sc-004",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "easy",
    stem: "ID3 按信息增益选特征，数据：色泽 0.109、根蒂 0.143、敲声 0.141、纹理 0.381，最优划分是（ ）",
    options: [
      { key: "A", text: "色泽" },
      { key: "B", text: "根蒂" },
      { key: "C", text: "敲声" },
      { key: "D", text: "纹理" }
    ],
    answer: "D",
    explanation: "ID3 选择信息增益最大的特征，0.381 最大，对应纹理。",
    source: { sourceId: "af4", page: 2, section: "单项选择题", question: "4" },
    finalExam: true
  },
  {
    id: "af4-sc-009",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "medium",
    stem: "自助抽样 OOB 占比约为（ ）",
    options: [
      { key: "A", text: "50.0%" },
      { key: "B", text: "36.8%" },
      { key: "C", text: "25.0%" },
      { key: "D", text: "63.2%" }
    ],
    answer: "B",
    explanation: "Bootstrap 中样本不被抽中的极限概率约为 e^-1=36.8%。",
    source: { sourceId: "af4", page: 3, section: "单项选择题", question: "9" },
    finalExam: true
  },
  {
    id: "af4-sc-013",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "medium",
    stem: "随机森林抗过拟合的核心原因是（ ）",
    options: [
      { key: "A", text: "梯度下降全局寻优" },
      { key: "B", text: "样本 + 特征双重随机集成投票" },
      { key: "C", text: "逐棵拟合残差" },
      { key: "D", text: "树深度固定为 1" }
    ],
    answer: "B",
    explanation: "随机森林通过 bootstrap 样本随机和节点特征随机降低树间相关性，再集成投票降低方差。",
    source: { sourceId: "af4", page: 3, section: "单项选择题", question: "13" },
    finalExam: true
  },
  {
    id: "af4-sc-018",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "medium",
    stem: "四种算法相关说法中正确的是（ ）",
    options: [
      { key: "A", text: "准确率高代表算法全局最优" },
      { key: "B", text: "随机森林双重随机降低偏差" },
      { key: "C", text: "XGB 正则惩罚叶子数量与叶权重" },
      { key: "D", text: "随机森林可解释性优于单决策树" }
    ],
    answer: "C",
    explanation: "XGBoost 的正则项包含叶子数量和叶权重惩罚。随机森林主要降低方差，解释性通常不如单棵树。",
    source: { sourceId: "af4", page: 4, section: "单项选择题", question: "18" },
    finalExam: true
  },
  {
    id: "af4-sc-027",
    topic: "naive_bayes",
    type: "single_choice",
    difficulty: "hard",
    stem: "TAN 树增强朴素贝叶斯正确的是（ ）",
    options: [
      { key: "A", text: "全特征依赖同一超父" },
      { key: "B", text: "最大带权生成树构造依赖" },
      { key: "C", text: "复杂度低于朴素贝叶斯" },
      { key: "D", text: "无特征依赖" }
    ],
    answer: "B",
    explanation: "TAN 通过最大带权生成树在特征之间引入一棵依赖结构。",
    source: { sourceId: "af4", page: 5, section: "单项选择题", question: "27" },
    finalExam: true
  },
  {
    id: "af4-fill-005",
    topic: "tree_ensemble",
    type: "fill",
    difficulty: "medium",
    stem: "Bootstrap 极限不采样占比为____%；XGB 正则 Ω(f)=γT+1/2 λ||w||² 中，T=____，w=____。",
    answer: { accepted: ["36.8%；叶子数；叶权重"], keywords: ["36.8", "叶子", "权重"] },
    explanation: "OOB 极限约 36.8%；XGBoost 正则项惩罚叶子数量 T 与叶子权重 w。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "5" },
    finalExam: true
  },
  {
    id: "af4-fill-012",
    topic: "tree_ensemble",
    type: "fill",
    difficulty: "medium",
    stem: "Ent(D)=0.971，D1(6): Ent=0.650，D2(4): Ent=0.811，Gain=____。",
    answer: { accepted: ["0.257"], keywords: ["0.257"] },
    explanation: "Gain=0.971-(6/10)*0.650-(4/10)*0.811=0.2566，约 0.257。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "12" },
    finalExam: true
  },
  {
    id: "af4-open-001",
    topic: "tree_ensemble",
    type: "open",
    difficulty: "medium",
    stem: "随机森林优缺点（各两点）。",
    answer: {
      accepted: ["优点：抗过拟合、可处理高维/非线性、可评估特征重要性；缺点：可解释性弱于单棵树、模型较大训练/预测成本更高。"],
      keywords: ["抗过拟合", "特征重要性", "可解释性", "成本"]
    },
    explanation: "参考答案只给出要点，开放题作答时应围绕随机森林的集成投票、双重随机、解释性与计算代价展开。",
    source: { sourceId: "af4", page: 7, section: "简答/综合应用题", question: "1" },
    finalExam: true
  },
  {
    id: "af4-open-002",
    topic: "tree_ensemble",
    type: "open",
    difficulty: "hard",
    stem: "为某市 12345 政府热线开发处理时长预测模型。团队在基于决策树的模型（如 XGBoost、LightGBM）和神经网络之间产生分歧。请从计算资源与训练速度、对异常值的鲁棒性、向非技术领导汇报时的沟通成本三个维度对比，并给出首选推荐及理由。",
    answer: {
      accepted: ["推荐优先使用集成树模型。理由：结构化表格数据上训练较快、资源要求较低；对异常值和非线性关系较稳健；可用特征重要性、树分裂规则或 SHAP 等解释，向非技术领导汇报成本低于神经网络。"],
      keywords: ["集成树", "训练", "异常值", "解释", "领导"]
    },
    explanation: "题目要求三维度对比和推荐。只写算法名称不够，需要说明表格结构化数据、资源、鲁棒性和解释沟通。",
    source: { sourceId: "af4", page: 7, section: "简答/综合应用题", question: "2" },
    finalExam: true
  }
];
