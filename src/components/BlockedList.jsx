function BlockedList({ blockedCharacters, onToggleBlock }) {
  return (
    <aside className="w-full lg:w-72 shrink-0 bg-white border border-gray-200 rounded-xl p-4 h-fit">
      <h2 className="font-bold text-purple-500 mb-3">
        🔒 Bloqueados ({blockedCharacters.length})
      </h2>

      {blockedCharacters.length === 0 ? (
        <p className="text-sm text-gray-400">No has bloqueado personajes.</p>
      ) : (
        <ul className="space-y-2">
          {blockedCharacters.map((character) => (
            <li key={character.id} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
              <img src={character.image} alt={character.name} className="w-9 h-9 rounded-full object-cover grayscale" />
              <span className="text-sm flex-1 truncate">{character.name}</span>
              <button
                onClick={() => onToggleBlock(character.id)}
                className="text-xs text-purple-500 border border-purple-300 rounded-full px-2 py-0.5"
              >
                Desbloquear
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default BlockedList