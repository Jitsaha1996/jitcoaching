import { Box, Button, Typography } from '@mui/material';
import React,{useEffect,useMemo, useState} from 'react'
import jit from '../Asets/jit.jpeg';


export const Home = () => {
    
    
  return (
   <Box 
   className=" flex md:flex-row lg:flex-row  sm:flex-col"
   >
    <Box className=" w-full max-w-25   bg-transparent">
        <Typography className=' flex text-4xl justify-center items-center'>
        Vission 
        </Typography>
        <Typography className='mb-3 text-black-500 dark:text-gray-400'>
        Track work across the enterprise through an open, collaborative platform.
         Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have 
        richer contextual information to rapidly respond to requests, incidents, and changes.
        Track work across the enterprise through an open, collaborative platform.
         Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have 
        richer contextual information to rapidly respond to requests, incidents, and changes.
        Track work across the enterprise through an open, collaborative platform.
         Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have 
        richer contextual information to rapidly respond to requests, incidents, and changes.
        </Typography>
    </Box>
    <Box className=" w-full max-w-50 bg-white  bg-content   bg-no-repeat bg-center"
  
  style={{
  backgroundImage: `url(${jit})`,
  
  height: "100vh",
  color: "#f5f5f5"}}>
    
    </Box>
    <Box className="w-full max-w-25 bg-transparent">
    <Typography>
        Track work across the enterprise through an open, collaborative platform.
         Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have 
        richer contextual information to rapidly respond to requests, incidents, and changes.
        </Typography>
    </Box>
     
   </Box>
  )
}
