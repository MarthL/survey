import React from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Checkbox, Select, MenuItem, SelectChangeEvent, Container, Box, Typography, FormControlLabel, FormGroup } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './../StepperComponent.module.css';

interface webAppFormProps {
  count: number;
  setCount: (value: number) => void;
  setDatas?: (datas: any) => void;
  datas: object;
}

export function WebAppForm(props: webAppFormProps): JSX.Element {
  const { count, setCount, datas, setDatas } = props;

  interface FormErrors {
    objective?: string;
    environment?: string;
    language?: string;
    content?: Object;
  }

  const checkContent = (val: any) => {
    const keys = Object.keys(val);
    return keys.some((key) => val[key]);
  };

  const validate = (values: any): FormErrors => {
    const errors: FormErrors = {};
    if (!values.objective || values.objective.length < 1) {
      errors.objective = 'This field is required';
    }
    if (!values.environment || values.environment.length < 1) {
      errors.environment = 'This field is required';
    }
    if (!values.language || values.language.length < 1) {
      errors.language = 'This field is required';
    }
    if (!checkContent(values.content)) {
      errors.content = 'You need to choose at least 1 argument';
    }
    return errors;
  };

  const technos = [
    'PHP Stack', 'MERN', 'MEAN', 'MEVN', 'Java', '.NET', 'Others'
  ];


  return (
    <>
      <Formik
        initialValues={{
          objective: '', environment: '', language: '', content: {
            adminDashboard: false,
            authenticationUser: false,
            blog: false,
            articles: false,
            messagesNotifs: false,
            api: false,
            eCommerce: false,
            dataAnalysis: false,
          },
        }}
        onSubmit={(values: any) => {
          setDatas ? setDatas(Object.assign(datas, values)) : false;
          setCount(5);
        }}
        validate={validate}
      >
        {({ values, handleChange, handleSubmit, setValues }) => (
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
              <Box marginTop="20px" marginBottom="20px">
                <Typography fontStyle="oblique" color="initial" textAlign="center">What kind of content should contain your app ?</Typography>
                <FormGroup>
                  <FormControlLabel
                    name="adminDashboard"
                    control={
                      <Checkbox
                        name="adminDashboard"
                        checked={values.content.adminDashboard}
                        onChange={(e) => {
                          const { checked } = e.target;
                          setValues((prevValues: any) => ({
                            ...prevValues,
                            content: {
                              ...prevValues.content,
                              adminDashboard: checked,
                            },
                          }));
                        }}
                      />
                    }
                    label="Admin Dashboard"
                  />
                  <FormControlLabel control={<Checkbox name="authenticationUser" checked={values.content.authenticationUser}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setValues((prevValues: any) => ({
                        ...prevValues,
                        content: {
                          ...prevValues.content,
                          authenticationUser: checked,
                        },
                      }));
                    }} />} label="Authentication User" />
                  <FormControlLabel control={<Checkbox name="blog" checked={values.content.blog} onChange={(e) => {
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        blog: e.target.checked,
                      },
                    }));
                  }} />} label="Blog" />
                  <FormControlLabel control={<Checkbox name="articles" checked={values.content.articles} onChange={(e) => {
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        articles: e.target.checked,
                      },
                    }));
                  }} />} label="Articles" />
                  <FormControlLabel control={<Checkbox checked={values.content.messagesNotifs} onChange={(e) => {
                    const { checked } = e.target;
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        messagesNotifs: checked,
                      },
                    }));
                  }} />} name="messagesNotifs" label="Messages and Notifications" />
                  <FormControlLabel control={<Checkbox name="api" checked={values.content.api}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setValues((prevValues: any) => ({
                        ...prevValues,
                        content: {
                          ...prevValues.content,
                          api: checked,
                        },
                      }));
                    }} />} label="API" />
                  <FormControlLabel control={<Checkbox checked={values.content.eCommerce} onChange={(e) => {
                    const { checked } = e.target;
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        eCommerce: checked,
                      },
                    }));
                  }} />} name="eCommerce" label="E-Commerce" />
                  <FormControlLabel control={<Checkbox checked={values.content.dataAnalysis} onChange={(e) => {
                    const { checked } = e.target;
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        dataAnalysis: checked,
                      },
                    }));
                  }} />} name="dataAnalysis" label="Data Analysis" />
                  <div className={styles.Error}> <ErrorMessage name="content" /> </div>
                </FormGroup>
              </Box>
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

// Plateformes et compatibilité :


// L'application doit-elle être compatible avec certains navigateurs ou systèmes d'exploitation ?
// Sécurité :



// Maintenance et support :
// L'application doit-elle être accessible sur des plateformes spécifiques (ordinateurs de bureau, mobiles, tablettes, etc.) ?
// Aurez-vous besoin d'une assistance pour la maintenance et le support continu de l'application après sa réalisation ?
// Y a-t-il des bases de données existantes à prendre en compte ou à intégrer ?

// il faut se référer à web static pour pas mal d'étapes, du refactor sera nécessaire.