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
import { Step5 } from './Step5';

interface StepperComponentProps {
  count?: number;
}

export function StepperComponent(props: StepperComponentProps): JSX.Element {

  const [count, setCount] = useState(3); // set to 1 by default, change for debug
  const maxCount: number = 10;
  const [type, setType] = useState('');
  const [loaded, setLoaded] = useState(false);

  function handleNextStep(values: string) { // set empty string by default, change for debug
    setType(values);
  }

  useEffect(() => {
    count === 1 ? setTimeout(() => {
      setLoaded(true);
    }, 5000) : setLoaded(true);
  }, []);

  return (
    <>
      {!loaded ? false : (<Typography variant='h1' align='center' mt={5} mb={2}> Step <span>{count}/{maxCount}</span></Typography>)}
      {count === 1 ? <Step1 setCount={setCount} /> : false}
      {count === 2 ? <Step2 setCount={setCount} /> : false}
      {count === 3 ? <Step3 setCount={setCount} onNextStep={handleNextStep} /> : false}
      {count === 4 ? <Step4 setCount={setCount} type={type} /> : false}
      {count === 5 ? <Step5 setCount={setCount} /> : false}
    </>
  )


}
