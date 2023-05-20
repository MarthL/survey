import { JSX } from "react/jsx-runtime";
import React, {useState} from "react";
import { Container } from "@mui/system";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Apartment from '@mui/icons-material/Apartment';

export function  Step2(props: any): JSX.Element {

  const { count, setCount } = props;
  return (<>
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
  </>);
}