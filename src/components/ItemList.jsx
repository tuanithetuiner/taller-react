import PropTypes from 'prop-types'
import ItemCard from './ItemCard'

function ItemList({ characters, favorites, onToggleFavorite, onToggleBlock }) {
  console.log("onToggleBlock recibido en ItemList:", onToggleBlock)

  if (characters.length === 0) {
    return <p className="text-center text-gray-500 py-10">No se encontraron personajes.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <ItemCard
          key={character.id}
          character={character}
          isFavorite={favorites.includes(character.id)}
          onToggleFavorite={onToggleFavorite}
          onToggleBlock={onToggleBlock}
        />
      ))}
    </div>
  )
}

ItemList.propTypes = {
  characters: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onToggleBlock: PropTypes.func.isRequired,
}

export default ItemList
