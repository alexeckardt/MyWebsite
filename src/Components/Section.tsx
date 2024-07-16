import { Box, Typography } from '@mui/material';
import React from 'react';


type SectionProps = {

  title: string,
  subheader?: string

  children?: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <Box sx={{minWidth:'300px', padding: '30px'}}>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {props.subheader}
          </Typography>
          {props.children}
    </Box>
  );
};

export default Section;