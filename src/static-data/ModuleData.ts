//
import Modules from "./LearningModules";

const ModuleData = Modules.map((mod, key) => {
  return {
    id: key,

    title: mod.title,
    description: mod.description,
    abbreviation: "HRM",
    objectives:
      "Attracting Talent: Ensuring the right people with the right skills join the organization. \nDeveloping Employees: Providing training, mentorship, and learning opportunities. \nMotivating and Engaging: Creating a positive work environment and incentive structures. \nRetaining Talent: Reducing turnover by focusing on employee satisfaction and growth. \nEnsuring Compliance: Adhering to labor laws and ethical standards.",
  };
});

export default ModuleData;
