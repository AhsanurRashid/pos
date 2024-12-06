'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const ProductSearch = ({ onSearch = (query: string) => {} }: { onSearch?: (query: string) => void }) => {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="pl-10 pr-4"
      />
    </div>
  )
}

export default ProductSearch