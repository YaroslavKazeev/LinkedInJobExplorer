import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import JobListing from "./jobListing.jsx";
import JobDetails from "./jobDetails.jsx";

const PageContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pages = [
    { id: "home", name: "Home Page", path: "/" },
    { id: "listings", name: "Job Listings", path: "/jobListing" },
    { id: "details", name: "Job Details", path: "/jobDetails" },
  ];
  const pageControls = {
    currentPage,
    setCurrentPage,
    pages,
  };

  return (
    <PageContext.Provider value={pageControls}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobListing" element={<JobListing />} />
          <Route path="/jobDetails" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </PageContext.Provider>
  );
}

export { App, PageContext };
