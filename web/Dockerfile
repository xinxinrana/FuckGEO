# 使用轻量级 Node.js 作为基础镜像
FROM node:20-alpine AS base

# --- 阶段 1: 安装依赖 ---
FROM base AS deps
# 针对 Alpine 镜像可能需要的库
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 仅复制 package 文件以利用 Docker 缓存
COPY package.json package-lock.json ./
RUN npm ci

# --- 阶段 2: 构建项目 ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 禁用 Next.js 遥测以提高隐私和速度
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# --- 阶段 3: 运行阶段 ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 创建非 root 用户运行，更安全
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制构建产物
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3005

ENV PORT 3005

# 启动命令
CMD ["npm", "start"]
