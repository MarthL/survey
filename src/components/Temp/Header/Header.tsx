import React from "react";
import { JSX } from "react/jsx-runtime";
import Button from '@mui/material/Button';
import logo from './../../../logo.svg';
import styles from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <div className={styles.Test}>
      <img src={logo} alt="logo" />
      <Button variant="contained">Hello World</Button>
    </div>
  )
}
