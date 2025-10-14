import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import JobListing from "./JobListing.jsx";
import JobDetails from "./JobDetails.jsx";
import About from "./About.jsx";
const Context = createContext();

function App() {
  const pages = [
    { element: <Home />, name: "Home Page", path: "/" },
    { element: <JobListing />, name: "Job Listing", path: "/jobListing" },
    { element: <JobDetails />, name: "Job Details", path: "/jobDetails" },
    { element: <About />, name: "About", path: "/about" },
  ];

  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const addTitle = () => {
    const t = String(title || "").trim();
    if (!t) return;
    setTitles((prev) => [...prev, t]);
    setTitle("");
  };
  const removeTitle = (index) => {
    setTitles((prev) => prev.filter((_, i) => i !== index));
  };
  const titleControls = {
    title,
    setTitle,
    titles,
    setTitles,
    addTitle,
    removeTitle,
  };

  const provinces = [
    "Drenthe",
    "Flevoland",
    "Friesland",
    "Gelderland",
    "Groningen",
    "Limburg",
    "North Brabant",
    "North Holland",
    "Overijssel",
    "South Holland",
    "Utrecht Area",
    "Zeeland",
  ];
  const [selectedProvinces, setSelectedProvinces] = useState(
    () => new Set(["Gelderland"])
  );
  const toggleProvince = (province) => {
    setSelectedProvinces((prev) => {
      let selProvinces = new Set(prev);
      if (prev.has(province)) {
        prev.size === 1 ? selProvinces : selProvinces.delete(province);
      } else {
        selProvinces.add(province);
      }
      return selProvinces;
    });
  };
  const provincesControls = {
    provinces,
    selectedProvinces,
    toggleProvince,
  };

  const allStateControls = { pages, titleControls, provincesControls };

  return (
    <Context.Provider value={allStateControls}>
      <BrowserRouter>
        <Routes>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export { App, Context };
