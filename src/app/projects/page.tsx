import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Open Source Repositories | TechFusion Automata",
  description: "Standout public repositories and architectures across autonomous agent engineering, quantitative market microstructure, and agentic developer tooling.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
