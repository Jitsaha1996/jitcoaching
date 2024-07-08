import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Auth/userContext';



export const Login = () => {
    const { login } = useContext<any>(UserContext);
    const navigate = useNavigate();
    const [response,setResponse]=useState({});
    const [data, setData] = useState({
        email: "",
        password: "",
        status:""

    });

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(" ");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            axios.post('http://localhost:5000/api/users/login', data

            )
                .then(function (response: any) {
                    console.log("response", response);
                    setData({...data,status:"Sucess"});
                    login(response.data);
                    navigate('/profile')
                })
                .catch(function (error) {
                    console.log(error);
                    setData({...data,status:"Error"});
                    setIsError(true);
                    setError(error?.message);
                });

        } else {
            setIsError(true);
            setError("Form is invalid! Please check the fields...");
            // alert("Form is invalid! Please check the fields...");
        }
    };
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">

                <Box className="flex flex-col pt-3" sx={{ bgcolor: '#cfe8fc', height: '100vh' }} component="form" onSubmit={handleSubmit} noValidate>
                    <Box>
                        {data?.status==="Error" ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
                            {error}
                        </Alert> : null}
                        {data?.status==="Sucess" ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            Login Sucess!!
                        </Alert> : null}


                        <Typography className='flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2 '>
                            Login
                        </Typography>
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center " >
                        <Typography className='pr-3 w-1/2 pt-3 '>
                            Email
                        </Typography>
                        <TextField id="email" className='pl-3 w-1/2' variant="standard" required type='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, email: e.target.value })} />
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center ">
                        <Typography className='pr-3 w-1/2 pt-3 '>
                            Password
                        </Typography>
                        <TextField id="password" className='pl-3 w-1/2' variant="standard" required type='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, password: e.target.value })} />
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
