import CardSkill from "@/components/cardSkill";
import AboutLayout from "../aboutLayout";

const data = [
  { name: "git", level: "version control" },
  { name: "github", level: "git hosting" },
  { name: "npm", level: "package manager" },
  { name: "mysql", level: "database" },
];

export default function tools() {
  return (
    <AboutLayout>
      <CardSkill data={data} />
    </AboutLayout>
  );
}
