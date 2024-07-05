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
import { Box } from '@mui/material';

interface Column {
    id: 'name' | '_id' | 'phone' | 'email'|'dob';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: '_id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    
   
    
  ];


interface Student {
    _id: number;
    name: string;
    email: string;
    phone?: number;
    dob?: string;
    isAdmin?:boolean
}


export default function StudentsList() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [studentList,StudentList]=React.useState<any[]>([]);
    
    const setSelectedRow=(row:Student)=>{
        navigate(`/student/${row._id}`)
        StudentList(studentList);
    }
    React.useEffect(()=>{
        getStudentList();
    },[])
    const getStudentList = () => {
       
        
            axios.get('http://localhost:5000/api/users/'

            )
                .then(function (response: any) {
                    console.log("response", response);
                    StudentList(response?.data)
                    
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

    return (
        <Box className="py-5 bg-cyan-500 hover:bg-red-600">
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
                        {studentList
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => setSelectedRow(row)}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5,10, 25, 100]}
                component="div"
                count={studentList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </Box>
    );
}