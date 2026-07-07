function BlockedList({ blockedCharacters, onToggleBlock }) {
  return (
    <aside className="bg-[#121821] border border-green-900/40 rounded-xl p-4 h-fit">
      <h2 className="font-bold text-purple-500 mb-3">
        🔒 Bloqueados ({blockedCharacters.length})
      </h2>

      {blockedCharacters.length === 0 ? (
        <p className="text-sm text-gray-400">No has bloqueado personajes.</p>
      ) : (
        <ul className="space-y-2">
          {blockedCharacters.map((character) => (
            <li
              key={character.id}
              className="flex items-center gap-2 bg-[#1a202c] rounded-lg p-2 border border-green-900/30"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-9 h-9 rounded-full object-cover grayscale"
              />
              <span className="text-sm flex-1 truncate text-white">{character.name}</span>
              <button
                onClick={() => onToggleBlock(character.id)}
                className="text-xs text-purple-400 border border-purple-300 rounded-full px-2 py-0.5 hover:bg-purple-500 hover:text-white transition-colors"
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
