import { JSX } from "react/jsx-runtime";
import React, { useState } from "react";
import { Container } from "@mui/system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Person, People, Apartment } from '@mui/icons-material';
import { Box, Typography, Button, TextField } from "@mui/material";
import styles from './StepperComponent.module.css';

export function Step2(props: any): JSX.Element {

  const { count, setCount, name } = props;
  const [item, setItem] = useState('Individual');

  return (<>
    <Formik initialValues={{ item: 'Individual' }}
      onSubmit={(values: any) => {
        setItem(values);
        setCount(3);
      }
      }>
      <Container sx={{ margin: "1rem" }}>
        <Typography align='center' fontStyle="oblique">Which kind of structure this project is about ?</Typography>
        <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
          <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
            <List
              sx={{
                minWidth: 240,
                '--List-gap': '0.5rem',
                '--ListItem-paddingY': '1rem',
                '--ListItem-radius': '8px',
                '--ListItemDecorator-size': '32px',
              }}
            >
              {['Individual', 'Team', 'Enterprise'].map((item, index) => (
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
                    name='item'
                    onChange={() => setItem(item)}
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
          <Box textAlign="center" display="flex" alignItems='center' justifyContent='space-evenly'>
            <Button variant="contained" type="submit" onSubmit={() => setCount(3)}> Envoyer </Button>
          </Box>
        </Form>
      </Container>
    </Formik>
  </>);
}