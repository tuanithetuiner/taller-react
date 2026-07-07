import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch'
import ItemList from './components/ItemList'
import SearchBar from './components/SearchBar'
import FavoritesPanel from './components/FavoritesPanel'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data, loading, error } = useFetch(API_URL)
  const characters = data?.results ?? []

  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])

  const filteredCharacters = useMemo(() => {
    return characters.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [characters, search])

  const favoriteCharacters = useMemo(
    () => characters.filter((c) => favorites.includes(c.id)),
    [characters, favorites]
  )

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Portal Directorio</h1>

      {loading && <p className="text-center text-green-600">Cargando personajes...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <SearchBar value={search} onChange={setSearch} />
            <ItemList
              characters={filteredCharacters}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </div>

          <FavoritesPanel
            favoriteCharacters={favoriteCharacters}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      )}
    </div>
  )
}

export default App