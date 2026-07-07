import PropTypes from 'prop-types'

function ItemCard({ character, isFavorite, onToggleFavorite, onToggleBlock }) {
  const { name, image, status, species, location } = character

  console.log("onToggleBlock recibido en ItemCard:", onToggleBlock)

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow border border-gray-200">
      <button
        onClick={() => onToggleFavorite(character.id)}
        className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg ${
          isFavorite ? 'bg-yellow-400 text-white' : 'bg-white/80 text-gray-400'
        }`}
      >
        {isFavorite ? '★' : '☆'}
      </button>
      <button
        onClick={() => onToggleBlock(character.id)}
        className="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white/80 text-gray-500 hover:bg-purple-500 hover:text-white"
      >
        🔒
      </button>
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500">{status} · {species}</p>
        <p className="text-xs text-gray-400 truncate">📍 {location?.name ?? 'Desconocida'}</p>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  character: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onToggleBlock: PropTypes.func.isRequired,
}

export default ItemCard
