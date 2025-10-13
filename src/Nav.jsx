import { Link } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "./App.jsx";

export default function Nav() {
  const { currentPage, setCurrentPage, pages } = useContext(PageContext);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4 flex items-center justify-start flex-wrap">
      <h1 className="text-2xl font-bold text-gray-800 mr-4">
        Job Board Application - Page Sketches
      </h1>
      <div className="flex gap-2 flex-wrap self-center ml-auto">
        {pages.map((page) => (
          <Link to={page.path} key={page.id}>
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
    </div>
  );
}
