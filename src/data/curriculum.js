export const STORAGE_KEY = "frontend_portal_progress_v1";
export const THEME_KEY = "frontend_portal_theme";

export const resources = [
  {
    title: "MDN JavaScript",
    label: "官方参考",
    url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    note: "查语法、DOM、事件和 Web API 的第一站。",
  },
  {
    title: "JavaScript.info",
    label: "系统教程",
    url: "https://zh.javascript.info/",
    note: "按章节补现代 JavaScript，适合每天读一小节。",
  },
  {
    title: "React Learn",
    label: "React 官方",
    url: "https://zh-hans.react.dev/learn",
    note: "以函数组件和 Hooks 为主，最贴近现代 React。",
  },
  {
    title: "Vite Guide",
    label: "项目搭建",
    url: "https://vite.dev/guide/",
    note: "理解本项目如何启动、构建和部署。",
  },
  {
    title: "Scrimba Learn React",
    label: "交互课程",
    url: "https://scrimba.com/learn-react-c0e",
    note: "边看边改代码，适合没有前端经验的人破冰。",
  },
  {
    title: "Exercism JavaScript",
    label: "语法练习",
    url: "https://exercism.org/tracks/javascript",
    note: "用小题练函数、数组、对象和异步思维。",
  },
  {
    title: "Frontend Mentor",
    label: "页面练习",
    url: "https://www.frontendmentor.io/",
    note: "练 CSS、响应式和作品集项目完成度。",
  },
  {
    title: "Netlify / Vercel",
    label: "部署",
    url: "https://docs.netlify.com/frameworks/react/",
    note: "把作品部署上线，面试时直接给链接。",
  },
];

