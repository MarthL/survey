import React from "react";
import { JSX } from "react/jsx-runtime";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import logo from '../../../logo.svg';
import Container from "@mui/material/Container";
import { Color } from "@mui/material";
import { NavLink } from 'react-router-dom';

export function Footer(): JSX.Element {

  return(
    <Box component="div" sx={{
      backgroundColor: "#9c27b0",
      display: { xs: 'flex' },
      flexGrow: 1,
      justifyContent: 'space-evenly',
      alignItems: 'space-around',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      textDecoration: 'none',
    }}>
      <NavLink to="/legal">
        <Typography color="white" >Legal Mentions</Typography>
      </NavLink>
      <Typography color="white" >F.A.Q</Typography>
    </Box>
  )

}