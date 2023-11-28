import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./practice.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1d1d1d" : "#1d1d1d",
  padding: theme.spacing(4),
  textAlign: "center",
  boxShadow: "none",
  position: "relative",
  display: "flex",
  justifyContent: "center"
}));

const AreaOfPractice = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "var(--css-primary)"}}>
      <h1 className="title">Area of Practices</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            <img
              src="businessLaw.png"
              alt="business-law"
              className="grid-image"
            />

            <p className="grid-para">Business Law</p>
          </Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>
            <img
              src="partnershipLaw.png"
              alt="business-law"
              className="grid-image"
            />
            <p className="grid-para">Partnership Law</p>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            <img
              src="RealStateLaw.png"
              alt="business-law"
              className="grid-image"
            />

            <p className="grid-para">Real State Law</p>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <img src="Business.png" alt="business-law" className="grid-image" />

            <p className="grid-para">Business Law</p>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <img
              src="landlordDispute.png"
              alt="business-law"
              className="grid-image"
            />

            <p className="grid-para">Landlord Dispute</p>
          </Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>
            <img
              src="elderAbsue.png"
              alt="business-law"
              className="grid-image"
            />

            <p className="grid-para">Elder Absue</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AreaOfPractice;
