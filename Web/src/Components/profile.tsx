import { Alert, Box, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Auth/userContext';
import CheckIcon from '@mui/icons-material/Check';

export const MyProfile = () => {

  const { user } = React.useContext<any>(UserContext);
  const [myProfile, setMyProfile] = useState(user);
  const [auth, setAuth] = React.useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const UserProfie = localStorage?.getItem("User");
    console.log("Check");
    if (user && user.name) {
      setMyProfile(user)
    } else if (JSON.parse(UserProfie as string)?.name) {
      setMyProfile(JSON.parse(UserProfie as string))
    } else {
      navigate("/login");
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
    localStorage.removeItem("User");
    navigate('/login');



  };
  return (
    <Box className="flex flex-col  w-full max-w-25 justify-center items-center  bg-transparent">
      {auth ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        SucessFully Logout!!
      </Alert> : null}
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
            label={auth ? 'Login' : 'Logout'}
          />
        </FormGroup>
      </Box>
        <Box className='flex flex-row justify-start items-start pt-2 w-full h-full'>
          <Box className=' flex flex-col w-1/5 border-4 border-solid border-black  '>
            <Box className= 'flex justify-evenly text-2xl h-10 w-full font-semibold bg-amber-200'>Activities </Box>
            <Box className= 'flex justify-evenly text-2xl h-10 w-full font-semibold bg-red-300'>Achievements </Box>
            <Box className= 'flex justify-evenly text-2xl h-10 w-full font-semibold bg-lime-200'>All-over feedback</Box>
            <Box className= 'flex justify-evenly text-2xl h-10 w-full font-semibold bg-teal-200'>Attendance </Box>
            <Box className= 'flex justify-evenly text-2xl h-10 w-full font-semibold bg-violet-400'>Badges </Box>
          </Box>

            <Box className='flex flex-col w-4/5 border-separate h-full'>
            <Box className= 'flex flex-row justify-between align-middle items-center font-bold text-white text-5xl bg-sky-600 pl-10  h-20 w-full'>
                Student's Profile
            </Box>
            <Box className= 'flex flex-col justify-start  ml-5 mr-5 border border-zinc-900 shadow-md shadow-black h-full'>

              <Box className= 'flex flex-col  ml-4 w-full h-full'>
                <Box className= ' flex flex-row h-1/4 w-1/3 pt-5 ' >
                <img src={myProfile?.pic} className="flex place-items-start rounded-full w-14 " alt='test'/>
                <text className=" flex justify-start align-top font-bold items-start text-3xl ml-6 flex-nowrap w-40">
                {myProfile.name}
              </text>
                </Box>

              <Box className= 'flex flex-row  ml-4 h-3/4 w-2/3 pt-5'>
                <Box className= 'flex flex-row justify-evenly align-middle ml-4 mr-4 w-full'>
                <table className= 'flex flex-col justify-start place-content-start  mr-5 border  border-black  w-72 '>
                  <thead>
                  <h1 className= ' flex font-extrabold ml-5'> Personal Details- </h1>
                  <Box className="divide-y-2 divide-slate-900 bg-orange-200 shadow-inner  ">
                    <Box className="py-1 font-semibold text-sm ">Name: {myProfile?.name} </Box>
                    <Box className="py-1 font-semibold text-sm">Email id: {myProfile?.email} </Box>
                    <Box className="py-1 font-semibold text-sm">Phone no.: {myProfile?.phone} </Box>
                    <Box className="py-1 font-semibold text-sm">D.O.B.: {myProfile?.dob}  </Box>
                  </Box>
                  </thead>
                  </table> 

                  <table className= 'flex flex-col justify-start place-content-end mr-5 border  border-black  w-72 '>
                  <thead>
                  <h1 className= ' flex font-extrabold ml-5'>Class  Details- </h1>
                  <Box className="divide-y-2 divide-slate-900 bg-orange-200 shadow-inner  ">
                    <Box className="py-1 font-semibold text-sm ">Class:  </Box>
                    <Box className="py-1 font-semibold text-sm">Date of entry:  </Box>
                    <Box className="py-1 font-semibold text-sm">Performance(grade): </Box>
                   
                  </Box>
                  </thead>
                  </table> 

                </Box>
              </Box>
            </Box>
            </Box>
        </Box>
       
    </Box>
    </Box>
  );
}



