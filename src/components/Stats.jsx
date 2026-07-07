function Stats({ total, favoritesCount, blockedCount }) {
  const items = [
    { label: 'Totales', value: total, color: 'text-gray-800' },
    { label: 'Favoritos', value: favoritesCount, color: 'text-yellow-500' },
    { label: 'Bloqueados', value: blockedCount, color: 'text-purple-500' },
  ]

  return (
    <div className="flex gap-4 mb-5">
      {items.map((item) => (
        <div key={item.label} className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-center">
          <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
          <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats