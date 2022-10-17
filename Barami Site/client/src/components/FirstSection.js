import React from "react";
import "./Test.scss";
import Grid from "@mui/material/Grid";
// import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";

import SearchAppBar from "./SearchAppBar";

export default function FirstSection() {
  return (
    <div className="firstSection">
      <SearchAppBar></SearchAppBar>
      <Container>
        <Grid container>
          <Grid
            sx={{
              flexGrow: 1,
              backgroundColor: "green",
              minHeight: "50vh",
              marginTop: "25vh",
            }}
            xs={4}
            md={6}
          >
            <h1
              className="Working"
              style={{ color: "white", fontSize: "2.7rem" }}
            >
              Надежная быстрая доставка товаров из США
            </h1>
            <p>Заказы товаров с доставкой без налога</p>
          </Grid>
          <Grid
            sx={{
              flexGrow: 1,
              backgroundColor: "yellow",
              minHeight: "50vh",
              marginTop: "25vh",
            }}
            xs={6}
            md={6}
          >
            {/* <Navbar></Navbar> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
