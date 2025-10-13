import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import JobListing from "./jobListing.jsx";
import JobDetails from "./jobDetails.jsx";

const pageContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pages = [
    { id: "home", name: "Home Page", route: "/" },
    { id: "listings", name: "Job Listings", route: "/jobListing" },
    { id: "detail", name: "Job Detail", route: "/jobDetails" },
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
          <Route path="/" element={<Home pageControls={pageControls} />} />
          <Route
            path="/jobListing"
            element={<JobListing pageControls={pageControls} />}
          />
          <Route
            path="/jobDetails"
            element={<JobDetails pageControls={pageControls} />}
          />
        </Routes>
      </BrowserRouter>
    </pageContext.Provider>
  );
}

export { App, pageContext };
