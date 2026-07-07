import ItemCard from './ItemCard'

function ItemList({ characters }) {
  if (characters.length === 0) {
    return <p className="text-center text-gray-500 py-10">No se encontraron personajes.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <ItemCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default ItemList