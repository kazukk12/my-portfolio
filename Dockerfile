# ベースイメージ
FROM node:20-alpine

# 作業ディレクトリ作成
WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json* ./

# 依存インストール
RUN npm install

# アプリコードを全てコピー
COPY . .

# ポート公開（Next.jsデフォルトは3000）
EXPOSE 3000

# 開発サーバー起動
CMD ["npm", "run", "dev"]
