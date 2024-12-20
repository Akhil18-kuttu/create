import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Buttonchange = () => {
    var [set, sets] = useState()
    
    const ReactName = () => {
        sets("React")

        
    }
    const Venunam = () => {
        sets("Venu")
    }
    const AngularName = () => {
        sets("Angular")
    }
    // useEffect(() => {},[])
    useEffect(() => {
        ReactName ()
    },[])

  return (
      <div>
          <br /><br /><br /><br />
          <Typography variant='h4' >Welcome,{set}</Typography>
          <br /><br /><br /><br /><br />
          <Button variant="contained" color="success" onClick={ReactName}> REACT</Button> &nbsp; &nbsp; &nbsp; 
         
          <Button variant='contained' color="success" onClick={Venunam}> VENU</Button> &nbsp; &nbsp; &nbsp; 
           <Button variant='contained'color="success" onClick={AngularName}> ANGULAR</Button> 
    </div>
  )
}

export default Buttonchange