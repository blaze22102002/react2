import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Cardapi = () => {
    var[input,setInput]=useState([])
    //useEffect(() => {},[])
    useEffect(() => {
        //axios'get("url").then().catch()
        axios.get("https://dummyapi.online/api/pokemon")
            .then(
                (res) => {
                    console.log(res);
                    setInput(res.data)
                })
            .catch((err) => {
                    console.log(err)
            })
        },[]);
  return (
    <div>
          <Typography variant="h3">Card</Typography>
          
          
    </div>
  )
}

export default Cardapi
