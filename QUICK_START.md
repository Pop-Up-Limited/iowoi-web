# 快速开始 / Quick Start

## 🚀 部署到 GitHub Pages（3 步完成）

### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`iowoi-web`
3. 设置为 **Public**
4. **不要**勾选 README
5. 点击 "Create repository"

### 步骤 2: 更新 GitHub 用户名

编辑 `package.json` 第 6 行，将 `jinyili` 替换为你的 GitHub 用户名：

```json
"homepage": "https://YOUR_USERNAME.github.io/iowoi-web"
```

### 步骤 3: 部署

在终端运行以下命令（替换 YOUR_USERNAME 为你的 GitHub 用户名）：

```bash
# 初始化并提交代码
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/iowoi-web.git
git branch -M main
git push -u origin main

# 部署到 GitHub Pages
npm run deploy
```

### 步骤 4: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings** > **Pages**
2. Source: 选择 `gh-pages` 分支
3. Folder: 选择 `/ (root)`
4. 点击 **Save**

### ✅ 完成！

你的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/iowoi-web
```

**注意**：首次部署可能需要 5-10 分钟生效。

---

## 📝 后续更新

每次修改代码后：

```bash
git add .
git commit -m "Update content"
git push origin main
npm run deploy
```

---

## 🛠️ 本地开发

```bash
# 安装依赖（首次）
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

