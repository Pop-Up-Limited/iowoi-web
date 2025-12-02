# 自定义域名配置指南 / Custom Domain Setup Guide

## ✅ 已完成

1. ✅ CNAME 文件已创建并部署到 `gh-pages` 分支
2. ✅ 网站已配置为使用根路径 `/`（适合自定义域名）
3. ✅ 代码已推送到 GitHub

## 🔧 需要在 GitHub 上完成的步骤

### 1. 在 GitHub 仓库中启用自定义域名

1. 访问：https://github.com/Pop-Up-Limited/iowoi-web/settings/pages
2. 在 "Custom domain" 部分，输入：`iiowoii.com`
3. 勾选 "Enforce HTTPS"（推荐）
4. 点击 "Save"

**注意**：GitHub 会自动验证域名，这可能需要几分钟。

## 🌐 需要在域名 DNS 中配置的记录

### 如果使用根域名 (iiowoii.com)

在你的域名 DNS 提供商（如 Cloudflare, GoDaddy, Namecheap 等）添加以下记录：

#### 方法 1：使用 CNAME 记录（推荐）

```
类型: CNAME
名称: @ (或留空，取决于你的 DNS 提供商)
值: pop-up-limited.github.io
TTL: 3600 (或自动)
```

#### 方法 2：使用 A 记录（如果 CNAME 不支持根域名）

如果你的 DNS 提供商不支持根域名的 CNAME 记录，使用以下 A 记录：

```
类型: A
名称: @ (或留空)
值: 185.199.108.153
TTL: 3600

类型: A
名称: @ (或留空)
值: 185.199.109.153
TTL: 3600

类型: A
名称: @ (或留空)
值: 185.199.110.153
TTL: 3600

类型: A
名称: @ (或留空)
值: 185.199.111.153
TTL: 3600
```

### 如果使用 www 子域名 (www.iiowoii.com)

```
类型: CNAME
名称: www
值: pop-up-limited.github.io
TTL: 3600
```

## ⏱️ DNS 生效时间

- DNS 记录通常需要 **15 分钟到 48 小时** 才能完全生效
- 大多数情况下在 **1-2 小时内** 生效

## ✅ 验证配置

配置完成后，可以通过以下方式验证：

1. **检查 DNS 记录**：
   ```bash
   dig iiowoii.com +short
   # 应该返回 GitHub Pages 的 IP 地址
   ```

2. **检查 GitHub Pages 状态**：
   - 访问：https://github.com/Pop-Up-Limited/iowoi-web/settings/pages
   - 查看 "Custom domain" 部分是否显示绿色勾号 ✅

3. **访问网站**：
   - 等待 DNS 生效后，访问：https://iiowoii.com

## 🔄 如果遇到问题

### DNS 未生效
- 等待更长时间（最多 48 小时）
- 清除本地 DNS 缓存：
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  
  # Windows
  ipconfig /flushdns
  ```

### GitHub Pages 显示 "Not yet available"
- 检查 DNS 记录是否正确
- 确认 CNAME 文件存在于 `gh-pages` 分支
- 等待 GitHub 完成验证（可能需要几分钟到几小时）

### HTTPS 证书问题
- GitHub 会自动为自定义域名提供 SSL 证书
- 如果显示不安全，等待证书生成（通常需要几分钟到几小时）
- 确保在 GitHub Pages 设置中勾选了 "Enforce HTTPS"

## 📝 当前状态

- **GitHub 仓库**: https://github.com/Pop-Up-Limited/iowoi-web
- **GitHub Pages URL**: https://pop-up-limited.github.io/iowoi-web/
- **自定义域名**: iiowoii.com (待配置 DNS)
- **CNAME 文件**: ✅ 已部署

