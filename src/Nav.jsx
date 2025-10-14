import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./App.jsx";

export default function Nav() {
  const { pages } = useContext(Context);
  const pathname = useLocation().pathname;
  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4 flex items-center justify-start flex-wrap">
      <Link to="/" className="mr-4">
        <h1 className="text-2xl font-bold text-gray-800">
          LinkedIn Job Explorer
        </h1>
      </Link>
      <div className="flex gap-2 flex-wrap self-center ml-auto">
        {pages.map((page) => (
          <Link to={page.path} key={page.path}>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                pathname === page.path
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
