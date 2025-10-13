import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import JobListing from "./jobListing.jsx";
import JobDetails from "./jobDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobListing" element={<JobListing />} />
        <Route path="/jobDetails" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
