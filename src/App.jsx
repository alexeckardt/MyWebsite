import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Button, AppBar, Toolbar, Switch } from '@mui/material';
import { lightTheme, darkTheme } from './themes';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My MUI App
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h2" gutterBottom>
          Welcome to My MUI App
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a simple React app using Material-UI for styling.
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
