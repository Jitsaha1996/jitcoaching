import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import studentList1 from '../Asets/contsant';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { alpha, AppBar, Box, Chip, IconButton, InputBase, Stack, styled, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LongMenu } from './menu';

interface Column {
    id: 'name' | '_id' | 'phone' | 'email' | 'dob' | 'action';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: '_id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'dob', label: 'DOB', minWidth: 170 },
    { id: 'action', label: 'Action', minWidth: 170 }



];


interface Student {
    _id: number;
    name: string;
    email: string;
    phone?: number;
    dob?: string;
    isAdmin?: boolean
}


export default function StudentsList() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [studentList, setStudentList] = React.useState<any[]>([]);
    const [copyList, setCopyList] = useState<any[]>([]);

    const setSelectedRow = (row: Student) => {
        localStorage.setItem("User",JSON.stringify(row));
        navigate('/profile')
        setStudentList(studentList);
    }
    React.useEffect(() => {
        getStudentList();
    }, [])
    const getStudentList = () => {


        axios.get('http://localhost:5000/api/users/'

        )
            .then(function (response: any) {
                console.log("response", response);
                setStudentList(response?.data)

            })
            .catch(function (error) {
                console.log(error);

            });

    }




    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);

    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const requestSearch = (val: any) => {
        const filterData = studentList.filter((item) => item?.name?.toLowerCase()?.includes(val?.toLowerCase())
         || item?.email?.toLowerCase()?.includes(val?.toLowerCase()));
        setCopyList(filterData);

    }

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <>
            <Box className="flex flex-col py-5">
                <Box sx={{ flexGrow: 1 }} >

                     <Box className ="flex flex-row  w-2/3">
                     <TextField
                        variant='standard'
                        placeholder='search...'
                        type='search'
                        onChange={(e) => requestSearch(e.target.value)}
                        className='w-full'
                    />
                     </Box>
                   <Box className ="flex flex-row w-1/3">
                   <Stack direction="row" spacing={1}>
            <Chip
             label="All" 
           />

            <Chip label="Archived" variant="outlined" />
          </Stack>
                   </Box>
               
                </Box>
                <Box className="py-5 bg-cyan-500 hover:bg-white">


                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>

                            <Table stickyHeader aria-label="sticky table">

                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(copyList.length ? copyList : studentList)
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <>

                                                                {column.id === "action" ?
                                                                    <TableCell key={column.id} align={column.align}>
                                                                        {/* <ArrowRightAltIcon onClick={() => setSelectedRow(row)} /> */}
                                                                        <LongMenu  rowData={row}/>
                                                                    </TableCell>
                                                                    : <TableCell key={column.id} align={column.align}>
                                                                        {column.format && typeof value === 'number'
                                                                            ? column.format(value)
                                                                            : value}
                                                                    </TableCell>
                                                                }


                                                            </>

                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 100]}
                            component="div"
                            count={studentList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </Box>

        </>

    );
}