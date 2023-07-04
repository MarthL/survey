import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import { Typography, Select, MenuItem, Container, SelectChangeEvent, Box, Tooltip } from "@mui/material";
import { Option, Slider } from '@mui/joy';
import { Button, Modal } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';

export function Step5(props: any): JSX.Element {
  const { setCount } = props;

  return (
    <>
      <h2>Well done</h2>
    </>
  )

}