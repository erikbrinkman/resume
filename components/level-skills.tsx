import { ReactElement } from "react";
import DotList from "./dot-list";

function VertList({ skills }: { skills: string[] }): ReactElement {
  const skillElems = skills.map((skill) => <div key={skill}>{skill}</div>);
  return <div className="flex flex-col space-y-1">{skillElems}</div>;
}

function Level({
  name,
  horizontal,
  skills = [],
}: {
  name: string;
  horizontal: boolean;
  skills?: string[];
}): ReactElement {
  const list = horizontal ? (
    <DotList elems={skills} />
  ) : (
    <VertList skills={skills} />
  );
  return (
    <div>
      <div className="text-lg font-bold">{name}</div>
      {list}
    </div>
  );
}

export default function LevelSkills({
  skills,
  names = ["Novice", "Novice", "Competent", "Proficient", "Expert"],
  horizontal = false,
}: {
  skills: Record<string, number>;
  names?: [string, string, string, string, string];
  horizontal?: boolean;
}): ReactElement {
  const uniqueNames = [...new Set(names)];
  uniqueNames.sort((a, b) => names.indexOf(b) - names.indexOf(a));
  const leveled = new Map<string, string[]>(uniqueNames.map((n) => [n, []]));
  for (const [skill, level] of Object.entries(skills)) {
    leveled.get(names[level - 1])?.push(skill);
  }
  const sections = uniqueNames.map((name) => (
    <Level
      key={name}
      name={name}
      horizontal={horizontal}
      skills={leveled.get(name)}
    />
  ));
  const grid = horizontal ? "sm:grid-cols-2" : "";
  return <div className={`space-y-3 grid grid-cols-1 ${grid}`}>{sections}</div>;
}
