#!/bin/bash

# FuckGEO 自动更新脚本

echo "🔄 正在检查更新..."

# 1. 拉取最新代码
git pull origin main

# 2. 根据部署方式进行更新
if command -v docker-compose >/dev/null 2>&1; then
    echo "🐳 检测到 Docker 环境，正在重新构建并启动容器..."
    # --build 会强制重新构建镜像，确保代码更改生效
    # -d 后台运行
    # --remove-orphans 清理旧的无用容器
    docker-compose up -d --build --remove-orphans
    echo "✅ Docker 容器已更新并重启。"
else
    echo "🛠️ 未检测到 Docker，正在执行手动构建更新..."
    
    cd web || exit
    
    echo "📦 安装依赖..."
    npm install
    
    echo "🏗️ 重新构建..."
    npm run build
    
    # 尝试重启服务
    if command -v pm2 >/dev/null 2>&1; then
        pm2 restart fuckgeo || pm2 start npm --name "fuckgeo" -- start
        echo "✅ PM2 服务已重启。"
    else
        echo "⚠️ 注意：未检测到 PM2，请手动重启你的 npm start 进程。"
        echo "建议安装 pm2：npm install -g pm2"
    fi
fi

echo "✨ 更新完成！"
