// src/app/projects/page.tsx
import { getProjects } from '@/lib/getProjects';

export default function ProjectsPage() {
  const projects = getProjects(); // Markdownから取得！

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
