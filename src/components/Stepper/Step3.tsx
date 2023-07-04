import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import { Typography, Select, MenuItem, Container, SelectChangeEvent, Box, Tooltip } from "@mui/material";
import { Option, Slider } from '@mui/joy';
import { Button } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import styles from './StepperComponent.module.css';

interface Step3Props {
  count: number;
  datas: object;
  name?: string;
  setCount: (value: number) => void;
  setDatas?: (datas: any) => void;
  onNextStep: (args: object) => void;
}


export function Step3(props: Step3Props): JSX.Element {

  const { datas, setDatas, count, setCount, onNextStep } = props;
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [time, setTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  console.log(datas);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  interface FormErrors {
    type?: string;
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: any) => {
    if (!event.currentTarget.contains(event.target)) {
      setOpen(false);
    }
  };


  function valueText(value: number) {
    return `${value} month`;
  }

  const isMaxValue = (value: any) => {
    if (value === 11) {
      return '+10';
    } else {
      return value;
    }
  }

  const marks = [
    { value: 1, label: "1 month" },
    { value: 11, label: '+10 months' },
  ];

  const getMenuText = (value: string) => {
    switch (value) {
      case 'static':
        return 'Static Website';
      case 'webapp':
        return 'Web Application';
      case 'features':
        return 'Features on existing Web app';
      case 'consulting':
        return 'Consulting';
      case 'else':
        return 'Something else';
      default:
        return 'Type of project';
    }
  };

  const validate = (values: any): FormErrors => {
    const errors: FormErrors = {};
    if (values.type === 'Type of project' || values.type.length < 1) {
      errors.type = 'Please select a value';
    }
    return errors;
  }

  return (<>
    <Formik initialValues={{ time: 3, type: '' }}
      validate={validate}
      onSubmit={(values: any) => {
        setType(values.type);
        setTime(values.time);
        onNextStep({ type: values.type });
        setDatas ? setDatas(Object.assign(datas, values)) : false;
        setCount(4);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
          <Container>
            <Box component="div">
              <Typography textAlign="center"> What are the time estimation of this project ? </Typography>
              <Slider
                color="info"
                name="time"
                size="lg"
                variant="solid"
                defaultValue={3}
                max={11}
                min={1}
                valueLabelDisplay="auto"
                marks={marks}
                valueLabelFormat={isMaxValue}
                getAriaValueText={valueText}
                onChange={(event, value) => setFieldValue("time", value)}
              />
            </Box>

            <Typography textAlign="center">Which kind of project is it ? </Typography>

            <Box component="div" sx={{ marginTop: "20px", marginBottom: "20px", textAlign: 'center' }}>
              <Select
                color="primary"
                name="type"
                placeholder="Type of project"
                displayEmpty
                size="medium"
                variant="outlined"
                value={selectedValue}
                onChange={(event: any) => {
                  setFieldValue("type", event.target.value);
                  handleChange(event);
                }}
                renderValue={(value: string) => getMenuText(value)}
                onClose={() => setOpen(false)}
                onClick={() => setOpen(true)}
                sx={{ textAlign: 'center' }}
              >
                <MenuItem value="" disabled> Type of project </MenuItem>
                <MenuItem value="static">Static Website</MenuItem>
                <MenuItem value="webapp">Web Application</MenuItem>
                <MenuItem value="features">Features on existing Web app</MenuItem>
                <MenuItem value="consulting">Consulting</MenuItem>
                <MenuItem value="else">Something else</MenuItem>
              </Select>
              <div className={styles.Error}>
                <ErrorMessage name="type" />
              </div>
            </Box>

            <Box textAlign="center" display="flex" alignItems='center' justifyContent='space-evenly'>
              <Button variant="contained" color="error" onClick={() => setCount(2)}> Back </Button>
              <Button variant="contained" type="submit"
              > Next </Button>
            </Box>
          </Container>
        </Form>
      )}
    </Formik>
  </>)
}
