import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import ThemeToggler from './ThemeToggler';

function TopBar() {
  return (
      <Toolbar sx={{border: ''}}>
          <Typography variant="h6" fontWeight='semibold' style={{ flexGrow: 1 }}>
          alex.eckardt
          </Typography>
          <ThemeToggler />
      </Toolbar>
  );
}

export default TopBar;
