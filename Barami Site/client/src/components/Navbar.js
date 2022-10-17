import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export default function Navbar() {
  return (
    <Grid
      container
      row
      sx={{
        width: "60%",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "auto",
      }}
    >
      <Link to="/">
        <Typography>Главная страница</Typography>
      </Link>
      <Link to="service">
        <Typography>Услуги компании</Typography>
      </Link>
      <Link to="SignUp">
        <Typography>Личный кабинет</Typography>
      </Link>
      <Link to="forum">
        <Typography>Форум</Typography>
      </Link>
      <Link to="contacts">
        <Typography>Контакты</Typography>
      </Link>
    </Grid>
  );
}
