import { GraduationCap } from "lucide-react";

export default function JobTitle({ titleControls }) {
  const { title, setTitle, addTitle, removeTitle, titles } = titleControls;

  return (
    <>
      <div className="md:basis-1/2 flex-1 min-w-0 border border-gray-300 rounded p-3 text-left">
        <GraduationCap className="inline w-4 h-4 mr-2" />
        <span className="text-sm font-medium mb-2">
          Add a job title to the search list:
        </span>

        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Web Developer, or Software Tester"
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <button
            onClick={addTitle}
            className="bg-blue-600 text-white px-3 py-2 rounded text-sm"
          >
            Add title
          </button>
        </div>

        {/* Container for added titles (paragraphs will be appended here) */}
        <div className="mt-3 space-y-2" aria-live="polite">
          {titles.length === 0 ? (
            <p className="text-sm text-gray-500">No job titles added yet.</p>
          ) : (
            titles.map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="flex items-center justify-between bg-gray-100 p-2 rounded"
              >
                <p className="text-sm text-gray-700">{t}</p>
                <button
                  onClick={() => removeTitle(i)}
                  className="text-red-500 text-xs ml-4"
                  aria-label={`Remove ${t}`}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
