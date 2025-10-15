import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import DOMPurify from "dompurify";

import { Context } from "./App.jsx";
import Nav from "./Nav";
import Tags from "./Tags.jsx";
import Skills from "./Skills.jsx";
import fetchJobDetails from "./fetchJobDetails.js";

export default function JobListing() {
  const { titleControls, provincesControls, token } = useContext(Context);
  const { titles } = titleControls;
  const { selectedProvinces } = provincesControls;

  const { runs, setRuns } = useContext(Context);

  const useProducts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState("");
    const getProducts = async (startUrl) => {
      setLoading(true);
      const { data, error } = await fetchJobDetails(token, startUrl);
      setData(data);
      setError(error);
      setLoading(false);
    };
    return { loading, error, data, getProducts };
  };

  const MyProducts = ({ category }) => {
    const { loading, error, data, getProducts } = useProducts();

    // iniate fetch if category changes
    useEffect(() => {
      getProducts(category);
    }, [runs]);

    // return different content depending on state
    if (error) {
      <div>Something fishy: {error}</div>;
    }
    if (loading) {
      <div>Just a minute...</div>;
    }
    return <div>{JSON.stringify(data)}</div>;
  };

  const text = `About us:<br><br><strong>Planner 5D</strong> is a global hub for home design, uniting over 100+ million users in 230 territories around our planet (yes, we have 2 users connecting from Antarctica each month!). Our platform simplifies the home renovation process from concept to execution, and this process has never been more straightforward with our cutting-edge software. You don't need to be a professional designer to enhance your home or workspace. We are dedicated to streamlining the design experience, making the customization of dream homes accessible to everyone.<br><br>Our cross-platform presence spans Web, iOS, Android, Windows, and MacOS, ensuring seamless synchronization for our users. Planner 5D is more than just software; it's a vibrant community of enthusiastic and product-oriented professionals. From diverse backgrounds, our team collaborates across time zones, fueled by a shared passion to revolutionize the home design market.<br><br>We are constantly looking for like-minded talent eager to take ownership and drive innovation within our expanding suite of tools. Join us in shaping the future of home design.<br><br>We are searching for senior full-stack web developer who will join our web team and work on new features, improving and maintaining our current solution.<br><br>Our tech stack: PHP 7.4(8.1), Symfony, PHPUnit, MySQL, Redis, MongoDB, RabbitMQ, Git., Docker.<br><br>For front-end part: native Javascript, JQuery(legacy code), Typescript, Three.js(OpenGL), Webpack, Websocket, Jest (unit tests), Docker, SVG.<br><br><strong>Requirements<br><br></strong><ul><li>4+ years of experience of Web development</li><li>Intermediate in English<br><br><br></li></ul><strong>Required Knowledge Of<br><br></strong><ul><li>PHP - popular frameworks, libraries, ..</li><li>JavaScript</li><li>TypeScript</li><li>Popular frameworks and libraries (at least jQuery)</li><li>ECMAScript 6+</li><li>CSS</li><li>Data - SQL (SQLite, MySQL, PosgreSQL, ...), Memcached, Redis, MongoDB, Message Queues, ..</li><li>2D and 3D graphics (for example Canvas, WebGL, OpenGL, ...)</li><li>Supporting technologies - REST, JSON, XML, HTML, Git, Protobuf, ..</li><li>Payment systems / APIs (PayPal, Stripe, Apple / Google payment processing, ...)</li><li>How to write clean and maintainable code</li><li>Best practices in security, performance, memory management, maintainability, data structure, ..</li><li>Good understanding of server infrastructure, web protocols (HTTP, Web Sockets, ...)</li><li>Ecosystem<br><br><br></li></ul><strong>Nice to have<br><br></strong><ul><li>Understanding of mathematics, geometry</li><li>Understanding of Russian or Lithuanian languages</li><li>Some knowledge of Laravel, Symfony, Doctrine, AngularJs, ReactJS, VueJS, LESS, SASS, Bootstrap, ..<br><br><br></li></ul><strong>Character Requirements<br><br></strong><ul><li>Should like your job</li><li>Great communication and analytical skills</li><li>Wish to learn, use and understand new technologies</li><li>Passionate about software development and striving for the newest technologies</li><li>Has hobbies related to technologies (programming, micro controllers, 3D printing, physics, mathematics, ...)</li><li>Should be able to understand tasks, and express himself to others (essentially to properly communicate in our team)<br><br><br></li></ul><strong>What we offer:<br><br></strong><ul><li> Great work environment that balances freedom and responsibility</li><li> Our team is made up of friendly and passionate enthusiasts who are eager to help and share their knowledge</li><li> We believe in work-life balance, so you'll receive around 30+ days of paid holidays per year</li><li> Company computer equipment by request</li><li> Education courses for our team members, and we're willing to allocate funds toward your training expenses</li><li> English classes on our corporate platform</li><li> Offline company events in Lithuania and online team-building</li><li> Unlimited free Planner5D subscriptions<br><br><br></li></ul><strong>Note</strong>: We only consider applications from candidates currently based in locations: Lithuania or Netherlands. Visa sponsorship is available if you hold primary residence with work authorization.`;
  console.log("JobListing titles:", titleControls, titles);
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
                  <Link
                    to="https://lt.linkedin.com/company/planner-5d?trk=public_jobs_jserp-result_job-search-card-subtitle"
                    className="w-28 flex-col items-start justify-start space-y-1"
                  >
                    <div className="w-16 h-16 rounded flex-shrink-0 overflow-hidden bg-gray-100 block">
                      <img
                        src="https://media.licdn.com/dms/image/v2/C4D0BAQHDgqFdPdRu4w/company-logo_100_100/company-logo_100_100/0/1630579798078/planner_5d_logo?e=1762992000&v=beta&t=wplvmvrDfaEgKo0UWD2d5JTQ65QgQViDtZUCI5wF3os"
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
                      FacilityApps.com - Empower Employees
                    </div>
                  </Link>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg mb-1">
                        Senior Software Engineer
                      </h3>
                    </div>

                    <Tags />
                    <div
                      className="text-sm text-gray-600 mb-3"
                      // Render the job description HTML. Sanitize using DOMPurify to avoid XSS.
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(text.slice(0, 550) + "..."),
                      }}
                    ></div>
                    <div className="flex justify-between items-center">
                      <Skills />
                      <Link to="https://nl.linkedin.com/jobs/view/full-stack-developer-php-%2B-ts-at-planner-5d-4239791693?refId=MqIdSP%2BHH%2BwReeIFkwOn0Q%3D%3D&trackingId=54OyAU0MrMznziQdhR4aWw%3D%3D&position=25&pageNum=0">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
