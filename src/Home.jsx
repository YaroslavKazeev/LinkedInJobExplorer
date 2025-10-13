import { useState } from "react";
import Nav from "./Nav";
import JobTitle from "./JobTitle.jsx";
import Provinces from "./Provinces.jsx";
import { Search } from "lucide-react";

export default function Home() {
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

  return (
    <>
      <Nav />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="border-2 border-blue-400 rounded p-12 mb-6 text-center bg-blue-50">
            <h1 className="text-3xl font-bold mb-3">
              Find Your Dream Job in the Netherlands
            </h1>
            <div className="border-2 border-gray-400 rounded-lg p-4 bg-white max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3 mb-3">
                <JobTitle />
                <Provinces />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium">
                <Search className="inline w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
