import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Button, AppBar, Toolbar, Card, CardContent, CardActions } from '@mui/material';
import { lightTheme, darkTheme } from './themes.js';
import Site from './Site.jsx';
import ThemeToggler from './Components/ThemeToggler.jsx';
import TopBar from './Components/TopBar.jsx';
import SocialHolder from './Components/SocialHolder.jsx';
import Section from './Components/Section.jsx';
import MainProjectEmph from './Components/MainProjectEmph.tsx';

function App() {

  return (
    <>
      <TopBar />
      <SocialHolder />

      <Section
        title='Projects'
        subheader="Main projects that I've put a ton of time and effort into. Useable by you, right now."
        >

            <MainProjectEmph 
                title='Soulflame'
                titlehref='https://alexeckardt.itch.io/soulflamealpha' 
                subheader='Action Adventure Platformer'
                desc="A Game I've been passionately developing for 3 years, but currently on a hiatus do focus on my schooling."
                image={'soulflame_bkg.png'}
            >
                <Button 
                    size="small" 
                    href='https://alexeckardt.itch.io/soulflamealpha' 
                    rel="noreferrer"
                    target='_blank'>
                      Learn More
                  </Button>
                  <Button 
                    size="small" 
                    href='https://instagram.com/soulflamegame' 
                    rel="noreferrer"
                    target='_blank'>
                      Showcase
                  </Button>
            </MainProjectEmph>

            <MainProjectEmph 
                title='Pinball Pioneer'
                titlehref='https://alexeckardt.itch.io/pinball-pioneer' 
                subheader='Top 10 Puzzle Game of GMTK 2023 Game Jam'
                desc="Pinball Pioneer is a puzzle game, originally developed in 48 hours for the largest game jam in (at the time) Itch.io history. 
                      After a week-long voting period, Pinball Pioneer placed 7th place out of over 7000 submissions."
                image={'pinball_bkg.png'}
            >
                <Button 
                    size="small" 
                    href='https://itch.io/jam/gmtk-2023/rate/2159023' 
                    rel="noreferrer"
                    target='_blank'>
                      Learn More
                  </Button>
                  <Button 
                    size="small" 
                    href='https://itch.io/jam/gmtk-2023' 
                    rel="noreferrer"
                    target='_blank'>
                      About GTMK Jam
                  </Button>
            </MainProjectEmph>

            <MainProjectEmph 
                title='GO Transit Viewer'
                titlehref='https://alexeckardt.github.io/GO-Transit-Visualizer/' 
                subheader='GTA Transit Network Visualizer'
                desc='GO Transit view is a visualizer of all Bus & Train routes issued by GO Transit in Sothern Ontario.'
                image={'gotransitviewer.png'}
                imageX={40}
                // imageY={5}
            >
                <Button 
                    size="small" 
                    href='https://alexeckardt.github.io/GO-Transit-Visualizer/' 
                    rel="noreferrer"
                    target='_blank'>
                      Try out
                  </Button>
            </MainProjectEmph>
      
      </Section>
      <br />
      <br />
      <Section
        title='Experiments'
        subheader="Technical Side Projects that are cool to use and see, but aren't as user friendly."
        >
          hi
        </Section>
    </>
  );
}

export default App;
