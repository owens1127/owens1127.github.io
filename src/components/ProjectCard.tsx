import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { ProjectData } from "../types";
import TreeList from "./TreeList";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function ProjectCard({
  project: { name, description, url, repository, images, tech },
}: {
  project: ProjectData;
}) {
  const [techOpen, setTechOpen] = useState(false);

  const handleTechCollapseClick = () => {
    setTechOpen((s) => !s);
  };

  const splash = images?.[0];
  return (
    <Card
      variant="elevation"
      raised
      component="article"
      sx={{
        flexBasis: "450px",
        backgroundColor: "#FFFFFFA5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {splash && (
        <CardMedia component="img" height="140" image={splash} alt="" />
      )}
      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h3">
            {name}
          </Typography>
          <Typography variant="body1">
            {description.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </Typography>
        </CardContent>
        <Box
          sx={{
            padding: 4,
            display: "flex",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {url && (
            <Button variant="contained" href={url} target="_blank">
              View Project
            </Button>
          )}
          {repository && (
            <Button variant="contained" href={repository} target="_blank">
              Repository
            </Button>
          )}
        </Box>
        {tech && (
          <>
            <IconButton
              onClick={handleTechCollapseClick}
              size="small"
              aria-label={techOpen ? "Collapse" : "Expand"}
            >
              {techOpen ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Collapse in={techOpen} timeout="auto" unmountOnExit>
              <Typography variant="h5">Tech Used</Typography>
              <TreeList tech={tech} />
            </Collapse>
          </>
        )}
      </Container>
    </Card>
  );
}
