# 基本 Node.js 環境設置
FROM node:20-alpine AS base
WORKDIR /app

# 安裝依賴階段
FROM base AS deps

# 複製必要的檔案以優化依賴安裝緩存
COPY package.json pnpm-lock.yaml ./

# 使用 PNPM 安裝依賴
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# 編譯項目階段 (Standalone 模式構建)
FROM base AS builder
WORKDIR /app

# 複製依賴和代碼
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 使用 NX 建構 Standalone 應用
RUN npx nx build member

# 運行階段
FROM base AS runner
WORKDIR /app

# 設定環境變數
ENV NODE_ENV=production
ENV PORT=3002
ENV HOSTNAME="0.0.0.0"

# 複製編譯完成的 standalone 檔案
COPY --from=builder /app/apps/member/public ./apps/member/public
COPY --from=builder /app/apps/member/.next/standalone ./
COPY --from=builder /app/apps/member/.next/static ./apps/member/.next/static

# 暴露應用埠口
EXPOSE 3002

# 啟動應用程序
CMD ["node", "apps/member/server.js"]
