import React from 'react';
import { Container} from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const App = () => {
  

  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Home />

      </Container>
    </Router>  
  );
};

export default App;
