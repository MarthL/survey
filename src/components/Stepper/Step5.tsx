import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import { Typography, Select, MenuItem, Container, SelectChangeEvent, Box, Tooltip } from "@mui/material";
import { Option, Slider } from '@mui/joy';
import { Button, Alert } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';
import emailjs from 'emailjs-com';

interface step5Props {
  datasFormatted: string;
  datas: object;
}

export function Step5(props: step5Props): JSX.Element {
  const { datas } = props
  const [emailStatus, setEmailStatus] = useState('');
  const [datasFormatted, setDatasFormatted] = useState('');

  useEffect(() => {
    setDatasFormatted(JSON.stringify(datas));
    emailjs.sendForm('service_9hv3qip', 'template_179htuo', datasFormatted, 'gGh-4ASWzEbfUHsRN')
      .then((result) => {
        setEmailStatus('success');
        console.log('E-mail sent successfully', result.text);
      }, (error) => {
        setEmailStatus('error');
        console.log('Error sending e-mail', error.text);
      });
  }, []);


  return (
    <>
      {emailStatus === 'success' ? (
        <Alert variant="filled" severity="success" className={`${styles['fade-in']}`}>Datas submitted. We will contact you within the next days.</Alert>
      ) : emailStatus === 'error' ? (
        <Alert variant="filled" severity="error" className={`${styles['fade-in']}`}>Error sending e-mail. Please try again later.</Alert>
      ) : null}
      <Typography variant="h3" color="initial" alignContent="center" textAlign="center" sx={{ marginTop: "10px" }}>You can now close this page 👋</Typography>
    </>
  );
}