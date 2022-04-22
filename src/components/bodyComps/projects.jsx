import * as React from 'react';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from '../../styles/application.module.css'
import Lok from '../../Images/LokApp.png';
import Henrecommerce from '../../Images/Henr-Ecommerce.png'

export default function Projects(){
return(
<Box className={s.Projects}>

  <Card className={s.LoK} sx={{ maxWidth: '90%',backgroundColor:'#1b1b1b', color:"#fff" }}>
    <CardMedia component="img" alt="LoKAppImage" height="140" image={Lok} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        LoK App
      </Typography>
      <Typography variant="body2">
        LoK App es una tienda virtual hecha por 8 personas para un diseñador
        de modas urbano oriundo de colombia. Esta hecha con todas
        las tecnologias aprendidas mencionadas anteriormente
      </Typography>
    </CardContent>
    <CardActions>
      <a href="https://pffrontend-fafd3.web.app/">
        <Button size="small">Link to App</Button>
      </a>
    </CardActions>
  </Card>
 
  <Card className={s.Ecom} sx={{ maxWidth: '90%',backgroundColor:'#1b1b1b', color:"#fff", my:'50px' }}>
    <CardMedia component="img" alt="Henrecommerce" height="140"
      image={Henrecommerce} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Henr-ecommerce
      </Typography>
      <Typography variant="body2" >
        Henr-ecommerce es el primer proyecto final grupal que hice
        en el bootcamp de henry, se hizo en un grupo de 6 utilizando lo
        aprendido. Es un ecommerce de tecnologia, basado en la api de mercado libre
      </Typography>
    </CardContent>
    <CardActions>
      <a href="https://henrecommerce.netlify.app/">
        <Button size="small">Link to App</Button>
      </a>
    </CardActions>
  </Card>
  
</Box>
)
}