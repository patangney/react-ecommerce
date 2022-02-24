import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './styles/theme/defaultTheme';
import HomePage from './pages/homepage/homepage.component';
import './styles/main.scss';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

// <div className='App'>
// <HomePage />
// </div>

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
