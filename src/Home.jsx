import { Search, MapPin, ChevronDown } from "lucide-react";
import Nav from "./Nav";

const Home = () => {
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

      {/* Sketch Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Hero Section */}
          <div className="border-2 border-blue-400 rounded p-12 mb-6 text-center bg-blue-50">
            <h1 className="text-4xl font-bold mb-3">
              Find Your Dream Job in the Netherlands
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access 2M+ fresh job listings updated hourly
            </p>

            {/* Search Bar */}
            <div className="border-2 border-gray-400 rounded-lg p-4 bg-white max-w-4xl mx-auto">
              <div className="flex gap-3 mb-3">
                <div className="flex-1 border border-gray-300 rounded p-3 text-left">
                  <Search className="inline w-4 h-4 mr-2" />
                  <span className="text-gray-500">Job title or keyword</span>
                </div>
                <div className="flex-1 border border-gray-300 rounded p-3 text-left">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  <span className="text-sm font-medium mb-2">Location</span>
                  <div className="space-y-1 text-sm">
                    {provinces.map((province) => (
                      <div key={province}>☐ {province}</div>
                    ))}
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium">
                  Search
                </button>
              </div>

              {/* Advanced Filters Collapsed */}
              <div className="text-left text-sm text-blue-600 cursor-pointer">
                <ChevronDown className="inline w-4 h-4" /> Advanced Filters
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <div className="border-2 border-gray-300 rounded p-6 mb-6 bg-gray-50">
            <h3 className="font-bold mb-4">Advanced Filters</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm font-medium mb-2">Employment Type</div>
                <div className="space-y-1 text-sm">
                  <div>☐ Full-time</div>
                  <div>☐ Part-time</div>
                  <div>☐ Contract</div>
                  <div>☐ Internship</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Experience Level</div>
                <div className="border border-gray-300 rounded p-2 text-sm bg-white">
                  Select experience ▼
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Work Arrangement</div>
                <div className="space-y-1 text-sm">
                  <div>⚪ Remote Only</div>
                  <div>⚪ Hybrid</div>
                  <div>⚪ On-site</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Salary Range</div>
                <div className="border border-gray-300 rounded p-2 bg-white">
                  <div className="h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Date Posted</div>
                <div className="border border-gray-300 rounded p-2 text-sm bg-white">
                  Last 7 days ▼
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Seniority Level</div>
                <div className="border border-gray-300 rounded p-2 text-sm bg-white">
                  Select levels ▼
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">20,000+</div>
              <div className="text-sm text-gray-600 mt-1">
                Jobs Added Hourly
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">2M+</div>
              <div className="text-sm text-gray-600 mt-1">Weekly Listings</div>
            </div>
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">7-Day</div>
              <div className="text-sm text-gray-600 mt-1">Fresh Data</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
