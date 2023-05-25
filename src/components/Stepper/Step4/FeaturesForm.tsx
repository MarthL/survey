import React from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Container, Box } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";

export function FeaturesForm(props: any): JSX.Element {
  const { count, setCount } = props;

  const technos = [
    'PHP', 'Javascript', 'React', 'Angular', 'Symfony', 'NodeJS',
    'Express', 'MySQL', 'C#', 'NestJS', 'Laravel', 'HTML/CSS',
    'Design', 'SEO', 'Others'
  ];

  return (
    <>
      <Formik
        initialValues={{ objective: '', environment: '', language: '' }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Container sx={{ margin: "1rem" }}>
          <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
            <Field as={TextField} label="objective" placeholder="Which solution this enhancements is about ?" name="objective" />

            <Field as={TextField} label="environment" placeholder="Please provides any informations regarding environment/specificities" name="environment" />

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
            <Box textAlign="center" display="flex" alignItems='center' justifyContent='space-evenly'>
            <Button variant="contained" color="error" onClick={() => setCount(3)}> Back </Button>
              <Button variant="contained" type="submit" onClick={() => setCount(5)}> Send </Button>
            </Box> 
          </Form>
          </Container>
        )}
      </Formik>

    </>
  )
}
