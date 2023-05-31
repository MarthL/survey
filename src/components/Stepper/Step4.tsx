import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import Slider from '@mui/joy/Slider';
import Tooltip from '@mui/material/Tooltip';
import { Container, SelectChangeEvent } from "@mui/material";
import { Box } from "@mui/material";
import { Typography, Select, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { Option } from '@mui/joy';
import { WebStaticForm } from "./Step4/WebStaticForm";
import { FeaturesForm } from "./Step4/FeaturesForm";
import { WebAppForm } from "./Step4/WebAppForm";
import { OtherForm } from "./Step4/OtherForm";
import { ConsultingForm } from "./Step4/ConsultingForm";

export function Step4(props: any): JSX.Element {

  const { count, setCount, type } = props;

  return (
    <>
      {type.type === 'static' ? <WebStaticForm count={count} setCount={setCount} /> : false}
      {type.type === 'features' ? <FeaturesForm count={count} setCount={setCount} /> : false}

      {type.type === 'webapp' ? <WebAppForm count={count} setCount={setCount} /> : false}
      {type.type === 'consulting' ? <ConsultingForm count={count} setCount={setCount} /> : false}
      {type.type === 'else' ? <OtherForm count={count} setCount={setCount} /> : false}
    </>
  )


}