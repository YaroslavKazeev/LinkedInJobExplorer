import React from "react";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  BookmarkIcon,
  Share2,
  Building,
} from "lucide-react";

const JobDetails = () => (
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
            <Building className="inline w-4 h-4 mr-1" /> Technology • 5,000+
            employees
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

export default JobDetails;
