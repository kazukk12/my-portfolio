import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-white shadow-md px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Kazuma's Portfolio
          </Link>
          <nav className="space-x-6">
            <Link href="/projects" className="text-gray-600 hover:text-black">プロジェクト</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">お問い合わせ</Link>
          </nav>
        </div>
      </header>
    );
  }