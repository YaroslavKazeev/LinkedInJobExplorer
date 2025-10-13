import { MapPin, Clock } from "lucide-react";
import Nav from "./Nav";
import { Context } from "./App.jsx";
import { useContext } from "react";

const Home = () => {
  const { titleControls, provincesControls } = useContext(Context);
  const { titles } = titleControls;
  const { selectedProvinces } = provincesControls;

  return (
    <>
      <Nav />
      <div className="p-8">
        {/* Header */}
        <div className="border-2 border-gray-300 rounded p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
              <span className="font-bold">JobBoard</span>
            </div>
            <div className="flex-1 mx-8">
              <div className="border border-gray-300 rounded p-2 flex items-center bg-white">
                <span className="text-sm text-gray-600">
                  {titles.join(", ")} •{" "}
                  {Array.from(selectedProvinces).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Job Cards */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-2 border-gray-300 rounded p-4 hover:border-blue-400 transition"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          Senior Software Engineer
                        </h3>
                        <div className="text-sm text-blue-600 mb-2">
                          Tech Company Inc.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Remote
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        Full-time
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        $120k-$180k
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>San Francisco, CA • Remote OK</span>
                      <Clock className="w-3 h-3 ml-2" />
                      <span>2 hours ago</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      We're looking for an experienced engineer to join our team
                      and help build scalable solutions...
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          React
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Node.js
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          AWS
                        </span>
                      </div>
                      <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                        Quick Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
