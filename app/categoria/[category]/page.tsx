import { getNewsByCategory } from '@/lib/data';
import NewsCard from '@/components/news-card';
import { notFound } from 'next/navigation';

const categoryNames: Record<string, string> = {
  politica: 'Política',
  economia: 'Economía',
  deportes: 'Deportes',
  cultura: 'Cultura',
  tecnologia: 'Tecnología'
};

// @ts-ignore - Temporal fix for Next.js 15.2.4 type issues with params
export default async function CategoryPage({
  params
}: {
  params: any
}) {
  const { category } = params as { category: string };
  const news = getNewsByCategory(category);

  if (!news.length || !categoryNames[category]) {
    notFound();
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
        {categoryNames[category]}
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
