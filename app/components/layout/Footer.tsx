import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Logo } from "./Header";
import Link from "@mui/material/Link";
import NextLink from "next/link";

type LinkProps = {
  title: string;
  href: string;
};

type LinkColumnProps = {
  title: string;
  links: LinkProps[];
};

const donorLinks: LinkProps[] = [
  { title: "Donate Now", href: "#" },
  { title: "How It Works", href: "#" },
  { title: "Browse Projects", href: "#" },
  { title: "Success Stories", href: "#" },
  { title: "FAQs", href: "#" },
];

const companyLinks: LinkProps[] = [
  { title: "About Us", href: "#" },
  { title: "Contact Us", href: "#" },
  { title: "Blog", href: "#" },
];

const legalLinks: LinkProps[] = [
  { title: "Terms", href: "#" },
  { title: "Privacy", href: "#" },
];

const LinkColumn = ({ title, links }: LinkColumnProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
    }}
  >
    <Typography variant="body2" fontWeight={600}>
      {title}
    </Typography>
    {links.map((link) => (
      <Link
        key={link.title}
        component={NextLink}
        color="text.secondary"
        href={link.href}
        sx={{ textDecoration: "none", "&:hover": { color: "primary.main" } }}
      >
        {link.title}
      </Link>
    ))}
  </Box>
);

export default function Footer() {
  return (
    <Container
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        "&:before": {
          content: '""',
          display: "block",
          height: "1px",
          width: "100%",
          backgroundColor: "grey.300",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Logo />
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          display="flex"
          width={{ xs: "100%", sm: "40%" }}
          justifyContent="space-between"
          mt={{ xs: 2, sm: 0 }}
        >
          <LinkColumn title="Donors" links={donorLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Legal" links={legalLinks} />
        </Box>
      </Box>
    </Container>
  );
}
