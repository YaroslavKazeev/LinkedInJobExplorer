import { MapPin, Clock, Monitor, Briefcase, UserCheck } from "lucide-react";

export default function Tags({ item }) {
  const tags = [
    {
      id: "employmentType",
      class: "bg-green-100",
      tagIcon: <Monitor className="w-3 h-3" />,
    },
    {
      id: "seniorityLevel",
      class: "bg-purple-100",
      tagIcon: <Briefcase className="w-3 h-3" />,
    },
    {
      id: "postedAt",
      class: "bg-blue-100",
      tagIcon: <Clock className="w-3 h-3" />,
    },
    {
      id: "applicants",
      class: "bg-red-100",
      tagIcon: <UserCheck className="w-3 h-3" />,
    },
    {
      id: "location",
      class: "bg-yellow-100",
      tagIcon: <MapPin className="w-3 h-3" />,
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className={`text-xs ${tag.class} text-blue-800 px-2 py-1 rounded`}
        >
          {tag.tagIcon} {tag.id === "employmentType" && item.employmentType}
          {tag.id === "seniorityLevel" && item.seniorityLevel}
          {tag.id === "postedAt" && item.postedAt}
          {tag.id === "applicants" && `${item.applicantsCount} applicants`}
          {tag.id === "location" && item.location}
        </span>
      ))}
    </div>
  );
}
