import type { SxProps, Theme } from "@mui/material";
import Container from "@mui/material/Container";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

const SectionWrapper = ({ id, children, sx }: SectionWrapperProps) => {
  return (
    <Container
      component="section"
      id={id}
      sx={{
        ...sx,
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 4 },
      }}
    >
      {children}
    </Container>
  );
};

export default SectionWrapper;
