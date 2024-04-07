"use client";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const onClickScroll = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SeeMore = ({ id }: { id: string }) => {
  return (
    <Button
      size="small"
      onClick={(e) => onClickScroll(e, id)}
      sx={{
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        animation: "bounce 3s infinite",
        "&:hover": {
          animation: "none",
          backgroundColor: "transparent",
        },
      }}
    >
      See more <KeyboardArrowDownIcon />
    </Button>
  );
};

export default SeeMore;
