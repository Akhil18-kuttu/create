import { Card, Grid } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Pikachu = () => {
  var [dats, setdats] = useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    setdats(response.pokemon)
  })
  return (
    <div>
      <Grid>
        <Grid item xs={6} md={8}>
          {dats.map((pokemon) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="{pokemon.img_url}"
        title="{pokemon.pokemon}"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
                   {pokemon.pokemon}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    {pokemon.hitpoints}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
              
            )
          })}
          
        </Grid>
      </Grid>
    </div>
  )
}

export default Pikachu