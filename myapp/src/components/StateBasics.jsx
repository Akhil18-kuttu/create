import { Button, ButtonGroup, TextField, Typography,IconButton } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    
    var [fname, setfname] = useState()
    var [sub,setsub]= useState()
    const handlevent = (e) => {
  setfname(e.target.value)
    }
    
    const clickin = () => {
        setsub(fname)

        
    }

    
  return (
      <div>
          <Typography variant='h4'>Hello,{sub}</Typography> <br /><br /><br />
        
          <TextField variant='outlined' label='Enter your name' onChange={handlevent}>Enter Your Name</TextField><br /><br /><br /><br />
          <Button variant='contained' onClick={clickin} >Submit</Button>
    </div>
  )
}

export default StateBasics