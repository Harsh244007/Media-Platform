import { AppBar, Button, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "../../assets/logo-min.png"

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar className={styles.HeaderSection} sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link to="/">VAGREYA</Link>
          <img className={styles.logoImage} src={Logo}/>
        </Typography>
        <Link to="/login">
          <Button variant="outlined" sx={{ my: 1, mx: 1.2 }}>
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="contained" sx={{ my: 1, mx: 1.2 }}>
            Signup
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
