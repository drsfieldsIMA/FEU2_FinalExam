import React from 'react'
import { useFormik } from 'formik'
import { Box, Button, Container, Grid, Link, TextField, Typography,Heading,Input } from '@mui/material'
import { API_URL } from '../utils/url'
import {useRouter} from 'next/router'
import nookies from 'nookies'


const initialValues = {
  email:'',
  password:''
}

const validate=values => {
  let errors = {}

if (!values.password) {
 errors.password = 'Required'
}

if (!values.email) {


  errors.email = 'This field is required'
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 errors.email = 'Invalid email format'
}

return errors
}

const onSubmit = values => {
console.log("L35",values.email)
fetcher()
async function fetcher(){
  try{
    const loginInfo = {
      identifier:values.email,
      password: values.password
  }

  const login = await fetch(API_URL+"/auth/local", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
})
const loginResponse = await login.json();
console.log("Response",login.status);

// Parse
const cookies = nookies.get(ctx)

// Set
nookies.set(ctx, 'fromGetInitialProps', 'value', {
  maxAge: 30 * 24 * 60 * 60,
  path: '/',
})

if (login.status==200){
  Router.push('/login')
}
}
catch{
  console.log("error")
}
finally{
  window.location.replace("http://localhost:3001/admin");
}
}


}

function FormLogin() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  
  return (
    <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
    <Container maxWidth="sm" sx={{backgroundColor:'#f0f6fa'}}>
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className='form-control'>
              <label htmlFor='email'>email</label>
              <input
               type='text' 
               id='email'
                name='email' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 value ={formik.values.email}/>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}

            <div className='form-control'>
              <label htmlFor='password'>password</label>
              <input type='password' id='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value ={formik.values.password} />
            </div>
            {formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>
        ) : null}

            <Button className="btn_primary"  size="small" type='submit' >Submit</Button>
      </form>
    </div>
    </Container>
    </Box>
  )
}

export default FormLogin;
