import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  BookmarkIcon,
  Share2,
  Building,
  ChevronDown,
  Heart,
} from "lucide-react";
import HomePage from "./HomePage.jsx";
import Nav from "./Nav.jsx";

const JobBoardSketches = ({ pageControls }) => {
  const { currentPage, setCurrentPage, pages } = pageControls;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Selector */}
        <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Job Board Application - Page Sketches
          </h1>
          <Nav />
        </div>

        {/* Sketch Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {currentPage === "home" && <HomePage />}
        </div>
      </div>
    </div>
  );
};

export default JobBoardSketches;
