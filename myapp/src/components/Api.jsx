import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setuser] = useState([])
    
    axios.get("")
        .then((response)=> {
            //console.log(response.data)
            setuser(response.data)
})
  return (
      <div>
          <TableContainer>
              <Table >
                  <TableHead>
                      <TableRow>
                          <TableCell>Id</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>City</TableCell>
                      </TableRow>
                      
                  </TableHead>
                  <TableBody>
                      {user.map((u) => {
                          return (
                                 <TableRow>
                                  <TableCell>{u.id}</TableCell>
                                  <TableCell>{u.name}</TableCell>
                                  <TableCell>{u.address.city}</TableCell>
                                 </TableRow>
                                )
                      }
                      )}
                      
                  </TableBody>
              </Table>
       </TableContainer>


    </div>
  )
}

export default Api