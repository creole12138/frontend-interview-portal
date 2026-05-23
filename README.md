# Frontend 面试冲刺学习门户

一个用于补齐 `React + JavaScript` 前端面试要求的 6 周学习门户。项目本身也是一个可展示的 React 作品集：包含组件拆分、状态管理、`localStorage` 持久化、明暗主题、响应式布局和交互式 quiz。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 功能

- 6 周 Frontend Software Engineering 面试冲刺学习路径
- Week tabs 切换每周内容
- 本周 checklist 勾选打卡
- 总进度和周完成状态自动计算
- quiz 正误反馈和解析
- 明暗主题切换
- 进度保存在 `localStorage`
- 桌面双栏、移动端单栏响应式布局

## 技术点

- React function components
- `useState` 管理当前周、quiz 选择、主题和学习进度
- `useEffect` 同步 `localStorage` 和 DOM theme
- props 传递课程数据与事件回调
- 派生数据计算总进度、周完成状态和项目完成度
- Vite 构建与开发服务
- 普通 CSS、CSS variables、Flex/Grid 响应式布局

## 面试时可以这样介绍

> 我之前不是专职前端背景，所以我做了一个 6 周 React + JavaScript 学习门户来系统补齐前端能力。这个项目用 React 组件拆分实现了周计划、资源卡片、打卡 checklist、quiz 和本地进度保存。状态管理主要用 `useState`，副作用用 `useEffect` 同步到 `localStorage`。我还做了响应式布局和明暗主题，方便在桌面和手机上使用。

## 后续可扩展

- 增加真实作品集项目页面
- 增加每日学习日志
- 增加导出学习报告功能
- 增加部署链接和 GitHub 项目卡片
