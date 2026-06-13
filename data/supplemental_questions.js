window.QUESTION_BANK.push(
  {
    id: "af3-tf-001",
    topic: "clustering",
    type: "true_false",
    difficulty: "easy",
    stem: "聚类分析和分类算法的目的都可能是把个体分到不同类别中，所以二者本质上都是有监督学习。",
    answer: false,
    explanation: "分类通常有已知标签，属于监督学习；聚类没有事先给定因变量或类别标签，属于无监督学习。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "1" },
    finalExam: true
  },
  {
    id: "af3-tf-002",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "在学生成绩主成分分析中，若前两个主成分的累积贡献率超过 80%，就说明这两个综合指标已经完整保留了原来六门课的全部信息，因此不需要再解释载荷含义。",
    answer: false,
    explanation: "累计贡献率超过 80% 只能说明保留了大部分方差信息，不是完整保留全部信息；载荷仍需要解释业务含义。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "2" },
    finalExam: true
  },
  {
    id: "af3-tf-005",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "主成分分析与因子分析都属于无监督学习，都可以对数据进行降维，且主成分分析可以进行因子旋转。",
    answer: false,
    explanation: "PCA 和 FA 都可用于无监督降维，但因子旋转是因子分析中为解释载荷结构常用的操作；PCA 结果本身具有唯一性，不按因子分析方式旋转。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "5" },
    finalExam: true
  },
  {
    id: "af3-tf-007",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "easy",
    stem: "在主成分分析（PCA）中，第一主成分的方差总是大于或等于第二主成分的方差。",
    answer: true,
    explanation: "主成分按解释方差从大到小排列，因此第一主成分方差不小于第二主成分。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "7" },
    finalExam: true
  },
  {
    id: "af3-tf-008",
    topic: "clustering",
    type: "true_false",
    difficulty: "easy",
    stem: "聚类分析（Clustering Analysis）属于一种有监督学习方法，需要样本提前带有类别标签。",
    answer: false,
    explanation: "聚类根据样本相似性形成类别，不需要提前给定类别标签。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "8" },
    finalExam: true
  },
  {
    id: "af3-tf-009",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "在因子分析中，对因子载荷矩阵进行 varimax 正交旋转后，各变量的共同度会发生变化。",
    answer: false,
    explanation: "正交旋转改变载荷矩阵的方向和解释方式，但每个变量的共同度保持不变。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "9" },
    finalExam: true
  },
  {
    id: "af3-tf-010",
    topic: "clustering",
    type: "true_false",
    difficulty: "easy",
    stem: "聚类分析属于无监督学习，因为在聚类问题中，类别个数与个体标签通常不是事先给定的，而是根据样本特征之间的相似性形成相对合理的聚集。",
    answer: true,
    explanation: "题干正是聚类作为无监督学习的定义性表述。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "10" },
    finalExam: true
  },
  {
    id: "af3-tf-012",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "在主成分分析（PCA）中，第一主成分是原始变量的线性组合，其方差在所有主成分中最大，且各主成分之间互不相关。",
    answer: true,
    explanation: "PCA 的主成分是原变量线性组合，并按方差最大原则依次构造，且不同主成分不相关。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "12" },
    finalExam: true
  },
  {
    id: "af3-tf-013",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "在数据降维方法中，主成分分析（PCA）和因子分析（FA）得到的估计结果都是唯一的，为了保证数学推导的严谨性，二者的结果均不能进行坐标轴旋转。",
    answer: false,
    explanation: "PCA 结果通常唯一；FA 的载荷可通过正交旋转改变表示，以提升解释性。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "13" },
    finalExam: true
  },
  {
    id: "af3-tf-015",
    topic: "clustering",
    type: "true_false",
    difficulty: "medium",
    stem: "在进行 K-Means 聚类分析时，算法的优势在于它可以自动从数据中推断出最佳的聚类簇数（即 K 值），并且由于其内部采用均值计算，该算法对数据集中的极端异常值具有很强的抗干扰能力。",
    answer: false,
    explanation: "K-means 需要预先指定 K，且均值中心对异常值敏感。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "15" },
    finalExam: true
  },
  {
    id: "af3-tf-016",
    topic: "clustering",
    type: "true_false",
    difficulty: "medium",
    stem: "K-Means 算法的核心是最小化各个簇内的样本到质心的欧氏距离平方和，因此该算法在处理非凸形状（如环状、月牙形分布）的数据簇时，依然能够准确地将不同形状的数据有效分离。",
    answer: false,
    explanation: "K-means 的目标适合近似球状/凸簇，处理环状、月牙形等非凸结构效果较差。",
    source: { sourceId: "af3", page: 1, section: "判断题", question: "16" },
    finalExam: true
  },
  {
    id: "af3-tf-018",
    topic: "clustering",
    type: "true_false",
    difficulty: "easy",
    stem: "在进行 K 均值(K-means)聚类分析时，初始聚类中心的选择对最终的聚类结果完全没有影响，无论怎么选都会收敛到相同的类别划分。",
    answer: false,
    explanation: "K-means 对初始中心敏感，不同初始值可能导致不同局部最优结果。",
    source: { sourceId: "af3", page: 2, section: "判断题", question: "18" },
    finalExam: true
  },
  {
    id: "af3-tf-019",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "easy",
    stem: "聚类分析（Clustering Analysis）、主成分分析（PCA）以及因子分析（Factor Analysis）在建立模型时都没有事先确定的因变量，因此它们都属于无监督的统计学习方法。",
    answer: true,
    explanation: "三者都没有明确因变量，属于无监督学习范畴。",
    source: { sourceId: "af3", page: 2, section: "判断题", question: "19" },
    finalExam: true
  },
  {
    id: "af3-tf-020",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "medium",
    stem: "主成分分析（PCA）和因子分析（FA）的本质区别在于，PCA 主要用于数据压缩和降维，而不负责解释数据背后的原因；而因子分析不仅用于降维，还试图解释原始变量之间相关性的潜在驱动因素。",
    answer: true,
    explanation: "该题区分了 PCA 的方差压缩目标和 FA 的潜在公共因子解释目标。",
    source: { sourceId: "af3", page: 2, section: "判断题", question: "20" },
    finalExam: true
  },
  {
    id: "af3-tf-021",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "easy",
    stem: "在因子分析中，“公共因子”通常是可以直接观测到的数据变量。",
    answer: false,
    explanation: "公共因子通常是不可直接观测的潜变量。",
    source: { sourceId: "af3", page: 2, section: "判断题", question: "21" },
    finalExam: true
  },
  {
    id: "af3-tf-022",
    topic: "pca_fa",
    type: "true_false",
    difficulty: "easy",
    stem: "在 PCA 中，第一主成分等于原始变量的平均值。",
    answer: false,
    explanation: "第一主成分是原始变量的线性组合，不是原始变量平均值。",
    source: { sourceId: "af3", page: 2, section: "判断题", question: "22" },
    finalExam: true
  },
  {
    id: "af3-sc-003",
    topic: "clustering",
    type: "single_choice",
    difficulty: "easy",
    stem: "关于 K-Means 聚类，下列说法错误的是（ ）",
    options: [
      { key: "A", text: "需要预先指定聚类数量 K" },
      { key: "B", text: "对异常值比较敏感" },
      { key: "C", text: "属于层次聚类方法" },
      { key: "D", text: "可通过 WGSS 碎石图选择最优 K" }
    ],
    answer: "C",
    explanation: "K-means 是划分式聚类，不属于层次聚类。",
    source: { sourceId: "af3", page: 2, section: "选择题", question: "3" },
    finalExam: true
  },
  {
    id: "af3-sc-004",
    topic: "clustering",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于 K-means 聚类，下列说法错误的是哪一项？",
    options: [
      { key: "A", text: "需要先指定聚类个数 K。" },
      { key: "B", text: "算法会反复执行“分配到最近中心点”和“更新中心点均值”。" },
      { key: "C", text: "K-means 对离群点不敏感，并且特别适合 U 型、环状等非凸聚类。" },
      { key: "D", text: "nstart=20 表示用 20 组不同随机初始质心运行，并选择 WGSS 最小的结果。" }
    ],
    answer: "C",
    explanation: "K-means 对离群点敏感，且不适合 U 型、环状等非凸聚类。",
    source: { sourceId: "af3", page: 2, section: "选择题", question: "4" },
    finalExam: true
  },
  {
    id: "af3-sc-008",
    topic: "clustering",
    type: "single_choice",
    difficulty: "medium",
    stem: "针对 K-Means 聚类和层次聚类的特点与适用场景，正确组合是：①K-Means 需要预先指定 K、对异常值敏感、适合大样本；②层次聚类无需提前设定类别数、可生成树状谱系结构、但不适合海量大样本；③K-Means 结果受初始质心影响，可通过 nstart 和 set.seed() 提升稳定性；④层次聚类 Ward 法合并类时选择使类内离差平方和增加最大的两类合并。",
    options: [
      { key: "A", text: "①②③" },
      { key: "B", text: "①②④" },
      { key: "C", text: "①③④" },
      { key: "D", text: "②③④" }
    ],
    answer: "A",
    explanation: "Ward 法应选择使类内离差平方和增加最小的合并，④错误。",
    source: { sourceId: "af3", page: 4, section: "选择题", question: "8" },
    finalExam: true
  },
  {
    id: "af3-sc-012",
    topic: "pca_fa",
    type: "multiple_choice",
    difficulty: "medium",
    stem: "关于主成分分析（PCA）与因子分析（FA），下列说法正确的是（ ）。",
    options: [
      { key: "A", text: "PCA 寻找原始变量的线性组合，使得到的主成分方差尽可能大，并且不同主成分之间互不相关。" },
      { key: "B", text: "PCA 中所有变量被等同对待，没有自变量与因变量之分，因此也属于无监督学习思路。" },
      { key: "C", text: "FA 的目标之一是用少数不可观测的公共因子解释原始变量之间的相关性，因子载荷反映公共因子对变量的解释力。" },
      { key: "D", text: "FA 中公共因子的个数必须等于原始变量个数，否则无法起到解释变量相关性的作用。" },
      { key: "E", text: "PCA 与 FA 完全相同，二者都只是把变量压缩成更少的指标，不涉及任何模型或潜变量解释。" }
    ],
    answer: ["A", "B", "C"],
    explanation: "FA 的公共因子个数不必等于变量数；PCA 与 FA 目标和模型假设不同。",
    source: { sourceId: "af3", page: 4, section: "选择题", question: "12" },
    finalExam: true
  },
  {
    id: "af3-sc-013",
    topic: "clustering",
    type: "single_choice",
    difficulty: "easy",
    stem: "在 K-means 聚类算法中，以下哪种方法常用于帮助确定合适的聚类数目 K？",
    options: [
      { key: "A", text: "轮廓系数" },
      { key: "B", text: "WGSS（组内平方和）碎石图" },
      { key: "C", text: "肘部法则（Elbow Method）" },
      { key: "D", text: "以上都是" }
    ],
    answer: "D",
    explanation: "轮廓系数、WGSS 碎石图和肘部法都可辅助选择 K。",
    source: { sourceId: "af3", page: 4, section: "选择题", question: "13" },
    finalExam: true
  },
  {
    id: "af3-sc-020",
    topic: "pca_fa",
    type: "single_choice",
    difficulty: "medium",
    stem: "在进行主成分分析（PCA）之前，通常需要对原始数据进行标准化。如果跳过标准化步骤直接对原始数据进行 PCA 计算，最可能导致以下哪种结果？",
    options: [
      { key: "A", text: "算法无法求解协方差矩阵的特征值与特征向量" },
      { key: "B", text: "绝对数值（方差）较大的特征变量将主导主成分的方向，掩盖其他特征的有效信息" },
      { key: "C", text: "主成分之间将不再满足正交性（相互独立）的假设" },
      { key: "D", text: "算法提取出的第一主成分将解释 100%的数据变异性" }
    ],
    answer: "B",
    explanation: "未标准化时，方差或量纲大的变量会主导协方差矩阵和主成分方向。",
    source: { sourceId: "af3", page: 6, section: "选择题", question: "20" },
    finalExam: true
  },
  {
    id: "af3-sc-021",
    topic: "pca_fa",
    type: "single_choice",
    difficulty: "medium",
    stem: "在因子分析中，若采用“方差最大化正交旋转”，其背后的核心假设是（ ）",
    options: [
      { key: "A", text: "旋转后的各个公共因子之间必须允许存在高度相关性" },
      { key: "B", text: "旋转后的各个公共因子之间必须保持完全不相关（即彼此正交）" },
      { key: "C", text: "旋转操作必须增加模型所能解释的总方差比例" },
      { key: "D", text: "旋转后必须消除所有原始变量的特殊因子" }
    ],
    answer: "B",
    explanation: "Varimax 是正交旋转，旋转后公共因子仍保持不相关。",
    source: { sourceId: "af3", page: 6, section: "选择题", question: "21" },
    finalExam: true
  },
  {
    id: "af3-sc-024",
    topic: "pca_fa",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于数据降维方法中的“主成分分析(PCA)”与“因子分析(FA)”，下列说法中不正确的是哪一项？",
    options: [
      { key: "A", text: "两者都属于无监督的统计学习方法，即数据中没有明确的因变量。" },
      { key: "B", text: "主成分分析通过寻找原始变量的线性组合来最大化方差，以期最大程度地区分数据中的个体。" },
      { key: "C", text: "因子分析假设原始变量是公共因子和特殊因子的线性组合，其核心目标是解释变量间的相关性。" },
      { key: "D", text: "为了让综合指标的业务意义更加清晰，主成分分析和因子分析都可以通过最大方差法（Varimax）对结果进行因子旋转。" }
    ],
    answer: "D",
    explanation: "Varimax 旋转用于因子分析载荷解释；PCA 不按因子分析的方式进行旋转。",
    source: { sourceId: "af3", page: 7, section: "选择题", question: "24" },
    finalExam: true
  },
  {
    id: "af3-sc-026",
    topic: "pca_fa",
    type: "single_choice",
    difficulty: "medium",
    stem: "在因子分析中，使用最大方差法（Varimax method）对初始载荷矩阵进行正交旋转后，下列哪项指标会发生改变？",
    options: [
      { key: "A", text: "各个公共因子各自的方差贡献率" },
      { key: "B", text: "每个原始变量的共同度" },
      { key: "C", text: "各个公共因子之间的独立性" },
      { key: "D", text: "保留的几个公共因子对原始数据的总累计方差贡献率" }
    ],
    answer: "A",
    explanation: "正交旋转会重新分配各因子的方差贡献率，但共同度、因子正交性和总累计贡献率不变。",
    source: { sourceId: "af3", page: 8, section: "选择题", question: "26" },
    finalExam: true
  },
  {
    id: "af3-fill-001",
    topic: "pca_fa",
    type: "fill",
    difficulty: "easy",
    stem: "主成分分析（PCA）的核心目标是：寻找原始变量的线性组合，使得到的新变量（主成分）的 ________ 最大，并且不同主成分之间互不相关。",
    answer: { accepted: ["方差"], keywords: ["方差"] },
    explanation: "PCA 通过最大化主成分方差来保留数据信息。",
    source: { sourceId: "af3", page: 10, section: "填空题", question: "1" },
    finalExam: true
  },
  {
    id: "af3-fill-002",
    topic: "clustering",
    type: "fill",
    difficulty: "easy",
    stem: "在 K-means 聚类算法中，算法的目标是最小化各样本点到所属聚类中心的________。",
    answer: { accepted: ["欧氏距离平方和"], keywords: ["距离", "平方"] },
    explanation: "K-means 最小化簇内样本到质心的欧氏距离平方和，即 WGSS。",
    source: { sourceId: "af3", page: 10, section: "填空题", question: "2" },
    finalExam: true
  },
  {
    id: "af3-fill-003",
    topic: "clustering",
    type: "fill",
    difficulty: "easy",
    stem: "在聚类建模过程中，如果不同变量的量纲或变化范围差异较大，通常需要先进行 ______；同时，许多聚类方法对 ______ 较为敏感，可能导致聚类方案被扭曲。",
    answer: { accepted: ["标准化；异常值"], keywords: ["标准化", "异常"] },
    explanation: "距离型聚类受量纲影响，也常受异常值/离群点影响。",
    source: { sourceId: "af3", page: 10, section: "填空题", question: "3" },
    finalExam: true
  },
  {
    id: "af3-fill-006",
    topic: "clustering",
    type: "fill",
    difficulty: "medium",
    stem: "K-means 聚类算法试图最小化 ______（英文缩写或全称），其定义式为各簇内样本到中心的距离平方和；为了选择最优聚类数 K，常采用 ______ 图，寻找曲线的 ______ 作为合适的 K 值。",
    answer: { accepted: ["WGSS；WGSS 碎石图；肘部"], keywords: ["WGSS", "碎石", "肘"] },
    explanation: "K-means 目标是最小化 WGSS；选 K 常用 WGSS 碎石图/肘部法。",
    source: { sourceId: "af3", page: 11, section: "填空题", question: "6" },
    finalExam: true
  },
  {
    id: "af3-fill-008",
    topic: "clustering",
    type: "fill",
    difficulty: "easy",
    stem: "在 K-Means 聚类算法的迭代过程中，每次将所有样本点分配给距离最近的簇中心后，下一步的核心操作是：重新计算每个簇内所有样本点的___________，并将其作为该簇新的中心点。",
    answer: { accepted: ["均值"], keywords: ["均值"] },
    explanation: "K-means 用簇内样本均值更新质心。",
    source: { sourceId: "af3", page: 11, section: "填空题", question: "8" },
    finalExam: true
  },
  {
    id: "af4-tf-002",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "medium",
    stem: "朴素贝叶斯算法之所以被称为“朴素”，是因为它在进行概率计算时，做出了一个理想化的假设：即所有的特征之间都是相互独立的，不存在任何相关性。",
    answer: false,
    explanation: "更严格的表述是：在给定类别条件下，各特征相互独立。若说所有特征全局独立，则表述过强。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "2" },
    finalExam: true
  },
  {
    id: "af4-tf-003",
    topic: "tree_ensemble",
    type: "true_false",
    difficulty: "medium",
    stem: "随机森林通过 Bootstrap 重抽样和随机特征选择降低树之间的相关性，这主要降低了模型的偏差；而 XGBoost 通过逐轮迭代拟合残差，主要降低了模型的方差。",
    answer: false,
    explanation: "随机森林通过集成主要降低方差；Boosting/XGBoost 逐轮拟合残差主要降低偏差。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "3" },
    finalExam: true
  },
  {
    id: "af4-tf-005",
    topic: "tree_ensemble",
    type: "true_false",
    difficulty: "easy",
    stem: "决策树越深，分支越细，说明模型越复杂，对训练数据拟合越好，因此一定能在测试集上取得更好的预测效果。",
    answer: false,
    explanation: "树越深越容易过拟合，训练集表现更好不代表测试集更好。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "5" },
    finalExam: true
  },
  {
    id: "af4-tf-007",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "easy",
    stem: "高斯混合模型 (GMM) 是判别式模型。",
    answer: false,
    explanation: "GMM 建模数据分布，属于生成式模型。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "7" },
    finalExam: true
  },
  {
    id: "af4-tf-008",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "medium",
    stem: "朴素贝叶斯分类器的“属性独立性假设”是指所有属性之间全局相互独立。",
    answer: false,
    explanation: "朴素贝叶斯假设是在给定类别条件下特征条件独立，不是全局无条件独立。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "8" },
    finalExam: true
  },
  {
    id: "af4-tf-010",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "easy",
    stem: "在 12345 政府热线投诉文本分类中，分词后的数值矩阵行是投诉、列是词语，多数元素为 0，属于稀疏矩阵。",
    answer: true,
    explanation: "词袋矩阵通常行表示样本、列表示词语，文本短而词表大，所以多数元素为 0。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "10" },
    finalExam: true
  },
  {
    id: "af4-tf-012",
    topic: "naive_bayes",
    type: "true_false",
    difficulty: "easy",
    stem: "在朴素贝叶斯分类器中，“朴素”指的是假设所有特征在给定类别的条件下相互独立。",
    answer: true,
    explanation: "这是朴素贝叶斯的条件独立假设。",
    source: { sourceId: "af4", page: 1, section: "判断题", question: "12" },
    finalExam: true
  },
  {
    id: "af4-sc-001",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于决策树预剪枝与后剪枝描述错误的是（ ）",
    options: [
      { key: "A", text: "预剪枝为提前终止某些分支的生长" },
      { key: "B", text: "后剪枝为生成一棵完全树，再“回头”剪枝" },
      { key: "C", text: "预剪枝更容易引发欠拟合，后剪枝泛化效果通常更优" },
      { key: "D", text: "后剪枝训练耗时少于预剪枝" }
    ],
    answer: "D",
    explanation: "后剪枝需要先生成完整树再修剪，训练开销通常大于预剪枝。",
    source: { sourceId: "af4", page: 1, section: "单项选择题", question: "1" },
    finalExam: true
  },
  {
    id: "af4-sc-003",
    topic: "naive_bayes",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于分类器模型特点说法正确的是（ ）",
    options: [
      { key: "A", text: "朴素贝叶斯属于判别式，直接建 P(c|x)" },
      { key: "B", text: "决策树属于生成式，建联合 P(x,c)" },
      { key: "C", text: "朴素贝叶斯条件独立假设现实难成立，但文本分类表现优良" },
      { key: "D", text: "随机森林属于 Boosting，串行迭代修正残差" }
    ],
    answer: "C",
    explanation: "朴素贝叶斯是生成式模型；决策树不是生成式；随机森林属于 Bagging 而非 Boosting。",
    source: { sourceId: "af4", page: 2, section: "单项选择题", question: "3" },
    finalExam: true
  },
  {
    id: "af4-sc-006",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "easy",
    stem: "衡量集合纯度、数值越小纯度越高的是（ ）",
    options: [
      { key: "A", text: "信息熵" },
      { key: "B", text: "准确率" },
      { key: "C", text: "精确率" },
      { key: "D", text: "召回率" }
    ],
    answer: "A",
    explanation: "信息熵越小表示集合越纯。",
    source: { sourceId: "af4", page: 2, section: "单项选择题", question: "6" },
    finalExam: true
  },
  {
    id: "af4-sc-010",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "medium",
    stem: "随机森林描述不正确的是（ ）",
    options: [
      { key: "A", text: "Bootstrap 有放回采样" },
      { key: "B", text: "样本 + 特征双重随机" },
      { key: "C", text: "OOB 样本无使用价值直接丢弃" },
      { key: "D", text: "OOB 可评估特征重要性" }
    ],
    answer: "C",
    explanation: "OOB 样本可用于误差估计和特征重要性，不是直接丢弃。",
    source: { sourceId: "af4", page: 3, section: "单项选择题", question: "10" },
    finalExam: true
  },
  {
    id: "af4-sc-014",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "medium",
    stem: "Bagging 与 Boosting 错误描述是（ ）",
    options: [
      { key: "A", text: "Bagging 并行降方差" },
      { key: "B", text: "Boosting 串行降偏差" },
      { key: "C", text: "OOB 约 36.8%" },
      { key: "D", text: "随机森林仅样本随机、特征全取" }
    ],
    answer: "D",
    explanation: "随机森林不仅做样本随机，还在节点分裂时做特征随机。",
    source: { sourceId: "af4", page: 4, section: "单项选择题", question: "14" },
    finalExam: true
  },
  {
    id: "af4-sc-016",
    topic: "naive_bayes",
    type: "single_choice",
    difficulty: "medium",
    stem: "12345 热线朴素贝叶斯说法正确的是（ ）",
    options: [
      { key: "A", text: "效果好因为特征满足独立假设" },
      { key: "B", text: "原始词频直接入 naiveBayes 会被拟合成正态、效果极差" },
      { key: "C", text: "拉普拉斯平滑一定提升准确率" },
      { key: "D", text: "词频二值化目的降维度" }
    ],
    answer: "B",
    explanation: "原始连续词频直接进入部分 naiveBayes 实现可能被当作高斯连续变量处理；文本通常需做适当二值化/离散化和平滑。",
    source: { sourceId: "af4", page: 4, section: "单项选择题", question: "16" },
    finalExam: true
  },
  {
    id: "af4-sc-020",
    topic: "naive_bayes",
    type: "single_choice",
    difficulty: "medium",
    stem: "热线文本朴素贝叶斯正确的是（ ）",
    options: [
      { key: "A", text: "独立假设不成立因此不能用文本分类" },
      { key: "B", text: "零概率可用拉普拉斯修正" },
      { key: "C", text: "朴素贝叶斯判别式模型" },
      { key: "D", text: "词频直接连续输入无负面影响" }
    ],
    answer: "B",
    explanation: "拉普拉斯修正用于避免某类别下某特征未出现导致的零概率问题。",
    source: { sourceId: "af4", page: 4, section: "单项选择题", question: "20" },
    finalExam: true
  },
  {
    id: "af4-sc-028",
    topic: "tree_ensemble",
    type: "single_choice",
    difficulty: "easy",
    stem: "树与集成学习正确的是（ ）",
    options: [
      { key: "A", text: "熵越大纯度越高" },
      { key: "B", text: "随机森林只样本随机" },
      { key: "C", text: "Bagging 并行、Boosting 串行" },
      { key: "D", text: "XGB 无正则" }
    ],
    answer: "C",
    explanation: "Bagging 的基学习器可并行训练，Boosting 按轮次串行学习。",
    source: { sourceId: "af4", page: 5, section: "单项选择题", question: "28" },
    finalExam: true
  },
  {
    id: "af4-fill-001",
    topic: "naive_bayes",
    type: "fill",
    difficulty: "easy",
    stem: "朴素贝叶斯“朴素”：给定类别，特征 ______。",
    answer: { accepted: ["相互独立"], keywords: ["独立"] },
    explanation: "朴素贝叶斯的核心假设是给定类别条件下特征相互独立。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "1" },
    finalExam: true
  },
  {
    id: "af4-fill-002",
    topic: "tree_ensemble",
    type: "fill",
    difficulty: "easy",
    stem: "CART 分类树最小化 ______。",
    answer: { accepted: ["基尼指数"], keywords: ["基尼"] },
    explanation: "CART 分类树按基尼指数选择划分。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "2" },
    finalExam: true
  },
  {
    id: "af4-fill-004",
    topic: "tree_ensemble",
    type: "fill",
    difficulty: "medium",
    stem: "ID3：______；C4.5：______；CART：______；随机森林二重随机：______、______。",
    answer: { accepted: ["信息增益；增益率；基尼指数；样本随机；特征随机"], keywords: ["信息增益", "增益率", "基尼", "样本", "特征"] },
    explanation: "ID3、C4.5、CART 分别对应信息增益、增益率、基尼指数；随机森林有样本和特征双重随机。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "4" },
    finalExam: true
  },
  {
    id: "af4-fill-009",
    topic: "tree_ensemble",
    type: "fill",
    difficulty: "medium",
    stem: "随机森林 ______ 并行；XGBoost ______ 串行，逐轮拟合 ______。",
    answer: { accepted: ["Bagging；Boosting；残差"], keywords: ["Bagging", "Boosting", "残差"] },
    explanation: "随机森林属于 Bagging，可并行；XGBoost 属于 Boosting，串行逐轮拟合残差。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "9" },
    finalExam: true
  },
  {
    id: "af4-fill-014",
    topic: "tree_ensemble",
    type: "fill",
    difficulty: "medium",
    stem: "RF 双重随机：______、______；无验证集评估：______。",
    answer: { accepted: ["样本随机；特征随机；OOB"], keywords: ["样本", "特征", "OOB"] },
    explanation: "随机森林的双重随机是样本随机和特征随机；OOB 样本可用于无需额外验证集的评估。",
    source: { sourceId: "af4", page: 6, section: "填空题", question: "14" },
    finalExam: true
  }
);

