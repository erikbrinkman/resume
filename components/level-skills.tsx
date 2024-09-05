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
  skills = {
    python: 3,
    pytorch: 3,
    jax: 2,
    sql: 3,
    // eslint-disable-next-line spellcheck/spell-checker
    "scikit-learn": 2,
    rust: 2,
    java: 2,
    "c++11": 2,
    lua: 1,
    hack: 1,
    haskell: 1,
    cuda: 1,
    typescript: 2,
  },
  names = ["Novice", "Competent", "Proficient"],
  horizontal = false,
}: {
  skills?: Record<string, number>;
  names?: readonly string[];
  horizontal?: boolean;
}): ReactElement {
  const leveled = new Map<string, string[]>(names.map((n) => [n, []]));
  for (const [skill, level] of Object.entries(skills)) {
    leveled.get(names[level - 1])?.push(skill);
  }
  const sections = names
    .slice()
    .reverse()
    .map((name) => (
      <Level
        key={name}
        name={name}
        horizontal={horizontal}
        skills={leveled.get(name)}
      />
    ));
  const grid = horizontal
    ? "print:grid-cols-2"
    : "md:grid-cols-1 print:grid-cols-1";
  return (
    <div className={`space-y-3 grid grid-cols-1 sm:grid-cols-2 ${grid}`}>
      {sections}
    </div>
  );
}
