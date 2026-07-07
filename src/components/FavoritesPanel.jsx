import PropTypes from 'prop-types'

function FavoritesPanel({ favoriteCharacters, onToggleFavorite }) {
  console.log("Favoritos recibidos en FavoritesPanel:", favoriteCharacters)

  return (
    <aside className="w-full lg:w-72 shrink-0 bg-white border border-gray-200 rounded-xl p-4 h-fit">
      <h2 className="font-bold text-yellow-500 mb-3">
        ★ Favoritos ({favoriteCharacters.length})
      </h2>

      {favoriteCharacters.length === 0 ? (
        <p className="text-sm text-gray-400">Aún no tienes favoritos.</p>
      ) : (
        <ul className="space-y-2">
          {favoriteCharacters.map((character) => (
            <li key={character.id} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
              <img
                src={character.image}
                alt={character.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-sm flex-1 truncate">{character.name}</span>
              <button
                onClick={() => onToggleFavorite(character.id)}
                className="text-gray-400 hover:text-red-500 text-sm"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

FavoritesPanel.propTypes = {
  favoriteCharacters: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default FavoritesPanel
