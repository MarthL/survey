import React, { useState, useEffect } from 'react';
import { JSX } from "react/jsx-runtime";
import { Formik, Form, Field, FormikErrors, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from './StepperComponent.module.css';

export function StepperComponent(): JSX.Element {


  const [submit, setSubmit] = useState(false);
  const [count, setCount] = useState(1);
  const maxCount: any = 10;
  const errors = {};

  const validate = (values: any) => {
    const errors: any = {};
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
      <Formik initialValues={{ name: '', surname: '', society: '' }}
        validate={validate}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmit(true);
          }, 400)
        }}
      >
        <Container sx={{ margin: "1rem" }}>
          <Typography align='center' mt={5} mb={2}> Etape <span>{count}/{maxCount}</span></Typography>
          <Form style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>
            <Field as={TextField} label="name" type="text" name="name" >  </Field>
            <div className={styles.Error}> <ErrorMessage name="name"/> </div>
            <Field as={TextField} type="text" label="surname" name="surname"></Field>
            <div className={styles.Error}> <ErrorMessage name="surname"/> </div>
            <Field as={TextField} type="text" label="society" name="society"></Field>
            <div className={styles.Error}> <ErrorMessage name="society"/> </div>
            <Button type="submit" onSubmit={() => setCount(2)}> Envoyer </Button>
          </Form>
        </Container>

      </Formik>
    </>
  );
}
