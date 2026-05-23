import React, { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Moon,
  PanelRight,
  RefreshCcw,
  SearchCheck,
  Sun,
  Target,
} from "lucide-react";
import { curriculum, resources, STORAGE_KEY, THEME_KEY } from "./data/curriculum";

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function getTaskId(weekId, taskIndex) {
  return `week-${weekId}-task-${taskIndex}`;
}

function getAllTaskIds() {
  return curriculum.flatMap((week) => week.tasks.map((_, index) => getTaskId(week.id, index)));
}

function ProgressBar({ done, total }) {
  const percent = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="progress-shell" aria-label={`学习进度 ${percent}%`}>
      <div className="progress-meta">
        <span>{done} / {total} 项完成</span>
        <strong>{percent}%</strong>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Header({ activeWeek, progress, theme, onToggleTheme, onReset }) {
  const themeIcon = theme === "light" ? <Moon size={17} /> : <Sun size={17} />;

  return (
    <header className="app-header">
      <div className="hero-copy">
        <span className="eyebrow"><Target size={15} /> 6 周 Frontend 面试冲刺</span>
        <h1>Hands-on React + JavaScript 学习门户</h1>
        <p>
          围绕招聘要求「Hands-on experience in frontend software engineering, including React framework and JavaScript」设计：
          每周学一点、做一点、能讲一点。
        </p>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="切换明暗主题">
            {themeIcon}
            <span>{theme === "light" ? "夜间模式" : "白天模式"}</span>
          </button>
          <button className="icon-button muted" type="button" onClick={onReset}>
            <RefreshCcw size={16} />
            <span>重置进度</span>
          </button>
        </div>
      </div>
      <div className="hero-panel">
        <img src="/roadmap.png" alt="6 周前端学习路线图" className="roadmap-image" />
        <div className="panel-stat">
          <span>当前周</span>
          <strong>Week {activeWeek.id}</strong>
          <small>{activeWeek.title}</small>
        </div>
        <ProgressBar done={progress.done} total={progress.total} />
      </div>
    </header>
  );
}

function WeekTabs({ activeWeekId, doneWeeks, onSelect }) {
  return (
    <nav className="week-tabs" aria-label="学习周切换">
      {curriculum.map((week) => {
        const active = week.id === activeWeekId;
        const done = doneWeeks.includes(week.id);
        return (
          <button
            className={`week-tab ${active ? "active" : ""} ${done ? "done" : ""}`}
            key={week.id}
            type="button"
            onClick={() => onSelect(week.id)}
          >
            <span className="week-number">Week {week.id}</span>
            <span className="week-name">{week.title}</span>
            {done && <CheckCircle2 size={15} aria-label="已完成" />}
          </button>
        );
      })}
    </nav>
  );
}

function Checklist({ week, progressState, onToggleTask }) {
  return (
    <ul className="checklist">
      {week.tasks.map((task, index) => {
        const id = getTaskId(week.id, index);
        const checked = Boolean(progressState[id]);
        return (
          <li className={checked ? "checked" : ""} key={id}>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={(event) => onToggleTask(id, event.target.checked)}
              />
              <span>{task}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

function ResourceCard({ resource }) {
  return (
    <a className="resource-card" href={resource.url} target="_blank" rel="noreferrer">
      <span className="resource-label">{resource.label}</span>
      <strong>{resource.title}</strong>
      <p>{resource.note}</p>
      <span className="resource-link">
        打开资源 <ExternalLink size={14} />
      </span>
    </a>
  );
}

function QuizCard({ item, index }) {
  const [selected, setSelected] = useState(null);
  const answered = selected !== null;

  return (
    <article className="quiz-card">
      <div className="quiz-question">
        <span>Q{index + 1}</span>
        <strong>{item.question}</strong>
      </div>
      <div className="quiz-options">
        {item.options.map((option) => {
          const isCorrect = option === item.answer;
          const isSelected = selected === option;
          const className = answered && isCorrect ? "correct" : answered && isSelected ? "wrong" : "";
          return (
            <button className={className} key={option} type="button" onClick={() => setSelected(option)}>
              {option}
            </button>
          );
        })}
      </div>
      {answered && (
        <p className="quiz-explanation">
          <strong>{selected === item.answer ? "答对了：" : "再记一下："}</strong>
          {item.explanation}
        </p>
      )}
    </article>
  );
}

function WeekPanel({ week }) {
  const weekResources = resources.filter((resource) => week.resources.includes(resource.title));

  return (
    <main className="week-panel">
      <section className="section-card intro-card">
        <div>
          <span className="eyebrow"><Code2 size={15} /> 本周目标</span>
          <h2>{week.title}</h2>
          <p>{week.subtitle}</p>
        </div>
        <div className="focus-box">
          <span>Focus</span>
          <strong>{week.focus}</strong>
        </div>
      </section>

      <section className="section-card">
        <h3><Target size={18} /> 学完要能做到</h3>
        <div className="goal-grid">
          {week.goals.map((goal) => (
            <div className="goal-item" key={goal}>
              <CheckCircle2 size={17} />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3><BookOpen size={18} /> 核心知识</h3>
        <div className="concept-grid">
          {week.concepts.map((concept) => (
            <article className="concept-card" key={concept.title}>
              <strong>{concept.title}</strong>
              <p>{concept.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3><ExternalLink size={18} /> 推荐资源</h3>
        <div className="resource-grid">
          {weekResources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3><SearchCheck size={18} /> 本周自测</h3>
        <div className="quiz-grid">
          {week.quiz.map((item, index) => (
            <QuizCard key={item.question} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3><PanelRight size={18} /> 面试表达</h3>
        <div className="prompt-list">
          {week.interviewPrompts.map((prompt) => (
            <blockquote key={prompt}>{prompt}</blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}

function Sidebar({ activeWeek, progressState, onToggleTask, progress, doneWeeks }) {
  const projectWeek = curriculum.find((week) => week.id === 5);
  const projectDone = projectWeek.tasks.filter((_, index) => progressState[getTaskId(projectWeek.id, index)]).length;

  return (
    <aside className="sidebar">
      <section className="sidebar-card">
        <h3><CheckCircle2 size={18} /> 本周 Checklist</h3>
        <Checklist week={activeWeek} progressState={progressState} onToggleTask={onToggleTask} />
      </section>

      <section className="sidebar-card compact">
        <h3><Target size={18} /> 项目完成度</h3>
        <div className="mini-meter">
          <span>Week 5 作品集任务</span>
          <strong>{projectDone} / {projectWeek.tasks.length}</strong>
        </div>
        <div className="mini-meter">
          <span>已完成周数</span>
          <strong>{doneWeeks.length} / {curriculum.length}</strong>
        </div>
        <div className="mini-meter">
          <span>总任务进度</span>
          <strong>{Math.round((progress.done / progress.total) * 100)}%</strong>
        </div>
      </section>

      <section className="sidebar-card compact">
        <h3><BookOpen size={18} /> 资源索引</h3>
        <div className="resource-index">
          {resources.map((resource) => (
            <a href={resource.url} key={resource.title} target="_blank" rel="noreferrer">
              <ChevronRight size={14} />
              <span>{resource.title}</span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default function App() {
  const [activeWeekId, setActiveWeekId] = useState(1);
  const [progressState, setProgressState] = useState(() => loadJson(STORAGE_KEY, {}));
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");

  const activeWeek = curriculum.find((week) => week.id === activeWeekId) || curriculum[0];
  const taskIds = useMemo(() => getAllTaskIds(), []);
  const progress = useMemo(() => {
    const done = taskIds.filter((id) => progressState[id]).length;
    return { done, total: taskIds.length };
  }, [progressState, taskIds]);
  const doneWeeks = useMemo(
    () =>
      curriculum
        .filter((week) => week.tasks.every((_, index) => progressState[getTaskId(week.id, index)]))
        .map((week) => week.id),
    [progressState],
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
  }, [progressState]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  function handleToggleTask(id, checked) {
    setProgressState((current) => ({ ...current, [id]: checked }));
  }

  function handleReset() {
    if (!window.confirm("确定重置所有学习进度？")) return;
    setProgressState({});
  }

  function handleToggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <div className="app-shell">
      <Header
        activeWeek={activeWeek}
        progress={progress}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onReset={handleReset}
      />
      <WeekTabs activeWeekId={activeWeekId} doneWeeks={doneWeeks} onSelect={setActiveWeekId} />
      <div className="content-layout">
        <WeekPanel week={activeWeek} />
        <Sidebar
          activeWeek={activeWeek}
          progressState={progressState}
          onToggleTask={handleToggleTask}
          progress={progress}
          doneWeeks={doneWeeks}
        />
      </div>
      <footer className="app-footer">
        进度保存在你的浏览器 localStorage · React + Vite · 为 Frontend Software Engineering 面试准备
      </footer>
    </div>
  );
}
