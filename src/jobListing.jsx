import { Search, MapPin, Clock, Heart } from "lucide-react";

const JobListing = ({ pageControls }) => {
  const { currentPage, setCurrentPage, pages } = pageControls;
  return (
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
              <Search className="w-4 h-4 mr-2" />
              <span className="text-sm text-gray-600">
                Software Engineer • Remote
              </span>
              <button className="ml-auto text-xs text-blue-600">Edit</button>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <span>Home</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Sidebar */}
        <div className="w-64 border-2 border-gray-300 rounded p-4">
          <div className="mb-4">
            <h3 className="font-bold mb-2 text-sm">Applied Filters</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Remote ×
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Full-time ×
              </span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="space-y-4">
            <div>
              <div className="font-medium text-sm mb-2">Company</div>
              <input
                className="w-full border border-gray-300 rounded p-1 text-xs"
                placeholder="Search companies..."
              />
            </div>

            <div>
              <div className="font-medium text-sm mb-2">Location</div>
              <div className="text-xs space-y-1">
                <div>☐ San Francisco, CA</div>
                <div>☐ New York, NY</div>
                <div>☐ Austin, TX</div>
              </div>
            </div>

            <div>
              <div className="font-medium text-sm mb-2">Employment Type</div>
              <div className="text-xs space-y-1">
                <div>☑ Full-time</div>
                <div>☐ Part-time</div>
                <div>☐ Contract</div>
              </div>
            </div>

            <div>
              <div className="font-medium text-sm mb-2">Experience</div>
              <div className="text-xs space-y-1">
                <div>☐ 0-2 years</div>
                <div>☐ 2-5 years</div>
                <div>☐ 5-10 years</div>
              </div>
            </div>

            <button className="w-full text-xs text-blue-600 border border-blue-600 rounded py-2">
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              Showing 1-100 of 2,000+ jobs
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Sort by:</span>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>Relevance</option>
                <option>Date Posted (Newest)</option>
              </select>
            </div>
          </div>

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
                      <Heart className="w-5 h-5 text-gray-400" />
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

          <div className="mt-6 text-center">
            <button className="border-2 border-gray-300 rounded px-6 py-2 text-sm font-medium">
              Load More Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
