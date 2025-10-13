import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import JobListing from "./JobListing.jsx";
import JobDetails from "./JobDetails.jsx";
import About from "./About.jsx";

const PageContext = createContext();

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

  return (
    <PageContext.Provider value={pageControls}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobListing" element={<JobListing />} />
          <Route path="/jobDetails" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </PageContext.Provider>
  );
}

export { App, PageContext };
