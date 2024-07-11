import React, { useState } from 'react'


import { Button ,TextField} from '@mui/material';
const Textinput = () => {
  var [input, setInput] = useState({ sname: "", age: "", place: "", email: "" })
  
  const inputHandler = (e) => {
    
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  }

  return (
    
    <div>
      <TextField
        label="Name"
        variant="outlined"
        name="sname"
        onChange={inputHandler}
        value={input.name}
      ></TextField>
      <br /><br />
      <TextField
        label="Age"
        variant="outlined"
        name="age"
        onChange={inputHandler}
        value={input.age}></TextField>
      <br /><br />
      <TextField label="Place" variant="outlined"
        name="place"
        onChange={inputHandler}
        value={input.place}></TextField>
      <br /><br />
      <TextField label="Email" variant="outlined"
      name="email"
      onChange={inputHandler}
      value={input.email}></TextField>
      <br /><br />

      <Button variant="contained">Submit</Button>
    </div>
  )

}
export default Textinput
