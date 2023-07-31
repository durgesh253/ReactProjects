import { Button, FormControl, InputLabel, MenuItem, Select, TextField 
,FormGroup,Checkbox,    
FormControlLabel} from '@mui/material';
import React, { useState } from 'react';

function Form() {
  const [input, setinput] = useState({
    Name: '',
    email: '',
    password: '',
    age: '',
    terms:false,
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setinput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleAgeChange = (e) => {
    const { value } = e.target;
    setinput((prevInput) => ({ ...prevInput, age: value }));
  };
  const handleCheckboxChange = () => {
    setinput((prevInput) => ({ ...prevInput, terms: !prevInput.terms }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="Name"
          value={input.Name}
          onChange={handleValue}
          placeholder="Enter Name"
          variant="outlined"
          type="text"
          sx={{ margin: '10px' }}
        />

        <br />
        <TextField
          name="email"
          value={input.email}
          onChange={handleValue}
          placeholder="Enter email"
          variant="outlined"
          type="email"
          sx={{ margin: '10px' }}
        />

        <br />
        <TextField
          name="password"
          value={input.password}
          onChange={handleValue}
          placeholder="Enter Password"
          variant="outlined"
          type="password"
          sx={{ margin: '10px' }}
        />
        <FormGroup>
        <FormControlLabel
          label="I agree to T&C"
          control={
            <Checkbox
              checked={input.terms}
              onChange={handleCheckboxChange}
            />
          }
        />
        </FormGroup>
        <br />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={input.age}
            onChange={handleAgeChange}
            autoWidth
            label="Age"
          >
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>

        <br />
        <Button type="submit" variant="outlined" sx={{ margin: '10px' }}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;

