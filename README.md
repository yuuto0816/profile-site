# My Portfolio Site

個人ポートフォリオサイトです。

## 💻 使用技術 (Tech Stack)

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **CI/CD**: GitHub Actions (Linting / .nvmrc)
- **Deployment**: Vercel

## 🛠️ 開発スタイルと品質管理 (Development Style)

このプロジェクトでは、生成AIを活用した「バイブコーディング」を積極的に取り入れています。単にAIが出力したコードをコピーするのではなく、以下のプロセスを通じて自身の技術力向上と品質担保を両立させています。

- **コードの意図を解読**: AIが提案したコードに対し、そのロジックや意図を読み解き、自身の知識として定着させるよう頑張っています！
- **CI（継続的インテグレーション）によるガードレール**: GitHub Actionsを構築し、プルリクエストごとに自動で `npm run lint` が実行される仕組みを導入しました。これにより、AIとの対話で生まれたコードがプロジェクトの規約に則っているかを常に検証しています。
- **実行環境の厳密な管理**: `.nvmrc` を活用し、ローカル開発環境とCI環境のNode.jsバージョンを統一するなど意識して運用しています。

## ✨ こだわったポイント・特徴

- **滑らかなアニメーション実装**
  Framer Motionを採用し、ページ読み込み時のローディングアニメーションや、スクロールに連動した要素のフェードイン処理を実装しました。
- **コンポーネント指向の設計**
  保守性と再利用性を高めるため、UI要素を適切な粒度でコンポーネント（`Header`, `AboutMe`, `Works` など）に分割して管理しています。

## 🚀 ローカルでの起動方法 (Getting Started)

リポジトリをクローン後、以下のコマンドで開発サーバーを起動できます。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev