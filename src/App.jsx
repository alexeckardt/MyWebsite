import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Button, AppBar, Toolbar, Switch } from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Site from './Site';
import ThemeToggler from './Components/ThemeToggler';

function App() {

  return (
    <ThemeToggler />
  );
}

export default App;