window.QUESTION_BANK.push(
  {
    id: "af2-tf-002",
    topic: "model_selection",
    type: "true_false",
    difficulty: "medium",
    stem: "AIC=-2ln(L)+2*df；BIC=-2ln(L)+df*ln(n)。这里 L 是似然函数值，df 是自由度，n 为样本量；二者越小越好，用于评估模型；两者都是由拟合优度项和复杂度惩罚项构成。",
    answer: true,
    explanation: "AIC/BIC 都在拟合优度与复杂度之间权衡，通常选择值较小的模型。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "2" },
    finalExam: true
  },
  {
    id: "af2-tf-003",
    topic: "logistic_roc",
    type: "true_false",
    difficulty: "easy",
    stem: "在进行统计建模时，如果因变量 Y 是定性数据（如是否购买、是否得病），通常可以直接使用经典线性回归模型建模，而不需要做任何特殊处理。",
    answer: false,
    explanation: "定性因变量通常需要逻辑回归、定序回归等适合分类/离散结果的模型，不能直接当作普通线性回归处理。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "3" },
    finalExam: true
  },
  {
    id: "af2-tf-004",
    topic: "anova",
    type: "true_false",
    difficulty: "medium",
    stem: "在单因素方差分析中，如果 F 统计量非常大，通常意味着组内方差显著超过组间方差，因此没有充分理由拒绝各组均值相等的原假设。",
    answer: false,
    explanation: "F=组间均方/组内均方。F 很大说明组间差异相对组内误差大，应倾向于拒绝各组均值相等。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "4" },
    finalExam: true
  },
  {
    id: "af2-tf-005",
    topic: "anova",
    type: "true_false",
    difficulty: "medium",
    stem: "单因素方差分析中，若 F 检验的 p 值小于 0.05，说明该因素的所有水平之间均存在显著差异。",
    answer: false,
    explanation: "F 检验显著只说明至少存在一组均值差异，不能推出所有水平两两显著不同。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "5" },
    finalExam: true
  },
  {
    id: "af2-tf-010",
    topic: "logistic_roc",
    type: "true_false",
    difficulty: "medium",
    stem: "设某二分类 logistic 回归模型为 log(p/(1-p))=-1+0.5x。当 x=2，阈值 c=0.5，且分类规则为预测概率大于 c 判为 1，否则判为 0，则该样本会被判为 1。",
    answer: false,
    explanation: "x=2 时 logit=0，p=0.5。规则要求概率大于 0.5 才判 1，因此 p=0.5 时判 0。",
    source: { sourceId: "af2", page: 1, section: "判断题", question: "10" },
    finalExam: true
  },
  {
    id: "af2-tf-011",
    topic: "linear_diagnostics",
    type: "true_false",
    difficulty: "easy",
    stem: "在北京市二手房数据分析中，线性回归模型的残差图呈现“喇叭状”分布，说明模型存在异方差问题。为了解决这一问题，可以对因变量“单位面积房价”进行对数变换。",
    answer: true,
    explanation: "该题与 AF1 的线性回归诊断一致：喇叭状残差图提示异方差，对正因变量取对数是常见改善方式。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "11" },
    finalExam: true
  },
  {
    id: "af2-tf-012",
    topic: "anova",
    type: "true_false",
    difficulty: "easy",
    stem: "方差分析是一种特殊的线性回归模型，其自变量为分类变量，因变量为连续型数值变量。",
    answer: true,
    explanation: "ANOVA 可看作类别自变量解释连续因变量的线性模型特例。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "12" },
    finalExam: true
  },
  {
    id: "af2-tf-017",
    topic: "survival_ordinal_count",
    type: "true_false",
    difficulty: "easy",
    stem: "在定序数据编码为 1、2、3、4 后，这些数字之间可以像普通数值变量一样进行加减乘除运算。",
    answer: false,
    explanation: "定序变量只表达顺序，不保证相邻等级间距相等，不能直接按普通数值变量做四则运算解释。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "17" },
    finalExam: true
  },
  {
    id: "af2-tf-020",
    topic: "model_selection",
    type: "true_false",
    difficulty: "easy",
    stem: "在完整数据分析流程中包含背景介绍、数据来源与说明、描述性分析、统计建模以及结论与建议等环节。",
    answer: true,
    explanation: "该题考完整数据分析报告流程，题干所列环节是常见组成部分。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "20" },
    finalExam: true
  },
  {
    id: "af2-tf-021",
    topic: "logistic_roc",
    type: "true_false",
    difficulty: "medium",
    stem: "在逻辑回归中，若使用极大似然估计得到的系数满足渐近正态，三种检验（Wald、得分、似然比）有限样本下 P 值完全相同。",
    answer: false,
    explanation: "Wald、得分和似然比检验在大样本下可能渐近等价，但有限样本下 P 值不一定完全相同。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "21" },
    finalExam: true
  },
  {
    id: "af2-tf-023",
    topic: "survival_ordinal_count",
    type: "true_false",
    difficulty: "medium",
    stem: "在信用卡逾期数据分析案例中，因变量“逾期状态”是包含 8 个水平的定序变量。建模策略：先 01 回归判断是否逾期，再对逾期样本做定序回归预测严重程度。",
    answer: true,
    explanation: "该题直接给出定序结果变量和两阶段建模策略。",
    source: { sourceId: "af2", page: 2, section: "判断题", question: "23" },
    finalExam: true
  },
  {
    id: "af2-sc-004",
    topic: "anova",
    type: "single_choice",
    difficulty: "medium",
    stem: "在单因素方差分析中，以下哪个说法是正确的？",
    options: [
      { key: "A", text: "原假设是各总体的方差相等" },
      { key: "B", text: "F = [SSA/(a-1)] / [SSE/(n-a)]，服从 F(a-1,n-a)" },
      { key: "C", text: "若 F 值小于临界值，说明因素对因变量有显著影响" },
      { key: "D", text: "方差分析不需要正态性假设" }
    ],
    answer: "B",
    explanation: "单因素 ANOVA 的 F 统计量是组间均方除以组内均方，原假设是各组均值相等。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "4" },
    finalExam: true
  },
  {
    id: "af2-sc-005",
    topic: "logistic_roc",
    type: "single_choice",
    difficulty: "medium",
    stem: "关于 AUC，下列说法中正确的是（ ）",
    options: [
      { key: "A", text: "AUC 的取值大小会随着分类阈值改变而发生变化" },
      { key: "B", text: "AUC 值越接近 0.5，说明模型分类预测效果越理想" },
      { key: "C", text: "AUC 衡量模型在所有可能分类阈值下的平均表现，其取值与阈值选取无关" },
      { key: "D", text: "AUC 等于 1 时，说明模型预测结果与实际情况完全相反" }
    ],
    answer: "C",
    explanation: "AUC 是 ROC 曲线下的面积，综合所有阈值表现；越接近 1 越好，0.5 接近随机。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "5" },
    finalExam: true
  },
  {
    id: "af2-sc-006",
    topic: "logistic_roc",
    type: "single_choice",
    difficulty: "easy",
    stem: "逻辑回归 X 系数 =0.5，下列正确的是（ ）",
    options: [
      { key: "A", text: "X+1，概率 +50%" },
      { key: "B", text: "X+1，发生比 +0.5" },
      { key: "C", text: "X+1，对数发生比 +0.5" },
      { key: "D", text: "系数无法解释" }
    ],
    answer: "C",
    explanation: "逻辑回归系数表示自变量增加 1 单位时 log odds 增加的量。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "6" },
    finalExam: true
  },
  {
    id: "af2-sc-008",
    topic: "anova",
    type: "single_choice",
    difficulty: "medium",
    stem: "某研究开展两因素无重复方差分析。已知因素 B 的 SS=45、df=3、MS=15、F=7.5；误差 SS=12、df=6、MS=2；总和 SS=117、df=11；α=0.05，F0.05(2,6)=5.14，F0.05(3,6)=4.76。下列正确的是（ ）",
    options: [
      { key: "A", text: "总自由度计算错误" },
      { key: "B", text: "F=误差均方/因素均方" },
      { key: "C", text: "FA=15>5.14，因素 A 显著" },
      { key: "D", text: "满足泊松分布假设" }
    ],
    answer: "C",
    explanation: "A 的 SS=117-45-12=60，df=11-3-6=2，MS=30，F=30/2=15，大于 5.14，因素 A 显著。",
    source: { sourceId: "af2", page: 3, section: "单项选择题", question: "8" },
    finalExam: true
  },
  {
    id: "af2-fill-006",
    topic: "anova",
    type: "fill",
    difficulty: "easy",
    stem: "单因素方差分析中，SST=______。",
    answer: { accepted: ["SSA+SSE"], keywords: ["SSA", "SSE"] },
    explanation: "总变异 SST 分解为组间变异 SSA 和组内误差变异 SSE。",
    source: { sourceId: "af2", page: 4, section: "填空题", question: "6" },
    finalExam: true
  },
  {
    id: "af2-fill-009",
    topic: "logistic_roc",
    type: "fill",
    difficulty: "easy",
    stem: "log(p/(1-p))=log3，则 odds=____，p=____。",
    answer: { accepted: ["3；3/4"], keywords: ["3", "3/4"] },
    explanation: "log odds=log3，所以 odds=3；p/(1-p)=3，解得 p=3/4。",
    source: { sourceId: "af2", page: 5, section: "填空题", question: "9" },
    finalExam: true
  },
  {
    id: "af2-fill-011",
    topic: "anova",
    type: "fill",
    difficulty: "medium",
    stem: "单因素方差分析：SST=____+____；dfT=n-1=____+____；F=____。",
    answer: { accepted: ["SSA+SSE；(a-1)+(n-a)；MSA/MSE"], keywords: ["SSA", "SSE", "a-1", "n-a", "MSA", "MSE"] },
    explanation: "ANOVA 分解总平方和和自由度，F 统计量为组间均方除以组内均方。",
    source: { sourceId: "af2", page: 5, section: "填空题", question: "11" },
    finalExam: true
  }
);
