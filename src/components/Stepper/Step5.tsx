import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import { Typography, Select, MenuItem, Container, SelectChangeEvent, Box, Tooltip } from "@mui/material";
import { Option, Slider } from '@mui/joy';
import { Button, Alert } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';

export function Step5(props: any): JSX.Element {
  const { setCount, datas } = props;

  console.log(datas);

  return (
    <>
      <Alert variant="filled" severity="success" className={`${styles['fade-in']}`}>Datas submitted. We will contact you within the next days.</Alert>
      <Typography variant="h3" color="initial" alignContent="center" textAlign="center" sx={{ marginTop: "10px" }}>You can now close this page 👋</Typography>
    </>
  )

}