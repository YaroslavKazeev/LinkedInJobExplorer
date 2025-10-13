import { Link } from "react-router-dom";
import { useContext } from "react";
import { pageContext } from "./App.jsx";

export default function Nav() {
  const { currentPage, setCurrentPage, pages } = useContext(pageContext);

  return (
    <div className="flex gap-2 flex-wrap">
      {pages.map((page) => (
        <Link to={page.route} key={page.id}>
          <button
            onClick={() => setCurrentPage(page.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === page.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page.name}
          </button>
        </Link>
      ))}
    </div>
  );
}
