import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, } from '@mui/material';
import {Themes} from '../../styles/themeProvider'
import s from '../../styles/application.module.css'
import javascript from '../../Images/SvgTech/logo-javascript.svg'
import html from '../../Images/SvgTech/html-1.svg'
import css from '../../Images/SvgTech/css-3.svg'
import react from '../../Images/SvgTech/react-2.svg'
import nodejs from '../../Images/SvgTech/nodejs-icon.svg'
import sql from '../../Images/SvgTech/sql.png'
export default function About(){ 
  return (
    <ThemeProvider theme={Themes.purpleGreen}>
      <Typography color="#66e113" >
        <Box sx={{ fontSize:'23px', textAlign:'center'}}>
          <h1 className={s.title}>Hola! Soy Elian, <br></br>
            Un Desarrollador Web Full Stack</h1>
        </Box>
        {/* <Box sx={{ display: 'flex', flexDirection:'row',justifyContent:'space-between',marginX:'350px', }}>
        <img className={s.images} src={javascript}alt='js'/>
        <img className={s.images} src={html} alt="html" />
        <img className={s.images} src={css} alt="css" />
        <img className={s.images} src={react} alt="react" />
        <img className={s.images} src={nodejs} alt="nodejs" />
        <img className={s.images} src={sql} alt="sql" />
        </Box> */}
      </Typography>
    </ThemeProvider>
  );
}

//"../../Images/SvgTech/logo-javascript.svg" 
//<img className={s.images}src={javascript}alt='js'></img>
