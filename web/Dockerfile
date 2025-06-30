FROM node:18.20.8 AS builder

WORKDIR /app

# 複製所有子專案
COPY contracts ./contracts
COPY sdk ./sdk
COPY web ./web

# 先安裝根目錄依賴（如果有 monorepo workspace）
# COPY package*.json ./
# RUN npm install

# 進 contracts build
WORKDIR /app/contracts
RUN npm install
RUN npm run compile
RUN npm run build

# 進 sdk build
WORKDIR /app/sdk
RUN npm install
RUN npm run build

# 進 web build
WORKDIR /app/web
RUN npm install
RUN npm run build

# --- Production image ---
FROM node:18.20.8
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/web/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]