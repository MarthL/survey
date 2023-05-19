import React, { useState, useEffect } from 'react';
import { JSX } from "react/jsx-runtime";
import { Formik, Form, Field, FormikErrors, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from './StepperComponent.module.css';

import { Step1 } from './Step1';
import { Step2 } from './Step2';

export function StepperComponent(props: any): JSX.Element {

  const [count, setCount] = useState(1);
  const maxCount: any = 10;

  return(
    <>
      <Typography align='center' mt={5} mb={2}> Etape <span>{count}/{maxCount}</span></Typography>   
      {count === 1 ? <Step1 setCount={setCount}/> : <Step2 setCount={setCount}/>}
    </>
  )


}
