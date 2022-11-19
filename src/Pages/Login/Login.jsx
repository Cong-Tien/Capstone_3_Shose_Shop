import React from 'react'
import {useFormik} from "formik"
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginApi } from '../../redux/userReducer';
import {NavLink, useNavigate} from 'react-router-dom'
import FaceBookLogin from './FaceBookLogin';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const frm = useFormik({
      initialValues:{
        email:'',
        password:''
      },
      validationSchema: yup.object().shape({
        email: yup.string().email("Email khong dung dinh dang !"),
      }),
      onSubmit:(value) => {
       const action = loginApi(value);
       dispatch(action)
        
      }
  })
  return (
    <form className='container' onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <hr/>
      <div className='w-25 login-form mt-5' style={{marginLeft:"35%"}}>
      <div className='form-group'>
        <p >Email</p>
        <input className='form-control' name='email' onChange={frm.handleChange}/>
        {frm.errors.email ? <p className='text-danger'>{frm.errors.email}</p> : ''}
      </div>
      <div className='form-group'>
        <p className='mt-3'>Password</p>
        <input className='form-control' type="password" name='password' onChange={frm.handleChange}/>
      </div>
      <div className='form-group d-flex justify-content-end align-items-center'>
        <NavLink to="/register" className="me-3 mt-5">Register now ?</NavLink>
        <button className='btn btn-success mt-5' type='submit'>LOGIN</button>
      </div>
      <FaceBookLogin/>
      </div>
    </form>
  )
}
