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

const JobBoardSketches = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = [
    { id: "home", name: "Home Page", route: "/" },
    { id: "listings", name: "Job Listings", route: "/jobListing" },
    { id: "detail", name: "Job Detail", route: "/jobDetails" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Selector */}
        <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Job Board Application - Page Sketches
          </h1>
          <div className="flex gap-2 flex-wrap">
            {pages.map((page) => (
              <Link to={page.route}>
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {page.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Sketch Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {currentPage === "home" && <HomePage />}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="p-8">
    {/* Header */}
    <div className="border-2 border-gray-300 rounded p-4 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded"></div>
          <span className="font-bold text-lg">JobBoard</span>
        </div>
        <div className="flex gap-6 text-sm">
          <span className="font-medium">Home</span>
          <span className="text-gray-600">About</span>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>

    {/* Hero Section */}
    <div className="border-2 border-blue-400 rounded p-12 mb-6 text-center bg-blue-50">
      <h1 className="text-4xl font-bold mb-3">
        Find Your Dream Job on LinkedIn
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
            <span className="text-gray-500">City, State, or Remote</span>
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
        <div className="text-sm text-gray-600 mt-1">Jobs Added Hourly</div>
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
);

const ListingsPage = () => (
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

const DetailPage = () => (
  <div className="p-8">
    {/* Header */}
    <div className="border-2 border-gray-300 rounded p-4 mb-4">
      <div className="text-xs text-gray-600 mb-2">
        Home &gt; Search Results &gt; Senior Software Engineer
      </div>
    </div>

    <div className="flex gap-6">
      {/* Main Content */}
      <div className="flex-1">
        {/* Job Header */}
        <div className="border-2 border-gray-300 rounded p-6 mb-4">
          <div className="flex gap-4 mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded"></div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                Senior Software Engineer
              </h1>
              <div className="text-lg text-blue-600 mb-2">
                Tech Company Inc.
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>
                  <MapPin className="inline w-4 h-4" /> San Francisco, CA
                </span>
                <span>
                  <Clock className="inline w-4 h-4" /> Posted 2 hours ago
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium">
              Apply on LinkedIn
            </button>
            <button className="border-2 border-gray-300 px-6 py-3 rounded font-medium">
              <BookmarkIcon className="inline w-4 h-4 mr-2" />
              Save Job
            </button>
            <button className="border-2 border-gray-300 px-4 py-3 rounded">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="border-2 border-gray-300 rounded p-6 mb-4">
          <h2 className="font-bold text-xl mb-4">Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Employment Type</div>
              <div className="font-medium">Full-time</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Work Arrangement</div>
              <div className="font-medium">Remote OK</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Experience Required</div>
              <div className="font-medium">5-10 years</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Seniority Level</div>
              <div className="font-medium">Mid-Senior level</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Salary Range</div>
              <div className="font-medium text-green-600">
                $120,000 - $180,000/year
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Working Hours</div>
              <div className="font-medium">40 hours/week</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="border-2 border-gray-300 rounded p-6 mb-4">
          <h2 className="font-bold text-xl mb-4">Job Description</h2>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              We are seeking a talented Senior Software Engineer to join our
              dynamic team...
            </p>
            <p className="font-medium">Responsibilities:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Design and develop scalable web applications</li>
              <li>Collaborate with cross-functional teams</li>
              <li>Mentor junior developers</li>
            </ul>
            <p className="font-medium">Requirements:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>5+ years of software development experience</li>
              <li>Strong proficiency in React and Node.js</li>
              <li>Experience with AWS cloud services</li>
            </ul>
          </div>
        </div>

        {/* Key Skills */}
        <div className="border-2 border-gray-300 rounded p-6 mb-4">
          <h2 className="font-bold text-xl mb-4">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "AWS",
              "TypeScript",
              "MongoDB",
              "Docker",
              "Git",
              "Agile",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="border-2 border-gray-300 rounded p-6">
          <h2 className="font-bold text-xl mb-4">About the Company</h2>
          <p className="text-sm text-gray-700 mb-3">
            Tech Company Inc. is a leading innovator in cloud-based solutions,
            serving millions of users worldwide...
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-600">Industry:</span> Technology
            </div>
            <div>
              <span className="text-gray-600">Followers:</span> 125,000+
            </div>
            <div>
              <span className="text-gray-600">Specialties:</span> Cloud, AI,
              SaaS
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80">
        {/* Quick Info */}
        <div className="border-2 border-gray-300 rounded p-4 mb-4">
          <h3 className="font-bold mb-3">Quick Info</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-gray-600" />
              <div>San Francisco, CA, USA</div>
            </div>
            <div className="flex items-start gap-2">
              <Briefcase className="w-4 h-4 mt-0.5 text-gray-600" />
              <div>Full-time</div>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 mt-0.5 text-gray-600" />
              <div>$120k - $180k/year</div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-gray-600" />
              <div>Posted 2 hours ago</div>
            </div>
          </div>
        </div>

        {/* Company Card */}
        <div className="border-2 border-gray-300 rounded p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gray-200 rounded"></div>
            <div>
              <div className="font-bold">Tech Company Inc.</div>
              <div className="text-xs text-gray-600">125K followers</div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-3">
            <Building className="inline w-4 h-4 mr-1" />
            Technology • 5,000+ employees
          </div>
          <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded font-medium text-sm">
            View All Jobs
          </button>
        </div>

        {/* Similar Jobs */}
        <div className="border-2 border-gray-300 rounded p-4">
          <h3 className="font-bold mb-3">Similar Jobs</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded p-3">
                <div className="font-medium text-sm mb-1">
                  Full Stack Developer
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  Another Company
                </div>
                <div className="text-xs text-gray-500">
                  Remote • $100k-$150k
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobBoardSketches;
