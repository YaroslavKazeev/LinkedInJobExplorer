import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import JobListing from "./JobListing.jsx";
import JobDetails from "./JobDetails.jsx";
import About from "./About.jsx";

const Context = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pages = [
    { id: "home", name: "Home Page", path: "/" },
    { id: "listings", name: "Job Listings", path: "/jobListing" },
    { id: "details", name: "Job Details", path: "/jobDetails" },
    { id: "about", name: "About", path: "/about" },
  ];
  const pageControls = {
    pages,
    currentPage,
    setCurrentPage,
  };

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

  const allStateControls = { pageControls, titleControls, provincesControls };

  return (
    <Context.Provider value={allStateControls}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobListing" element={<JobListing />} />
          <Route path="/jobDetails" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export { App, Context };
