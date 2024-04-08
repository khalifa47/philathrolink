import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

import Link from "next/link";
import SelectBox from "./SelectBox";
import { formatNumber, formatNumberWithAbbr } from "@/lib/utils";
import SectionWrapper from "../layout/SectionWrapper";

type Item = {
  id: string;
  title: string;
  description: string;
  image: string;
  supporters: number;
  totalNeeded: number;
  totalRaised: number;
};

const GridItem = ({
  title,
  image,
  supporters,
  totalNeeded,
  totalRaised,
}: Item) => {
  const progress = (totalRaised / totalNeeded) * 100;
  return (
    <Card
      variant="outlined"
      sx={{
        height: { xs: 110, md: 290 },
        position: "relative",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
      }}
    >
      <CardHeader
        title={`${formatNumberWithAbbr(supporters)} supporters`}
        titleTypographyProps={{
          variant: "body2",
          fontSize: { xs: 11, sm: 12, md: 14 },
        }}
        sx={{
          position: "absolute",
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          m: 1,
          p: 1,
          borderRadius: 2,
        }}
      />
      <CardMedia
        component="img"
        height={150}
        image={image}
        alt={title}
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Box
        component="img"
        src={image}
        alt={title}
        width={150}
        height="100%"
        display={{ xs: "block", md: "none" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          position: "relative",
          p: { xs: 1, md: 2 },
          "&:last-child": { paddingBottom: 2 },
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight={600}
          fontSize={{ xs: 13, md: 16 }}
        >
          {title}
        </Typography>
        <Box>
          <Box display="flex" alignItems="center">
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ width: "100%", mr: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              {progress}%
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            ${formatNumber(totalRaised)} raised of ${formatNumber(totalNeeded)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
// TODO: maybe change layout later
const Discover = () => {
  return (
    <SectionWrapper id="discover">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={2}
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        <div>
          <Typography variant="h4" fontWeight={500}>
            Discover
          </Typography>
          <Typography variant="body1" fontWeight={300} color="text.secondary">
            A glance of projects underway at the moment
          </Typography>
        </div>
        <SelectBox initialState="recent" />
      </Box>
      {/* 65 characters max */}
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Grid item xs={12} md={4} key={i}>
            <GridItem
              id={i.toString()}
              supporters={300}
              title="Sayvillf af rgsrgts e Family nerbfqhrvbfuh3r rbwhufbhur wbfhurb recjerj hr rej"
              description="Helping the Spitzfaden family of Sayville"
              image="/hero.jpg"
              totalNeeded={10000}
              totalRaised={3000}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            LinkComponent={Link}
            href="#"
            endIcon={<ArrowForwardIcon />}
            sx={{ float: "right" }}
          >
            See all projects
          </Button>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Discover;
