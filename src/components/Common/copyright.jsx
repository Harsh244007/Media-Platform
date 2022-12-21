import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./common.module.css"

const Copyright=(props)=> {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link to="/" className={styles.siteName}>
          VAGREYA.COM
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;