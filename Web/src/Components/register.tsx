import { Box, Button, TextField, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {
    const [data,setData]=useState({name:"",
    email:"",
    password:""

    });
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            axios.post('http://localhost:5000/api/users', data
                
              )
              .then(function (response:any) {
                console.log("response",response);
              })
              .catch(function (error) {
                console.log(error);
              });
          
        } else {
          alert("Form is invalid! Please check the fields...");
        }
      };
  return (
    <>
      <CssBaseline/>
    <Container  maxWidth="sm"> 

    <Box className="flex flex-col pt-3" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}  component="form" onSubmit={handleSubmit} noValidate>
        <Box>
        <Typography className='flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2 '>
                Register
            </Typography>
        </Box>
        <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 '>
                Name
            </Typography>
        <TextField id="name"className='pl-3 w-1/2'  variant="standard" required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setData({...data,name:e.target.value})} />
        </Box>
        <Box className="flex w-full flex-col justify-center items-center " >
            <Typography className='pr-3 w-1/2 pt-3 '>
                Email
            </Typography>
        <TextField id="email"className='pl-3 w-1/2'  variant="standard" required type='email' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setData({...data,email:e.target.value})}/>
        </Box>
        <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 '>
                Password
            </Typography>
        <TextField id="password"className='pl-3 w-1/2'  variant="standard" required type='password' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setData({...data,password:e.target.value})} />
        </Box>
        <Box className=" flex justify-center items-center pt-5">
        <Button variant="outlined" sx={{marginRight:"20px"}} color="primary" type="submit" >
        Cancel
      </Button>
        <Button variant="contained"  color="primary" type="submit" >
        Submit
      </Button>
      
        </Box>
        
        
        </Box>
        

    
    </Container>
    </>
  
  )
}
