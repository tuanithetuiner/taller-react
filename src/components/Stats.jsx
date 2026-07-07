function Stats({ total, favoritesCount, blockedCount }) {
  const items = [
    { label: 'Totales', value: total, color: 'text-gray-200' },
    { label: 'Favoritos', value: favoritesCount, color: 'text-yellow-400' },
    { label: 'Bloqueados', value: blockedCount, color: 'text-purple-400' },
  ]

  return (
    <div className="flex gap-4 mb-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex-1 bg-[#121821] border border-green-900/40 rounded-xl px-4 py-3 text-center hover:border-green-500/50 transition-colors"
        >
          <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
          <p className="text-xs text-gray-400 mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats
