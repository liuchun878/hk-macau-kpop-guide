# 港澳追星攻略 · K-POP FAN TRAVEL GUIDE

一份面向新手的香港 / 澳门 Kpop 演唱会追星攻略网页，Kpop 霓虹舞台风格，桌面与移动端响应式适配。

## 功能

- 四大演唱会场馆（亚博 / 红馆 / 威尼斯人综艺馆 / 银河综艺馆），点击卡片展开详情
- 五大追星打卡地，点击弹出打卡攻略弹窗（ESC 可关闭）
- 新手必读四件事：证件过关、买票渠道、应援观演、支付网络
- 3 天 2 夜行程模板，Tab 切换查看每日安排
- 新手快问快答 FAQ，手风琴展开
- 风格调节面板（右上角 TWEAKS）：切换主副主题色、调节霓虹光强度、开关霓虹模式
- 返回顶部按钮、滚动导航栏、移动端汉堡菜单

## 技术栈

- React 18（UMD + CDN 加载）
- Babel Standalone 浏览器端转译 JSX
- 纯静态页面，无需构建，可直接托管到 GitHub Pages

## 本地运行

直接打开 `index.html`，或启动任意静态服务器：

```bash
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 部署到 GitHub Pages

1. 创建 GitHub 仓库并推送本目录全部文件
2. 仓库 Settings → Pages → Source 选择 `main` 分支根目录
3. 等待几分钟后访问 `https://<username>.github.io/<repo>/`

## 说明

- 页面图片来自公开网络渠道，仅作展示示意
- 场馆容量、票务渠道、交通信息请以各场馆、主办方及官方平台最新公告为准
