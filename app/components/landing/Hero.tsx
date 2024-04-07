import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Typography
        component={Link}
        href="https://www.freepik.com/free-photo/closeup-diverse-people-joining-their-hands_12193015.htm#query=charity&position=14&from_view=keyword&track=sph&uuid=f8eff1c6-3d4c-476b-875d-9441baf7ddd7"
        target="_blank"
        rel="noopener noreferrer"
        variant="caption"
        color="primary.contrastText"
        p={1}
        position="absolute"
        bottom={0}
        right={0}
        sx={{
          textDecoration: "none",
        }}
      >
        Image by Freepik
      </Typography>
      <Box
        component={Image}
        src="/hero.jpg"
        alt="hero"
        fill={true}
        sx={{
          zIndex: -2,
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.15)",
        }}
      />
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          color: "primary.contrastText",
          display: "flex",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* TODO: replace with a tagline header */}
        <Typography variant="h1">
          Philanthro
          <Typography
            variant="h1"
            component="span"
            color="primary.main"
            fontWeight={800}
          >
            Link
          </Typography>
        </Typography>
        <Typography variant="h6" fontWeight={200} padding={{ xs: 2, sm: 0 }}>
          Uniting Causes, Building Together, and Empowering Aspirations to
          Ignite Change and Impact Destinies Forever: Where Every Donation Makes
          a Difference.
        </Typography>
        <Box display="flex" gap={2}>
          <Button variant="contained" size="large">
            Donate Now
          </Button>
          <Button variant="outlined" size="large" color="secondary">
            Join Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
