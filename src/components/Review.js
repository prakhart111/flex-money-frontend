import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Transaction Succesful !
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Thank you for selecting us. 
            We'll not dissapoint you.
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>Batch</Typography>
          <Typography gutterBottom>Amount</Typography>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}