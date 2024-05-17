import { Box, Typography } from '@mui/material';
import jit from '../Asets/jit.jpeg';


export const Home = () => {
    
    
  return (
   <Box 
   className=" flex flex-col md:flex-row bg-slate-200"
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
    </Box>
    <Box className=" w-full max-w-50 bg-white  bg-content   bg-no-repeat bg-center"
  
  style={{
  backgroundImage: `url(${jit})`,
  
  height: "100vh",
  color: "#f5f5f5"}}>
    
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
