import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RegisterForm from './RegisterForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import yoga from "../assets/yoga.png"
import axios from "axios";


const steps = ['Details', 'Payment', 'Complete'];

const BASE_URL = "https://flexmoney.onrender.com";
const REG_URL = `${BASE_URL}/user/register`;
const PAY_URL = `${BASE_URL}/user/payment`;




const errorHandler = (success)=>{
    
}

const theme = createTheme();

export default function Yoga() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading,setloading] = React.useState(false)

const [name,setName] = React.useState(null);
const [email,setEmail]= React.useState(null);
const [ age,setAge] = React.useState(null);
const [batch,setBatch] =   React.useState(null);

let userData = {
    "name":name,
    "email":email,
    "batch":batch,
    "age":age
}
React.useEffect(
    ()=>{
        userData = {
                "name":name,
                "email":email,
                "batch":batch,
                "age":age
            }
    },[name,email,age,batch]
)
function getStepContent(step) {
    switch (step) {
      case 0:
        return <RegisterForm setName={setName} setEmail={setEmail} setAge={setAge} setBatch={setBatch}/>;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    console.log(userData)
      if(userData.age < 18 || userData.age>65 || userData.age == NaN)
         {alert("Age should be between 18 and 65")}
     
      if(activeStep === 0 && (userData.age >= 18 || userData.age<=65) && (userData.name) && userData.email && userData.batch){
          console.log("REGISTER API CALLED")
          setloading(true);
          console.log("USER DATA SENT",userData)
          axios.post(REG_URL,userData)
          .then((response)=>{
            console.log(response);
            setloading(false);
            if(response.data.success === true) setActiveStep(activeStep + 1);
            else alert("Some Error Occured in Register API")
          }).catch(()=>{
              console.log("Register API didn't worked")
              setloading(false);
          })
        }
      else if(activeStep === 1){
            console.log("PAYMENT API CALLED")
                setloading(true);
                console.log("USER DATA SENT",userData)
                axios.post(PAY_URL,{
                    "email":userData.email,
                    "batch":userData.batch
                })
                .then((response)=>{
                    console.log(response)
                    setloading(false);
                    if(response.data.success === true) setActiveStep(activeStep + 1);
                    else alert("Some Error Occured in Payments API")
                    
                }).catch(()=>{
                    console.log("Payment API didn't worked")
                    setloading(false);
                })
        }
      else if((!userData.age) && (!userData.name) && !userData.email && !userData.batch){
        alert("Input field marked with * are complusory")
      }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar className="nav-col">
            <img src={yoga} width="32px" height="32px" className='mr-5'/>
          <Typography variant="h6" color="inherit" noWrap>
            Terrible Yoga Classes
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4,position:"absolute", left:"0vw", top:"100px"}} className="main-box">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Admission Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for joining us.
              </Typography>
              <Typography variant="subtitle1">
                Your roll number is #911. We have emailed your admission
                confirmation.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* {(activeStep !== steps.length-1) && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )} */}

                {!loading && <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'THANK YOU' : activeStep === steps.length - 2?"PAY ADMISSION FEES":"Next"}
                </Button>}
                {loading && <Button sx={{ mt: 3, ml: 1, backgroundColor:"#aaa", color:'#fff' }}>Loading...</Button>}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}