import { Link } from "react-router-dom";
import { useContext } from "react";
import DOMPurify from "dompurify";

import { Context } from "./App.jsx";
import Nav from "./Nav";
import Tags from "./Tags.jsx";
import Skills from "./Skills.jsx";
let output;
let preOutput = [];

export default function JobListing() {
  const { titleControls, provincesControls } = useContext(Context);
  const { titles } = titleControls;
  const { selectedProvinces } = provincesControls;
  const { runs } = useContext(Context).runsControls;

  if (!titles || titles.length === 0) {
    output = <p>Some data should be fetched first</p>;
  } else if (runs.some((run) => run.status.data)) {
    for (const run of runs) {
      console.log("Processing run:", run.status.data);
      console.log("Runs", JSON.stringify(runs, null, 2));
      preOutput.push(
        run.status.data.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-300 rounded p-4 hover:border-blue-400 transition"
          >
            <div className="flex gap-4">
              <Link
                to={item.companyLinkedinUrl}
                className="w-28 flex-col items-start justify-start space-y-1"
              >
                <div className="w-16 h-16 rounded flex-shrink-0 overflow-hidden bg-gray-100 block">
                  <img
                    src={item.companyLogo}
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      // If the remote CDN request is blocked (adblocker / extension),
                      // show a neutral inline SVG placeholder instead of the blocked HTML.
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='%23E5E7EB'/><text x='50%' y='50%' font-size='18' text-anchor='middle' dominant-baseline='middle' fill='%23737474' font-family='Arial,Helvetica,sans-serif'>Logo</text></svg>";
                    }}
                  />
                </div>
                <div className="text-sm text-blue-600 text-left break-words overflow-hidden">
                  {item.companyName}
                </div>
              </Link>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                </div>
                <Tags />
                <div
                  className="text-sm text-gray-600 mb-3"
                  // Render the job description HTML. Sanitize using DOMPurify to avoid XSS.
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      item.descriptionHtml.slice(0, 550) + "..."
                    ),
                  }}
                ></div>
                <div className="flex justify-between items-center">
                  <Skills />
                  <Link to={item.link}>
                    <button className="bg-blue-500 text-white text-sm px-1 py-1 rounded inline-flex items-center">
                      <span className="ml-2">...More &amp; Apply </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="16"
                        height="16"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      );
    }
    output = preOutput.slice(0, 20);
  } else if (runs.some((r) => r.status.loading)) {
    output = <p>The first bunch of data will be loaded shortly...</p>;
  } else {
    output = <p>Errors persisted at every attempt to fetch data. Sorry.</p>;
  }

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
          {output}
          <div className="space-y-3"></div>
        </div>
      </div>
    </>
  );
}
