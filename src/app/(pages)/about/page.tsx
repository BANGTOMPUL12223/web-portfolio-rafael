import AboutLayout from "./aboutLayout";
import CardSkill from "@/components/cardSkill";

const data = [
  { name: "html", level: "advanced" },
  { name: "css", level: "advanced" },
  { name: "php", level: "advanced" },
  { name: "javascript", level: "advanced" },
  { name: "laravel", level: "advanced" },
  { name: "codeigniter", level: "intermediate" },
  { name: "vuejs", level: "intermediate" },
  { name: "alpinejs", level: "beginner" },
  { name: "nodejs", level: "beginner" },
  { name: "tailwind", level: "advanced" },
  { name: "bootstrap", level: "intermediate" },
  { name: "reactjs", level: "beginner" },
];

export default function about() {
  return (
    <AboutLayout>
      <CardSkill data={data} />
    </AboutLayout>
  );
}
