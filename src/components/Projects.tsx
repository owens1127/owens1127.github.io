import ProjectCard from "./ProjectCard";
import { ProjectData } from "../types";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

export default function Project() {
  const [data, setData] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <Container
      component="main"
      sx={{
        padding: "2em",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {data.map((project, idx) => (
        <ProjectCard project={project} key={idx} />
      ))}
    </Container>
  );
}
