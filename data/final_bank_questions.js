// Questions visible in data/raw/final_question_bank.pdf.
// These are kept as a separate "final" source even when their content overlaps
// with assignment_feedback_1-4, because the PDF provenance is different.
(function () {
  const fillAnswer = (accepted, keywords) => ({ accepted: [accepted], keywords });
  const option = (key, text) => ({ key, text });
  const source = (page, section, question) => ({ sourceId: "final", page, section, question: String(question) });

  const questions = [
    {
      id: "final-tf-001",
      topic: "linear_diagnostics",
      type: "true_false",
      difficulty: "easy",
      stem: "在进行回归分析时，如果模型显示自变量 X（如：是否临近地铁）对因变量 Y（单位面积房价）的影响在统计学上显著，则可以判定 X 是导致 Y 变化的因果原因。",
      answer: false,
      explanation: "统计显著只能说明模型条件下相关关系显著，不能直接推出因果关系。",
      source: source(1, "判断题", 1),
      finalExam: true
    },
    {
      id: "final-tf-002",
      topic: "log_linear_house",
      type: "true_false",
      difficulty: "medium",
      stem: "在二手房数据集中，将模型改进为对数线性模型 log(y)=β0+β1x1+...+ε。若 school（是否为学区房，1 代表是，0 代表否）的系数估计值为 0.171，则可解释为：在控制其他因素不变时，学区房单位面积房价比非学区房平均高出 0.171 万元/平方米。",
      answer: false,
      explanation: "log(y) 模型中的系数通常解释为相对变化，0.171 约表示 17.1% 的变化，而不是 0.171 万元/平方米的绝对差。",
      source: source(1, "判断题", 2),
      finalExam: true
    },
    {
      id: "final-tf-003",
      topic: "uncategorized",
      type: "true_false",
      difficulty: "easy",
      stem: "在分析某城市共享单车骑行时长分布时，如果直方图显示数据右偏，则可以判断大多数用户骑行时间较长。",
      answer: false,
      explanation: "右偏表示右尾较长，少数观测很大；多数用户通常集中在较短时长附近。",
      source: source(1, "判断题", 3),
      finalExam: true
    },
    {
      id: "final-tf-004",
      topic: "linear_diagnostics",
      type: "true_false",
      difficulty: "easy",
      stem: "在线性模型中，QQ 图常用于检验自变量对因变量是否具有显著影响。",
      answer: false,
      explanation: "QQ 图用于检查残差正态性；变量显著性通常看 t 检验或 F 检验。",
      source: source(1, "判断题", 4),
      finalExam: true
    },
    {
      id: "final-tf-005",
      topic: "anova",
      type: "true_false",
      difficulty: "easy",
      stem: "在进行方差分析（ANOVA）时，如果 F 检验的结果显著（即 p 值小于显著性水平，如 0.05），这说明所有组的均值都不相等。",
      answer: false,
      explanation: "F 检验显著只说明至少有一组均值不同，不能直接推出所有组两两不同。",
      source: source(1, "判断题", 5),
      finalExam: true
    },
    {
      id: "final-tf-006",
      topic: "logistic_roc",
      type: "true_false",
      difficulty: "easy",
      stem: "在进行统计建模时，如果因变量 Y 是定性数据（例如：消费者是否购买某产品；病人的诊断结果为“得病”或“未得病”），我们通常可以直接使用经典的线性回归模型进行建模，而不需要做任何特殊处理。",
      answer: false,
      explanation: "二分类或定性因变量通常使用逻辑回归、分类模型等，不能直接套用经典线性回归。",
      source: source(1, "判断题", 6),
      finalExam: true
    },
    {
      id: "final-tf-007",
      topic: "survival_ordinal_count",
      type: "true_false",
      difficulty: "medium",
      stem: "在生存分析中，AFT（加速失效时间）模型和 Cox 比例风险模型对回归系数的解读方向是相同的：若某个协变量在两个模型中的系数符号一致，则说明该变量对生存时间的影响方向也一致。",
      answer: false,
      explanation: "AFT 直接解释生存时间，Cox 解释风险；同一因素在两个模型中的符号方向通常不能按同一含义直接比较。",
      source: source(1, "判断题", 7),
      finalExam: true
    },
    {
      id: "final-tf-008",
      topic: "anova",
      type: "true_false",
      difficulty: "medium",
      stem: "单因素方差分析中，SST=SSA+SSE 成立的前提是满足正态性、可加性、方差齐性三大假设。",
      answer: true,
      explanation: "按该 PDF 对同类题的标注，单因素 ANOVA 的平方和分解与后续 F 推断建立在模型可加性、正态性和方差齐性等前提下。",
      source: source(1, "判断题", 8),
      finalExam: true
    },
    {
      id: "final-tf-009",
      topic: "survival_ordinal_count",
      type: "true_false",
      difficulty: "easy",
      stem: "Cox 比例风险模型是半参数模型，不需要假设基准风险函数的分布形式。",
      answer: true,
      explanation: "Cox 模型指定协变量对风险的比例影响，但不需要为基准风险函数指定参数分布。",
      source: source(1, "判断题", 9),
      finalExam: true
    },
    {
      id: "final-tf-010",
      topic: "anova",
      type: "true_false",
      difficulty: "easy",
      stem: "方差分析 F 检验显著后，可直接判断哪两组之间存在显著差异。",
      answer: false,
      explanation: "F 检验显著后还需进行多重比较或事后检验，才能判断具体哪两组不同。",
      source: source(1, "判断题", 10),
      finalExam: true
    },
    {
      id: "final-tf-011",
      topic: "survival_ordinal_count",
      type: "true_false",
      difficulty: "easy",
      stem: "在定序数据编码为 1、2、3、4 后，因此这些数字之间可以像普通数值变量一样进行加减乘除运算。",
      answer: false,
      explanation: "定序编码只表示顺序，不表示相邻类别间距相等，不能当普通连续数值随意运算。",
      source: source(1, "判断题", 11),
      finalExam: true
    },
    {
      id: "final-tf-012",
      topic: "logistic_roc",
      type: "true_false",
      difficulty: "easy",
      stem: "在逻辑回归中，如果某个解释变量的系数估计值为负，那么在控制其他变量不变时，该变量增加通常会降低 Y=1 的发生倾向。",
      answer: true,
      explanation: "逻辑回归系数为负表示该变量增加会降低 log-odds，从而降低 Y=1 的发生倾向。",
      source: source(1, "判断题", 12),
      finalExam: true
    },
    {
      id: "final-tf-013",
      topic: "logistic_roc",
      type: "true_false",
      difficulty: "medium",
      stem: "在逻辑回归中，若使用极大似然估计得到的系数满足渐近正态，三种检验（Wald、得分、似然比）有限样本下 P 值完全相同。",
      answer: false,
      explanation: "三种检验在大样本下近似等价，有限样本中 P 值通常不会完全相同。",
      source: source(2, "判断题", 13),
      finalExam: true
    },
    {
      id: "final-tf-014",
      topic: "survival_ordinal_count",
      type: "true_false",
      difficulty: "medium",
      stem: "在信用卡逾期数据分析案例中，因变量“逾期状态”是包含 8 个水平的定序变量。建模策略：先使用 01 回归判断是否逾期，再对逾期样本做定序回归预测严重程度。",
      answer: true,
      explanation: "该策略先处理是否逾期的二分类问题，再在逾期样本中建模逾期严重程度的定序结果。",
      source: source(2, "判断题", 14),
      finalExam: true
    },
    {
      id: "final-tf-015",
      topic: "pca_fa",
      type: "true_false",
      difficulty: "medium",
      stem: "在学生成绩主成分分析中，若前两个主成分的累积贡献率超过 80%，就说明这两个综合指标已经完整保留了原来六门课的全部信息，因此不需要再解释载荷含义。",
      answer: false,
      explanation: "80% 只是保留大部分方差信息，不是完整保留全部信息；载荷仍需要解释业务含义。",
      source: source(2, "判断题", 15),
      finalExam: true
    },
    {
      id: "final-tf-016",
      topic: "pca_fa",
      type: "true_false",
      difficulty: "medium",
      stem: "因子分析中，因子及其载荷矩阵的估计不是唯一的，可以通过任意正交矩阵进行旋转，以寻找使因子结构更简单、解释更清晰的旋转方向。",
      answer: true,
      explanation: "正交旋转保持模型共同度和协方差结构，但改变载荷坐标，从而寻找更易解释的简单结构。",
      source: source(2, "判断题", 16),
      finalExam: true
    },
    {
      id: "final-tf-017",
      topic: "clustering",
      type: "true_false",
      difficulty: "easy",
      stem: "聚类分析（Clustering Analysis）属于一种有监督学习方法，需要样本提前带有类别标签。",
      answer: false,
      explanation: "聚类没有预先给定类别标签，属于无监督学习。",
      source: source(2, "判断题", 17),
      finalExam: true
    },
    {
      id: "final-tf-018",
      topic: "clustering",
      type: "true_false",
      difficulty: "medium",
      stem: "在 K-Means 聚类算法中，由于采用了迭代优化的思想，因此只要初始中心点选择得当，算法一定能收敛到全局最优解，而不会陷入局部最优。",
      answer: false,
      explanation: "K-means 通常只能保证收敛到局部最优，初始中心会影响结果。",
      source: source(2, "判断题", 18),
      finalExam: true
    },
    {
      id: "final-tf-019",
      topic: "clustering",
      type: "true_false",
      difficulty: "medium",
      stem: "K-Means 算法的核心是最小化各个簇内的样本到质心的欧氏距离平方和，因此该算法在处理非凸形状（如环状、月牙形分布）的数据簇时，依然能够准确地将不同形状的数据有效分离。",
      answer: false,
      explanation: "K-means 偏好球形或凸形簇，对环状、月牙形等非凸结构通常效果不好。",
      source: source(2, "判断题", 19),
      finalExam: true
    },
    {
      id: "final-tf-020",
      topic: "clustering",
      type: "true_false",
      difficulty: "easy",
      stem: "聚类分析（Clustering Analysis）、主成分分析（PCA）以及因子分析（Factor Analysis）在建立模型时都没有事先确定的因变量，因此它们都属于无监督的统计学习方法。",
      answer: true,
      explanation: "这三类方法都不依赖事先给定的因变量标签，属于无监督学习思路。",
      source: source(2, "判断题", 20),
      finalExam: true
    },
    {
      id: "final-tf-021",
      topic: "naive_bayes",
      type: "true_false",
      difficulty: "easy",
      stem: "朴素贝叶斯算法之所以被称为“朴素”，是因为它在进行概率计算时，做出了一个理想化的假设：即所有的特征之间都是相互独立的，不存在任何相关性。",
      answer: false,
      explanation: "朴素贝叶斯的“朴素”是假设在给定类别条件下各特征相互独立，而不是所有特征在无条件意义下绝对独立、不存在任何相关性。",
      source: source(2, "判断题", 21),
      finalExam: true
    },
    {
      id: "final-tf-022",
      topic: "tree_ensemble",
      type: "true_false",
      difficulty: "medium",
      stem: "随机森林通过 Bootstrap 重抽样和随机特征选择降低树之间的相关性，这主要降低了模型的偏差；而 XGBoost 通过逐轮迭代拟合残差，主要降低了模型的方差。",
      answer: false,
      explanation: "随机森林通过集成主要降低方差；Boosting/XGBoost 逐轮改进弱学习器，通常更侧重降低偏差。",
      source: source(2, "判断题", 22),
      finalExam: true
    },
    {
      id: "final-tf-023",
      topic: "naive_bayes",
      type: "true_false",
      difficulty: "easy",
      stem: "在政府热线平台案例中，投诉文本经过中文分词后可以转化为“样本×词语”的数值矩阵；由于大多数投诉只包含少量词语，这类矩阵通常包含大量 0，属于高维稀疏矩阵。",
      answer: true,
      explanation: "文本词袋矩阵通常维度高且大部分词在单条文本中不出现，因此是高维稀疏矩阵。",
      source: source(2, "判断题", 23),
      finalExam: true
    },
    {
      id: "final-tf-024",
      topic: "tree_ensemble",
      type: "true_false",
      difficulty: "easy",
      stem: "决策树越深，分支越细，说明模型越复杂，对训练数据拟合越好，因此一定能在测试集上取得更好的预测效果。",
      answer: false,
      explanation: "树越深越容易过拟合，测试集表现不一定更好。",
      source: source(2, "判断题", 24),
      finalExam: true
    },
    {
      id: "final-tf-025",
      topic: "clustering",
      type: "true_false",
      difficulty: "easy",
      stem: "高斯混合模型（GMM）是判别式模型。",
      answer: false,
      explanation: "GMM 是概率生成模型，用混合高斯分布描述数据生成过程。",
      source: source(2, "判断题", 25),
      finalExam: true
    },
    {
      id: "final-tf-026",
      topic: "tree_ensemble",
      type: "true_false",
      difficulty: "medium",
      stem: "信息增益对可取值数目较多的属性有偏好，而增益率对可取值数目较少的属性有偏好。",
      answer: true,
      explanation: "信息增益偏好多取值属性；增益率校正后相对更容易偏向取值较少的属性。",
      source: source(2, "判断题", 26),
      finalExam: true
    },
    {
      id: "final-tf-027",
      topic: "naive_bayes",
      type: "true_false",
      difficulty: "easy",
      stem: "在 12345 政府热线投诉文本分类中，分词后的数值矩阵行是投诉、列是词语，多数元素为 0，属于稀疏矩阵。",
      answer: true,
      explanation: "分词后的文本矩阵通常是样本×词项矩阵，大多数词项在单条投诉中不出现。",
      source: source(2, "判断题", 27),
      finalExam: true
    },
    {
      id: "final-tf-028",
      topic: "naive_bayes",
      type: "true_false",
      difficulty: "medium",
      stem: "在朴素贝叶斯分类器中，如果某个特征在训练集的某一类别下从未出现，则测试时该类别对应的后验概率一定会变为 0，无论其他特征如何取值。",
      answer: true,
      explanation: "在不做平滑时，某个条件概率为 0 会使朴素贝叶斯连乘项为 0；通常用拉普拉斯平滑修正。",
      source: source(2, "判断题", 28),
      finalExam: true
    },

    {
      id: "final-sc-001",
      topic: "linear_diagnostics",
      type: "single_choice",
      difficulty: "medium",
      stem: "下列关于线性回归模型诊断与优化的说法中，错误的一项是（ ）",
      options: [
        option("A", "残差图呈现明显的喇叭状，是模型存在异方差问题的典型特征"),
        option("B", "对因变量做对数变换，可改善模型的异方差问题与残差非正态问题"),
        option("C", "自变量的方差膨胀因子为 6.2，说明该变量存在严重的多重共线性，须从模型中剔除"),
        option("D", "Cook 距离用于识别样本中的强影响点，判断单个样本对模型拟合结果的影响程度")
      ],
      answer: "C",
      explanation: "VIF=6.2 说明可能有共线性风险，但通常未达到必须剔除变量的严重标准。",
      source: source(3, "单项选择题", 1),
      finalExam: true
    },
    {
      id: "final-sc-002",
      topic: "model_selection",
      type: "single_choice",
      difficulty: "easy",
      stem: "关于线性回归模型中的 F 检验和 t 检验，下列说法正确的是（ ）",
      options: [
        option("A", "F 检验用于检验单个自变量的显著性，t 检验用于检验所有自变量的整体显著性"),
        option("B", "F 检验和 t 检验的作用完全相同，可以互换使用"),
        option("C", "F 检验用于检验所有自变量的整体显著性，t 检验用于检验单个自变量的显著性"),
        option("D", "F 检验只有在 t 检验结果不显著时才有必要使用")
      ],
      answer: "C",
      explanation: "F 检验关注模型整体显著性，t 检验关注单个系数显著性。",
      source: source(3, "单项选择题", 2),
      finalExam: true
    },
    {
      id: "final-sc-003",
      topic: "linear_diagnostics",
      type: "single_choice",
      difficulty: "medium",
      stem: "关于线性回归模型的说法中，哪一项是错误的？",
      options: [
        option("A", "残差与预测值图若呈抛物线形状，通常说明模型遗漏重要自变量或应考虑非线性模型"),
        option("B", "残差 Q-Q 图两侧尾部明显偏离直线，说明残差与正态分布有差距，可通过对数变换改善"),
        option("C", "可通过 VIF 检验多重共线性，经验上 VIF 超过 10 说明存在严重共线性"),
        option("D", "Cook 距离是用来检验模型是否存在异方差现象的重要指标，越大说明异方差问题越严重")
      ],
      answer: "D",
      explanation: "Cook 距离识别强影响点，不是异方差诊断指标。",
      source: source(3, "单项选择题", 3),
      finalExam: true
    },
    {
      id: "final-sc-004",
      topic: "log_linear_house",
      type: "single_choice",
      difficulty: "medium",
      stem: "在北京市二手房房价的对数线性回归模型分析中，加入“城区×学区”交互项后，学区变量的主效应系数变为负值，以下对该结果的合理解释是（ ）",
      options: [
        option("A", "学区房对房价的正向影响完全消失，非学区房房价更高"),
        option("B", "学区房的溢价效应需结合城区来看，基准城区的学区房溢价不显著甚至存在小幅负向影响"),
        option("C", "模型出现多重共线性，结果完全不可信"),
        option("D", "数据存在异常值，需直接删除交互项重新建模")
      ],
      answer: "B",
      explanation: "有交互项时主效应是基准条件下的效应，整体解释必须结合交互项和城区水平。",
      source: source(3, "单项选择题", 4),
      finalExam: true
    },
    {
      id: "final-sc-005",
      topic: "linear_diagnostics",
      type: "single_choice",
      difficulty: "easy",
      stem: "在线性回归模型中，若存在完全多重共线性，以下哪种情况会发生？",
      options: [
        option("A", "回归系数估计值偏大"),
        option("B", "无法唯一估计出回归系数"),
        option("C", "判定系数 R² 变为 0"),
        option("D", "模型的预测精度显著提高")
      ],
      answer: "B",
      explanation: "完全共线性导致设计矩阵不满秩，系数无法唯一估计。",
      source: source(3, "单项选择题", 5),
      finalExam: true
    },
    {
      id: "final-sc-006",
      topic: "model_selection",
      type: "single_choice",
      difficulty: "medium",
      stem: "全模型 price ~ CATE + bedrooms + halls + area + floor + subway + school；简化模型 price ~ CATE + area + floor + school。关于模型选择与评估，下列说法不正确的是哪一项？",
      options: [
        option("A", "普通 R²会随变量增加而不降，因此不能仅依靠普通 R²越大越好作为剔除变量依据"),
        option("B", "调整后 R²引入样本量 n 和自变量个数 p 的惩罚机制，可比较全模型和简化模型"),
        option("C", "样本量极大时 log(n) 远大于 2，因此 BIC 对冗余变量的惩罚力度比 AIC 更大"),
        option("D", "通常情况下，BIC 选出的最终模型保留变量个数会多于 AIC")
      ],
      answer: "D",
      explanation: "BIC 对复杂度惩罚通常更强，往往选择更少变量。",
      source: source(3, "单项选择题", 6),
      finalExam: true
    },
    {
      id: "final-sc-007",
      topic: "model_selection",
      type: "single_choice",
      difficulty: "medium",
      stem: "关于线性回归模型，下列说法错误的是（ ）",
      options: [
        option("A", "F 检验用来检验所有变量中是否有变量对 Y 的影响是显著的"),
        option("B", "调整后的 R²可以用于不同模型之间的比较"),
        option("C", "一般认为 R²越大，模型拟合效果越好；R²大于 0.5 时说明模型有实际解释能力"),
        option("D", "有 k 个水平的离散型自变量，需要选择一个水平为基准组，其余水平构造 k-1 个哑变量")
      ],
      answer: "C",
      explanation: "R²大小没有通用的实际解释能力阈值，是否有解释力需结合业务和诊断。",
      source: source(4, "单项选择题", 7),
      finalExam: true
    },
    {
      id: "final-sc-008",
      topic: "log_linear_house",
      type: "single_choice",
      difficulty: "easy",
      stem: "以下关于对数线性回归模型 log(y)=β0+β1x1+...+ε 的说法，正确的是（ ）",
      options: [
        option("A", "若 x1 为连续变量且回归系数 β1=-0.03，则 x1 每增加一个单位，y 平均下降约 3%"),
        option("B", "对数变换可以完全消除异方差问题"),
        option("C", "对数线性模型要求 y 必须服从对数正态分布"),
        option("D", "对数线性模型的残差可以直接用原始模型的残差图来诊断")
      ],
      answer: "A",
      explanation: "log(y) 对 x 的系数可近似解释为 x 增加 1 单位时 y 变化 100β1%。",
      source: source(4, "单项选择题", 8),
      finalExam: true
    },
    {
      id: "final-sc-009",
      topic: "model_selection",
      type: "single_choice",
      difficulty: "medium",
      stem: "关于模型选择准则 AIC 和 BIC，下列说法正确的是（ ）",
      options: [
        option("A", "选择模型时，应选取 AIC 或 BIC 值最大的模型"),
        option("B", "AIC 和 BIC 的第一项通常是残差平方和（RSS）的单调函数，代表模型的拟合优度"),
        option("C", "当样本量 n≥8 时，AIC 对模型复杂度的惩罚力度比 BIC 更大"),
        option("D", "相比 AIC，BIC 选出来的模型通常包含更多的自变量")
      ],
      answer: "B",
      explanation: "AIC/BIC 越小越好；第一项反映拟合，第二项惩罚复杂度，BIC 惩罚通常更强。",
      source: source(4, "单项选择题", 9),
      finalExam: true
    },
    {
      id: "final-sc-010",
      topic: "linear_diagnostics",
      type: "single_choice",
      difficulty: "easy",
      stem: "在模型诊断时，下列结果哪个是我们希望看见的？",
      options: [
        option("A", "Q-Q 图散点明显偏离 y=x 参考线"),
        option("B", "残差以 0 为均值，无规律散乱分布"),
        option("C", "残差 vs 拟合值图从左向右残差波动不一致"),
        option("D", "Scale-Location 图红色趋势线不水平")
      ],
      answer: "B",
      explanation: "残差围绕 0 随机散布是较理想的诊断结果。",
      source: source(4, "单项选择题", 10),
      finalExam: true
    },
    {
      id: "final-sc-011",
      topic: "logistic_roc",
      type: "single_choice",
      difficulty: "medium",
      stem: "下列关于 ROC 曲线说法错误的是（ ）",
      options: [
        option("A", "ROC 的横纵轴分别是 FPR（Specificity）和 TPR（Sensitivity）"),
        option("B", "FPR=FP/(FP+TP)，TPR=TP/(TP+FN)"),
        option("C", "ROC 曲线与横轴所围成的面积是 AUC"),
        option("D", "AUC 值越大预测效果越好")
      ],
      answer: "B",
      explanation: "FPR 应为 FP/(FP+TN)，TPR 为 TP/(TP+FN)。",
      source: source(4, "单项选择题", 11),
      finalExam: true
    },
    {
      id: "final-sc-012",
      topic: "survival_ordinal_count",
      type: "single_choice",
      difficulty: "hard",
      stem: "在新产品在架时间案例中，分别使用 AFT 生存回归模型和 Cox 生存回归模型拟合。关于两个模型系数解读，不正确的一项是（ ）",
      options: [
        option("A", "AFT 模型直接对生存时间建模，survreg 中变量系数为负表示缩短预期在架时间"),
        option("B", "Cox 模型对风险函数建模，coxph 中变量系数为正表示增加下架风险"),
        option("C", "同一个因素在 AFT 模型中的估计系数为负，那么它在 Cox 模型中的估计系数通常也应该是负的"),
        option("D", "AFT 需要假设生存分布，Cox 半参数不用约束基准风险 h0(t) 分布形式")
      ],
      answer: "C",
      explanation: "AFT 解释生存时间，Cox 解释风险；缩短生存时间通常对应增加风险，符号方向不能简单相同。",
      source: source(4, "单项选择题", 12),
      finalExam: true
    },
    {
      id: "final-sc-013",
      topic: "survival_ordinal_count",
      type: "single_choice",
      difficulty: "medium",
      stem: "关于各类回归与方差说法正确的是（ ）",
      options: [
        option("A", "进球计数用标准泊松（无过离散）"),
        option("B", "ANOVA 显著则全部组别均值不等"),
        option("C", "定序回归用潜变量划分区间"),
        option("D", "LR 用最小二乘")
      ],
      answer: "C",
      explanation: "定序回归通常通过潜变量和阈值把连续潜在倾向划分为有序类别。",
      source: source(5, "单项选择题", 13),
      finalExam: true
    },
    {
      id: "final-sc-014",
      topic: "clustering",
      type: "single_choice",
      difficulty: "easy",
      stem: "在聚类建模前，通常需要对变量进行标准化。最主要原因是（ ）",
      options: [
        option("A", "标准化可以自动消除异常值"),
        option("B", "标准化可以防止取值范围大的变量在距离计算中占据过大影响"),
        option("C", "标准化可以让聚类问题变成分类问题"),
        option("D", "标准化后类别数 K 就不需要再选择")
      ],
      answer: "B",
      explanation: "基于距离的聚类会受变量尺度影响，标准化可避免大尺度变量主导距离。",
      source: source(5, "单项选择题", 14),
      finalExam: true
    },
    {
      id: "final-sc-015",
      topic: "clustering",
      type: "single_choice",
      difficulty: "easy",
      stem: "关于 K-Means 聚类，下列说法错误的是（ ）",
      options: [
        option("A", "需要预先指定聚类数量 K"),
        option("B", "对异常值比较敏感"),
        option("C", "属于层次聚类方法"),
        option("D", "可通过 WGSS 碎石图选择最优 K")
      ],
      answer: "C",
      explanation: "K-means 是划分式聚类，不是层次聚类。",
      source: source(5, "单项选择题", 15),
      finalExam: true
    },
    {
      id: "final-sc-016",
      topic: "clustering",
      type: "single_choice",
      difficulty: "medium",
      stem: "关于 K-means 聚类，下列说法错误的是哪一项？",
      options: [
        option("A", "需要先指定聚类个数 K"),
        option("B", "算法会反复执行“分配到最近中心点”和“更新中心点均值”"),
        option("C", "K-means 对离群点不敏感，并且特别适合 U 型、环状等非凸聚类"),
        option("D", "nstart=20 表示用 20 组不同随机初始质心运行，并选择 WGSS 最小的结果")
      ],
      answer: "C",
      explanation: "K-means 对离群点敏感，也不适合非凸形状簇。",
      source: source(5, "单项选择题", 16),
      finalExam: true
    },
    {
      id: "final-sc-017",
      topic: "clustering",
      type: "single_choice",
      difficulty: "easy",
      stem: "关于层次聚类与 K 均值聚类，下列说法正确的是（ ）",
      options: [
        option("A", "层次聚类必须在开始前指定类别数 K，且每个观测值初始随机分到 K 类中"),
        option("B", "K 均值聚类不需要事先确定类别数 K，并且通常用系统树图展示聚类路径"),
        option("C", "层次聚类可以从每个观测值自成一类开始逐步合并，结果常用系统树图表示；K 均值聚类通常需要先确定类别数 K"),
        option("D", "K 均值聚类对离群点不敏感，因此特别适合存在大量异常值的数据")
      ],
      answer: "C",
      explanation: "层次聚类可逐步合并并用树状图展示；K-means 通常要预先指定 K。",
      source: source(5, "单项选择题", 17),
      finalExam: true
    },
    {
      id: "final-sc-018",
      topic: "pca_fa",
      type: "multiple_choice",
      difficulty: "medium",
      stem: "关于主成分分析（PCA）与因子分析（FA），下列说法正确的是（ ）",
      options: [
        option("A", "PCA 寻找原始变量的线性组合，使得到的主成分方差尽可能大，并且不同主成分之间互不相关"),
        option("B", "PCA 中所有变量被等同对待，没有自变量与因变量之分，因此也属于无监督学习思路"),
        option("C", "FA 的目标之一是用少数不可观测的公共因子解释原始变量之间的相关性，因子载荷反映公共因子对变量的解释力"),
        option("D", "FA 中公共因子的个数必须等于原始变量个数，否则无法起到解释变量相关性的作用"),
        option("E", "PCA 与 FA 完全相同，二者都只是把变量压缩成更少的指标，不涉及任何模型或潜变量解释")
      ],
      answer: ["A", "B", "C"],
      explanation: "A、B、C 正确；D 错在因子数不必等于变量数，E 错在 PCA 与 FA 的模型含义不同。",
      source: source(5, "单项选择题", 18),
      finalExam: true
    },
    {
      id: "final-sc-019",
      topic: "pca_fa",
      type: "single_choice",
      difficulty: "medium",
      stem: "在因子分析中，为了让因子及载荷结构更简单、解释更清晰，常使用最大方差法（Varimax method）进行正交旋转。关于该旋转操作几何与代数特性的描述，以下正确的是？",
      options: [
        option("A", "旋转后，各原始变量的共同度会发生改变以适应新的因子"),
        option("B", "旋转后，样本点在因子空间中的相对位置和彼此间的几何距离会发生拉伸或缩放"),
        option("C", "旋转后，各个坐标轴之间的垂直关系会被打破，因子之间变为相关"),
        option("D", "旋转仅仅改变了参考坐标系的朝向，点距、夹角和共同度均维持原状")
      ],
      answer: "D",
      explanation: "正交旋转保持坐标轴正交、共同度和几何关系，只改变解释坐标系的朝向。",
      source: source(6, "单项选择题", 19),
      finalExam: true
    },
    {
      id: "final-sc-020",
      topic: "pca_fa",
      type: "single_choice",
      difficulty: "medium",
      stem: "主成分分析与因子分析是两种重要降维技术。关于这两种算法的核心区别与物理机制，以下表述不正确的是哪一项？",
      options: [
        option("A", "PCA 通过正交变换将相关原始变量转换为线性不相关的新变量"),
        option("B", "第一主成分提取原始数据中最大的方差"),
        option("C", "进行 PCA 或因子分析前通常应对原始连续数据标准化，以消除量纲和数量级差异"),
        option("D", "PCA 与因子分析在数学模型上完全等价，都假设观测变量由公共因子和特殊误差项构成")
      ],
      answer: "D",
      explanation: "公共因子加特殊误差项是因子分析模型思想，PCA 不作这种潜变量生成假设。",
      source: source(6, "单项选择题", 20),
      finalExam: true
    },
    {
      id: "final-sc-021",
      topic: "clustering",
      type: "single_choice",
      difficulty: "hard",
      stem: "某保险公司先对 14 项行驶指标降维，再根据降维结果将驾驶员分风险等级。下列关于该分析流程的表述，错误的是（ ）",
      options: [
        option("A", "可先采用因子分析降维为公共因子，提取因子得分后再进行 K-means 聚类"),
        option("B", "聚类分析前必须对原始指标或因子得分进行标准化，否则量纲较大的变量会主导聚类结果"),
        option("C", "确定 K-means 聚类数时，可通过 WGSS 碎石图，选择曲线下降最平缓处的 K 值作最优聚类数"),
        option("D", "层次聚类可用 Ward 法计算类间距离，通过最小化类内离差平方和增量来合并类")
      ],
      answer: "C",
      explanation: "WGSS 碎石图通常选取下降由陡转缓的肘部，而不是简单选择最平缓处。",
      source: source(6, "单项选择题", 21),
      finalExam: true
    },
    {
      id: "final-sc-022",
      topic: "pca_fa",
      type: "single_choice",
      difficulty: "medium",
      stem: "在进行主成分分析（PCA）之前，通常需要对原始数据进行标准化。如果跳过标准化步骤直接对原始数据进行 PCA 计算，最可能导致以下哪种结果？",
      options: [
        option("A", "算法无法求解协方差矩阵的特征值与特征向量"),
        option("B", "绝对数值（方差）较大的特征变量将主导主成分的方向，掩盖其他特征的有效信息"),
        option("C", "主成分之间将不再满足正交性（相互独立）的假设"),
        option("D", "算法提取出的第一主成分将解释 100% 的数据变异性")
      ],
      answer: "B",
      explanation: "不标准化时，方差较大的变量会主导 PCA 方向。",
      source: source(7, "单项选择题", 22),
      finalExam: true
    },
    {
      id: "final-sc-023",
      topic: "pca_fa",
      type: "single_choice",
      difficulty: "easy",
      stem: "某 APP 收集了用户浏览时长、收藏数、下单金额、搜索频率、退款次数、客服咨询次数等变量，并怀疑背后存在“购买意愿”“售后风险”等潜在维度。此时更适合优先考虑：",
      options: [
        option("A", "分类分析"),
        option("B", "因子分析"),
        option("C", "单纯求每个变量平均数"),
        option("D", "删除所有相关性高的变量")
      ],
      answer: "B",
      explanation: "题干强调不可直接观测的潜在维度，适合用因子分析解释变量间相关性。",
      source: source(7, "单项选择题", 23),
      finalExam: true
    },
    {
      id: "final-sc-024",
      topic: "clustering",
      type: "single_choice",
      difficulty: "easy",
      stem: "某研究者对 100 名消费者做聚类分析，变量包括年消费金额、年购物次数、是否购买会员。结果发现聚类几乎完全由“消费金额”决定。最可能的原因是：",
      options: [
        option("A", "聚类方法错误"),
        option("B", "存在异常值"),
        option("C", "未进行标准化处理"),
        option("D", "样本量太小")
      ],
      answer: "C",
      explanation: "消费金额量纲和数值范围较大，未标准化时会主导距离计算。",
      source: source(7, "单项选择题", 24),
      finalExam: true
    },
    {
      id: "final-sc-025",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "easy",
      stem: "下列属于生成式模型的为（ ）",
      options: [
        option("A", "决策树"),
        option("B", "朴素贝叶斯分类器"),
        option("C", "SVM"),
        option("D", "逻辑回归")
      ],
      answer: "B",
      explanation: "朴素贝叶斯建模类别和特征的联合/条件概率结构，属于生成式模型。",
      source: source(7, "单项选择题", 25),
      finalExam: true
    },
    {
      id: "final-sc-026",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "medium",
      stem: "关于分类器模型特点说法正确的是（ ）",
      options: [
        option("A", "朴素贝叶斯属于判别式，直接建 P(c|x)"),
        option("B", "决策树属于生成式，建联合 P(x,c)"),
        option("C", "朴素贝叶斯条件独立假设现实难成立，但文本分类表现优良"),
        option("D", "随机森林属于 Boosting，串行迭代修正残差")
      ],
      answer: "C",
      explanation: "朴素贝叶斯条件独立假设强，但在高维稀疏文本分类中常表现良好。",
      source: source(8, "单项选择题", 26),
      finalExam: true
    },
    {
      id: "final-sc-027",
      topic: "tree_ensemble",
      type: "single_choice",
      difficulty: "easy",
      stem: "ID3 按信息增益选特征，数据：色泽 0.109、根蒂 0.143、敲声 0.141、纹理 0.381，最优划分？",
      options: [
        option("A", "色泽"),
        option("B", "根蒂"),
        option("C", "敲声"),
        option("D", "纹理")
      ],
      answer: "D",
      explanation: "ID3 选择信息增益最大的特征，0.381 最大，因此选纹理。",
      source: source(8, "单项选择题", 27),
      finalExam: true
    },
    {
      id: "final-sc-028",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "easy",
      stem: "说法错误（ ）",
      options: [
        option("A", "朴素贝叶斯生成式"),
        option("B", "LR 判别式"),
        option("C", "高斯核 SVM 生成式"),
        option("D", "HMM 生成式")
      ],
      answer: "C",
      explanation: "SVM 是判别式方法，不是生成式模型。",
      source: source(8, "单项选择题", 28),
      finalExam: true
    },
    {
      id: "final-sc-029",
      topic: "tree_ensemble",
      type: "single_choice",
      difficulty: "medium",
      stem: "随机森林描述不正确（ ）",
      options: [
        option("A", "Bootstrap 有放回采样"),
        option("B", "样本 + 特征双重随机"),
        option("C", "OOB 样本无使用价值直接丢弃"),
        option("D", "OOB 可评估特征重要性")
      ],
      answer: "C",
      explanation: "OOB 样本可用于袋外误差估计和特征重要性评估，不是直接丢弃。",
      source: source(8, "单项选择题", 29),
      finalExam: true
    },
    {
      id: "final-sc-030",
      topic: "tree_ensemble",
      type: "single_choice",
      difficulty: "easy",
      stem: "预剪枝后剪枝正确（ ）",
      options: [
        option("A", "预剪枝生成全树再剪"),
        option("B", "后剪枝训练开销大，泛化普遍优于预剪枝"),
        option("C", "预剪枝易过拟合"),
        option("D", "后剪枝彻底消除过拟合")
      ],
      answer: "B",
      explanation: "后剪枝先生成树再修剪，开销较大，但通常泛化优于预剪枝。",
      source: source(8, "单项选择题", 30),
      finalExam: true
    },
    {
      id: "final-sc-031",
      topic: "tree_ensemble",
      type: "single_choice",
      difficulty: "easy",
      stem: "随机森林抗过拟合核心原因（ ）",
      options: [
        option("A", "梯度下降全局寻优"),
        option("B", "样本 + 特征双重随机集成投票"),
        option("C", "逐棵拟合残差"),
        option("D", "树深度固定为 1")
      ],
      answer: "B",
      explanation: "随机森林通过 bootstrap 样本随机和特征随机降低树间相关性，再集成投票降低方差。",
      source: source(8, "单项选择题", 31),
      finalExam: true
    },
    {
      id: "final-sc-032",
      topic: "tree_ensemble",
      type: "single_choice",
      difficulty: "medium",
      stem: "Bagging 与 Boosting 错误描述（ ）",
      options: [
        option("A", "Bagging 并行降方差"),
        option("B", "Boosting 串行降偏差"),
        option("C", "OOB 约 36.8%"),
        option("D", "随机森林仅样本随机、特征全取")
      ],
      answer: "D",
      explanation: "随机森林不仅做样本随机，还做特征随机。",
      source: source(8, "单项选择题", 32),
      finalExam: true
    },
    {
      id: "final-sc-033",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "medium",
      stem: "12345 热线朴素贝叶斯说法正确（ ）",
      options: [
        option("A", "效果好因为特征满足独立假设"),
        option("B", "原始词频直接入 naiveBayes 会被拟合成正态、效果极差"),
        option("C", "拉普拉斯平滑一定提升准确率"),
        option("D", "词频二值化目的降维度")
      ],
      answer: "B",
      explanation: "若把原始词频直接当连续变量输入某些 naiveBayes 实现，可能按正态连续变量处理，文本效果会很差。",
      source: source(9, "单项选择题", 33),
      finalExam: true
    },
    {
      id: "final-sc-034",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "easy",
      stem: "市长热线文本的朴素贝叶斯分类，正确的是（ ）",
      options: [
        option("A", "独立假设不成立因此不能用文本分类"),
        option("B", "零概率可用拉普拉斯修正"),
        option("C", "朴素贝叶斯判别式模型"),
        option("D", "词频直接连续输入无负面影响")
      ],
      answer: "B",
      explanation: "拉普拉斯修正通过加伪计数处理零概率问题。",
      source: source(9, "单项选择题", 34),
      finalExam: true
    },
    {
      id: "final-sc-035",
      topic: "logistic_roc",
      type: "single_choice",
      difficulty: "easy",
      stem: "关于 ROC 曲线的绘制正确（ ）",
      options: [
        option("A", "固定阈值描单点"),
        option("B", "类别概率做阈值遍历画曲线"),
        option("C", "朴素贝叶斯不能输出概率"),
        option("D", "多分类无法画 ROC")
      ],
      answer: "B",
      explanation: "ROC 通过遍历分类阈值，得到一系列 TPR/FPR 点并连成曲线。",
      source: source(9, "单项选择题", 35),
      finalExam: true
    },
    {
      id: "final-sc-036",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "medium",
      stem: "ODE 独依赖估计定义（ ）",
      options: [
        option("A", "全部特征两两依赖"),
        option("B", "每个特征除类别至多依赖一个特征"),
        option("C", "忽略离散属性"),
        option("D", "全特征互相依赖")
      ],
      answer: "B",
      explanation: "ODE 允许每个特征在类别之外至多依赖一个其他特征。",
      source: source(9, "单项选择题", 36),
      finalExam: true
    },
    {
      id: "final-sc-037",
      topic: "naive_bayes",
      type: "single_choice",
      difficulty: "medium",
      stem: "TAN 树增强朴素贝叶斯正确（ ）",
      options: [
        option("A", "全特征依赖同一超父"),
        option("B", "最大带权生成树构造依赖"),
        option("C", "复杂度低于朴素贝叶斯"),
        option("D", "无特征依赖")
      ],
      answer: "B",
      explanation: "TAN 通过最大带权生成树在特征之间构造一棵依赖树。",
      source: source(9, "单项选择题", 37),
      finalExam: true
    },

    {
      id: "final-fill-001",
      topic: "model_selection",
      type: "fill",
      difficulty: "easy",
      stem: "在线性回归的显著性检验中，______ 检验用于检验单个自变量对因变量的影响是否显著，______ 检验用于检验所有自变量整体对因变量的影响是否显著。",
      answer: fillAnswer("t 检验；F 检验", ["t", "F"]),
      explanation: "t 检验对应单个系数，F 检验对应整体模型显著性。",
      source: source(10, "填空题", 1),
      finalExam: true
    },
    {
      id: "final-fill-002",
      topic: "model_selection",
      type: "fill",
      difficulty: "medium",
      stem: "AIC 和 BIC 同时考虑拟合优度和复杂度惩罚。AIC 准则的惩罚项系数是______，BIC 准则的惩罚项系数是______；当样本量 n≥8 时，由于______，BIC 比 AIC 的惩罚力度更大，因此 BIC 选出的变量个数往往______ AIC。",
      answer: fillAnswer("2；ln(n)；ln(n)≥2；少于", ["2", "ln", "少于"]),
      explanation: "AIC 的复杂度惩罚为 2p，BIC 为 p ln(n)；n≥8 时 ln(n)>2，BIC 惩罚更强，通常选更少变量。",
      source: source(10, "填空题", 2),
      finalExam: true
    },
    {
      id: "final-fill-003",
      topic: "log_linear_house",
      type: "fill",
      difficulty: "easy",
      stem: "在模型 ln(y)=β0+β1ln(x) 中，系数 β1 表示 x 每变动 1%，y 平均变动______。",
      answer: fillAnswer("β1%", ["β1", "%"]),
      explanation: "双对数模型中 β1 是弹性，表示 x 变化 1% 时 y 约变化 β1%。",
      source: source(10, "填空题", 3),
      finalExam: true
    },
    {
      id: "final-fill-004",
      topic: "linear_diagnostics",
      type: "fill",
      difficulty: "medium",
      stem: "在线性回归模型中，方差膨胀因子 VIF 用于检验______问题，通常 VIF 大于______时表示存在严重共线性；二手房案例中最大 VIF 为 5，说明该问题______。若存在多重共线性，可以使用______方法解决。",
      answer: fillAnswer("多重共线性；10；不严重；岭回归", ["多重共线性", "10", "不严重", "岭回归"]),
      explanation: "VIF 用于诊断多重共线性，经验阈值常取 10；VIF=5 通常不算严重，可用岭回归缓解。",
      source: source(10, "填空题", 4),
      finalExam: true
    },
    {
      id: "final-fill-005",
      topic: "linear_diagnostics",
      type: "fill",
      difficulty: "medium",
      stem: "请写出经典线性回归模型 Y=Xβ+ε 下，对于随机误差项 ε 的假设：______。",
      answer: fillAnswer("E(ε)=0，Var(ε)=σ²I，Cov(εi,εj)=0；推断时常进一步假设 ε 服从正态分布", ["E(ε)=0", "Var", "Cov", "正态"]),
      explanation: "经典误差项假设包括零均值、同方差、无相关，常配合正态性用于推断。",
      source: source(10, "填空题", 5),
      finalExam: true
    },
    {
      id: "final-fill-006",
      topic: "linear_diagnostics",
      type: "fill",
      difficulty: "easy",
      stem: "若残差图呈明显“喇叭状”，这通常意味着模型违反了随机误差项的______假设；若要修正这一问题，可采用______。",
      answer: fillAnswer("同方差；对因变量取对数变换", ["同方差", "对数"]),
      explanation: "喇叭状说明方差随拟合值变化，违反同方差；对正值因变量可用对数变换改善。",
      source: source(10, "填空题", 6),
      finalExam: true
    },
    {
      id: "final-fill-007",
      topic: "logistic_roc",
      type: "open",
      difficulty: "medium",
      stem: "Logistic Function 和 Logit Function 的区别。",
      answer: fillAnswer("Logistic 是把输入映射到概率；Logit 是把概率映射到输入/对数几率，二者互为反函数。", ["Logistic", "概率", "Logit", "反函数"]),
      explanation: "PDF 页面给出的答案说明：Logistic 是输入到概率的映射，Logit 是概率到输入的映射，二者互为反函数。",
      source: source(10, "填空题", 7),
      finalExam: true
    },
    {
      id: "final-fill-008",
      topic: "survival_ordinal_count",
      type: "open",
      difficulty: "hard",
      stem: "生存无法观测确切失效时间叫什么；风险建模用什么；Cox 与 AFT 系数符号；双因素无重复 SST 分解、交互显著含义、Cox 基准风险与泊松回归要点。",
      answer: fillAnswer("删失；Cox 风险建模；Cox 与 AFT 系数符号相反；SST=SSA+SSB+SSAB+SSE；交互显著表示一个因素的作用依赖另一因素水平；h0(t) 是所有自变量 X=0 时瞬时风险；泊松用于计数数据、log 连接，过离散换负二项回归。", ["删失", "Cox", "相反", "SSA", "SSB", "SSAB", "h0", "计数", "负二项"]),
      explanation: "该题 PDF 页面已给出答案和解析，核心是区分 Cox 风险解释、AFT 生存时长解释，以及 ANOVA 与泊松回归的基本结构。",
      source: source(10, "填空题", 8),
      finalExam: true
    },
    {
      id: "final-fill-009",
      topic: "clustering",
      type: "fill",
      difficulty: "easy",
      stem: "在 K-means 聚类算法中，算法的目标是最小化各样本点到所属聚类中心的________。",
      answer: fillAnswer("欧氏距离平方和", ["距离", "平方和"]),
      explanation: "K-means 目标函数是最小化簇内样本到质心的距离平方和。",
      source: source(10, "填空题", 9),
      finalExam: true
    },
    {
      id: "final-fill-010",
      topic: "clustering",
      type: "fill",
      difficulty: "easy",
      stem: "聚类建模中，若不同变量量纲或变化范围差异较大，通常需要先进行__________；同时，许多聚类方法对__________较为敏感，可能导致聚类方案被扭曲。",
      answer: fillAnswer("标准化；异常值", ["标准化", "异常值"]),
      explanation: "标准化处理尺度差异；异常值会显著影响基于距离或均值的聚类。",
      source: source(10, "填空题", 10),
      finalExam: true
    },
    {
      id: "final-fill-011",
      topic: "pca_fa",
      type: "fill",
      difficulty: "medium",
      stem: "在因子分析中，通过______操作可以使每个原始变量尽可能只在一个公共因子上有较高载荷；而主成分分析不能进行该操作，其根本原因是主成分是原始变量的______线性组合，结果具有唯一性。",
      answer: fillAnswer("因子旋转；正交", ["因子旋转", "正交"]),
      explanation: "因子旋转提升解释性；PCA 主成分是按方差最大化得到的正交线性组合，结果具有唯一性。",
      source: source(11, "填空题", 11),
      finalExam: true
    },
    {
      id: "final-fill-012",
      topic: "clustering",
      type: "fill",
      difficulty: "medium",
      stem: "K-means 聚类算法试图最小化__________（英文缩写或全称），其定义式为 ΣΣ||x−μk||²。为了选择最优聚类数 K，常采用__________图，寻找曲线的__________作为合适的 K 值。",
      answer: fillAnswer("WGSS 或组内平方和；碎石图；肘部", ["WGSS", "组内平方和", "碎石", "肘"]),
      explanation: "K-means 最小化组内平方和；选 K 常看 WGSS 碎石图的肘部。",
      source: source(11, "填空题", 12),
      finalExam: true
    },
    {
      id: "final-fill-013",
      topic: "pca_fa",
      type: "fill",
      difficulty: "medium",
      stem: "在因子分析正交模型 Y−μ=LF+e 中，每个原始变量 Yj 的方差可分解为公共因子贡献的方差和特殊因子方差。公共因子贡献的方差称为__________；正交旋转后该部分的值__________发生改变。",
      answer: fillAnswer("共同度；不会", ["共同度", "不会"]),
      explanation: "共同度是载荷平方和；正交旋转保持每个变量共同度不变。",
      source: source(11, "填空题", 13),
      finalExam: true
    },
    {
      id: "final-fill-014",
      topic: "tree_ensemble",
      type: "fill",
      difficulty: "medium",
      stem: "CART 分类树最小化__________。ID3：__________；C4.5：__________；CART：__________。",
      answer: fillAnswer("基尼指数；信息增益；增益率；基尼指数", ["基尼", "信息增益", "增益率"]),
      explanation: "ID3 用信息增益，C4.5 用增益率，CART 分类树常用基尼指数。",
      source: source(11, "填空题", 14),
      finalExam: true
    },
    {
      id: "final-fill-015",
      topic: "tree_ensemble",
      type: "open",
      difficulty: "hard",
      stem: "Bootstrap 极限不采样占比、XGB 正则项、Bagging/Boosting、拉普拉斯修正、Bootstrap 抽样、剪枝与召回率的概念填空。",
      answer: fillAnswer("Bootstrap 极限不采样占比为 36.8%；XGB 正则 Ω(f)=γT+1/2λ||w||²，T 为叶子节点总数、w 为叶子权重向量；Bagging 基学习器并行，Boosting 串行；零概率用拉普拉斯修正；Bagging 采用自助 Bootstrap 抽样；树全生成后自底向上剪枝是后剪枝；召回率是正例预测正确占比。", ["36.8", "γT", "λ", "并行", "串行", "拉普拉斯", "Bootstrap", "后剪枝", "召回率"]),
      explanation: "该题 PDF 页面给出了解析：Bagging 各树独立并行，Boosting 依赖前一轮结果串行；拉普拉斯引入人为偏差但解决零概率。",
      source: source(11, "填空题", 15),
      finalExam: true
    },
    {
      id: "final-fill-016",
      topic: "tree_ensemble",
      type: "fill",
      difficulty: "medium",
      stem: "Ent(D)=0.971，D1(6): Ent=0.650，D2(4): Ent=0.811，Gain=__________。",
      answer: fillAnswer("0.2566（约 0.257）", ["0.2566"]),
      explanation: "Gain=0.971-(6/10)×0.650-(4/10)×0.811=0.2566。",
      source: source(11, "填空题", 16),
      finalExam: true
    },
    {
      id: "final-open-001",
      topic: "tree_ensemble",
      type: "open",
      difficulty: "hard",
      stem: "某市 12345 政府热线要基于工单结构化属性预测处理时长。团队比较基于决策树的模型（如 XGBoost、LightGBM 等集成树）和神经网络。请从计算资源与训练速度、对异常值的鲁棒性、向非技术领导汇报时的沟通成本三个维度对比，并给出首选推荐及理由。",
      answer: fillAnswer("推荐基于决策树的模型。树模型训练速度较快、计算资源要求较低，对结构化表格数据和异常值更鲁棒，可输出特征重要性，可解释性强；神经网络训练较慢、计算成本高，对异常值敏感且沟通成本较高，更适合图像、文本等非结构化数据。", ["决策树", "训练速度", "异常值", "可解释性", "推荐"]),
      explanation: "PDF 给出的答案推荐决策树模型，理由是该场景是结构化工单数据，树模型在训练成本、抗异常值干扰和可解释性方面更适合。",
      source: source(12, "开放题", 1),
      finalExam: true
    }
  ];

  window.QUESTION_BANK.push(...questions);
})();
