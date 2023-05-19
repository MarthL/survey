import React, {useState} from 'react';
import { JSX } from "react/jsx-runtime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export function StepperComponent(): JSX.Element {
  
  const [submit, setSubmit] = useState(false);
  const [count, setCount] = useState(1);
  const maxCount: any = 10;

  return (
  <>
    <Formik initialValues={{ name: '', surname: '', society: ''}}
    validate={values => {
      const errors: any = {};
      if(!values.name) {
        errors.email = 'Required';
      } 
      return errors;
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmit(true);
      }, 400)
    }}
    >
    <Container sx={{margin: "1rem"}}>
      <Typography align='center' mt={5}> Etape <span>{count}/{maxCount}</span></Typography>
      <Form style={{display: 'flex', flexDirection: "column", gap: "10px"}}>
          <TextField label="name" type="text" name="name"></TextField>
        <ErrorMessage name="name" component="div" />
        <TextField type="text" label="surname" name="surname"></TextField>
        <TextField type="text" label="society" name="society"></TextField>
        <Button type="submit" onSubmit={() => setCount(2)}> Envoyer </Button>
        
      </Form>
    </Container>

    </Formik>
  </>
  );
}
