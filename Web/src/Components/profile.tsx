import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export const MyProfile = () => {
    const { state } = useLocation();
    const [myProfile,setMyProfile]=useState(state);
    console.log(state);
  return (
    <Box className="flex flex-col  w-full max-w-25 justify-center items-center  bg-transparent">
        
        <Box className='flex justify-start items-start pt-2 w-full'>
          <Box className='w-1/3'>
          <img src={myProfile?.pic} alt='test'/>
          </Box>
            <Box className='w-2/3 bg-slate-200 ml-5 pl-5'>
            <Typography className="text-4xl font-light  ">
                 Hi   {myProfile.name},Welcome to Jit Coachine Center 
         
            </Typography>
            </Box>
        </Box>

        <Box className= 'flex flex-col w-full '>
          <Box className= 'flex justify-center items-center text-5xl py-0 bg-slate-500 '>
          <Typography >
            Achievements
          </Typography>
          </Box>
          
          <table className="flex flex-col justify-center place-content-center py-3 border border-separate  border-slate-600 border-spacing-5 w-full">
            <thead>
              <tr className='flex justify-center  ' > 
                <th className= "border  border-slate-600 ...">Standard </th>
                <th className= "border  border-slate-600 ...">Marks</th>
              </tr>
            </thead>

            <tbody>
               <tr className='flex justify-center '>
                <td className= "border  border-slate-600 ...">10th=</td>
                <td className= "border  border-slate-600 ...">87.5%</td>
              </tr>
              <tr className='flex justify-center '>
                <td className= "border  border-slate-600 ...">12th=</td>
                <td className= "border  border-slate-600 ...">78.5%</td>
              </tr>
              
            </tbody>
          </table>
          

      </Box>
    </Box>
  )
}
