import { ReactElement } from "react";

function Rating({ fill }: { fill: boolean }): ReactElement {
  const bg = fill ? "bg-purple-200" : "";
  return (
    <div className={`w-4 h-2 ${bg} border-purple-200 border -skew-x-12`} />
  );
}

function SkillRating({ level }: { level: number }): ReactElement {
  const ratings = Array(5)
    .fill(null)
    .map((_, i) => <Rating key={i} fill={i < level} />);
  return <div className="flex space-x-1">{ratings}</div>;
}

export default function RatingSkills({
  skills,
}: {
  skills: Record<string, number>;
}): ReactElement {
  const skillElems = Object.keys(skills).map((skill) => (
    <div key={skill}>
      {skill}
      <SkillRating level={skills[skill]} />
    </div>
  ));
  return <div className="flex flex-col space-y-3">{skillElems}</div>;
}
