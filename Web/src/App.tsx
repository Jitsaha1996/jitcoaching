
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/home';
import MenuAppBar from './Components/headerbar';
import StudentsList from './Components/studentsList';
import { Student } from './Components/student';
import { Register } from './Components/register';

function App() {
  return (
    <Box>
      {/* <MenuAppBar/> */}
<BrowserRouter>
<MenuAppBar/>
    
    <Routes>
    <Route path="/register" element={<Register />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/studentlist" element={<StudentsList/>}/>
      <Route path="/student/:id" element={<Student/>}/>
      
      {/* <Route path="*" element={<NoPage />}/>
        <Route path="table" element={<TableDemo/>} /> */}
      
    </Routes>
  </BrowserRouter>
    </Box>
    
  ); 
}

export default App;
