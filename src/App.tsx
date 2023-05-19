import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { StepperComponent } from './components/Stepper/StepperComponent';
import { Footer } from './components/Temp/Footer/Footer';
import { Header } from './components/Temp/Header/Header';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LegalMentions } from './components/Temp/LegalMentions/LegalMentions';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container maxWidth="sm">
        <Routes>
        <Route path="/" element={ <StepperComponent />}></Route>
        <Route path="/legal" element={<LegalMentions />}></Route>
      </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
