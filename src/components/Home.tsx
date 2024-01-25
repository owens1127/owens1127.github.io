import { Box, Container, Typography } from "@mui/material";
import HomeButton from "./HomeButton";

const Home = () => {
  return (
    <Container component="main" sx={{ padding: 2 }}>
      <Typography
        gutterBottom
        variant="h1"
        sx={{
          fontStyle: "italic",
          fontFamily: "'Trebuchet MS', sans-serif",
          fontSize: {
            xs: "3rem",
            sm: "5rem",
            md: "6rem",
          },
        }}
      >
        Owen Simpson
      </Typography>
      <Typography
        variant="h4"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.375rem",
            sm: "1.625rem",
            md: "2.125rem",
          },
        }}
      >
        Hi, I'm Owen! I am Computer Science student from <em>Boston, MA</em>{" "}
        currently studying at Northeastern University with an expected
        graduation in May 2025. I am an experienced web developer with a passion
        for creating innovative and user-friendly applications.
      </Typography>
      <Container sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: {
              xs: 1,
              sm: 2,
              md: 3,
            },
            flexWrap: "wrap",
          }}
        >
          <HomeButton link="/resume.pdf" newTab>
            Résumé
          </HomeButton>

          <HomeButton link="/#/projects">Projects</HomeButton>

          <HomeButton link="https://www.linkedin.com/in/owen-s-simpson/" newTab>
            LinkedIn
          </HomeButton>

          <HomeButton link="https://github.com/owens1127" newTab>
            GitHub
          </HomeButton>

          <HomeButton link="mailto:owensimpson1127@gmail.com">
            Email Me
          </HomeButton>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
