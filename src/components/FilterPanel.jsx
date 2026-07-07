import { statusES, speciesES } from '../utils/translations'

const statusOptions = Object.keys(statusES)
const speciesOptions = Object.keys(speciesES).filter((key) => key !== 'unknown')

function FilterDropdown({ label, options, labels, selected, onToggle }) {
  return (
    <details className="relative">
      <summary className="cursor-pointer list-none border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 select-none">
        {label} {selected.length > 0 && `(${selected.length})`}
      </summary>
      <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-48">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 py-1 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
            />
            {labels[option]}
          </label>
        ))}
      </div>
    </details>
  )
}

function FilterPanel({ statusFilter, onToggleStatus, speciesFilter, onToggleSpecies }) {
  return (
    <div className="flex gap-3 mb-5">
      <FilterDropdown
        label="Estado"
        options={statusOptions}
        labels={statusES}
        selected={statusFilter}
        onToggle={onToggleStatus}
      />
      <FilterDropdown
        label="Especie"
        options={speciesOptions}
        labels={speciesES}
        selected={speciesFilter}
        onToggle={onToggleSpecies}
      />
    </div>
  )
}

export default FilterPanel