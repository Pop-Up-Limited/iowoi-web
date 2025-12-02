# 部署指南 / Deployment Guide

## GitHub Pages 部署步骤

### 1. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称设置为：`iowoi-web`
4. 设置为 Public（GitHub Pages 免费版需要 Public 仓库）
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 2. 更新配置文件

在部署前，需要更新以下文件中的 GitHub 用户名：

**package.json** - 第 6 行：
```json
"homepage": "https://YOUR_USERNAME.github.io/iowoi-web"
```
将 `YOUR_USERNAME` 替换为你的 GitHub 用户名。

**vite.config.js** - 第 5 行：
```js
base: '/iowoi-web/',
```
如果仓库名不是 `iowoi-web`，请相应修改。

### 3. 提交代码到 GitHub

在项目根目录运行以下命令：

```bash
# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: iOwOi website"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/iowoi-web.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 4. 部署到 GitHub Pages

```bash
npm run deploy
```

这个命令会：
1. 自动构建项目（`npm run build`）
2. 将构建后的文件推送到 `gh-pages` 分支
3. GitHub 会自动从 `gh-pages` 分支部署网站

### 5. 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择分支：`gh-pages`
5. 选择文件夹：`/ (root)`
6. 点击 "Save"

### 6. 访问网站

部署完成后，你的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/iowoi-web
```

**注意**：首次部署可能需要几分钟才能生效。

## 后续更新

每次更新代码后，运行：

```bash
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

## 故障排除

### 网站显示 404
- 等待 5-10 分钟让 GitHub Pages 完成部署
- 检查仓库 Settings > Pages 中的配置
- 确认 `gh-pages` 分支已创建

### 样式不显示
- 检查 `vite.config.js` 中的 `base` 路径是否正确
- 检查 `package.json` 中的 `homepage` 是否正确
- 清除浏览器缓存

### 构建失败
- 运行 `npm install` 确保所有依赖已安装
- 检查 Node.js 版本（需要 v16 或更高）

