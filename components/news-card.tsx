import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import type { NewsArticle } from "@/lib/data"
import ImageWithFallback from "./imageWithFallback"


interface NewsCardProps {
  article: NewsArticle
  variant?: "default" | "compact"
}

export default function NewsCard({ article, variant = "default" }: NewsCardProps) {
  const isCompact = variant === "compact"

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader className="p-0">
        <Link href={`/noticia/${article.slug}`}>
          <div className="relative aspect-[16/9] overflow-hidden">
            <ImageWithFallback
              src={article.image || "/placeholder.jpg"}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform hover:scale-105"
              priority
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className={`flex flex-col flex-grow ${isCompact ? "p-3" : "p-5"}`}>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {article.category === "politica"
              ? "Política"
              : article.category === "economia"
                ? "Economía"
                : article.category === "deportes"
                  ? "Deportes"
                  : article.category === "cultura"
                    ? "Cultura"
                    : article.category === "tecnologia"
                      ? "Tecnología"
                      : article.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
        </div>
        <Link href={`/noticia/${article.slug}`} className="group">
          <h3
            className={`min-h-[3rem] font-bold leading-tight tracking-tight group-hover:underline ${isCompact ? "text-base" : "text-xl"}`}
          >
            {article.title}
          </h3>
        </Link>
        {!isCompact && (
          <p className="flex flex-1 mt-2 min-h-[4.5rem] line-clamp-3 text-sm text-muted-foreground">
            {article.summary}
          </p>
        )}
      </CardContent>
      <CardFooter className={`mt-auto ${isCompact ? "px-3 pb-3 pt-0" : "px-5 pb-5 pt-0"}`}>
        <div className="text-xs text-muted-foreground">Fuente: {article.source}</div>
      </CardFooter>
    </Card>
  )
}

