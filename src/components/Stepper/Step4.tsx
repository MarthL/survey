import React, {useState, useEffect} from "react";
import { JSX } from "react/jsx-runtime";
import Slider from '@mui/joy/Slider';
import Tooltip from '@mui/material/Tooltip';
import { Container, SelectChangeEvent } from "@mui/material";
import {Box} from "@mui/material";
import { Typography, Select, MenuItem } from "@mui/material";
import {Button} from "@mui/material";
import { Formik, Form } from "formik";
import { Option } from '@mui/joy'; 
import { WebStaticForm } from "./Step4/WebStaticForm";

export function Step4(props: any): JSX.Element {

  const { count, setCount, type } = props;

  console.log(type);

  // const getForm = (value: string) => {
  //   switch (value) {
  //     case 'static':
  //       return <WebStaticForm />;
  //     case 'webapp':
  //       return 'Web Application';
  //     case 'features':
  //       return 'Features on existing Web app';
  //     case 'consulting':
  //       return 'Consulting';
  //     case 'else':
  //       return 'Something else';
  //     default:
  //       return 'Type of project';
  //   }
  // };

  return(
    <>
    {type.type === 'static' ? <WebStaticForm /> : false }
    </>
  )


}