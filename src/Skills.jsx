export default function Skills({ item }) {
  const skills = JSON.parse(import.meta.env.VITE_MY_SKILLS);

  function getSkillsInDescription(text) {
    const textSpaced = text.replace(/[.*+?^${}()|[\]\\]/g, " ");
    return skills.filter((skill) => {
      const re = new RegExp(skill, "i");
      return re.test(textSpaced);
    });
  }

  const skillsInDescription = getSkillsInDescription(item.descriptionText);

  return (
    <div className="flex gap-2">
      <span className="text-sm font-medium mr-2">
        Skills Match ({skillsInDescription.length}/{skills.length}):
      </span>
      {skillsInDescription.map((skill) => (
        <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded">
          {skill}
        </span>
      ))}
    </div>
  );
}
