import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import "./accordion.css"

export default function Accordions() {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What should I do right after car accident</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>How much is my case worth?</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
