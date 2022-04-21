import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import logo from '../logo.jpg'
import s from '../styles/application.module.css'
import { ThemeProvider } from '@mui/material/styles';
import { Themes } from '../styles/themeProvider';
import Contact from './bodyComps/contact';
import Projects from './bodyComps/projects';
import Resume from './bodyComps/resume';




const pages = [ 'Resume', 'Projects','Contact me'];

export default function Application () {
  
  return (
  < div className={s.fondo} sx={{height:'100%'}}>
    <ThemeProvider theme={Themes.prupleGreen}>
        
                <Avatar src={logo} sx={{ width: 160, height: 160,mx:'50px', mt:'50px' }} />
              

        <Box sx={{height:'50px'}}></Box>

        <Typography variant="body1" sx={{color:'#fff'}}>

        <h1 className={s.titles}> Sobre Mi</h1>

            <Box sx={{mb:'30px', maxWidth:'700px'}}>
              <Resume></Resume>
            </Box>
                
            <h1 className={s.titles}> Mis Proyectos</h1>

            <Box sx={{maxWidth:'700px'}}>
              <Projects></Projects>
            </Box>

            <h1 className={s.titles}> Contáctame</h1>

            <Box sx={{maxWidth:'700px'}}>
              <Contact></Contact>
            </Box>
          </Typography>

    </ThemeProvider>
  </div>
  );
};
// 70milreg, 160/170 juntan 0.4 del pbi, las empresas del estado gastan 0.7