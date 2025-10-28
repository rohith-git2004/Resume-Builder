import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import{ Tooltip }from '@mui/material';

function Header() {
  const projectInfo = "A resume builder is an online tool that helps you create a professional resume by providing templates, a step-by-step process, and often AI-powered features to assist with content like summaries, skills, and tailoring the document for specific jobs. To use one, you typically select a template, input your details (or upload an old resume), and use AI to generate content, which you can then customize and download as a PDF or other file format"
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://cdn-icons-png.flaticon.com/512/10340/10340832.png" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
          <Button color="inherit">Login</Button>
          </Tooltip>
        </Toolbar>
        <Tooltip title={projectInfo}></Tooltip>
      </AppBar>
    </Box>
  )
}

export default Header