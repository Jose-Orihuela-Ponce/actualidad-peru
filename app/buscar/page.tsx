"use client"

import type React from "react"

import { useState } from "react"
import { newsData } from "@/lib/data"
import NewsCard from "@/components/news-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState(newsData)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchTerm.trim()) {
      setSearchResults(newsData)
      return
    }

    const term = searchTerm.toLowerCase()
    const results = newsData.filter(
      (article) =>
        article.title.toLowerCase().includes(term) ||
        article.summary.toLowerCase().includes(term) ||
        article.content.toLowerCase().includes(term),
    )

    setSearchResults(results)
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Buscar Noticias</h1>

      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <Input
          type="text"
          placeholder="Buscar noticias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          Buscar
        </Button>
      </form>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No se encontraron resultados para "{searchTerm}".</p>
      )}
    </div>
  )
}

