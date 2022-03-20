import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'
import logo from '../logo.jpg'
import s from '../styles/application.module.css'
import { ThemeProvider } from '@mui/material/styles';
import { Themes } from '../styles/themeProvider';
import About from './bodyComps/about';
import Contact from './bodyComps/contact';
import Projects from './bodyComps/projects';
import Resume from './bodyComps/resume';




const pages = [ 'Resume', 'Projects','Contact me'];

export default function Application () {
  
  return (
  < div className={s.fondo}>
    <ThemeProvider theme={Themes.prupleGreen}>
        <AppBar className={s.Bar} position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Avatar src={logo} sx={{ width: 57, height: 57,mr:'20px' }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button variant='outline' name={page} key={page} sx={{  color: '#fff', display: 'block', fontSize:'17px', mr:'20px'}}>
                  {page}
                </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

          <Typography variant="body1" sx={{color:'#fff'}}>

            <Box>
              <Resume></Resume>
            </Box>

            <Box>
              <Projects></Projects>
            </Box>

            <Box>
              <Contact></Contact>
            </Box>
          </Typography>

    </ThemeProvider>
  </div>
  );
};
// 70milreg, 160/170 juntan 0.4 del pbi, las empresas del estado gastan 0.7