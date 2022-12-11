import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';

export default function PaymentForm() {
  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Payment Instructions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          1. You are req to pay only once.
        </Grid>
        <Grid item xs={12}>
          2. You are req to pay minimum for 1 month.
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Agree with our TnCs"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}