import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeContext';
import { TablerMoonFilled } from './SVGIcons/TablerMoonFilled.tsx';
import { TablerSunFilled } from './SVGIcons/TablerSunFilled.tsx';
import { Box } from '@mui/material';
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';

function ThemeToggler() {

    const { darkMode, handleThemeChange } = useContext(ThemeContext);

  return (
    <Box onClick={handleThemeChange} sx={{padding: '5px'}}>
        {darkMode 
            ? <DarkModeRounded fontSize='large'/>
            : <LightModeRounded fontSize='large'/>
        }
    </Box>
  );
}

export default ThemeToggler;
