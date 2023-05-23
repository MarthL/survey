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
import { Step3 } from './Step3';
import { Step4 } from './Step4';

export function StepperComponent(props: any): JSX.Element {

  const [count, setCount] = useState(1); // set to 1 by default, change for debug
  const maxCount: any = 10;
  const [type, setType] = useState('');

  function handleNextStep(values : string) {
    setType(values);
  }

  return(
    <>
      <Typography align='center' mt={5} mb={2}> Etape <span>{count}/{maxCount}</span></Typography>   
      { count === 1 ? <Step1 setCount={setCount}/> : false} 
      { count === 2 ? <Step2 setCount={setCount}/> : false}
      { count === 3 ? <Step3 setCount={setCount} onNextStep={handleNextStep} /> : false }
      { count === 4 ? <Step4 setCount={setCount} type={type} /> : false }
    </>
  )


}
