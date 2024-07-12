import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditDeatils from './editDetails';
import { useState } from 'react';
export interface StudentDeatils {
    __id: any;
    name: string;
    email: string;
    pic: string;
    dob: string;
    phone: string
}
const options = [
    'Edit',
    'Archive',
    'View',
];

const ITEM_HEIGHT = 48;

export const LongMenu: React.FC<any> = ({ rowData }) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const navigate = useNavigate();
    const [isEditDetails,setIsEditDeatils]=useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseArchived = () => {
       
        setAnchorEl(null);
    };
    const handleCloseForEdit = () => {
        setAnchorEl(null);
        setIsEditDeatils(true);
        setOpenEdit(true);
    };
    const handleCloseForView = () => {
        localStorage.setItem("User", JSON.stringify(rowData));
        navigate('/profile')
        setAnchorEl(null);
    };
    
       
      
    return (
        <>
        {isEditDetails?<EditDeatils setOpen={setOpenEdit} open={openEdit} rowData={rowData}/>:null}
          <Box>
          
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClick={handleCloseArchived}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleCloseForEdit}>Edit</MenuItem>
                <MenuItem onClick={handleCloseForView}>View</MenuItem>
                <MenuItem onClick={handleCloseArchived}>Archived</MenuItem>
            </Menu>
           
        </Box></>
      
    );
}


