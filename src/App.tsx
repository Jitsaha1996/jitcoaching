
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/home';
import MenuAppBar from './Components/headerbar';

function App() {
  return (
    <Box>
      {/* <MenuAppBar/> */}
<BrowserRouter>
<MenuAppBar/>
    
    <Routes>
     
      <Route path="/" element={<Home />}/>
      
      {/* <Route path="*" element={<NoPage />}/>
        <Route path="table" element={<TableDemo/>} /> */}
      
    </Routes>
  </BrowserRouter>
    </Box>
    
  ); 
}

export default App;
