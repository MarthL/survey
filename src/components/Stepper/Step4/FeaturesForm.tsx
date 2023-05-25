import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { Radio, RadioGroup, List, ListItem, ListItemDecorator } from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from "formik";

export function FeaturesForm(props: any): JSX.Element {
  const { count, setCount } = props;
  const [item, setItem] = useState('');

  const technos = ['PHP', 'Javascript', 'React', 'Angular', 'Symfony', 'NodeJS', 
    'Express', 'MySQL', 'C#', 'NestJS', 'Laravel', 'HTML/CSS', 
    'Design', 'SEO', 'Others'
  ];

  const changeItem = (item: any) => {
    setItem(item);
  }

  return (
    <>
      <Formik
        initialValues={{ objective: '', environment: '', language: '' }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        <Form style={{ display: 'flex', width: '100%', height: '70vh', flexDirection: "column", gap: "10px", justifyContent: 'center' }}>
          <Field as={TextField} label="objective" placeholder="Which solution this enhancements is about ?" name="objective"> </Field>
          <Field as={TextField} label="environment" placeholder="Please provides any informations regarding environment/specificities" name="environment"> </Field>
          <Select placeholder="Which language will be solicited ?" name="language">
            {technos.sort().map((item, index) => (
              <MenuItem onSelect={() => changeItem(index)} value={index}>{item}</MenuItem>
            ))}
        </Select>

          <Button variant="contained" type="submit" onSubmit={() => console.log("test")}> Send </Button>
        </Form>
      </Formik>
    </>
  )
}

// Qui sont les utilisateurs cibles de cette fonctionnalité ? Ont-ils des caractéristiques spécifiques à prendre en compte ?

// Existe-t-il des applications ou des logiciels similaires qui proposent déjà cette fonctionnalité ? Si oui, quels sont leurs points forts et leurs points faibles ?

// Quelles sont les contraintes techniques ou les limites existantes de l'application ou du logiciel qui pourraient affecter la mise en œuvre de cette fonctionnalité ?

// Quelles ressources (temps, budget, personnel) sont disponibles pour développer cette fonctionnalité ?

// Y a-t-il des préférences spécifiques en termes de langage de programmation, de plateforme ou de technologies à utiliser pour développer cette fonctionnalité ?

// Quelles sont les conséquences possibles sur d'autres parties de l'application ou du logiciel lors de l'ajout de cette fonctionnalité ?

// Comment mesurerez-vous le succès de cette nouvelle fonctionnalité une fois qu'elle sera mise en œuvre ?

// Quel est le calendrier prévu pour le développement et la mise en production de cette fonctionnalité ?