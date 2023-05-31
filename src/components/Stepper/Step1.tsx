import React, { useState, useEffect } from 'react';
import { JSX } from "react/jsx-runtime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { ClipLoader } from 'react-spinners';

interface Step1Props {
  count?: number;
  setCount?: (value: number) => void;
}

export function Step1(props: Step1Props): JSX.Element {

  const [submit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const { count, setCount } = props;

  interface FormErrors {
    name?: string;
    surname?: string;
    society?: string;
  };

  useEffect(() => {
    if (!isLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      setTimeout(() => {
        setIsLoaded(true);
      }, 6000);
    }
  }, []);


  const validate = (values: any): FormErrors => {
    const errors: FormErrors = {};
    if (!values.name || values.name.length < 1) {
      errors.name = 'This field is required';
    }
    if (!values.surname || values.surname.length < 1) {
      errors.surname = 'This field is required';
    }
    if (!values.society || values.society.length < 1) {
      errors.society = 'This field is required';
    }
    return errors;
  };

  return (
    <>
      <div>
        {isLoading ? (
          <>
            <div className="loader-container" style={{ textAlign: 'center' }}>
              <ClipLoader color="#36d7b7" size={300} />
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.container} ${styles['fade-in']}`}>
              <Typography align='center' fontStyle="oblique">Please give us some details about you</Typography>
              <Formik initialValues={{ name: '', surname: '', society: '' }}
                validate={validate}
                onSubmit={(values) => {
                  setTimeout(() => {
                    setSubmit(true);
                    if (setCount) {
                      setCount(2);
                    }
                    console.log(count);
                  }, 400)
                }}
              >
                <Container sx={{ margin: "1rem" }}>
                  <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
                    <Field as={TextField} label="name" type="text" name="name" >  </Field>
                    <div className={styles.Error}> <ErrorMessage name="name" /> </div>
                    <Field as={TextField} type="text" label="surname" name="surname"></Field>
                    <div className={styles.Error}> <ErrorMessage name="surname" /> </div>
                    <Field as={TextField} type="text" label="society" name="society"></Field>
                    <div className={styles.Error}> <ErrorMessage name="society" /> </div>
                    <Box textAlign="center">
                      <Button variant="contained" type="submit" onSubmit={() => setCount ? setCount(2) : false}> Send </Button>
                    </Box>
                  </Form>
                </Container>

              </Formik>
            </div>
          </>
        )}
      </div>
    </>
  );
}