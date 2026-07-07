import { useFetch } from './hooks/useFetch'
import ItemList from './components/ItemList'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data, loading, error } = useFetch(API_URL)
  const characters = data?.results ?? []

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Portal Directorio</h1>

      {loading && <p className="text-center text-green-600">Cargando personajes...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && <ItemList characters={characters} />}
    </div>
  )
}

export default App