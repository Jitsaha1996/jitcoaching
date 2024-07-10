import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check';
import { Navigate, useNavigate } from 'react-router-dom';
import UserContext from '../Auth/userContext';

export const Register = () => {
  const { login } = useContext<any>(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    pic: "",
    status: "",
    isArchived:false,
    achivment:[]
  });

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(" ");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      axios.post('http://localhost:5000/api/users', data

      )
        .then(function (response: any) {
          console.log("response", response);
          setData({ ...data, status: "Sucess" });
          login(response.data);
          navigate('/profile')

        })
        .catch(function (error) {
          console.log(error);
          setData({ ...data, status: "Error" });
          setIsError(true);
          setError(error?.message);

        });

    } else {
      setIsError(true);
      setError("Form is invalid! Please check the fields...");
      // alert("Form is invalid! Please check the fields...");
    }
  };

  const setFileBase64 = (files: any) => {
    console.log("Deatils",files);
    let idCardBase64 = '';
    getBase64(files, (result: any) => {
      idCardBase64 = result;
      console.log("Files", idCardBase64);
      setData({ ...data, pic: idCardBase64 });

    });
  }
  const getBase64 = (file: any, cb: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">

        <Box className="flex flex-col pt-3" sx={{ bgcolor: '#cfe8fc', height: '100vh' }} component="form" onSubmit={handleSubmit} noValidate>
          {/* <Box>
            {isError ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
              {error}
            </Alert> : null}


            <Typography className='flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2 '>
              Register
            </Typography>
          </Box> */}
          <Box>
            {data?.status === "Error" ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
              {error}
            </Alert> : null}
            {data?.status === "Sucess" ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Register Sucess!!
            </Alert> : null}


            <Typography className='flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2 '>
              Register
            </Typography>
          </Box>
          <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 '>
              Name
            </Typography>
            <TextField id="name" className='pl-3 w-1/2' variant="standard" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: e.target.value })} />
          </Box>
          <Box className="flex w-full flex-col justify-center items-center " >
            <Typography className='pr-3 w-1/2 pt-3 '>
              Email
            </Typography>
            <TextField id="email" className='pl-3 w-1/2' variant="standard" required type='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, email: e.target.value })} />
          </Box>
          <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 type={showPassword?"text":"password"} '>
              Password
            </Typography>
            <TextField id="password" className='pl-3 w-1/2' variant="standard" required type='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, password: e.target.value })} />
          </Box>
          <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 '>
              Phone
            </Typography>
            <TextField id="phone" className='pl-3 w-1/2' variant="standard" required type='number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, phone: e.target.value })} />
          </Box>
          <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 '>
              File
            </Typography>
            <TextField id="phone" className='pl-3 w-1/2' variant="standard" required type='file' onChange={(e: any) => setFileBase64(e.target.files[0])} />
          </Box>
          <Box className="flex w-full flex-col justify-center items-center ">
            <Typography className='pr-3 w-1/2 pt-3 '>
              D.O.B.
            </Typography>
            <TextField id="dob" className='pl-3 w-1/2' variant="standard" required type='date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, dob: e.target.value })} />
          </Box>
          <Box className=" flex justify-center items-center pt-5">
            <Button variant="outlined" sx={{ marginRight: "20px" }} color="primary" type="submit" >
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit" >
              Submit
            </Button>

          </Box>


        </Box>



      </Container>
    </>

  )
}
