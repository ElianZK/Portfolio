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

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={s.cards} sx={{ maxWidth:'auto', maxHeight:'430px', m:'4%', mt:'6%'}}>
      <ThemeProvider theme={Themes.purpleGreen}>

        <Card variant="outlined" sx={{ width: 'auto', backgroundColor:'#424242', color:"#fff" }}>
          <CardHeader title="About me" />
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph variant='body2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nam officiis ut, unde illum ratione
              autem repudiandae recusandae quis quod esse libero quia ea placeat, totam, ipsum exercitationem!
              Pariatur, provident?
            </Typography>
          </CardContent>
        </Card>


      <Box className={s.two}>
        <Card variant="outlined" sx={{ width: '90%', backgroundColor:'#424242', color:"#fff", height:'47%', marginX:'20px' }}>
          <CardHeader title="My Education Story" />
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph variant='body2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nam officiis ut, unde illum ratione
                autem repudiandae recusandae quis quod esse libero quia ea placeat, totam, ipsum exercitationem!
                Pariatur, provident?
              </Typography>
            </CardContent>
        </Card>

        <Card variant="outlined" sx={{ width: '90%', backgroundColor:'#424242', color:"#fff", height:'47%',marginX:'20px' }}>
          <CardHeader title="My Education Story" />
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph variant='body2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nam officiis ut, unde illum ratione
                autem repudiandae recusandae quis quod esse libero quia ea placeat, totam, ipsum exercitationem!
                Pariatur, provident?
              </Typography>
            </CardContent>
        </Card>
      </Box>

      </ThemeProvider>
    </Box>
  );
}
