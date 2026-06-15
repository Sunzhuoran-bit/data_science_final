// Source-bound answer completions added after the initial PDF extraction pass.
// The question stems remain from the original PDFs; this file only fills missing
// answers, explanations, and a few OCR/text-extraction gaps verified from page images.
(function () {
  const fillAnswer = (accepted, keywords) => ({
    accepted: [accepted],
    keywords
  });

  const sourceBlank = (message) => ({
    type: "open",
    options: [],
    stem: message,
    sourceTextMissing: true,
    answer: fillAnswer("原 PDF 该题号仅保留题号，未提供可读题干和选项。", ["原", "PDF", "题号", "未提供"]),
    explanation: "该题号在原 PDF 页面中只有题号，没有可判定的题干、选项或标准答案；为保证题号不丢失，保留为来源空白题。"
  });

  const overrides = {
    "af1-tf-005": {
      answer: false,
      explanation: "调整后 R²通常不大于普通 R²，可用于比较自变量个数不同的模型；但题干写成“一定小于”，在完美拟合等边界情形下可相等，因此该表述不严谨。"
    },
    "af1-tf-007": {
      answer: false,
      explanation: "存在交互项时，学区变量主效应只表示基准城区条件下的差异，不能直接推出“整体低于非学区房”，也不能据此说交互项无实际意义。"
    },
    "af1-tf-009": {
      answer: false,
      explanation: "R²会随变量增加而不降，因此不能单独作为不同复杂度模型的最科学比较指标；应结合调整后 R²、AIC、BIC 等惩罚复杂度的指标。"
    },
    "af1-tf-010": {
      answer: false,
      explanation: "右偏分布表示右尾较长，少数样本取值很大；多数用户通常集中在较短骑行时长附近，而不是骑行时间较长。"
    },
    "af1-tf-011": {
      stem: "AIC = n(log(RSS/n)) + 2p，其中 n(log(RSS/n)) 项表示模型的复杂程度，2p 项表示模型的拟合优度。（ ）",
      sourceTextMissing: false,
      answer: false,
      explanation: "n log(RSS/n) 是与残差平方和相关的拟合优度项，2p 是对模型参数个数的复杂度惩罚；题干把两项含义反了。"
    },
    "af1-tf-012": {
      answer: false,
      explanation: "QQ 图主要用于检查残差是否近似正态，不能检验自变量对因变量是否显著；显著性通常看 t 检验、F 检验或置信区间。"
    },
    "af1-tf-013": {
      topic: "linear_diagnostics",
      answer: false,
      explanation: "VIF 用于诊断多重共线性。VIF=8 表示存在一定共线性风险，但通常未达到必须剔除变量的绝对标准，是否处理还要结合建模目标。"
    },
    "af1-tf-014": {
      answer: false,
      explanation: "QQ 图偏离参考线主要说明残差正态性可能不满足；异方差通常通过残差-拟合值图、Scale-Location 图等诊断。"
    },
    "af1-sc-005": {
      answer: "B",
      explanation: "强影响点指该样本是否纳入会显著改变模型估计或预测的观测点，Cook 距离越大说明影响越大，但不等于必须删除。"
    },
    "af1-sc-007": {
      answer: "B",
      explanation: "完全多重共线性会使设计矩阵不满秩，回归系数无法唯一估计。"
    },
    "af1-sc-008": {
      topic: "model_selection",
      answer: "B",
      explanation: "同一因变量、同一数据下，调整后 R²引入自由度惩罚，通常小于普通 R²；样本量越大，自由度惩罚带来的差距越小。"
    },
    "af1-sc-009": {
      answer: "C",
      explanation: "交互项系数 β3 表示 D=1 与 D=0 两组中 X 的边际影响是否不同。β2 只是在 X=0 时两组截距差异。"
    },
    "af1-sc-011": {
      answer: "C",
      explanation: "R²越大通常表示样本内拟合更好，但“R²大于 0.5 就有实际解释能力”没有通用统计依据，需结合业务背景和模型诊断。"
    },
    "af1-sc-012": {
      answer: "A",
      explanation: "在 log(y)=β0+β1x+ε 中，连续自变量 x 增加 1 个单位，y 的平均变化约为 100β1%，β1=-0.03 即约下降 3%。"
    },
    "af1-sc-013": {
      answer: "B",
      explanation: "AIC/BIC 越小越好；第一项与 RSS 或似然相关，反映拟合优度，第二项惩罚模型复杂度。BIC 的复杂度惩罚通常强于 AIC。"
    },
    "af1-sc-014": {
      topic: "linear_diagnostics",
      answer: "B",
      explanation: "理想的残差图应围绕 0 随机散布且没有明显结构；其余选项都提示正态性或同方差性等诊断问题。"
    },
    "af1-fill-003": {
      answer: fillAnswer("异方差；正态；对数线性回归", ["异方差", "正态", "对数"]),
      explanation: "残差波动随预测值增大而增大是异方差；QQ 图尾部偏离说明残差与正态分布有差距；对正值因变量常用对数线性回归缓解。"
    },
    "af1-fill-004": {
      answer: fillAnswer("k-1", ["k-1"]),
      explanation: "含 k 个水平的分类变量需要设一个基准组，剩余 k-1 个水平各构造一个哑变量，避免完全共线性。"
    },
    "af1-fill-005": {
      answer: fillAnswer("β1%", ["β1", "%"]),
      explanation: "ln(y)=β0+β1ln(x) 是双对数模型，β1 是弹性，表示 x 变化 1% 时 y 平均变化约 β1%。"
    },
    "af1-fill-006": {
      answer: fillAnswer("模型遗漏重要变量或存在非线性；异方差；对因变量取对数变换", ["遗漏", "非线性", "异方差", "对数"]),
      explanation: "残差呈抛物线说明线性形式可能不合适；喇叭状说明异方差；对正值因变量可用对数变换改善波动不齐。"
    },
    "af1-fill-007": {
      answer: fillAnswer("多重共线性；10；不严重；岭回归", ["多重共线性", "10", "不严重", "岭回归"]),
      explanation: "VIF 常用于检测多重共线性，经验上 VIF>10 常视为严重；最大 VIF=5 通常不算严重，可用岭回归等方法缓解。"
    },
    "af1-fill-009": {
      answer: fillAnswer("E(ε)=0，Var(ε)=σ²I，Cov(εi,εj)=0；需要推断时常进一步假设 ε 服从正态分布", ["E(ε)=0", "Var", "Cov", "正态"]),
      explanation: "经典线性回归误差项核心假设包括零均值、同方差、无相关；为了小样本推断常额外假设正态性。"
    },
    "af1-fill-010": {
      answer: fillAnswer("同方差；对因变量取对数变换", ["同方差", "对数"]),
      explanation: "残差喇叭状表示方差随拟合值变化，违反同方差假设；常见修正包括对数变换、加权最小二乘等。"
    },

    "af2-tf-008": {
      answer: false,
      explanation: "QQ 图偏离直线主要对应残差正态性问题；残差图喇叭状才对应异方差。题干把两个诊断含义互换了。"
    },
    "af2-tf-009": {
      answer: false,
      explanation: "普通 R²通常不小于调整后 R²；调整后 R²可用于比较不同复杂度模型，但题干关于大小关系的表述错误。"
    },
    "af2-tf-013": {
      answer: true,
      explanation: "残差喇叭口提示异方差；因变量恒正时，对因变量取对数后重建模型是常见处理方式。"
    },
    "af2-tf-014": {
      answer: true,
      explanation: "对数线性模型中，连续自变量增加 1 个单位，因变量平均变化约为系数×100 个百分点。"
    },
    "af2-tf-015": {
      answer: true,
      explanation: "题干列出的判断为：a 正确，b 错误，c 正确，d 错误，e 正确。该组合与方差分析、对数线性模型、Cox 模型和 VIF 的标准结论一致。"
    },
    "af2-tf-016": {
      answer: false,
      explanation: "二手房案例关注的是单位面积房价，而不是房屋总价。"
    },
    "af2-tf-018": {
      answer: false,
      explanation: "ANOVA 不只是变量类型匹配，还需要正态性、方差齐性、独立性等前提或相应的稳健处理。"
    },
    "af2-tf-022": {
      answer: true,
      explanation: "在控制其他变量不变时，面积系数为负表示面积越大，单位面积房价的条件均值越低。"
    },
    "af2-fill-001": {
      answer: fillAnswer("Logistic Function 把线性预测值映射到 0-1 概率；Logit Function 把概率 p 映射为 log(p/(1-p)) 的对数几率", ["Logistic", "概率", "Logit", "log"]),
      explanation: "Logistic 是从实数到概率的 S 形映射；Logit 是概率到对数几率的反向变换。"
    },
    "af2-fill-002": {
      answer: fillAnswer("Log-rank 对各时间点权重较均衡；Wilcoxon 更重视早期差异；p=0.12 与 p=0.01 说明差异主要集中在申请周期早期", ["Log-rank", "Wilcoxon", "早期"]),
      explanation: "Wilcoxon 检验更偏向早期事件差异，因此 Wilcoxon 显著而 Log-rank 不显著时，常解释为差异集中在早期。"
    },
    "af2-fill-004": {
      answer: fillAnswer("删失；Cox 比例风险模型；Cox 系数为正表示风险增大，AFT 系数为正表示生存时间延长", ["删失", "Cox", "风险", "AFT"]),
      explanation: "无法观测确切失效时间称为删失；Cox 模型解释风险比，AFT 模型解释生存时间加速或延缓。"
    },
    "af2-fill-005": {
      answer: fillAnswer("SSA；SSB；SSAB；一个因素的效应依赖于另一个因素水平；基准风险函数；计数；log 连接；负二项模型", ["SSA", "SSB", "SSAB", "依赖", "基准风险", "计数", "log", "负二项"]),
      explanation: "双因素方差分析含主效应和交互效应分解；Cox 的 h0(t) 是基准风险函数；泊松回归用于计数数据，常用 log 连接，过离散时可换负二项。"
    },
    "af2-fill-007": {
      answer: fillAnswer("Cox 或 AFT", ["Cox", "AFT"]),
      explanation: "时长或生存型数据常用 Cox 比例风险模型或 AFT 加速失效时间模型建模。"
    },

    "af3-tf-006": {
      answer: false,
      explanation: "因子分析侧重用公共因子解释变量间相关性，主成分分析侧重构造线性组合来压缩和解释总体方差；题干把二者核心目标说反了。"
    },
    "af3-tf-014": {
      answer: false,
      explanation: "PCA 前通常需要中心化；当变量量纲或尺度差异明显时也需要标准化，不能一概说不需要标准化。"
    },
    "af3-tf-017": {
      answer: false,
      explanation: "正交旋转载荷矩阵不会改变模型 implied 的协方差结构和共同度，只改变因子坐标与解释方式。"
    },
    "af3-tf-023": {
      type: "open",
      sourceTextMissing: false,
      stem: "现有 4 个已经标准化的观测变量 X1、X2、X3、X4。采用正交双因子模型，载荷矩阵为 X1=(0.8,0.1)、X2=(0.7,0.2)、X3=(0.1,0.9)、X4=(0.2,0.8)。判断：1. 第一个因子主要解释 X1、X2，第二个因子主要解释 X3、X4；2. X3 的唯一性为 0.1²+0.9²=0.82；3. 模型 implied 的 Cov(X1,X2) 为 0.58；4. 对载荷矩阵进行正交旋转，若特殊方差矩阵不变，则 implied 协方差矩阵 ΛΛᵀ+Ψ 不变。",
      answer: fillAnswer("1 正确；2 错误，0.82 是共同度，唯一性为 1-0.82=0.18；3 正确，Cov(X1,X2)=0.8×0.7+0.1×0.2=0.58；4 正确。", ["正确", "错误", "0.18", "0.58", "不变"]),
      explanation: "共同度等于载荷平方和，唯一性等于 1-共同度；正交旋转保持 ΛΛᵀ，从而在特殊方差不变时保持 implied 协方差矩阵。"
    },
    "af3-sc-006": {
      answer: "C",
      explanation: "PCA 是原始变量的线性组合，FA 是用公共因子和特殊因子解释原始变量结构；C 同时说明了二者建模方向。"
    },
    "af3-sc-007": {
      answer: "C",
      explanation: "因子分析载荷可旋转，估计结果不唯一；PCA 的主成分方向由特征分解决定，通常具有唯一性。C 将二者说反，因此错误。"
    },
    "af3-sc-009": {
      answer: "C",
      explanation: "PCA 不要求潜在因果结构，也不必然要求正态分布；FA 虽有潜变量解释，但也不能简单表述为因果结构。"
    },
    "af3-sc-010": {
      answer: "B",
      explanation: "K-means 常用组内平方和 WGSS 的碎石图选择较合适的 K。"
    },
    "af3-sc-011": {
      answer: "C",
      explanation: "层次聚类可从每个样本自成一类开始逐步合并，并用树状图展示；K-means 通常需要预先给定 K。"
    },
    "af3-sc-015": {
      sourceTextMissing: false,
      stem: "某研究者对学生六科成绩做因子分析（主成分法，2 个因子，未旋转），得到前两个因子的载荷矩阵近似为：数学(-0.79,0.42)、物理(-0.73,0.40)、化学(-0.64,0.63)、语文(0.89,0.31)、历史(0.81,0.47)、英语(0.83,0.46)。之后采用最大方差法（Varimax）进行正交旋转，得到旋转后的载荷矩阵。关于旋转前后的变化，下列说法正确的是（ ）",
      options: [
        { key: "A", text: "旋转会改变每个变量的共同度" },
        { key: "B", text: "旋转后因子之间的夹角不再为 90°，因此称为斜交旋转" },
        { key: "C", text: "旋转使每个因子上的载荷向 0 或 ±1 极端化，从而更容易解释因子含义" },
        { key: "D", text: "旋转后的载荷矩阵等于原始载荷矩阵乘以一个正交矩阵，该正交矩阵由数据唯一确定，不依赖于旋转目标" }
      ],
      answer: "C",
      explanation: "Varimax 正交旋转保持因子正交和变量共同度，但会重新分配载荷，使载荷结构更接近简单结构。"
    },
    "af3-sc-016": {
      answer: "D",
      explanation: "PCA 不假设观测变量由公共因子和特殊误差生成；这是因子分析的模型思想，二者并不完全等价。"
    },
    "af3-mc-017": {
      answer: ["C"],
      explanation: "C 正确区分了因子得分与主成分得分。A 错在 PCA 不做 Varimax 因子旋转；B 错在二者模型含义不等价；D 把共同度和方差贡献率解释错了。"
    },
    "af3-sc-019": {
      sourceTextMissing: false,
      stem: "对学生 6 门课成绩进行因子分析，提取 2 个因子，分别得到未旋转和 Varimax 正交旋转后的载荷矩阵（数值取自课件，所有变量统一旋转 35°）。数学未旋转载荷为(-0.79,0.42)，旋转后为(-0.32,0.84)；语文未旋转载荷为(0.89,0.31)，旋转后为(0.93,-0.20)。结合课件核心结论，下列表述完全正确的是（ ）",
      options: [
        { key: "A", text: "正交旋转的数学本质是对初始载荷矩阵右乘一个正交旋转矩阵 Q，所有变量统一旋转同一个角度，旋转后因子轴仍保持正交" },
        { key: "B", text: "数学的共同度旋转前约为 0.80，旋转后约为 0.81，说明旋转略微提升了公共因子对数学成绩的解释能力" },
        { key: "C", text: "若用回归法计算因子得分，旋转后学生的文科因子得分与旋转前的得分相关系数会低于 0.8，说明旋转显著改变了学生的能力排名" },
        { key: "D", text: "若基于未旋转因子得分聚类得到 3 类，基于旋转后因子得分聚类也必须得到 3 类，否则说明聚类算法存在问题" }
      ],
      answer: "A",
      explanation: "Varimax 正交旋转可表示为载荷矩阵右乘正交矩阵，保持因子轴正交；共同度理论上不变，B 的差异来自四舍五入。"
    },
    "af3-sc-022": {
      answer: "C",
      explanation: "PCA 重组原始数据方差；FA 假设观测变量由公共因子和特殊因子共同生成，这是统计建模角度最严谨的区别。"
    },
    "af3-sc-023": {
      topic: "clustering",
      sourceTextMissing: false,
      stem: "从概率生成模型的视角来看，K-Means 聚类算法可以被视为高斯混合模型在使用期望最大化（EM）算法求解时的一种特例。当 GMM 满足以下哪种严格条件时，其 EM 算法的迭代过程会精确退化为标准 K-Means 算法的更新法则？",
      options: [
        { key: "A", text: "混合模型中所有高斯分量共享同一个完全非对角协方差矩阵。" },
        { key: "B", text: "混合模型中所有高斯分量具有对角协方差矩阵，且各维度方差互不相同。" },
        { key: "C", text: "所有高斯分量的协方差矩阵均为球形各向同性（Σk=σ2I），且在推导中取极限 σ2→0。" },
        { key: "D", text: "所有高斯分量的先验混合权重均被固定为均匀分布，与协方差结构无关。" }
      ],
      answer: "C",
      explanation: "K-Means 可看作 GMM 在各分量协方差均为相同球形各向同性、且方差趋近于 0 时的硬分配极限；此时 EM 的 E 步退化为最近中心分配，M 步退化为计算簇均值。"
    },
    "af3-sc-025": {
      answer: "C",
      explanation: "K-means 对初始中心敏感，可先用层次聚类帮助确定类别数或初始中心，再用于大规模 K-means。"
    },
    "af3-sc-027": {
      topic: "pca_fa",
      sourceTextMissing: false,
      stem: "从协方差结构与统计建模的底层原理来看，关于主成分分析（PCA）与因子分析（FA）的数学本质对比，下列说法正确的是：",
      options: [
        { key: "A", text: "因子分析假定原始变量的总体协方差矩阵 Σ 可以精确分解为 ΛΛ′+Ψ，其中矩阵 Ψ 为对角阵，这意味着因子分析不仅试图解释变量间的相关性，还假设原始变量间的所有协方差只能由公共因子（即 ΛΛ′ 部分）来解释。" },
        { key: "B", text: "主成分分析与因子分析在数学上都可以看作是对原始变量协方差矩阵进行特征值分解的过程，因此在相同的数据集上，前 m 个主成分所代表的特征向量空间，与因子分析提取出的 m 个公共因子的载荷矩阵空间是等价的。" },
        { key: "C", text: "在主成分分析的模型中，由于主成分是原始变量的线性组合，因此当我们在模型中增加或减少原始变量的数量时，原有的第一主成分 Y1 在各个样本上的得分数值以及其权重系数向量会保持绝对不变。" },
        { key: "D", text: "因子分析中由于引入了不可观测的公共因子，其参数估计存在“因子旋转不唯一性”，而最大方差法（Varimax）正交旋转通过最大化载荷矩阵中每行元素的平方方差，牺牲因子之间的正交独立性，换取了解释性。" }
      ],
      answer: "A",
      explanation: "FA 的核心模型是用公共因子载荷 ΛΛ′ 解释变量间协方差，并用对角特殊方差 Ψ 表示各变量独有方差；B 把 PCA 与 FA 等同，C 忽略变量集合变化会改变主成分，D 错在 Varimax 正交旋转保持因子正交性且目标通常按载荷列形成简单结构。"
    },
    "af3-sc-028": {
      answer: "B",
      explanation: "PCA 的核心目标是降维，并尽可能保留主要方差信息。"
    },
    "af3-sc-029": {
      sourceTextMissing: false,
      stem: "在主成分分析（PCA）中，求解第一主成分的本质是一个优化问题。假设数据矩阵 Y 已中心化，以下哪个选项正确描述了求解第一主成分载荷向量 a1 的总体层面优化目标和约束条件？",
      options: [
        { key: "A", text: "max Var(a1ᵀY)，s.t. ||a1||²=1" },
        { key: "B", text: "min Var(a1ᵀY)，s.t. ||a1||²=1" },
        { key: "C", text: "max Var(a1ᵀY)，s.t. a1ᵀa2=0" },
        { key: "D", text: "min Var(a1ᵀY)，s.t. a1ᵀa2=0" }
      ],
      answer: "A",
      explanation: "第一主成分是在载荷向量单位长度约束下，使投影方差 Var(a1ᵀY) 最大的方向。"
    },
    "af3-sc-030": {
      answer: "B",
      explanation: "题干怀疑存在不能直接观测的潜在维度，适合用因子分析解释变量间相关性背后的公共因子。"
    },
    "af3-sc-031": {
      answer: "C",
      explanation: "不同量纲变量未标准化时，数值范围大的变量会主导距离计算，使聚类几乎由该变量决定。"
    },
    "af3-sc-032": {
      answer: "C",
      explanation: "层次聚类的树状图不需要提前给定类别数量，类别数可根据树状图切割高度选择。"
    },
    "af3-fill-004": {
      answer: fillAnswer("因子旋转；正交", ["因子旋转", "正交"]),
      explanation: "因子旋转能让载荷更接近简单结构；PCA 主成分是原始变量的正交线性组合，方向由方差最大化唯一确定。"
    },
    "af3-fill-005": {
      sourceTextMissing: false,
      stem: "在因子分析中，为了使因子具有更清晰的实际意义，通常对因子载荷矩阵进行旋转。设原始因子载荷矩阵为 L，寻找正交矩阵 Q，使旋转后的载荷矩阵 L*=LQ。回答：1. 这种旋转是否改变原始变量的共同度；2. Varimax 的目标；3. 英超球员数据中，“射门”与“防守中场因子”的关系说明了什么。",
      answer: fillAnswer("1. 不会改变；2. 各列载荷平方的方差；3. 进攻因子，防守中场因子", ["不会改变", "各列载荷平方", "进攻因子", "防守中场因子"]),
      explanation: "该题 PDF 页面已给出绿色答案：正交旋转不改变共同度；Varimax 最大化各列载荷平方的方差；射门主要受进攻因子支配。"
    },
    "af3-fill-009": {
      sourceTextMissing: false,
      stem: "在因子分析正交模型 Y−μ=LF+e 中，每个原始变量 Yj 的方差可分解为共同度 hj² 与特殊因子方差 ψj。为使载荷矩阵结构更简单，常用最大方差法进行因子旋转。正交旋转后，各变量“由公共因子贡献的方差”部分的值会不会发生改变？",
      answer: fillAnswer("不会", ["不会"]),
      explanation: "正交旋转保持每个变量载荷平方和不变，因此共同度不会改变。"
    },

    "af4-tf-006": {
      answer: true,
      explanation: "朴素贝叶斯的“朴素”正是指在类别给定条件下假设特征相互独立。"
    },
    "af4-tf-009": {
      answer: true,
      explanation: "信息增益容易偏好多取值属性；增益率用分裂信息校正后，相对更容易偏向取值较少的属性。"
    },
    "af4-sc-005": {
      answer: "C",
      explanation: "预剪枝是在树生长过程中评估继续划分是否带来泛化收益，若无收益则停止划分。"
    },
    "af4-sc-007": {
      answer: "A",
      explanation: "朴素贝叶斯训练快、对高维稀疏文本友好，小样本下也常能工作。"
    },
    "af4-sc-008": {
      answer: "C",
      explanation: "高斯核 SVM 是判别式方法，不是生成式模型。"
    },
    "af4-sc-011": {
      answer: "B",
      explanation: "后剪枝先生成较完整的树再修剪，训练开销通常更大，但泛化性能往往优于预剪枝。"
    },
    "af4-sc-012": {
      answer: "C",
      explanation: "XGBoost 叶子权重通常由目标函数的梯度和 Hessian 推出，不是靠穷举叶子权重寻找最优分裂。"
    },
    "af4-sc-015": {
      answer: "C",
      explanation: "预剪枝在生长过程中判断划分是否有效，无效则停止，因此能节省训练时间。"
    },
    "af4-sc-017": {
      answer: "D",
      explanation: "验证集比例不是越大越好；验证集过大反而会减少训练数据，影响模型学习。"
    },
    "af4-sc-019": {
      answer: "C",
      explanation: "朴素贝叶斯中某条件概率为 0 会导致整体概率为 0，常用拉普拉斯修正加入平滑项。"
    },
    "af4-sc-021": {
      answer: "C",
      explanation: "拉普拉斯修正通过加伪计数避免未出现取值导致条件概率为 0。"
    },
    "af4-sc-022": {
      answer: "B",
      explanation: "ODE 独依赖估计放宽朴素贝叶斯假设，允许每个特征在类别之外至多依赖一个其他特征。"
    },
    "af4-sc-023": {
      answer: "A",
      explanation: "ID3 使用信息增益作为特征划分准则，选择信息增益最大的属性。"
    },
    "af4-sc-024": {
      topic: "naive_bayes",
      answer: "B",
      explanation: "文本或热线词频特征可转成 0/1 二值因子供朴素贝叶斯使用，避免直接把词频当正态连续变量。"
    },
    "af4-sc-025": {
      answer: "C",
      explanation: "信息增益偏好多取值属性；增益率用分裂信息校正，但可能偏好取值较少的属性。"
    },
    "af4-sc-026": {
      answer: "B",
      explanation: "ROC 曲线通过遍历概率阈值，计算不同阈值下的 TPR 与 FPR 形成曲线。"
    },
    "af4-sc-029": {
      answer: "A",
      explanation: "信息增益为父节点熵减去各子集熵的加权和；若两个子集权重均为 1/2，则为 H(D)-1/2H(D1)-1/2H(D2)。"
    },
    "af4-fill-003": {
      answer: fillAnswer("在类别给定条件下，各特征相互独立", ["类别", "特征", "独立"]),
      explanation: "朴素贝叶斯的核心条件独立假设是 P(x1,...,xd|y)=∏P(xi|y)。"
    },
    "af4-fill-006": {
      answer: fillAnswer("并行或相互独立；串行迭代并关注错分样本；多项分布；平滑项", ["并行", "串行", "多项", "平滑"]),
      explanation: "Bagging 基学习器可并行训练；Boosting 按序迭代；离散朴素贝叶斯常配合多项分布与拉普拉斯平滑。"
    },
    "af4-fill-007": {
      answer: fillAnswer("拉普拉斯；有放回；后剪枝；召回率=TP/(TP+FN)", ["拉普拉斯", "有放回", "后剪枝", "TP", "FN"]),
      explanation: "零概率用拉普拉斯修正；Bagging 采用 bootstrap 有放回抽样；树全生成后自底向上修剪是后剪枝；召回率衡量真实正例中被预测正确的比例。"
    },
    "af4-fill-008": {
      answer: fillAnswer("ID3 用信息增益；C4.5 用增益率；CART 用基尼指数；预剪枝生长中停止；后剪枝全树再修剪", ["信息增益", "增益率", "基尼", "预剪枝", "后剪枝"]),
      explanation: "题干本身列出了各算法划分准则和两类剪枝方式，按原句补全即可。"
    },
    "af4-fill-010": {
      topic: "naive_bayes",
      answer: fillAnswer("P̂(c)=5/13；P̂(x=1|c)=1/6", ["5/13", "1/6"]),
      explanation: "用拉普拉斯修正：类别先验为 (4+1)/(10+3)=5/13；条件概率为 (0+1)/(4+2)=1/6。"
    },
    "af4-fill-011": {
      answer: fillAnswer("预剪枝；欠拟合；后剪枝；留出法", ["预剪枝", "欠拟合", "后剪枝", "留出法"]),
      explanation: "预剪枝提前停止分支，可能欠拟合；后剪枝先生成全树再修剪；剪枝评估常用留出验证集。"
    },
    "af4-fill-013": {
      topic: "tree_ensemble",
      answer: fillAnswer("预剪枝；后剪枝", ["预剪枝", "后剪枝"]),
      explanation: "生长中提前停止是预剪枝；全树生成后再修剪是后剪枝。"
    },
    "af4-fill-015": {
      topic: "naive_bayes",
      answer: fillAnswer("P(y=1)P(x1|y=1)P(x2|y=1)", ["P(y=1)", "P(x1|y=1)", "P(x2|y=1)"]),
      explanation: "朴素贝叶斯按条件独立假设分解后验概率的正比例项。"
    }
  };

  window.ANSWER_OVERRIDES = overrides;
  const questions = window.QUESTION_BANK || [];
  const byId = new Map(questions.map((question) => [question.id, question]));
  Object.entries(overrides).forEach(([id, patch]) => {
    const question = byId.get(id);
    if (!question) return;
    Object.assign(question, patch);
    question.answerPending = false;
    if (!Object.prototype.hasOwnProperty.call(patch, "sourceTextMissing")) {
      question.sourceTextMissing = false;
    }
  });
})();
