import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch'
import ItemList from './components/ItemList'
import SearchBar from './components/SearchBar'
import FavoritesPanel from './components/FavoritesPanel'
import BlockedList from './components/BlockedList'
import Stats from './components/Stats'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data, loading, error } = useFetch(API_URL)
  const characters = data?.results ?? []

  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])
  const [blocked, setBlocked] = useState([])

  const filteredCharacters = useMemo(() => {
    return characters
      .filter((c) => !blocked.includes(c.id))
      .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
  }, [characters, search, blocked])

  const favoriteCharacters = useMemo(
    () => characters.filter((c) => favorites.includes(c.id)),
    [characters, favorites]
  )

  const blockedCharacters = useMemo(
    () => characters.filter((c) => blocked.includes(c.id)),
    [characters, blocked]
  )

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  function toggleBlock(id) {
    setBlocked((prev) => {
      const yaBloqueado = prev.includes(id)
      if (yaBloqueado) {
        return prev.filter((blockedId) => blockedId !== id)
      }
      // Si se bloquea un elemento que estaba en favoritos, se retira de favoritos.
      setFavorites((favs) => favs.filter((favId) => favId !== id))
      return [...prev, id]
    })
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Portal Directorio</h1>

      {loading && <p className="text-center text-green-600">Cargando personajes...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <Stats
              total={characters.length}
              favoritesCount={favorites.length}
              blockedCount={blocked.length}
            />
            <SearchBar value={search} onChange={setSearch} />
            <ItemList
              characters={filteredCharacters}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onToggleBlock={toggleBlock}
            />
          </div>

          <div className="flex flex-col gap-6 lg:w-72 shrink-0">
            <FavoritesPanel
              favoriteCharacters={favoriteCharacters}
              onToggleFavorite={toggleFavorite}
            />
            <BlockedList
              blockedCharacters={blockedCharacters}
              onToggleBlock={toggleBlock}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App