import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export const MyProfile = () => {
    const { state } = useLocation();
    const [myProfile,setMyProfile]=useState(state);
    console.log(state);
  return (
    <Box className="flex flex-col  w-full max-w-25 justify-center items-center  bg-transparent">
        <Box className=' flex justify-center items-center pt-2' >
        <Typography className="flex text-4xl font-extrabold dark:text-white ">
          Hi   {myProfile.name},Welcome to Jit Coachine Center .
        </Typography>
        </Box>
        <Box className=' flex justify-center items-center pt-2 w-1/2'>
            <img src={myProfile?.pic} alt='test'/>

        </Box>
       

    </Box>
  )
}
