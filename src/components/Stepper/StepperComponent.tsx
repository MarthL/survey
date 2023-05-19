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

  if(count === 1 ) { 
    return <Step1 setCount={setCount}/>
  } else {
    return <Step2 setCount={setCount}/>
  }

}
