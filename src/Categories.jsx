export default function Categories({
  categories,
  selectedCategory,
  setCategory,
}) {
  let output = <div>Error loading categories. Please try again later.</div>;
  categories === "error"
    ? output
    : !categories
    ? (output = <div>Loading categories...</div>)
    : (output = (
        <ul className="categories">
          {categories.map((category) => (
            <li
              key={category}
              className={`categories--item ${
                selectedCategory === category ? "categories--item-selected" : ""
              }`}
              onClick={(e) => setCategory(e.target.textContent)}
            >
              {category}
            </li>
          ))}
        </ul>
      ));
  return output;
}
