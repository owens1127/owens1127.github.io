import { ProjectData } from "@/types";
import { createContext, useContext } from "react";

export const ProjectsContext = createContext<ProjectData[] | undefined>(
  undefined,
);

// At some point, this might be replaced with a call to an API
export const useProjects = () => {
  const ctx = useContext(ProjectsContext);
  if (!ctx) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return ctx;
};
