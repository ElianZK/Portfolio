import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import {Themes} from '../../styles/themeProvider'
import education from '../../Images/education.jpg'
import s from '../../styles/application.module.css'


export default function About(){

return (
<Box className={s.cards} sx={{ px:5}}>

  <ThemeProvider theme={Themes.purpleGreen}>

    <Card className={s.parrafo} variant="outlined" sx={{ backgroundColor:'#1b1b1b', color:"#fff",mb:'7vh',textAlign:'justify'}}>
      <CardHeader title="Sobre mi Formacion" />
      <CardContent>
        <Typography paragraph variant='body2'>
          Mi educacion primaria la realizé en un colegio estatal de mi cuidad,
          la secundaria la curse completamente en una institucion privada, con
          orientacion en idiomas, aprendiendo ingles, potugues e italiano. Al
          finalizar decidi estudiar Licenciatura en Gestion Aeroportuaria,
          pero debido a la situacion socio-politica la abandone y descubri el maravilloso
          mundo de la porgramacion, decidiendome por hacer un bootcamp intensivo de 4 meses
          en HENRY.
        </Typography>
      </CardContent>
    </Card>

    <Box id='all' sx={{
      display:'flex',
      flexDirection:'row'
    }}>
      <Box id='skills-Me' sx={{disiplay:'flex',flexDirection:'column',width:'70%',mr:'3vh'}}>
        <Box className={s.two}>
          <Card className={s.parrafo} variant="outlined" sx={{ backgroundColor:'#1b1b1b', color:"#fff", width:'40%',mr:'3vh'}}>
            <CardHeader title="Hard Skills" />
            <CardContent>
              <Typography paragraph variant='overline'>
                - JavaScript <br></br>
                - Sequelize <br></br>
                - ReactJs <br></br>
                - NodeJs <br></br>
                - Redux <br></br>
                - HTML <br></br>
                - CSS <br></br>
              </Typography>
            </CardContent>
          </Card>

          <Card className={s.parrafo} variant="outlined" sx={{ backgroundColor:'#1b1b1b', color:"#fff", width:'60%'}}>
            <CardHeader title="Soft Skills" />
            <CardContent>
              <Typography paragraph variant='overline'>         
                - Dedicación <br></br>
                - Creatividad <br></br>
                - Cooperación <br></br>
                - Proactividad <br></br>
                - Mente Abierta <br></br>
                - Aprendizaje Ágil <br></br>
                - Pensamiento Crítico <br></br>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box className={s.two} sx={{mt:'3vh'}}>
          <Card className={s.parrafo} variant="outlined" sx={{  backgroundColor:'#1b1b1b', color:"#fff", textAlign:'justify'}}>
            <CardHeader title="Objetivos" />
            <CardContent>
              <Typography paragraph variant='subtitle2'>
                Al ser un programador junior no tengo ambiciones tan grandes, sin embargo, mi
                objetivo principal es encontrar un puesto en una empresa con un
                buen ambiente laboral, donde pueda demostrar, ampliar mis
                conocimientos, ademas de mis habilidades tecnicas y soft-skills.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Card className={s.parrafo} variant="outlined" sx={{ backgroundColor:'#1b1b1b', color:"#fff", width:'36%',textAlign:'left'}}>
        <CardHeader title="¿Porque Yo?" />
        <CardContent>
          <Typography paragraph variant='subtitle2'>
            Soy una persona que ama y le apasiona progrmar, me encanta
            aprender, trabajar en equipo y enfrentarme a nuevos retos. Puedo aportar
            mucho a un grupo de trabajo, se como comunicarme, dar y pedir ayuda, soy responsable y me
            involucro de verdad en cada proyecto del que soy parte. Me inclino mas por el
            lado del front-end, ya que me gusta hacer apps intuitivas y estéticas, aunque el back-end
            no me disgusta porque se que tiene mucha progresion y se aprende mucho.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </ThemeProvider>
</Box>
);
}