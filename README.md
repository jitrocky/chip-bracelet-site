# 沃伦勒夫芯片手环 | Astro 静态站

这是一个用于 GitHub Pages 托管的静态网站，包含：
- 首页、科研、案例、定价、合作、FAQ、关于我们等页面
- 已集成 Tailwind CSS 与 GitHub Actions 自动部署
- public/docs 下放置了你提供的 PDF/PPTX；public/images/cases 放置了案例图片

## 本地开发
```bash
npm i
npm run dev
```

## 构建与部署（GitHub Pages）
- 推送到 `main` 分支，GitHub Actions 将自动构建并发布到 Pages。
- 记得在 `astro.config.mjs` 中把 `site` 换成你仓库的实际 Pages 地址。

## 资产路径
- PDF：`/docs/文件名.pdf`
- PPTX：`/docs/文件名.pptx`（浏览器会下载或在线预览）
- 图片：`/images/cases/` 下自动读取展示
- 视频：`/videos/ncku.mp4`（如不可用，请将视频上传到第三方并替换为 `<iframe>`）

## 声明
- 本站信息仅用于学习与交流，非医疗建议；体验因人而异。
- 请遵守当地法规与平台政策，避免绝对疗效承诺。
