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
import { registerUserWithEmail } from '@/components/auth';



const defaultTheme = createTheme();

const SignUpForm = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [usersource, setUsersource] = useState<string>('fixupe')
  const [message, setMessage] = useState<string | any>('Sign up with Email')
  const [isSiginingIn, setIsSigningIn] = useState(false)

  const router = useRouter()
  const payload = {
    username,
    email,
    password,
    company,
    usersource
  }
  

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    try{
    e.preventDefault()
    setIsSigningIn(true)
    setMessage('Registering user...')
    const response: any = await registerUserWithEmail(payload)
    if(response.ok){
    const serverMessage = response.message
    setMessage(serverMessage)
    setCompany('')
    setPassword('')
    setEmail('')
    setUsername('')
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
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h5" variant="h5" className='text-center'>
            {message}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <input type='hidden' name='usersource' />
            <TextField
              margin="normal"
              required
              fullWidth
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
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
            <TextField
              margin="normal"
              required
              fullWidth
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              label="company"
              name="company"
              autoComplete="company"
              autoFocus
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
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/authpages/signinpage" variant="body2">
                  {"Already registered? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpForm