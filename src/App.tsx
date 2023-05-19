import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { StepperComponent } from './components/Stepper/StepperComponent';
import { Footer } from './components/Temp/Footer/Footer';
import { Header } from './components/Temp/Header/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <StepperComponent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
