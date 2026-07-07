import PropTypes from 'prop-types'
import { statusColor, statusES, speciesES } from '../utils/translations'

function ItemCard({ character, isFavorite, onToggleFavorite, onToggleBlock }) {
  const { name, image, status, species, location } = character

  return (
    <div className="relative bg-[#121821] rounded-xl overflow-hidden border border-green-900/40 hover:border-green-500/50 transition-colors">
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
        <h3 className="font-bold text-white truncate">{name}</h3>
        <div className="flex items-center gap-1.5 text-sm text-gray-400">
          <span className={`inline-block w-2 h-2 rounded-full ${statusColor[status] ?? statusColor.unknown}`} />
          {statusES[status] ?? status} · {speciesES[species] ?? species}
        </div>
        <p className="text-xs text-gray-500 truncate">📍 {location?.name ?? 'Desconocida'}</p>
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
