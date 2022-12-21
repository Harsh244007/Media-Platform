import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
    return (  
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar className={styles.HeaderSection} sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.2 }}>
            Login
          </Button>
          <Button href="#" variant="contained" sx={{ my: 1, mx: 1.2 }}>
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    );
}
 
export default Header;