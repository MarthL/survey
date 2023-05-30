import React from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Select, MenuItem, SelectChangeEvent, Container, Box } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";

export function WebAppForm(props: any): JSX.Element {
  const { types, count, setCount } = props;

  const technos = [
    'PHP', 'Javascript', 'React', 'Angular', 'Symfony', 'NodeJS',
    'Express', 'MySQL', 'C#', 'NestJS', 'Laravel', 'HTML/CSS',
    'Design', 'SEO', 'Others'
  ];

  const features = [
    'Admin Dashboard', 'Authentication User', 'Blog',
    'Articles', 'Messages and/or notifications',
    'API', 'E-commerce with cart', 'Data/Analysis'
  ];


  return (
    <>
      <Formik
        initialValues={{ objective: '', environment: '', language: '', features: '' }}
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
              <Select
                placeholder="Which features would you like ?"
                name="features"
                displayEmpty
                renderValue={(selected) => (selected ? selected : "Which features would you like ?")}
                value={values.features}
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
                {(<MenuItem value="" disabled> Which features would you like ? </MenuItem>)}
                {features.sort().map((item) => (
                  <MenuItem key={item} aria-label="Which features would you like ?" value={item}>{item}</MenuItem>
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

// Plateformes et compatibilité :


// L'application doit-elle être compatible avec certains navigateurs ou systèmes d'exploitation ?
// Sécurité :



// Maintenance et support :
// L'application doit-elle être accessible sur des plateformes spécifiques (ordinateurs de bureau, mobiles, tablettes, etc.) ?
// Aurez-vous besoin d'une assistance pour la maintenance et le support continu de l'application après sa réalisation ?
// Y a-t-il des bases de données existantes à prendre en compte ou à intégrer ?

// il faut se référer à web static pour pas mal d'étapes, du refactor sera nécessaire.