import React, {useState, useEffect} from "react";
import { JSX } from "react/jsx-runtime";
import Slider from '@mui/joy/Slider';
import Tooltip from '@mui/material/Tooltip';
import { Container } from "@mui/material";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import {Box} from "@mui/material";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";

export function Step3(props: any): JSX.Element {

  const { set, setCount } = props;
  const [open, setOpen] = useState(false);

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
    {value : 1, label: "1 month"},
    { value: 11, label: '+10 months' },
  ];

  return(<>
  <Container sx={{ margin: "1rem" }}>
  <Box component="div" sx={{marginBlock: '10px'}}>
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
    getAriaValueText={valueText}
  />
  </Box>

  <Typography textAlign="center">Which kind of project is it ? </Typography>

  <Box component="div" sx={{marginTop : "20px"}}>
<Select
  color="primary"
  disabled={false}
  placeholder="Type of project"
  size="lg"
  variant="plain"
  onClose={() => setOpen(false)}
  onClick={() => setOpen(true)}
>
<Option value="static">Static Website</Option>
  <Option value="webapp">Web Application</Option>
  <Option value="features">Features on existing Web app</Option>
  <Option value="consulting">Consulting</Option>
  <Option value="else">Something else</Option>
</Select>
 </Box>

 <Button type="submit" onSubmit={() => setCount(4)}> Next </Button>
    
  </Container> 
  </>)
}