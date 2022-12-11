import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';

// let userData = {
//     "name":"",
//     "email":"",
//     "batch":"",
//     "age":""
// }

export default function RegisterForm({setName,setEmail,setAge,setBatch}) {
    const errors = {
        email:"Enter a valid email id",
        mobile:"Enter a valid mobile number",
        age:"Age should be between 18-65",
        empty:"This field can't be empty",
    }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e)=>setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e)=>setAge(e.target.value)}
            type="number"
          />
        </Grid>
      </Grid>
          <Typography variant="h6" style={{marginTop:"20px"}}>
        Select Batch *
      </Typography>
    <Grid item xs={12}>
            
        <RadioGroup name="batch" 
            required={true}
            onChange={(e)=>setBatch(e.target.value)} 
        >
            <FormControlLabel value="6-7 AM" control={<Radio />} label="6-7 AM" />
            <FormControlLabel value="7-8 AM" control={<Radio />} label="7-8 AM" />
            <FormControlLabel value="8-9 AM" control={<Radio />} label="8-9 AM" />
            <FormControlLabel value="5-6 PM" control={<Radio />} label="5-6 PM" />
        </RadioGroup>
    </Grid>
    </React.Fragment>
  );
}