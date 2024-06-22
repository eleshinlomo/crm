import * as React from 'react';
import {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '@/components/footer';
import { emailLogin } from '@/components/auth';
import { useRouter } from 'next/navigation';



const defaultTheme = createTheme();

const SignInForm = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string | any>('Sign in with Email')
  const [isSiginingIn, setIsSigningIn] = useState(false)

  const router = useRouter()
  const payload = {
    email,
    password
  }
  
  const displaySignInText = ()=>{
    const siginingIn = 'Signing...'
    setMessage(siginingIn)
  }
  

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    try{
    e.preventDefault()
    setIsSigningIn(true)
    setMessage('Signing in...')
    const response: any = await emailLogin(payload)
    if(response.ok){
      
      const {
        userid, 
        username, 
        sessionid,
        company,
        email,
      } = response.data
      
      // Save User Info
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('sessionid', sessionid)
      localStorage.setItem('company', company)
      localStorage.setItem("userid", userid)
      setIsSigningIn(false)
      router.push('/dashboard/dashboardpage')
    
  }else{
    console.log(response.error)
    setMessage(response.error)
  }
}
  catch(err: any){
    console.log(err)
    setMessage("No response! Unable to fetch from server. Check internet connection")

  }finally{
    setIsSigningIn(false)
  }
    
  }

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.primary' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h6" variant="h6" className='text-center text-md'>
            {message}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: 3, marginBottom: 2, backgroundColor: 'blue' }}
              className='rounded-2xl'
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/authpages/forgotpasswordpage" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/authpages/signuppage" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}

export default SignInForm