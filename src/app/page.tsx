export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">小林 和真</h1>
        <p className="text-xl text-gray-600">フルスタック志向のエンジニア / 個人開発でスキルアップ中</p>
      </section>

      {/* About */}
      <section className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-2">自己紹介</h2>
        <p>LaravelやNext.jsを使ってフルスタックに挑戦中。現在はポートフォリオ開発を通じてReactやDockerも学習しています！</p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">スキル</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-semibold">HTML / CSS</p>
            <p className="text-sm text-gray-500">基本OK</p>
          </div>
          <div>
            <p className="font-semibold">JavaScript / TypeScript</p>
            <p className="text-sm text-gray-500">React/Next.js学習中</p>
          </div>
          <div>
            <p className="font-semibold">Laravel / PHP</p>
            <p className="text-sm text-gray-500">業務経験あり</p>
          </div>
          <div>
            <p className="font-semibold">Docker</p>
            <p className="text-sm text-gray-500">開発環境構築済み</p>
          </div>
          <div>
            <p className="font-semibold">Git / GitHub</p>
            <p className="text-sm text-gray-500">ブランチ運用OK</p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">リンク</h2>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/your-username" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://x.com/your-twitter" className="text-blue-500 hover:underline">X（旧Twitter）</a>
        </div>
      </section>
    </main>
  );
}
