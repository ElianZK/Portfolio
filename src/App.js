import './App.css';
import Application from './components/application';
import Landing from './components/Landing';
import About from './components/bodyComps/about';
import Box from '@mui/material/Box';
import { Route, Routes } from "react-router-dom";
function App() { 
  return (
    <div className="App" >
      <Box sx={{display:'flex',flexDirection:'column', bgcolor:'#000', height:'100vw'}}>
        <Routes>
          <Route exact path="/" element={<Landing/>}></Route>
          <Route exact path="/home" element={<Application/>}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
