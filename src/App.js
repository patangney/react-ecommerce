import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './styles/theme/defaultTheme';
import HomePage from './pages/homepage/homepage.component';
import './styles/main.scss';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className='App'>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
