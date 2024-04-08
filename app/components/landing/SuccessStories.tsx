import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

type Testimonial = {
  avatar: JSX.Element;
  name: string;
  place: string;
  testimonial: string;
};

const userTestimonials = [
  {
    avatar: <Avatar src="avatar1.jpg" alt="Avatar 1" />,
    name: "Emily Johnson",
    place: "New York, USA",
    testimonial:
      "I've been using this platform for a while now, and it's been an incredible experience. The ability to directly support causes I care about has made a significant impact on my sense of fulfillment. Highly recommended!",
  },
  {
    avatar: <Avatar src="avatar2.jpg" alt="Avatar 2" />,
    name: "David Martinez",
    place: "Los Angeles, USA",
    testimonial:
      "As a donor, I'm always looking for transparency and reliability in the causes I support. PhilanthroLink provides exactly that. It's reassuring to know that my contributions are making a real difference in the world.",
  },
  {
    avatar: <Avatar src="avatar3.jpg" alt="Avatar 3" />,
    name: "Sophie Chen",
    place: "Toronto, Canada",
    testimonial:
      "PhilanthroLink has made it so easy for me to find and support causes that align with my values. The platform's user-friendly interface and diverse range of projects ensure that there's always something meaningful to contribute to.",
  },
  {
    avatar: <Avatar src="avatar4.jpg" alt="Avatar 4" />,
    name: "Michael Brown",
    place: "London, UK",
    testimonial:
      "I've had the pleasure of both donating to and receiving support through PhilanthroLink. It's incredible to see how this platform brings together people from all over the world to make a positive impact in communities near and far.",
  },
  {
    avatar: <Avatar src="avatar5.jpg" alt="Avatar 5" />,
    name: "Anna Nguyen",
    place: "Sydney, Australia",
    testimonial:
      "PhilanthroLink has completely transformed the way I engage with charitable giving. The ability to connect with like-minded individuals and organizations has opened up a whole new world of possibilities for me.",
  },
  {
    avatar: <Avatar src="avatar6.jpg" alt="Avatar 6" />,
    name: "Mohammed Ahmed",
    place: "Dubai, UAE",
    testimonial:
      "Being able to access verified charitable projects through PhilanthroLink has restored my faith in online giving. The platform's commitment to transparency and impact ensures that every donation counts.",
  },
];

const GridItem = ({ avatar, name, place, testimonial }: Testimonial) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        p: 1,
      }}
    >
      <CardContent>
        <Typography variant="body2">{testimonial}</Typography>
      </CardContent>
      <CardHeader avatar={avatar} title={name} subheader={place} />
    </Card>
  );
};

const SuccessStories = () => {
  return (
    <Container
      component="section"
      id="testimonials"
      sx={{
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 4 },
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight={500}>
          Success Stories
        </Typography>
        <Typography variant="body1" fontWeight={300} color="text.secondary">
          See how people like you are making a difference
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <GridItem {...testimonial} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SuccessStories;
