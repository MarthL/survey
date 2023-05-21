import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { StepperComponent } from './components/Stepper/StepperComponent';
import { Footer } from './components/Temp/Footer/Footer';
import { Header } from './components/Temp/Header/Header';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LegalMentions } from './components/Temp/LegalMentions/LegalMentions';
import Particle from './components/Particle.jsx';

function App() {
  const [count, setCount] = useState(1);
  
  return (
    <>
      <Router>
        <Header />
        <Container maxWidth="sm">
        <Particle />
        <Routes>
        <Route path="/" element={ <StepperComponent count={count} />}></Route>
        <Route path="/legal" element={<LegalMentions />}></Route>
      </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
