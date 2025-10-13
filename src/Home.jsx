import { useState } from "react";
import { MapPin } from "lucide-react";
import Nav from "./Nav";
import JobTitle from "./JobTitle.jsx";

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
                <JobTitle
                  titleControls={titleControls}
                  className="md:basis-1/2 flex-1 min-w-0 border border-gray-300 rounded p-3 text-left"
                />
                <div className="md:basis-1/2 flex-1 min-w-0 border border-gray-300 rounded p-3 text-left">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  <span className="text-sm font-medium mb-2">
                    Choose the convenient province(s):
                  </span>
                  <div className="space-y-1 text-sm">
                    {provinces.map((province, idx) => {
                      const id = `province-${idx}`;
                      return (
                        <div key={province} className="flex items-center gap-2">
                          <input
                            id={id}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <label htmlFor={id} className="select-none">
                            {province}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
