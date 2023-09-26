import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { ProjectData } from "./types";

const ProjectCard = ({
  project: { name, description, url, repository, images },
}: {
  project: ProjectData;
}) => {
  return (
    <Card
      variant="elevation"
      raised
      component="article"
      sx={{
        flexBasis: "450px",
        backgroundColor: "#FFFFFFA5",
      }}
    >
      {/* <CardMedia
        component="img"
        height="140"
        image=""
        alt=""
      /> */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <CardContent>
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
          sx={{ padding: 4, display: "flex", gap: 1, justifyContent: "center" }}
        >
          {url && (
            <Button variant="contained" href={url} target="_blank">
              View Project
            </Button>
          )}
          <Button variant="contained" href={repository} target="_blank">
            Repository
          </Button>
        </Box>
      </Container>
    </Card>
  );
};

export default ProjectCard;
