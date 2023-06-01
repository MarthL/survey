import React from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Container, Box } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";

export function OtherForm(props: any): JSX.Element {

  const { setCount } = props;

  return (
    <>
      <Formik
        initialValues={{ reason: '' }}
        onSubmit={(values: any) => console.log(values)}
      >
        <Container sx={{ margin: "1rem" }}>
          <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
            <Field as={TextField} label="reason" name="reason"> </Field>
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