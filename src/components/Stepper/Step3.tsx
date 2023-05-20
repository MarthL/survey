import React from "react";
import { JSX } from "react/jsx-runtime";
import Slider from '@mui/joy/Slider';
import Tooltip from '@mui/material/Tooltip';
import { Container } from "@mui/material";

export function Step3(props: any): JSX.Element {

  const { set, setCount } = props;

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
    {value : 1, label: "1 month"},
    { value: 11, label: '+10 months' },
  ];

  return(<>
  <Container sx={{ margin: "1rem" }}>
  <Slider 
    color="info"
    size="lg"
    variant="solid"
    defaultValue={3} 
    max={11} 
    min={1}
    valueLabelDisplay="auto"
    marks={marks}
    valueLabelFormat={isMaxValue}
    getAriaValueText={valueText}/>
    
  </Container> 
  </>)
}