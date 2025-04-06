type Project = {
  title : string;
  description : string;
  link : string;
}

const projects: Project[] = [
  {
    title: 'フーディー！',
    description: '位置情報×レビュアーの飲食店推薦アプリ',
    link: 'https://github.com/your-name/foodie',
  },
  {
    title: 'Voppy',
    description: '音声版Twitter風の会話SNSアプリ',
    link: 'https://github.com/your-name/voppy',
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">プロジェクト一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub リポジトリ →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
