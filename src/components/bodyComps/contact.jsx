import { Box, Button } from "@mui/material";
import github from '../../Images/SvgTech/github.svg'
import linkedin from '../../Images/SvgTech/linkedin.svg'
import s from '../../styles/application.module.css'
export default function Contact(){
  return(
    <Box sx={{
      display: 'flex', 
      flexDirection:'row',
      justifyContent:'space-around',
      mb:'100px',
      
    }}>

      <a href="https://www.github.com/ElianZK">
        <Button sx={{display:'flex', flexDirection: 'column', alignItems: 'center',}}
          className={s.conBut} 
          color='secondary' 
        >
        <img className={s.images} src={github} alt="github" />
        GitHub
        </Button>
      </a>

      <a href="https://www.linkedin.com/in/elian-hergenrether">
        <Button sx={{display:'flex', flexDirection: 'column', alignItems: 'center',}}
          className={s.conBut} 
          color='secondary' 
        >
          <img className={s.images} src={linkedin} alt="linkedin" />
            LinkedIn
        </Button>
      </a>
    </Box>
  )
}