function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar personaje por nombre..."
      className="w-full border border-gray-300 rounded-full py-2 px-4 mb-5 outline-none focus:border-green-500"
    />
  )
}

export default SearchBar