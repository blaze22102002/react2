import { Table, TableContainer, TableHead, Typography,TableRow,TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
const Apiget = () => {
    var[input,setInput]=useState([])
    //useEffect(() => {},[])
    useEffect(() => {
        //axios'get("url").then().catch()
        axios.get("https://jsonplaceholder.typicode.com/users")
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
          <Typography variant="h3">Axios</Typography>
          <TableContainer>
              <Table>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Useraname</TableCell>
                  </TableRow>
                  <TableBody>
                      {
                          input.map((val, i) => {
                              return (
                                  <TableRow key={i}>
                                      <TableCell>{val.name}</TableCell>
                                      <TableCell>{ val.phone}</TableCell>
                                      <TableCell>{val.username}</TableCell>    
                                  </TableRow>
                              )
                          })
                      }
                </TableBody>
              </Table>
          </TableContainer>
              
          
    </div>
  )
}

export default Apiget
