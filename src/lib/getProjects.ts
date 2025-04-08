import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ProjectMeta = {
  title: string;
  description: string;
  link: string;
  slug: string;
};

export function getProjects(): ProjectMeta[] {
  const dir = path.join(process.cwd(), 'content/projects');
  const files = fs.readdirSync(dir);

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      link: data.link,
      slug: data.slug,
    };
  });
}
