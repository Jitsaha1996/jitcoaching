import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
import { Achievments } from './addAchievments';
import { useState } from 'react';
import axios from 'axios';

export default function EditDeatils(props: any) {
    const [totalAchivementData, setTotalAchivementData] = useState<any[]>([
        {
            ClassType: "",
            totalMarks: "",
            marks: ""
        }
    ]);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        dob: "",
        pic: "",
        status: "",
        code: "",
        isArchived: false,
        isAdmin: false,
        achivment: []
    });
    const { setOpen, open, rowData,typeOfAction
    } = props;
    const handleSubmit = () => {
        if(typeOfAction==="Edit"){
            const payLoad = {
                name: data?.name,
                email: rowData?.email,
                password: rowData?.email,
                phone: data.phone,
                dob: rowData?.dob,
                pic: data.pic ? data.pic : rowData?.pic,
                isArchived: rowData?.isArchived,
                isAdmin: rowData?.isAdmin,
                achivment: totalAchivementData
    
            }
           
                axios.put('http://localhost:5000/api/users/edit', payLoad
    
                ).then(function (response: any) {
                    console.log("response", response,"payload");
                    // setOpen(false);
                    // setData({ ...data, status: "Sucess" });
                    // login(response.data);
                    // navigate('/profile')
    
                })
                    .catch(function (error) {
                        console.log(error);
                        // setOpen(false);
                        // setData({ ...data, status: "Error" });
                        // setIsError(true);
                        // setError(error?.message);
    
                    });
        }else if (typeOfAction==="Archived"){
            const payLoad={
                ...rowData,isArchived:!rowData.isArchived
            }
            axios.put('http://localhost:5000/api/users/edit', payLoad
    
            ).then(function (response: any) {
                console.log("response", response,"payload");
                setOpen(false);
                // setData({ ...data, status: "Sucess" });
                // login(response.data);
                // navigate('/profile')

            })
                .catch(function (error) {
                    console.log(error);
                    // setOpen(false);
                    // setData({ ...data, status: "Error" });
                    // setIsError(true);
                    // setError(error?.message);

                });
        }
        // e.preventDefault();
        

        
    }


    const handleClose = () => {
        setOpen(false);
    };
    const setFileBase64 = (files: any) => {
        console.log("Deatils", files);
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
        <React.Fragment>
            {open ? <Dialog
                open={open}
                onClose={handleClose}
               
            >
                    <Box className="flex flex-col pt-3" sx={{ bgcolor: '#cfe8fc', height: 'auto', width: "auto" }} >
                        {typeOfAction==="Edit"?
                        <>
                        <DialogTitle>Student Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box className='flex justify-center items-center pt-2 '>
                            Edit Student Deatils
                        </Box>

                    </DialogContentText>



                        <Box className="flex w-full flex-col  ">
                            <Box className="flex w-full my-3">
                                <Typography className=' w-1/2 flex justify-center items-center'>
                                    Name
                                </Typography>
                                <TextField id="name" className=' w-1/3 pt-20' defaultValue={rowData?.name} variant="filled" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: e.target.value })} required />
                            </Box>
                            <Box className="flex  w-full  my-3">
                                <Typography className=' w-1/2 flex justify-center items-center '>
                                    Email
                                </Typography>
                                <TextField id="email" defaultValue={rowData?.email} className=' w-1/3 pt-20' variant="filled" disabled />
                            </Box>
                            <Box className="flex w-full  my-3">
                                <Typography className='w-1/2 flex justify-center items-center '>
                                    Phone
                                </Typography>
                                <TextField id="phone" defaultValue={rowData?.phone} className='pt-20 w-1/3' variant="filled" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: e.target.value })} required />
                            </Box>
                            <Box className="flex w-full  my-3">
                                <Typography className='w-1/2  flex justify-center items-center'>
                                    Photo
                                </Typography>
                                <TextField id="phone" className=' w-1/3 pt-20' variant="standard" required type='file' onChange={(e: any) => setFileBase64(e.target.files[0])} />
                            </Box>
                            <Box className="my-2  ">
                                <Achievments achievments={rowData?.achievments} totalAchivementData={totalAchivementData} setTotalAchivementData={setTotalAchivementData} />
                            </Box>

                        </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button  onClick={()=>handleSubmit()}>Submit</Button>
                </DialogActions>
                        </>:null}
                        {typeOfAction==="Archived"?
                        <>
                        <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box className='flex justify-center items-center pt-2 '>
                            Are you Sure You want to Archived {rowData?.name}!!
                        </Box>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button   variant='contained' onClick={()=>handleSubmit()}>Confirm</Button>
                </DialogActions>
                        </>:null}

               
                    </Box>
            </Dialog> : null}

        </React.Fragment>
    );
}
