import React from 'react';
import { Toolbar } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import SocialIcon from './SocialIcon.tsx';

function SocialHolder() {
  return (

      <Toolbar sx={{border: ''}}>
        <SocialIcon icon={(<LinkedIn fontSize='medium'/>)} href='https://linkedin.com/in/alex-eckardt'/>
        <SocialIcon icon={(<GitHub fontSize='medium'/>)} href='https://github.com/alexeckardt'/>
        <SocialIcon icon={(<Instagram fontSize='medium'/>)} href=''/>
      </Toolbar>
  );
}

export default SocialHolder;
