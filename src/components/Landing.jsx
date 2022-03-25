import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import NavigationIcon from '@mui/icons-material/Navigation';
import s from '../styles/landing.module.css'
import { ThemeProvider } from '@mui/material/styles';
import { Themes } from '../styles/themeProvider';
import About from './bodyComps/about';
import { Link } from "react-router-dom"


export default function Application () {

  return (
    <div className={s.Landing}>
      <ThemeProvider theme={Themes.prupleGreen}>
        <Typography variant="body1" sx={{color:'#fff'}}>
          <Box sx={{ marginBottom:'50px'}}>
            <About></About>
          </Box>
          <Box className={s.Know}>
            <Link to='/home'>
              <Button variant='outlined' sx={{width:'200px',height:'50px'}}> Conóceme </Button>
            </Link>
          </Box>
        </Typography>
      </ThemeProvider>
    </div>

  );

};
