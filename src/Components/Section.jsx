import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';


const Section = (props) => {

  const theme = useTheme();
  
  return (
    <Box sx={{minWidth:'300px', padding: '30px'}}>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.grey.main}}>
            {props.subheader}
          </Typography>
          {props.children}
    </Box>
  );
};

export default Section;