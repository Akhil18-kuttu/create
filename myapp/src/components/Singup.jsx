import { Button, TextField } from '@mui/material'
import React from 'react'

const Singup = () => {
  return (
      <div class="sign_11"> 
          <h1>Singup</h1>
         
          <TextField label='Name' variant='outlined'>Name</TextField> <br /> <br />
          <TextField type='email' label='email' variant='outlined'>Email</TextField> <br /> <br />
          <TextField type='password' label='password' variant='outlined'>password</TextField> <br /> <br />
        
          <Button variant='contained'>Submit</Button>  
    </div>
  )
}

export default Singup