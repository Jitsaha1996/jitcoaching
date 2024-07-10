import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Container, CssBaseline, Typography } from '@mui/material';

export default function EditDeatils(props: any) {
    const { setOpen, open, rowData
    } = props;


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {open ? <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Student Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit Student Deatils
                    </DialogContentText>


                    <Box className="flex flex-col pt-3" sx={{ bgcolor: '#cfe8fc', height: 'auto', width:"auto"}} component="form" noValidate>
                        {/* <Box>
            {isError ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
              {error}
            </Alert> : null}


            <Typography className='flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2 '>
              Register
            </Typography>
          </Box> */}
                        {/* <Box>
                                {data?.status === "Error" ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
                                    {error}
                                </Alert> : null}
                                {data?.status === "Sucess" ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                    Register Sucess!!
                                </Alert> : null}


                                <Typography className='flex text-4xl font-extrabold dark:text-white justify-center items-center pt-2 '>
                                    Register
                                </Typography>
                            </Box> */}
                        <Box className="flex w-full flex-col justify-center items-center ">
                            <Box className="flex">
                                <Typography className=' '>
                                    Name
                                </Typography>
                                <TextField id="name" value={rowData?.name} className='pt-20' variant="filled" required />
                            </Box>

                        </Box>
                        {/* <Box className="flex w-full flex-col justify-center items-center " >
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

                            </Box> */}


                    </Box>




                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog> : null}

        </React.Fragment>
    );
}
