import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { getNewsBySlug, getRelatedNews } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import NewsCard from "@/components/news-card"
import { Separator } from "@/components/ui/separator"
import ImageWithFallback from "@/components/imageWithFallback"

const categoryNames: Record<string, string> = {
  politica: "Política",
  economia: "Economía",
  deportes: "Deportes",
  cultura: "Cultura",
  tecnologia: "Tecnología",
}

export default async function NewsPage({ params }: { params: { slug: string } }) {

  const { slug } = await params
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedNews = getRelatedNews(article);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-2">
            <Link
              href={`/categoria/${article.category}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {categoryNames[article.category] || article.category}
            </Link>
            {' / '}
            <span className="text-sm text-muted-foreground">
              {article.title}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {article.title}
          </h1>

          <div className="mb-6 flex items-center gap-4">
            <Badge variant="outline">
              {categoryNames[article.category] || article.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
            <div className="text-sm text-muted-foreground">
              Por: {article.source}
            </div>
          </div>

          <div className="mb-6 overflow-hidden rounded-lg">
            <ImageWithFallback
              src={article.image}
              fallbackSrc="/placeholder.jpg"
              alt={article.title}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>

          <div
            className="prose prose-stone max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <h2 className="mb-4 text-xl font-bold">Noticias relacionadas</h2>
            <Separator className="mb-4" />
            <div className="space-y-4">
              {relatedNews.map((relatedArticle) => (
                <NewsCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
