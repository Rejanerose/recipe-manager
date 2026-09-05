const FILTERS = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

export default function CategoryFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* TODO: render one button per FILTERS entry.
          - Each button calls onFilterChange(f) on click.
          - The active button should look different from the others
            (e.g., "btn-primary" for active, "btn-outline" otherwise).
          - Don't forget the `key` prop! */}

          {FILTERS.map(f=> (
            <button 
            key = {f}
            onClick = {() => onFilterChange(f)}
            classname={filter === f ? "btn-primary" : "btn-outline"} 
            > 
            {f}
            </button>
          ))};

          {FILTERS.map(f=> (
            <button 
            key = {f}
            onClick = {() => onFilterChange(f)}
            classname={activeFilter === f ? "btn-primary" : "btn-outline"} 
            > 
            {f}
            </button>
          ))}


    </div>
  );
}
