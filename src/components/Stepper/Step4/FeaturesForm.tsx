import React from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Container, Box } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './../StepperComponent.module.css';

interface FeaturesFormProps {
  count: number;
  setCount: (value: number) => void;
  setDatas: (value: any) => void;
  datas: object;
}

export function FeaturesForm(props: FeaturesFormProps): JSX.Element {
  const { count, setCount, datas, setDatas } = props;

  interface FormErrors {
    objective?: string;
    environment?: string;
    language?: string;
  }

  const technos = [
    'PHP', 'Javascript', 'React', 'Angular', 'Symfony', 'NodeJS',
    'Express', 'MySQL', 'C#', 'NestJS', 'Laravel', 'HTML/CSS',
    'Design', 'SEO', 'Others'
  ];

  const validate = (values: any): FormErrors => {
    const errors: FormErrors = {};
    if (!values.objective || values.objective < 1) {
      errors.objective = 'This field is required';
    }
    if (!values.environment || values.environment < 1) {
      errors.environment = 'This field is required';
    }
    if (!values.language || values.language < 1) {
      errors.language = 'This field is required';
    }
    return errors;
  }

  return (
    <>
      <Formik
        initialValues={{ objective: '', environment: '', language: '' }}
        validate={validate}
        onSubmit={(values: any) => {
          setDatas ? setDatas(Object.assign(datas, values)) : false;
          setCount(5);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Container sx={{ margin: "1rem" }}>
            <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
              <Field as={TextField} label="objective" placeholder="Which solution this enhancements is about ?" name="objective" />
              <div className={styles.Error}> <ErrorMessage name="objective" /> </div>
              <Field as={TextField} label="environment" placeholder="Please provides any informations regarding environment/specificities" name="environment" />
              <div className={styles.Error}> <ErrorMessage name="environment" /> </div>
              <Select
                placeholder="Which language will be solicited ?"
                name="language"
                displayEmpty
                renderValue={(selected) => (selected ? selected : "Which language will be solicited ?")}
                value={values.language}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: '250px'
                    }
                  },
                  disableScrollLock: true,
                }}
                onChange={handleChange}
              >
                {(<MenuItem value="" disabled> Which language is concerned with that feature </MenuItem>)}
                {technos.sort().map((item) => (
                  <MenuItem key={item} aria-label="Which language is concerned with that feature" value={item}>{item}</MenuItem>
                ))}
              </Select>
              <div className={styles.Error}> <ErrorMessage name="language" /> </div>
              <Box textAlign="center" display="flex" alignItems='center' justifyContent='space-evenly'>
                <Button variant="contained" color="error" onClick={() => setCount(3)}> Back </Button>
                <Button variant="contained" type="submit"> Send </Button>
              </Box>
            </Form>
          </Container>
        )}
      </Formik>

    </>
  )
}