export const curriculum = [
  {
    id: 1,
    title: "JavaScript 必备基础",
    subtitle: "先把 React 需要的语言能力补齐",
    focus: "能读懂并写出常见业务逻辑",
    goals: [
      "解释 let、const、函数、作用域和模块的基本用法",
      "熟练使用 map、filter、find、reduce 处理列表数据",
      "用对象解构和展开运算符整理组件数据",
      "写出 3 个纯 JavaScript 小练习并能讲清思路",
    ],
    concepts: [
      {
        title: "变量与函数",
        body: "重点掌握块级作用域、箭头函数、默认参数和函数作为值传递。React 组件本质上也是函数，所以这部分越熟，后面越顺。",
      },
      {
        title: "数组方法",
        body: "React 页面里大量数据来自数组。列表渲染、筛选、搜索、统计都会用到 map、filter、find、some、reduce。",
      },
      {
        title: "对象与模块",
        body: "props、状态对象、配置数据都依赖对象。练会解构、重命名、默认值、浅拷贝和 import/export。",
      },
    ],
    resources: ["MDN JavaScript", "JavaScript.info", "Exercism JavaScript"],
    tasks: [
      "写一个 candidates 数组，用 filter 找出 React 岗位，用 map 输出公司名列表",
      "写一个 calculateProgress(items) 函数，返回完成数量和百分比",
      "把 5 个常用 JS 概念写成自己的中文解释，每条不超过 80 字",
      "完成 Exercism JavaScript 的 3 道入门题",
    ],
    quiz: [
      {
        question: "React 中渲染列表时最常用哪个数组方法？",
        options: ["push", "map", "sort", "join"],
        answer: "map",
        explanation: "map 会把数据数组转换成 JSX 数组，是 React 列表渲染的核心手法。",
      },
      {
        question: "展开运算符在更新对象状态时主要解决什么问题？",
        options: ["直接修改原对象", "保留旧字段并创建新对象", "自动发请求", "减少 CSS 代码"],
        answer: "保留旧字段并创建新对象",
        explanation: "React 状态更新应避免直接 mutation，展开运算符能在保留旧值的同时覆盖新字段。",
      },
    ],
    interviewPrompts: [
      "我能用数组方法完成筛选、搜索和统计，这也是 React 列表页面的基础。",
      "我理解为什么 React 更新状态时要创建新对象，而不是直接修改原对象。",
    ],
  },
  {
    id: 2,
    title: "HTML / CSS / DOM / API",
    subtitle: "补齐页面、事件和接口请求的基本功",
    focus: "能做出可用、响应式、可交互的页面",
    goals: [
      "理解语义化 HTML、表单输入和按钮行为",
      "使用 Flex/Grid 做稳定布局",
      "掌握 DOM 事件、受控输入的前置概念",
      "用 fetch + async/await 请求并展示数据",
    ],
    concepts: [
      {
        title: "HTML 与表单",
        body: "面试项目常见交互都是表单驱动：新增任务、编辑岗位、提交搜索。要理解 label、input、button、required 和可访问性基础。",
      },
      {
        title: "CSS 布局",
        body: "重点练 Flex、Grid、间距、响应式断点和文字不溢出。少追动画，多追稳定和可读。",
      },
      {
        title: "异步请求",
        body: "fetch 返回 Promise，async/await 让请求流程更像同步代码。React 中再把请求结果放进状态。",
      },
    ],
    resources: ["MDN JavaScript", "Frontend Mentor", "Vite Guide"],
    tasks: [
      "做一个静态岗位卡片列表，桌面双列、手机单列",
      "写一个 search input，用原生 JS 监听输入并过滤列表",
      "调用一个公开 API 或 mock JSON，显示 loading、success、error 三种状态",
      "完成一个 Frontend Mentor 入门布局挑战",
    ],
    quiz: [
      {
        question: "fetch 请求失败时，UI 至少应该呈现哪两类状态？",
        options: ["loading 和 error", "hover 和 active", "dark 和 light", "small 和 large"],
        answer: "loading 和 error",
        explanation: "用户需要知道系统正在请求，也需要知道失败后该如何恢复或重试。",
      },
      {
        question: "响应式布局里，最应该优先避免什么？",
        options: ["按钮有图标", "内容在小屏互相重叠", "使用 CSS 变量", "卡片有边框"],
        answer: "内容在小屏互相重叠",
        explanation: "面试官会从响应式细节判断你是否真正做过前端页面。",
      },
    ],
    interviewPrompts: [
      "我会先保证页面结构语义清楚，再用 Flex/Grid 做稳定布局。",
      "我处理接口请求时会显式设计 loading、error 和 empty state。",
    ],
  },
  {
    id: 3,
    title: "React 基础",
    subtitle: "组件、props、state 和渲染逻辑",
    focus: "能独立拆组件并管理局部状态",
    goals: [
      "理解组件是 UI 的可复用函数",
      "用 props 从父组件向子组件传递数据",
      "用 useState 管理输入、筛选和当前选中项",
      "掌握条件渲染、列表渲染和 key",
    ],
    concepts: [
      {
        title: "组件拆分",
        body: "把页面拆成 Header、Tabs、Card、Checklist 这类稳定单元。组件不是越碎越好，而是围绕复用、可读和状态边界来拆。",
      },
      {
        title: "props 与 state",
        body: "props 是外部传入的数据，state 是组件自己记住的变化。面试里要能说清它们的区别和数据流方向。",
      },
      {
        title: "渲染控制",
        body: "条件渲染决定显示哪个状态，列表渲染决定数据如何变成 UI，key 帮 React 识别列表项身份。",
      },
    ],
    resources: ["React Learn", "Scrimba Learn React", "Vite Guide"],
    tasks: [
      "用 Vite 创建一个 React 小项目并跑起来",
      "做 WeekTabs 组件，点击后切换当前周",
      "做 ResourceCard 组件，通过 props 渲染不同资源",
      "写 5 道 React 基础题并用自己的话回答",
    ],
    quiz: [
      {
        question: "props 和 state 的主要区别是什么？",
        options: ["props 可变，state 不可变", "props 来自父组件，state 由组件自己管理", "props 只能是字符串", "state 只能传给父组件"],
        answer: "props 来自父组件，state 由组件自己管理",
        explanation: "这是 React 数据流最基础的区别，也是面试高频题。",
      },
      {
        question: "React 列表中的 key 主要用于什么？",
        options: ["控制颜色", "帮助 React 识别列表项身份", "自动排序", "发起 API 请求"],
        answer: "帮助 React 识别列表项身份",
        explanation: "稳定 key 可以减少错误复用和不必要的重渲染。",
      },
    ],
    interviewPrompts: [
      "我拆组件时会先看数据流和状态归属，避免把所有逻辑堆在 App 里。",
      "我理解 key 不是为了消除警告，而是帮助 React 正确追踪列表项。",
    ],
  },
  {
    id: 4,
    title: "React 实战能力",
    subtitle: "表单、effect、数据请求和状态边界",
    focus: "能完成真实小功能，而不是只会写 demo",
    goals: [
      "用受控组件处理 input、select、textarea",
      "用 useEffect 同步副作用和本地存储",
      "把 loading、error、empty、success 状态写完整",
      "理解状态提升和派生数据",
    ],
    concepts: [
      {
        title: "受控组件",
        body: "表单值由 React state 控制，输入变化触发 setState。这样表单校验、重置、提交都会更可控。",
      },
      {
        title: "useEffect",
        body: "effect 用来和 React 外部系统同步，例如 localStorage、网络请求、订阅和标题更新。不要把普通计算都塞进 effect。",
      },
      {
        title: "派生数据",
        body: "筛选后的列表、完成率、统计值通常可以由现有 state 算出来，不必额外存一份，避免状态不同步。",
      },
    ],
    resources: ["React Learn", "MDN JavaScript", "Scrimba Learn React"],
    tasks: [
      "做一个岗位新增表单，包含公司、岗位、阶段、备注",
      "用 useEffect 把岗位列表保存到 localStorage",
      "实现搜索、阶段筛选和完成率统计",
      "给所有空状态和错误状态写清楚 UI 文案",
    ],
    quiz: [
      {
        question: "下面哪个最适合放进 useEffect？",
        options: ["把数组 map 成 JSX", "把数据写入 localStorage", "声明一个按钮文案", "定义 CSS className"],
        answer: "把数据写入 localStorage",
        explanation: "localStorage 属于 React 外部系统，适合用 effect 同步。",
      },
      {
        question: "受控 input 的 value 应该来自哪里？",
        options: ["React state", "CSS 变量", "浏览器地址栏", "随机数"],
        answer: "React state",
        explanation: "受控组件由 state 驱动，onChange 再更新 state。",
      },
    ],
    interviewPrompts: [
      "我会区分真正需要存的状态和可以计算出来的派生数据。",
      "我使用 useEffect 时会先问：我要同步的是哪个 React 外部系统？",
    ],
  },
  {
    id: 5,
    title: "作品集项目",
    subtitle: "做一个能在面试里讲 3 分钟的项目",
    focus: "把学习成果变成可展示应用",
    goals: [
      "完成招聘岗位追踪器或 Todo Pro 的可用版本",
      "包含新增、编辑、删除、筛选、搜索和本地存储",
      "写 README，说明功能、技术点和改进方向",
      "部署上线并准备项目演示路径",
    ],
    concepts: [
      {
        title: "项目范围",
        body: "不要做太大。一个完整小工具比半成品大平台更适合面试。核心是交互闭环、状态清晰和部署可访问。",
      },
      {
        title: "代码组织",
        body: "按组件和数据逻辑拆分，保持命名直观。面试官看代码时，应能快速找到入口、数据和关键交互。",
      },
      {
        title: "可讲故事",
        body: "项目要能讲清需求、技术选择、状态设计、遇到的问题和下一步优化，这比功能数量更重要。",
      },
    ],
    resources: ["Vite Guide", "Frontend Mentor", "Netlify / Vercel"],
    tasks: [
      "确定作品集项目：推荐招聘岗位追踪器",
      "实现 CRUD、搜索、筛选、统计和 localStorage",
      "做一次移动端检查，修复布局溢出",
      "写 README 并部署到 Netlify 或 Vercel",
    ],
    quiz: [
      {
        question: "作品集项目最应该优先保证什么？",
        options: ["功能完整可演示", "使用最多库", "页面越炫越好", "代码越复杂越好"],
        answer: "功能完整可演示",
        explanation: "面试项目的重点是证明你能独立交付一个可用功能。",
      },
      {
        question: "面试讲项目时，最不应该只讲什么？",
        options: ["需求背景", "状态设计", "我用了 React", "遇到的问题和取舍"],
        answer: "我用了 React",
        explanation: "技术名词不等于项目能力，要讲清楚为什么这样设计以及如何解决问题。",
      },
    ],
    interviewPrompts: [
      "这个项目用 React 组件拆分、状态管理和 localStorage 完成了一个完整工具。",
      "我把搜索和筛选作为派生数据处理，避免维护重复状态。",
    ],
  },
  {
    id: 6,
    title: "面试冲刺",
    subtitle: "把知识变成可信表达",
    focus: "能解释概念、展示项目、回答追问",
    goals: [
      "准备 15 道 JavaScript / React 高频题",
      "录一次 3 分钟项目讲解",
      "整理作品集链接、GitHub README 和简历 bullet",
      "完成两轮模拟面试并修正表达",
    ],
    concepts: [
      {
        title: "高频题",
        body: "重点准备 props/state、useEffect、key、受控组件、数组方法、async/await、事件处理和组件拆分。",
      },
      {
        title: "项目讲解",
        body: "按背景、功能、技术、挑战、改进五段讲。每段 20-30 秒，控制在 3 分钟内。",
      },
      {
        title: "诚实定位",
        body: "没有前端经验时，不要装资深。强调你系统补齐了基础，并做了可运行项目证明上手能力。",
      },
    ],
    resources: ["React Learn", "MDN JavaScript", "Netlify / Vercel"],
    tasks: [
      "写出 15 道高频题答案，每题 3-5 句话",
      "准备项目演示脚本并录屏复盘",
      "把项目写进简历：动词 + 技术 + 结果",
      "模拟一次被追问 useEffect、localStorage、组件拆分",
    ],
    quiz: [
      {
        question: "没有前端经验时，最可信的表达方式是什么？",
        options: ["我精通 React", "我系统补齐了 React/JS，并用项目验证了能力", "我只看过视频", "前端很简单"],
        answer: "我系统补齐了 React/JS，并用项目验证了能力",
        explanation: "诚实但有证据，是转方向面试里最稳的表达。",
      },
      {
        question: "项目讲解最好控制在多久？",
        options: ["30 秒", "3 分钟左右", "20 分钟", "越久越好"],
        answer: "3 分钟左右",
        explanation: "3 分钟足够讲清背景、功能、技术点和一个挑战，也方便面试官追问。",
      },
    ],
    interviewPrompts: [
      "我不是传统前端背景，但我用 6 周计划系统补了 JavaScript、React 和项目交付能力。",
      "我能独立完成基础页面、交互、状态管理、本地持久化和部署，并愿意在实际项目中继续提升。",
    ],
  },
];
