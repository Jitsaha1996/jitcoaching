import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router';
export const Student = () => {
    const params= useParams()
    console.log("jjdjd",params,params.id)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  )
}
