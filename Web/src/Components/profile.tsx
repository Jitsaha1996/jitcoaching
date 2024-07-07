import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import UserContext from '../Auth/userContext';

export const MyProfile = () => {
    const { user } = React.useContext<any>(UserContext);
    const [myProfile,setMyProfile]=useState(user);
    
  return (
    <Box className="flex flex-col  w-full max-w-25 justify-center items-center  bg-transparent">
        <Box className=' flex justify-center items-center pt-2' >
        <Typography className="flex text-4xl font-extrabold dark:text-white ">
          Hi   {myProfile.name},Welcome to Jit Coachine Center .
        </Typography>
        </Box>
        <Box className='flex justify-start items-start pt-2 w-full'>
          <Box className='w-1/3'>
          <img src={myProfile?.pic} alt='test'/>
          </Box>
            <Box className='w-2/3 bg-slate-200 ml-5 pl-5'>
            <Typography className="text-4xl font-light  ">
          Hi   {myProfile.name},Welcome to Jit Coachine Center 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repudiandae facere quibusdam nesciunt enim eaque, at officiis repellendus excepturi
           tenetur nisi dignissimos similique perspiciatis repellat quos voluptatibus autem natus obcaecati.
        </Typography>
            </Box>
          

        </Box>
        <Box className= 'flex flex-col w-full '>
          <Box className= 'flex justify-center items-center py-5'>
          <Typography >
            Achievements
          </Typography>
          </Box>
          <Box className='flex py-5'>
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Cumque est tempore saepe ducimus ea sint in? Reiciendis veniam ex doloremque, porro sed autem amet voluptatibus fugiat optio nesciunt! Non, accusantium.
          </Typography>
          </Box>

</Box>
    </Box>
  )
}
