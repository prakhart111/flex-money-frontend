import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
{/* 
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Mobile Number"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e)=>userData["mobile"] = e.target.value}
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
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
            id="city"
            name="city"
            label="Age"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e)=>setAge(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
          <Typography variant="h6" style={{marginTop:"20px"}}>
        Select Batch
      </Typography>
    <Grid item xs={12}>
            
        <RadioGroup name="batch" 
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