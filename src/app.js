(function () {
  const storageKey = "ds-final-review-state-v1";

  const app = document.getElementById("app");
  if (new URLSearchParams(window.location.search).has("reset")) {
    localStorage.removeItem(storageKey);
    try {
      window.history.replaceState({}, "", window.location.href.split("?")[0]);
    } catch {
      // file:// pages may restrict history updates in some browsers.
    }
  }
  const state = loadState();
  const topics = window.TOPICS || [];
  const questions = window.QUESTION_BANK || [];
  const questionNumbers = new Map(questions.map((question, index) => [question.id, index + 1]));

  const viewState = {
    tab: "home",
    topic: "all",
    questionIndex: 0,
    practiceStage: "topics",
    lastResult: null,
    examAnswers: {},
    examResult: null
  };

  const routeTabs = new Set(["home", "practice", "mistakes", "favorites", "exam", "history", "sources"]);
  let routeStack = [];

  function applyRouteFromLocation() {
    const parts = decodeURIComponent(window.location.hash.replace(/^#/, "")).split("/").filter(Boolean);
    const tab = routeTabs.has(parts[0]) ? parts[0] : "home";
    viewState.tab = tab;
    viewState.questionIndex = 0;
    viewState.lastResult = null;
    viewState.examResult = null;
    if (tab === "practice") {
      const topic = parts[1] && (parts[1] === "all" || topics.some((item) => item.id === parts[1])) ? parts[1] : "all";
      viewState.topic = topic;
      viewState.practiceStage = parts[1] ? "questions" : "topics";
    } else {
      viewState.topic = "all";
      viewState.practiceStage = "topics";
    }
  }

  function currentRouteHash() {
    if (viewState.tab === "practice" && viewState.practiceStage === "questions") {
      return `#practice/${encodeURIComponent(viewState.topic)}`;
    }
    return `#${viewState.tab}`;
  }

  function writeRoute(replace = false) {
    const hash = currentRouteHash();
    if (window.location.hash === hash) return;
    try {
      window.history[replace ? "replaceState" : "pushState"]({}, "", hash);
      if (replace) {
        if (routeStack.length) routeStack[routeStack.length - 1] = hash;
        else routeStack.push(hash);
      } else {
        routeStack.push(hash);
      }
    } catch {
      window.location.hash = hash;
    }
  }

  function syncRouteStackFromLocation() {
    const hash = window.location.hash || currentRouteHash();
    const index = routeStack.lastIndexOf(hash);
    if (index >= 0) {
      routeStack = routeStack.slice(0, index + 1);
    } else {
      routeStack = [hash];
    }
  }

  function parentRoute() {
    if (viewState.tab === "practice" && viewState.practiceStage === "questions") {
      return { tab: "practice", topic: "all", practiceStage: "topics" };
    }
    if (viewState.tab !== "home") {
      return { tab: "home", topic: "all", practiceStage: "topics" };
    }
    return null;
  }

  function applyRoute(route) {
    viewState.tab = route.tab;
    viewState.topic = route.topic || "all";
    viewState.practiceStage = route.practiceStage || "topics";
    viewState.questionIndex = 0;
    viewState.lastResult = null;
    viewState.examResult = null;
  }

  function goBack() {
    if (routeStack.length > 1) {
      window.history.back();
      return;
    }
    const route = parentRoute();
    if (!route) return;
    applyRoute(route);
    writeRoute(true);
    render();
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey));
      return stripSiteStats(parsed || blankState());
    } catch {
      return blankState();
    }
  }

  function stripSiteStats(nextState) {
    Object.values(nextState.stats || {}).forEach((item) => {
      delete item.siteAttempts;
      delete item.siteCorrect;
    });
    return nextState;
  }

  function blankState() {
    return {
      favorites: [],
      mistakes: [],
      stats: {},
      sessions: []
    };
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function sourceLabel(question) {
    const source = question.source || {};
    const file = window.SOURCE_FILES[source.sourceId] || {};
    return `${file.originalFile || source.sourceId} · p.${source.page || "?"} · ${source.section || ""} ${source.question || ""}`;
  }

  function topicName(id) {
    return (topics.find((topic) => topic.id === id) || {}).name || id;
  }

  function questionsForCurrentView() {
    let list = questions.slice();
    if (viewState.tab === "mistakes") {
      list = list.filter((question) => state.mistakes.includes(question.id));
    } else if (viewState.tab === "favorites") {
      list = list.filter((question) => state.favorites.includes(question.id));
    }
    if (viewState.topic !== "all") {
      list = list.filter((question) => question.topic === viewState.topic);
    }
    return list;
  }

  function render() {
    app.innerHTML = `
      <div class="app-shell-v2 view-${viewState.tab}">
        <main class="main-v2">
          ${viewState.tab === "home" ? "" : renderPageBar()}
          ${renderMainPanel()}
        </main>
      </div>
    `;

    app.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        viewState.tab = button.dataset.tab;
        viewState.questionIndex = 0;
        viewState.lastResult = null;
        viewState.examResult = null;
        viewState.practiceStage = viewState.tab === "practice" ? "topics" : "questions";
        if (viewState.tab !== "practice") viewState.topic = "all";
        writeRoute();
        render();
      });
    });

    app.querySelectorAll("[data-topic]").forEach((button) => {
      button.addEventListener("click", () => {
        viewState.topic = button.dataset.topic;
        viewState.questionIndex = 0;
        viewState.lastResult = null;
        viewState.practiceStage = "questions";
        writeRoute();
        render();
      });
    });

    app.querySelectorAll("[data-go-back]").forEach((button) => {
      button.addEventListener("click", goBack);
    });

    const backTopics = app.querySelector("[data-back-topics]");
    if (backTopics) {
      backTopics.addEventListener("click", () => {
        goBack();
      });
    }

    bindPracticeEvents();
    bindExamEvents();
  }

  function tabButton(tab, label) {
    return `<button class="nav-button ${viewState.tab === tab ? "active" : ""}" data-tab="${tab}">${label}</button>`;
  }

  function renderPageBar() {
    return `
      <header class="pagebar-v2">
        <button class="back-v2" data-go-back aria-label="返回上一级">返回</button>
        <h2>${currentTitle()}</h2>
      </header>
    `;
  }

  function topicButton(id, label, count) {
    return `<button class="topic-button ${viewState.topic === id ? "active" : ""}" data-topic="${id}">
      <span>${label}</span><strong>${count}</strong>
    </button>`;
  }

  function renderHeader() {
    const totalAttempts = Object.values(state.stats).reduce((sum, item) => sum + (item.personalAttempts || 0), 0);
    const totalCorrect = Object.values(state.stats).reduce((sum, item) => sum + (item.personalCorrect || 0), 0);
    const rate = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    return `
      <header class="topbar">
        <div>
          <h2>${currentTitle()}</h2>
          ${currentSubtitle() ? `<p>${currentSubtitle()}</p>` : ""}
        </div>
        <div class="metrics">
          <div><span>${questions.length}</span><label>题目</label></div>
          <div><span>${state.mistakes.length}</span><label>错题</label></div>
          <div><span>${state.favorites.length}</span><label>收藏</label></div>
          <div><span>${rate}%</span><label>正确率</label></div>
        </div>
      </header>
    `;
  }

  function currentTitle() {
    if (viewState.tab === "practice") {
      return viewState.practiceStage === "topics" ? "选择知识点" : topicName(viewState.topic);
    }
    const map = {
      home: "Final Review",
      mistakes: "错题本",
      favorites: "收藏夹",
      exam: "预测卷",
      history: "训练记录",
      sources: "PDF 来源"
    };
    return map[viewState.tab];
  }

  function currentSubtitle() {
    return "";
  }

  function renderMainPanel() {
    if (viewState.tab === "home") return renderHome();
    if (viewState.tab === "practice" && viewState.practiceStage === "topics") return renderTopicSelection();
    if (viewState.tab === "exam") return renderExam();
    if (viewState.tab === "history") return renderHistory();
    if (viewState.tab === "sources") return renderSources();
    return renderPracticePanel();
  }

  function renderHome() {
    const totalAttempts = Object.values(state.stats).reduce((sum, item) => sum + (item.personalAttempts || 0), 0);
    const totalCorrect = Object.values(state.stats).reduce((sum, item) => sum + (item.personalCorrect || 0), 0);
    const personalRate = totalAttempts ? `${Math.round((totalCorrect / totalAttempts) * 100)}%` : "0%";
    return `
      <section class="home-panel">
        <div class="hero-copy">
          <h2>Final Review</h2>
        </div>
        <div class="home-stats">
          <div><strong>${questions.length}</strong><span>总题数</span></div>
          <div><strong>${state.mistakes.length}</strong><span>错题</span></div>
          <div><strong>${state.favorites.length}</strong><span>收藏</span></div>
          <div><strong>${personalRate}</strong><span>本人正确率</span></div>
        </div>
      </section>
      <section class="quick-routes">
        ${homeRoute("practice", "开始练习")}
        ${homeRoute("mistakes", "错题本")}
        ${homeRoute("favorites", "收藏夹")}
        ${homeRoute("exam", "预测卷")}
        ${homeRoute("history", "训练记录")}
        ${homeRoute("sources", "PDF 来源")}
      </section>
    `;
  }

  function homeRoute(tab, title) {
    return `<button class="route-card" data-tab="${tab}">
      <strong>${title}</strong>
    </button>`;
  }

  function renderTopicSelection() {
    const topicCards = [
      { id: "all", name: "全部知识点", group: "总览", count: questions.length },
      ...topics.map((topic) => ({
        ...topic,
        count: questions.filter((question) => question.topic === topic.id).length
      }))
    ];
    return `
      <section class="topic-select">
        <div class="section-lead">
          <h3>选择知识点</h3>
        </div>
        <div class="topic-grid">
          ${topicCards
            .map((topic) => `<button class="topic-card ${viewState.topic === topic.id ? "active" : ""}" data-topic="${topic.id}">
              <span>${topic.group || "知识点"}</span>
              <strong>${topic.name}</strong>
              <em>${topic.count} 题</em>
            </button>`)
            .join("")}
        </div>
      </section>
    `;
  }

  function renderPracticePanel() {
    const list = questionsForCurrentView();
    if (!list.length) {
      return `<section class="empty-state">当前条件下没有题目。</section>`;
    }

    viewState.questionIndex = Math.max(0, Math.min(viewState.questionIndex, list.length - 1));
    const question = list[viewState.questionIndex];
    const stats = state.stats[question.id] || {};
    const personalAttempts = stats.personalAttempts || 0;
    const personalCorrect = stats.personalCorrect || 0;

    return `
      ${viewState.tab === "practice" ? `<div class="practice-toolbar">
        <button data-back-topics>切换知识点</button>
        <span>${topicName(viewState.topic)} · ${list.length} 题</span>
      </div>` : ""}
      <section class="practice-layout">
        <div class="question-map" aria-label="题号导航">
          ${list
            .map((item, index) => `<button class="${index === viewState.questionIndex ? "active" : ""}" data-jump="${index}">
              <span>${questionNumber(item)}</span>
            </button>`)
            .join("")}
        </div>
        <article class="question-panel">
          <div class="question-meta">
            <span>第 ${questionNumber(question)} 题</span>
            <span>${topicName(question.topic)}</span>
            <span>${typeLabel(question.type)}</span>
            <span class="difficulty-pill ${difficultyClass(question.difficulty)}">${difficultyLabel(question.difficulty)}</span>
          </div>
          <h3>${escapeHtml(question.stem)}</h3>
          ${renderInput(question, "practice")}
          <div class="actions">
            <button class="primary" data-submit-practice="${question.id}">提交</button>
            <button data-prev-question>上一题</button>
            <button data-next-question>下一题</button>
            <button data-toggle-favorite="${question.id}">${state.favorites.includes(question.id) ? "取消收藏" : "收藏"}</button>
          </div>
          ${renderLastResult(question)}
          <div class="stats-row">
            <div><span>${personalAttempts}</span><label>本人次数</label></div>
            <div><span>${rate(personalCorrect, personalAttempts)}</span><label>本人正确率</label></div>
          </div>
          <footer class="source-line">${sourceLabel(question)}</footer>
        </article>
      </section>
    `;
  }

  function typeLabel(type) {
    return {
      true_false: "判断",
      single_choice: "单选",
      multiple_choice: "多选",
      fill: "填空",
      open: "开放"
    }[type];
  }

  function questionNumber(question) {
    return questionNumbers.get(question.id) || questions.indexOf(question) + 1;
  }

  function difficultyLabel(difficulty) {
    return {
      easy: "简单",
      medium: "中等",
      hard: "困难"
    }[difficulty] || "中等";
  }

  function difficultyClass(difficulty) {
    return {
      easy: "difficulty-easy",
      medium: "difficulty-medium",
      hard: "difficulty-hard"
    }[difficulty] || "difficulty-medium";
  }

  function renderInput(question, scope) {
    const name = `${scope}-${question.id}`;
    if (question.type === "true_false") {
      return `
        <div class="answer-grid">
          <label><input type="radio" name="${name}" value="true" /> 正确</label>
          <label><input type="radio" name="${name}" value="false" /> 错误</label>
        </div>
      `;
    }
    if (question.type === "single_choice") {
      if (!Array.isArray(question.options) || !question.options.length) {
        return `<textarea name="${name}" rows="4" placeholder="该选择题的选项未能从 PDF 文本中提取，请查看原 PDF 后作答"></textarea>`;
      }
      return `<div class="option-stack">${question.options
        .map((option) => `<label><input type="radio" name="${name}" value="${option.key}" /> <strong>${option.key}</strong>. ${escapeHtml(option.text)}</label>`)
        .join("")}</div>`;
    }
    if (question.type === "multiple_choice") {
      if (!Array.isArray(question.options) || !question.options.length) {
        return `<textarea name="${name}" rows="4" placeholder="该多选题的选项未能从 PDF 文本中提取，请查看原 PDF 后作答"></textarea>`;
      }
      return `<div class="option-stack">${question.options
        .map((option) => `<label><input type="checkbox" name="${name}" value="${option.key}" /> <strong>${option.key}</strong>. ${escapeHtml(option.text)}</label>`)
        .join("")}</div>`;
    }
    if (question.type === "open") {
      return `<textarea name="${name}" rows="7" placeholder="输入作答"></textarea>`;
    }
    return `<input class="text-answer" name="${name}" placeholder="输入答案" />`;
  }

  function renderLastResult(question) {
    const result = viewState.lastResult;
    if (!result || result.questionId !== question.id) return "";
    const resultClass = result.pending ? "pending" : result.correct ? "correct" : "wrong";
    return `
      <div class="result ${resultClass}">
        <p><strong>参考答案：</strong>${formatAnswer(question)}</p>
        <p>${escapeHtml(question.explanation || "")}</p>
      </div>
    `;
  }

  function bindPracticeEvents() {
    app.querySelectorAll("[data-jump]").forEach((button) => {
      button.addEventListener("click", () => {
        viewState.questionIndex = Number(button.dataset.jump);
        viewState.lastResult = null;
        render();
      });
    });

    const previous = app.querySelector("[data-prev-question]");
    if (previous) {
      previous.addEventListener("click", () => {
        viewState.questionIndex = Math.max(0, viewState.questionIndex - 1);
        viewState.lastResult = null;
        render();
      });
    }

    const next = app.querySelector("[data-next-question]");
    if (next) {
      next.addEventListener("click", () => {
        const list = questionsForCurrentView();
        viewState.questionIndex = Math.min(list.length - 1, viewState.questionIndex + 1);
        viewState.lastResult = null;
        render();
      });
    }

    const favorite = app.querySelector("[data-toggle-favorite]");
    if (favorite) {
      favorite.addEventListener("click", () => {
        toggleArray(state.favorites, favorite.dataset.toggleFavorite);
        saveState();
        render();
      });
    }

    const submit = app.querySelector("[data-submit-practice]");
    if (submit) {
      submit.addEventListener("click", () => {
        const question = questions.find((item) => item.id === submit.dataset.submitPractice);
        const userAnswer = readAnswer(question, "practice");
        const correct = checkAnswer(question, userAnswer);
        if (correct !== null) {
          recordAttempt(question.id, correct);
          if (!correct && !state.mistakes.includes(question.id)) state.mistakes.push(question.id);
        }
        viewState.lastResult = { questionId: question.id, correct, pending: correct === null };
        saveState();
        render();
      });
    }
  }

  function toggleArray(array, id) {
    const index = array.indexOf(id);
    if (index >= 0) array.splice(index, 1);
    else array.push(id);
  }

  function readAnswer(question, scope) {
    const name = `${scope}-${question.id}`;
    if (question.type === "multiple_choice") {
      return Array.from(app.querySelectorAll(`[name="${cssEscape(name)}"]:checked`)).map((input) => input.value);
    }
    const selected = app.querySelector(`[name="${cssEscape(name)}"]:checked`);
    if (question.type === "true_false" || question.type === "single_choice") {
      return selected ? selected.value : "";
    }
    if (selected) return selected.value;
    const text = app.querySelector(`[name="${cssEscape(name)}"]`);
    return text ? text.value.trim() : "";
  }

  function checkAnswer(question, userAnswer) {
    if (question.answerPending) return null;
    if (question.type === "true_false") return String(question.answer) === String(userAnswer);
    if (question.type === "single_choice") return question.answer === userAnswer;
    if (question.type === "multiple_choice") {
      const expected = question.answer.slice().sort().join(",");
      const actual = (userAnswer || []).slice().sort().join(",");
      return expected === actual;
    }
    const answer = question.answer || {};
    const normalized = normalize(userAnswer);
    return (answer.keywords || []).every((keyword) => normalized.includes(normalize(keyword)));
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[；;，,。.\-—_]/g, "");
  }

  function recordAttempt(questionId, correct) {
    const current = state.stats[questionId] || {
      personalAttempts: 0,
      personalCorrect: 0
    };
    current.personalAttempts += 1;
    if (correct) {
      current.personalCorrect += 1;
    }
    state.stats[questionId] = current;
  }

  function rate(correct, attempts) {
    if (!attempts) return "0%";
    return `${Math.round((correct / attempts) * 100)}%`;
  }

  function renderExam() {
    const exam = buildExam();
    return `
      <section class="exam-panel">
        <div class="exam-banner">
          <div>
            <h3>预测卷</h3>
            <p>判断 ${countBy(exam, "true_false")} / 选择 ${countChoices(exam)} / 填空 ${countBy(exam, "fill")} / 大题 ${countBy(exam, "open")}</p>
          </div>
          <button class="primary" data-submit-exam>交卷</button>
        </div>
        <div class="exam-list">
          ${exam.map((question, index) => renderExamQuestion(question, index)).join("")}
        </div>
        ${renderExamResult()}
      </section>
    `;
  }

  function buildExam() {
    const finalQuestions = questions.filter((question) => question.finalExam && !question.answerPending);
    const used = new Set();
    const select = (types, count) => {
      const typeList = Array.isArray(types) ? types : [types];
      const candidates = finalQuestions.filter((question) => typeList.includes(question.type) && !used.has(question.id));
      const selected = selectBalanced(candidates, count);
      selected.forEach((question) => used.add(question.id));
      return selected;
    };
    return [
      ...select("true_false", window.EXAM_REQUIREMENTS.finalPaperShape.trueFalse),
      ...select(["single_choice", "multiple_choice"], window.EXAM_REQUIREMENTS.finalPaperShape.choice),
      ...select("fill", window.EXAM_REQUIREMENTS.finalPaperShape.fill),
      ...select("open", window.EXAM_REQUIREMENTS.finalPaperShape.open)
    ];
  }

  function selectBalanced(candidates, count) {
    const priority = window.EXAM_REQUIREMENTS.topicPriority || topics.map((topic) => topic.id);
    const buckets = new Map();
    candidates.forEach((question) => {
      if (!buckets.has(question.topic)) buckets.set(question.topic, []);
      buckets.get(question.topic).push(question);
    });
    const orderedTopics = [
      ...priority.filter((topic) => buckets.has(topic)),
      ...Array.from(buckets.keys()).filter((topic) => !priority.includes(topic))
    ];
    const selected = [];
    while (selected.length < count) {
      let changed = false;
      for (const topic of orderedTopics) {
        const bucket = buckets.get(topic) || [];
        const next = bucket.shift();
        if (next) {
          selected.push(next);
          changed = true;
          if (selected.length === count) break;
        }
      }
      if (!changed) break;
    }
    return selected;
  }

  function renderExamQuestion(question, index) {
    return `
      <article class="exam-question">
        <div class="question-meta">
          <span>卷面 ${index + 1}</span>
          <span>题库 ${questionNumber(question)}</span>
          <span>${topicName(question.topic)}</span>
          <span>${typeLabel(question.type)}</span>
          <span class="difficulty-pill ${difficultyClass(question.difficulty)}">${difficultyLabel(question.difficulty)}</span>
          <span>${points(question)} 分</span>
        </div>
        <h3>${escapeHtml(question.stem)}</h3>
        ${renderInput(question, "exam")}
        <footer class="source-line">${sourceLabel(question)}</footer>
      </article>
    `;
  }

  function bindExamEvents() {
    const submit = app.querySelector("[data-submit-exam]");
    if (!submit) return;
    submit.addEventListener("click", () => {
      const exam = buildExam();
      let score = 0;
      let total = 0;
      const byTopic = {};
      const details = [];
      exam.forEach((question) => {
        const userAnswer = readAnswer(question, "exam");
        const correct = checkAnswer(question, userAnswer);
        const point = points(question);
        total += point;
        if (correct) score += point;
        recordAttempt(question.id, correct);
        if (!correct && !state.mistakes.includes(question.id)) state.mistakes.push(question.id);
        const topic = byTopic[question.topic] || { correct: 0, total: 0 };
        topic.total += point;
        if (correct) topic.correct += point;
        byTopic[question.topic] = topic;
        details.push({ id: question.id, correct });
      });
      const session = {
        id: `session-${Date.now()}`,
        at: new Date().toISOString(),
        score,
        total,
        byTopic,
        details
      };
      state.sessions.unshift(session);
      state.sessions = state.sessions.slice(0, 30);
      viewState.examResult = session;
      saveState();
      render();
    });
  }

  function renderExamResult() {
    const result = viewState.examResult;
    if (!result) return "";
    const weakTopics = Object.entries(result.byTopic)
      .map(([topic, item]) => ({ topic, rate: item.total ? item.correct / item.total : 0, correct: item.correct, total: item.total }))
      .sort((a, b) => a.rate - b.rate);
    return `
      <section class="exam-result">
        <h3>得分 ${result.score} / ${result.total}</h3>
        <div class="diagnosis">
          ${weakTopics
            .map((item) => `<div>
              <strong>${topicName(item.topic)}</strong>
              <span>${Math.round(item.rate * 100)}%</span>
              <p>${item.rate < 0.7 ? "专项复习优先级高" : "保持巩固"}</p>
            </div>`)
            .join("")}
        </div>
        <div class="answer-key">
          ${buildExam()
            .map((question) => `<details>
              <summary>第 ${questionNumber(question)} 题 · ${formatAnswer(question)}</summary>
              <p>${escapeHtml(question.explanation || "")}</p>
              <p>${sourceLabel(question)}</p>
            </details>`)
            .join("")}
        </div>
      </section>
    `;
  }

  function countBy(list, type) {
    return list.filter((item) => item.type === type).length;
  }

  function countChoices(list) {
    return list.filter((item) => item.type === "single_choice" || item.type === "multiple_choice").length;
  }

  function points(question) {
    if (question.type === "true_false") return 1;
    if (question.type === "multiple_choice") return 3;
    if (question.type === "single_choice" || question.type === "fill") return 2;
    return 5;
  }

  function renderHistory() {
    if (!state.sessions.length) return `<section class="empty-state">暂无记录。</section>`;
    return `
      <section class="history-list">
        ${state.sessions
          .map((session) => `<article>
            <h3>${new Date(session.at).toLocaleString()}</h3>
            <strong>${session.score} / ${session.total}</strong>
            <div class="diagnosis mini">
              ${Object.entries(session.byTopic)
                .map(([topic, item]) => `<div><span>${topicName(topic)}</span><b>${rate(item.correct, item.total)}</b></div>`)
                .join("")}
            </div>
          </article>`)
          .join("")}
      </section>
    `;
  }

  function renderSources() {
    return `
      <section class="source-panel">
        <h3>PDF 来源</h3>
        <div class="source-grid">
          ${Object.entries(window.SOURCE_FILES)
            .filter(([sourceId]) => sourceId !== "image")
            .map(([, source]) => source)
            .map((source) => `<a href="${source.file}" target="_blank">
              <strong>${source.originalFile || source.title}</strong>
              <span>${source.title}</span>
            </a>`)
            .join("")}
        </div>
      </section>
    `;
  }

  function formatAnswer(question) {
    if (question.answerPending) {
      return question.sourceTextMissing ? "待核对（PDF 文本提取为空，请查看原 PDF 对应题号）" : "待核对（原 PDF 未提供可机读标准答案）";
    }
    if (question.type === "true_false") return question.answer ? "正确" : "错误";
    if (question.type === "multiple_choice") return question.answer.join("、");
    if (question.type === "single_choice") return question.answer;
    return (question.answer.accepted || [""])[0];
  }

  function cssEscape(value) {
    return window.CSS && CSS.escape ? CSS.escape(value) : value.replace(/"/g, '\\"');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  applyRouteFromLocation();
  routeStack = [currentRouteHash()];
  writeRoute(!window.location.hash);
  syncRouteStackFromLocation();
  window.addEventListener("popstate", () => {
    applyRouteFromLocation();
    syncRouteStackFromLocation();
    render();
  });
  render();
})();
