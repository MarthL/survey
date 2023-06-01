import React from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Container, Box } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';

export function ConsultingForm(props: any): JSX.Element {

  interface FormErrors {
    consulting?: string;
  }

  const { setCount } = props;

  const validate = (values: any): FormErrors => {
    const errors: FormErrors = {};
    if (!values.consulting || values.consulting.length < 1) {
      errors.consulting = 'This field is required';
    }
    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{ consulting: '' }}
        onSubmit={(values: any) => console.log(values)}
        validate={validate}
      >
        <Container sx={{ margin: "1rem" }}>
          <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
            <Field as={TextField} label="consulting" name="consulting"> </Field>
            <div className={styles.Error}> <ErrorMessage name="consulting" /> </div>
            <Box textAlign="center" display="flex" alignItems='center' justifyContent='space-evenly'>
              <Button variant="contained" color="error" onClick={() => setCount(3)}> Back </Button>
              <Button variant="contained" type="submit"
              > Next </Button>
            </Box>
          </Form>
        </Container>
      </Formik>
    </>
  )
}