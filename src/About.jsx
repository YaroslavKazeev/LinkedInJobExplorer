import Nav from "./Nav";

export default function About() {
  return (
    <>
      <Nav />
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">About</h2>

        <p className="mb-4">
          LinkedIn Job Explorer is a comprehensive web application designed to
          extract and present detailed job listings from LinkedIn's public
          profiles. Built on top of the{" "}
          <a href="https://console.apify.com/actors/hKByXkMQaC5Qt9UMN/information/latest/readme">
            LinkedIn Jobs Scraper - PPR
          </a>
          , this application provides users with structured access to extensive
          job-related data, including both job information and company details.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          The application can retrieve:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>LinkedIn Job Identifiers (ID, tracking ID, reference ID)</li>
          <li>
            Position Details (title, LinkedIn URL, posted date, applicants
            count)
          </li>
          <li>Location Data</li>
          <li>Salary info, benefits</li>
          <li>Job Descriptions</li>
          <li>Company Information (name, LinkedIn URL, logo)</li>
          <li>Company Details (address, website, employee count)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">About the creator</h3>
        <p className="mb-2">
          Yaroslav Kazeev, a student of the "HackYourFuture" web-development
          programming bootcamp.
        </p>
        <p className="mb-1">
          Website:{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.hackyourfuture.net/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.hackyourfuture.net/
          </a>
        </p>
        <p className="mb-1">
          GitHub:{" "}
          <a
            className="text-blue-600 underline"
            href="https://github.com/YaroslavKazeev"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/YaroslavKazeev
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.linkedin.com/in/yaroslavkazeev/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/yaroslavkazeev/
          </a>
        </p>
      </div>
    </>
  );
}
