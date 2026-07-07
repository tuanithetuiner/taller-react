import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch'
import ItemList from './components/ItemList'
import SearchBar from './components/SearchBar'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data, loading, error } = useFetch(API_URL)
  const characters = data?.results ?? []

  const [search, setSearch] = useState('')

  const filteredCharacters = useMemo(() => {
    return characters.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [characters, search])

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Portal Directorio</h1>

      {loading && <p className="text-center text-green-600">Cargando personajes...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <>
          <SearchBar value={search} onChange={setSearch} />
          <ItemList characters={filteredCharacters} />
        </>
      )}
    </div>
  )
}

export default App