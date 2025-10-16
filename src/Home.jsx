import { Search } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "./App.jsx";
import Nav from "./Nav";
import JobTitle from "./JobTitle.jsx";
import Provinces from "./Provinces.jsx";

export default function Home() {
  const { titleControls, provincesControls, runsControls } =
    useContext(Context);
  const navigate = useNavigate();
  const { titles } = titleControls;
  const { selectedProvinces } = provincesControls;
  const { setRuns } = runsControls;
  const handleSearch = () => {
    const selProv = Array.from(selectedProvinces);
    const newRuns = [];
    if (titles.length !== 0) {
      titles.forEach((t) => {
        selProv.forEach((p) => {
          newRuns.push({
            title: t,
            selProvince: p,
            runUrl: `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(
              t
            )}&location=${encodeURIComponent(p)}`,
            status: { loading: false, error: null, data: null },
          });
        });
      });
      setRuns(newRuns);

      navigate("/jobListing");
    }
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
              <button
                onClick={() => handleSearch()}
                className="bg-blue-600 text-white px-8 py-3 rounded font-medium"
              >
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
