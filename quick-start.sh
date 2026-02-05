#!/bin/bash

# FuckGEO 快速启动脚本 (Linux)

echo "🚀 正在准备启动 FuckGEO..."

# 检查是否安装了 Docker
if command -v docker-compose >/dev/null 2>&1; then
    echo "✅ 检测到 Docker Compose，将使用容器化方案（推荐：环境隔离，不污染系统）"
    docker-compose up -d --build
    echo "🎉 启动成功！请访问 http://localhost"
else
    echo "⚠️ 未检测到 Docker，尝试使用 Node.js 直接运行..."
    
    # 检查 Node.js
    if ! command -v node >/dev/null 2>&1; then
        echo "❌ 错误: 请先安装 Node.js (建议 v20+) 或 Docker。"
        exit 1
    fi

    # 进入 web 目录
    cd web || exit

    echo "📦 正在安装依赖..."
    npm install

    echo "🏗️ 正在构建项目..."
    npm run build

    echo "🏃 正在启动服务..."
    # 尝试使用 pm2 如果有的话，否则直接 npm start
    if command -v pm2 >/dev/null 2>&1; then
        pm2 start npm --name "fuckgeo" -- start
        echo "✅ 服务已在后台运行 (PM2)"
    else
        echo "💡 提示: 建议安装 pm2 来守护进程 (npm install -g pm2)"
        npm start
    fi
fi
