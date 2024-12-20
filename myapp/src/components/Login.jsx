import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          <TextField type='email' label='email' variant='outlined'>Email</TextField> <br /> <br />
          <TextField type='password' label='password' variant='outlined'>Password</TextField>  <br /> <br />
         <Button variant='contained'>Submit</Button> 

    </div>
  )
}

export default Login
