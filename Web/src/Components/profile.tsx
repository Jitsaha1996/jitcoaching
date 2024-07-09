import { Box, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../Auth/userContext';


export const MyProfile = () => {
  
    const { user } = React.useContext<any>(UserContext);
    const [myProfile,setMyProfile]=useState(user);
    const [auth, setAuth] = React.useState(true);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked);
     navigate('/login')
     alert("do you want to log out?");
     
    };
  return (
    <Box className="flex flex-col  w-full max-w-25 justify-center items-center  bg-transparent">
      <Box className="flex justify-start items-start pt-2 w-full">
       <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      </Box>
        <Box className='flex justify-start items-start pt-2 w-full'>
          <Box className='w-1/3'>
          <img src={myProfile?.pic} alt='test'/>
          </Box>
            <Box className='w-2/3 bg-slate-200 ml-5 pl-5'>
            <Typography className="text-4xl from-neutral-900  ">
                 Hi   {myProfile.name},Welcome to Jit Coachine Center
                 <br/>

                 <table className= 'flex flex-col justify-center place-content-center py-2 mr-5 pr-5 border  border-black  w-full '>
                  <thead>
                  <h1 className= ' flex font-extrabold ml-5'> YOUR DETAILS-- </h1>
                  <div className="divide-y-2 divide-slate-900 bg-orange-200 shadow-inner shadow-black p-8">
                    <div className="py-1 text-2xl ">Name= {myProfile.name} </div>
                    <div className="py-1 text-2xl">Email id= {myProfile.email} </div>
                    <div className="py-1 text-2xl">Phone no.= {myProfile.phone} </div>
                    <div className="py-1 text-2xl">D.O.B.= {myProfile.dob}  </div>
                  </div>
                  </thead>
                  </table> 
         
            </Typography>
            </Box>
        </Box>

        <Box className= 'flex flex-col w-full '>
          <Box className= 'flex justify-center items-center text-3xl font-extrabold py-2 bg-slate-500 '>
          <Typography  >
            Achievements
          </Typography>
          </Box>
          
          <table className="flex flex-col justify-evenly place-content-evenly py-3 border border-separate  border-slate-600 border-spacing-5 w-full">
            <thead>
            <div className="divide-y-2 divide-slate-900 bg-slate-200 p-16">
                    <div className="py-1 text-xl "> Grade in 10th= </div>
                    <div className="py-1 text-xl"> Grade in 12th= </div>
                    <div className="py-1 text-xl"> others.. </div>
                    
                  </div>
            </thead>
          </table>
          

      </Box>
    </Box>
  )
}
function setAuth(checked: boolean) {
  throw new Error('Function not implemented.');
}

