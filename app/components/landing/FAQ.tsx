"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import SectionWrapper from "../layout/SectionWrapper";

const faqs = [
  {
    id: 1,
    question: "How can I donate through PhilanthroLink?",
    answer:
      "To donate through PhilanthroLink, simply browse the list of verified charitable projects on our platform, select a project that resonates with you, and click on the 'Donate Now' button. Follow the prompts to make your contribution securely.",
  },
  {
    id: 2,
    question: "Are the charitable projects on PhilanthroLink verified?",
    answer:
      "Yes, all projects seeking donations on PhilanthroLink undergo thorough verification to ensure legitimacy and transparency. We take great care to ensure that your donations are supporting credible and impactful causes.",
  },
  {
    id: 3,
    question: "Can I create a fundraising campaign on PhilanthroLink?",
    answer:
      "At the moment, PhilanthroLink focuses on featuring verified charitable projects rather than hosting individual fundraising campaigns. However, if you represent a charitable organization, you can contact us to discuss potential collaboration opportunities.",
  },
  {
    id: 4,
    question: "How can I get in touch with PhilanthroLink?",
    answer:
      "If you have any questions, feedback, or concerns, you can contact our support team via email at support@philanthrolink.com. We're here to assist you and ensure that your philanthropic journey with us is a positive one.",
  },
  {
    id: 5,
    question: "Can I volunteer with PhilanthroLink?",
    answer:
      "PhilanthroLink does not currently offer volunteer opportunities directly through our platform. However, many of the charitable projects featured on our platform may be seeking volunteers. You can explore individual project pages for more information.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <SectionWrapper id="faq">
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === `panel${faq.id}`}
            onChange={handleChange(`panel${faq.id}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="h3" variant="subtitle2">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </SectionWrapper>
  );
}
