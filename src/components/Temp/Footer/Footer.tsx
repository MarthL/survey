import React from "react";
import { JSX } from "react/jsx-runtime";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from 'react-router-dom';

export function Footer(): JSX.Element {

  return (
    <Box component="div" sx={{
      display: { xs: 'flex' },
      flexGrow: 1,
      justifyContent: 'space-evenly',
      alignItems: 'space-around',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      textDecoration: 'none',
      position: 'fixed',
      bottom: 0,
      marginTop: "50px",
      width: '100vw'
    }}>
      <NavLink to="/legal">
        <Typography color="black" >Legal Mentions</Typography>
      </NavLink>
      <Typography color="black" >F.A.Q</Typography>
    </Box>
  )

}