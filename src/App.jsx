import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import JobListing from "./jobListing.jsx";
import JobDetails from "./jobDetails.jsx";

const pageContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pages = [
    { id: "home", name: "Home Page", path: "/" },
    { id: "listings", name: "Job Listings", path: "/jobListing" },
    { id: "detail", name: "Job Detail", path: "/jobDetails" },
  ];
  const pageControls = {
    currentPage,
    setCurrentPage,
    pages,
  };

  return (
    <pageContext.Provider value={pageControls}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobListing" element={<JobListing />} />
          <Route path="/jobDetails" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </pageContext.Provider>
  );
}

export { App, pageContext };
