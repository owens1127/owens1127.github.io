import { Box, Container, Typography } from "@mui/material";
import HomeButton from "./HomeButton";

export default function Home() {
  return (
    <Container component="main" sx={{ padding: 2 }}>
      <Typography gutterBottom variant="h1">
        Owen Simpson
      </Typography>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Hi, I'm Owen! I am Computer Science student from <em>Boston, MA</em>{" "}
        currently studying at Northeastern University with an expected
        graduation in May 2025. I am an experienced web developer with a passion
        for creating innovative and user-friendly applications.
      </Typography>
      <Container sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <HomeButton link="/resume.pdf" newTab>
            Résumé
          </HomeButton>

          <HomeButton link="/#/projects">Projects</HomeButton>

          <HomeButton link="https://www.linkedin.com/in/owen-s-simpson/">
            LinkedIn
          </HomeButton>

          <HomeButton link="https://gihub.com/owensimpson">GitHub</HomeButton>

          <HomeButton link="mailto:owensimpson1127@gmail.com">
            Email Me
          </HomeButton>
        </Box>
      </Container>
    </Container>
  );
}
