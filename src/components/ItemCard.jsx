function ItemCard({ character, isFavorite, onToggleFavorite }) {
  const { name, image, status, species, location } = character

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
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500">{status} · {species}</p>
        <p className="text-xs text-gray-400 truncate">📍 {location?.name ?? 'Desconocida'}</p>
      </div>
    </div>
  )
}

export default ItemCard