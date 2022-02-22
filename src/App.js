import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './styles/theme/defaultTheme';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className='App'>
        <Button variant='outlined'>Hello World</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
