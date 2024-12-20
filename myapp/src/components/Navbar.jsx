import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                   <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
                  <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}> MY APP</Typography>
                  <Link to='/login'>
                      <Button color="inherit">Login</Button></Link>
                  <Link to='/signup'>
                      <Button color="inherit">Signup</Button></Link>
                  <Link to='/state'>
                      <Button color='inherit'>State</Button>
                  </Link>
                  <Link to='/counters'>
                  <Button color='inherit' >counter</Button></Link>
                  <Link to='/namebutton'>
            <Button color='inherit'>Bitmapping</Button></Link>
                  <Link to='/appis'>
            <Button color='inherit'>API</Button></Link>
                         <Link to='/pokemon'>
            <Button color='inherit'>Cards</Button></Link>
              </Toolbar>
              
              
          </AppBar>
          <br /><br />

    </div>
  )
}

export default Navbar