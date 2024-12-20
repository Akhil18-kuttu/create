import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    const [count1, count2] = useState(0) 
 

    const incremnet = () => {
        count2(count1+1) 
    }
    const decremnet = () => {
        count2(count1-1)
    }
  return (
      <div>
          <h1>{count1}</h1><br /><br /><br />
          <Button variant='contained' onClick={decremnet}>decrement</Button> &nbsp;&nbsp;          
          <Button variant='contained' onClick={incremnet}>increment</Button> 
           
       
    </div>
  )
}

export default Count