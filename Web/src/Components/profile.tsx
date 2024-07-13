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
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
      </Box>
        <Box className='flex flex-row justify-start items-start pt-2 w-full'>
          <Box className=' w-1/5'>
          
          </Box>

            <Box className='flex flex-col w-4/5 border-separate h-full'>
            <Box className= 'flex flex-row justify-start align-middle items-center font-extrabold text-5xl bg-sky-700  h-36 w-full'>
                Student's profile..
            </Box>
            <Box className= 'flex flex-col justify-start  ml-5 mr-5 border border-zinc-900 shadow-md shadow-black h-64'>

              <Box className= 'flex flex-col  ml-4 w-full h-full'>
                <Box className= ' flex flex-row h-1/4 w-1/3' >
                <img src={myProfile?.pic} className="flex place-items-start rounded-full w-14" alt='test'/>
                <text className=" flex justify-start align-top font-bold items-start text-3xl flex-nowrap w-40">
                {myProfile?.name}
              </text>
                </Box>

              <Box className= 'flex flex-row  ml-4 h-3/4 w-2/3'>
                <Box className= 'flex flex-row justify-center align-middle ml-4 mr-4'>
                <table className= 'flex flex-col justify-start place-content-start  mr-5 border  border-black  w-50 h-50 '>
                  <thead>
                  <h1 className= ' flex font-extrabold ml-5'> Personal Details-- </h1>
                  <Box className="divide-y-2 divide-slate-900 bg-orange-200 shadow-inner  ">
                    <Box className="py-1 text-2xl ">Name= {myProfile?.name} </Box>
                    <Box className="py-1 text-2xl">Email id= {myProfile?.email} </Box>
                    <Box className="py-1 text-2xl">Phone no.= {myProfile?.phone} </Box>
                    <Box className="py-1 text-2xl">D.O.B.= {myProfile?.dob}  </Box>
                  </Box>
                  </thead>
                  </table> 

                  <table className= 'flex flex-col justify-end place-content-center  mr-5 border  border-black  w-72 h-50 '>
                  <thead>
                  <h1 className= ' flex font-extrabold ml-5'>Class  Details-- </h1>
                  <Box className="divide-y-2 divide-slate-900 bg-orange-200 shadow-inner  ">
                    <Box className="py-1 text-2xl ">Class=  </Box>
                    <Box className="py-1 text-2xl">Date of entry=  </Box>
                    <Box className="py-1 text-2xl">Performance(grade)= </Box>
                   
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



