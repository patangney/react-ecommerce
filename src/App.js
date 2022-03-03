import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './styles/theme/defaultTheme';
import './styles/main.scss';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import Header from 'components/header/header.component';
import SignInSignUpPage from 'pages/signInSignUp/signInSignUp.compoent';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
    <Header />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
