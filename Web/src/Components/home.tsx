import { Box, Button, Divider, Typography } from '@mui/material';
import jit1 from '../Asets/jit1.jpeg';
import { url } from 'inspector';
import background from '../Asets/download.jpg'
import { useState } from 'react';


export const Home = () => {
const [count,setCount]=useState(500);
const  handelOnClick=()=>{
setCount(count+1);

}
  return (
    <Box
      className=" flex flex-col md:flex-row bg-slate-200 bg-no-repeat  bg-cover" style={{ backgroundImage: `url(${background})` }}
    >

      <Box className=" flex flex-col  w-full max-w-25   bg-transparent">
        <Typography className=' flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2'>
          Vission
        </Typography>
        <Typography className='my-4 text-lg text-gray-500 shadow p-5 text-wrap text-justify'>
          Computer science enables scientists to design sophisticated algorithms to analyze experimental results and model complex systems.
          It also plays a crucial role in developing
          software applications that facilitate data collection, organization, and visualization.
        </Typography>
        <Box className="my-5 py-5 flex flex-col">
          <Divider orientation="vertical" variant="middle" flexItem sx={{

            backgroundColor: "white",
            borderWidth: "2px"
          }} />

        </Box>
        <Box className="flex justify-center items-center w-full my-5 py-5" >
          <Button className="mx-5 w-1/4 px-5" variant='contained' onClick={()=>handelOnClick()} >
            Login
          </Button>
          <Button variant='contained' className='w-1/4 mx-5 px-5'>
            Register
          </Button>
        </Box>
        <Box className="flex justify-center items-center">
        <h1 style={{color:"white"}}> {count}</h1>
        </Box>

      </Box>
      <Box className=" w-full max-w-50 bg-white  bg-content   bg-no-repeat bg-center"

        style={{
          backgroundImage: `url(${jit1})`,

          height: "100vh",
          color: "#f5f5f5"
        }}>

      </Box>
      <Box className=" flex flex-col  w-full max-w-25   bg-transparent">
        <Typography className=' flex text-4xl font-extrabold dark:text-white justify-center items-center '>
          Mission
        </Typography>
        <Typography className='my-4 text-lg text-gray-500 shadow p-5 text-wrap text-justify'>
          Every Student should be able to make his/her own unique algoritham for solving complex problems,
          also every one should be good on build optimal logics for solving problems.
        </Typography>
      </Box>

    </Box>
  )
}
