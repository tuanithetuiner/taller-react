function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar personaje por nombre..."
      className="w-full bg-[#121821] border border-green-900/40 rounded-full py-2 px-4 mb-5 outline-none focus:border-green-500 text-white placeholder:text-gray-500"
    />
  )
}

export default SearchBar
