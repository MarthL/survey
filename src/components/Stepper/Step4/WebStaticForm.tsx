import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import Slider from '@mui/joy/Slider';
import Tooltip from '@mui/material/Tooltip';
import { Container, SelectChangeEvent } from "@mui/material";
import { Box } from "@mui/material";
import { Typography, Select, MenuItem } from "@mui/material";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Option } from '@mui/joy';
import { Apartment, People, Person } from "@mui/icons-material";
import styles from './../StepperComponent.module.css';

interface WebStaticFormProps {
  types: string;
  count: number;
  setCount: (value: number) => void;
  datas: object;
  setDatas?: (datas: any) => void;
}

export function WebStaticForm(props: any): JSX.Element {
  const { types, count, setCount, datas, setDatas } = props;

  const checkContent = (val: any) => {
    const keys = Object.keys(val);
    return keys.some((key) => val[key]);
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (values.purpose === "") {
      errors.purpose = 'Please select one of this reason';
    }
    if (values.target === "") {
      errors.target = "This field is mandatory";
    }
    if (!checkContent(values.content)) {
      errors.content = "You must select at least one value"
    }
    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{
          purpose: "",
          target: "",
          content: {
            homepage: false,
            legalmentions: false,
            aboutus: false,
            productservice: false,
            contactform: false,
            alreadydesign: false,
          },
        }}
        validate={validate}
        onSubmit={(values: any) => {
          setDatas(Object.assign(datas, values));
          setCount(5);
        }}
      >
        {({ values, setValues, handleChange }) => (
          <Form style={{ display: 'flex', width: '100%', height: 'fit-content', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
            <Container sx={{ margin: "1rem" }}>
              <Typography fontStyle="oblique" color="initial" textAlign="center">What is the purpose of this website ?</Typography>
              <RadioGroup aria-label="Your plan" name="purpose" defaultValue="Individual">
                <List
                  sx={{
                    minWidth: 240,
                    '--List-gap': '0.5rem',
                    '--ListItem-paddingY': '1rem',
                    '--ListItem-radius': '8px',
                    '--ListItemDecorator-size': '32px',
                  }}
                >
                  {['Display informations', 'Promote services/products', 'Else'].map((item, index) => (
                    <ListItem
                      variant="outlined"
                      key={item}
                      sx={{ boxShadow: 'sm', bgcolor: 'background.body' }}
                    >
                      <ListItemDecorator>
                        {[<Person />, <People />, <Apartment />][index]}
                      </ListItemDecorator>
                      <Radio
                        overlay
                        value={item}
                        label={item}
                        name='purpose'
                        onChange={handleChange}
                        sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
                        slotProps={{
                          action: ({ checked }) => ({
                            sx: (theme) => ({
                              ...(checked && {
                                inset: -1,
                                border: '2px solid',
                                borderColor: theme.vars.palette.primary[500],
                              }),
                            }),
                          }),
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </RadioGroup>
              <div className={styles.Error}> <ErrorMessage name="purpose" /> </div>
              <Box marginTop="20px" marginBottom="20px">
                <Typography fontStyle="oblique" color="initial" textAlign="center">What kind of content should contain your website ?</Typography>
                <FormGroup>
                  <FormControlLabel
                    name="homepage"
                    control={
                      <Checkbox
                        name="homepage"
                        checked={values.content.homepage}
                        onChange={(e) => {
                          const { checked } = e.target;
                          setValues((prevValues: any) => ({
                            ...prevValues,
                            content: {
                              ...prevValues.content,
                              homepage: checked,
                            },
                          }));
                        }}
                      />
                    }
                    label="Home page"
                  />
                  <FormControlLabel control={<Checkbox name="legalmentions" checked={values.content.legalmentions}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setValues((prevValues: any) => ({
                        ...prevValues,
                        content: {
                          ...prevValues.content,
                          legalmentions: checked,
                        },
                      }));
                    }} />} label="Legal mentions" />
                  <FormControlLabel control={<Checkbox name="productservice" checked={values.content.productservice} onChange={(e) => {
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        productservice: e.target.checked,
                      },
                    }));
                  }} />} label="Product / Services page" />
                  <FormControlLabel control={<Checkbox name="aboutus" checked={values.content.aboutus} onChange={(e) => {
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        aboutus: e.target.checked,
                      },
                    }));
                  }} />} label="About us" />
                  <FormControlLabel control={<Checkbox checked={values.content.contactform} onChange={(e) => {
                    const { checked } = e.target;
                    setValues((prevValues: any) => ({
                      ...prevValues,
                      content: {
                        ...prevValues.content,
                        contactform: checked,
                      },
                    }));
                  }} />} name="contactform" label="Contact form" />
                  <FormControlLabel control={<Checkbox name="alreadydesign" checked={values.content.alreadydesign}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setValues((prevValues: any) => ({
                        ...prevValues,
                        content: {
                          ...prevValues.content,
                          alreadydesign: checked,
                        },
                      }));
                    }} />} label="You have already mock-up/design ideas" />
                </FormGroup>
                <div className={styles.Error}> <ErrorMessage name="content" /> </div>
              </Box>

              <Box>
                <Typography fontStyle="oblique" color="initial" textAlign="center">What is the target audience of your website ? </Typography>
                <RadioGroup aria-label="Your plan" name="target" defaultValue="Individual">
                  <List
                    sx={{
                      minWidth: 240,
                      '--List-gap': '0.5rem',
                      '--ListItem-paddingY': '1rem',
                      '--ListItem-radius': '8px',
                      '--ListItemDecorator-size': '32px',
                    }}
                  >
                    {['B to B', 'B to C', 'Both'].map((item, index) => (
                      <ListItem
                        variant="outlined"
                        key={item}
                        sx={{ boxShadow: 'sm', bgcolor: 'background.body' }}
                      >
                        <ListItemDecorator>
                          {[<Person />, <People />, <Apartment />][index]}
                        </ListItemDecorator>
                        <Radio
                          overlay
                          value={item}
                          label={item}
                          name='target'
                          onChange={handleChange}
                          sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
                          slotProps={{
                            action: ({ checked }) => ({
                              sx: (theme) => ({
                                ...(checked && {
                                  inset: -1,
                                  border: '2px solid',
                                  borderColor: theme.vars.palette.primary[500],
                                }),
                              }),
                            }),
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </RadioGroup>
                <div className={styles.Error}> <ErrorMessage name="target" /> </div>
              </Box>

              <Box textAlign="center" display="flex" alignItems='center' justifyContent='space-evenly' marginTop='20px' marginBottom='20px'>
                <Button variant="contained" color="error" onClick={() => setCount(3)}> Back </Button>
                <Button variant="contained" type="submit"> Next </Button>
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  )
}