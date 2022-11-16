import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from "react-router-dom"
import "../../assets/scss/Header.scss"

export default function HeaderHome() {
  const {userLogin} = useSelector(state => state.userReducer);
  const renderLogin = () => {
    if(userLogin.email){
      return <NavLink to='/profile' className="text-white mx-2">Hello ! {userLogin.email}</NavLink>
    }
    return <NavLink to="/login" className="text-white mx-2 " style={{opacity:.7}}>Login</NavLink>
  }
  return (
    <div>
      <div className='bg-dark d-flex py-2 text-white justify-content-between align-items-center'>
          <div className='ms-3'>
            <img src='./img/logo.png'/>
          </div>
          <div className='me-5'>
            <i className='fa fa-search fs-4'></i>
            <span className='mx-2 fs-5'>Search</span>
            <i className="fas fa-cart-plus fs-5" style={{opacity:.7}}></i> <span className='fs-5'>(1)</span>
            {renderLogin()}
          <NavLink to="/register" className="text-white" style={{opacity:.7}}>Register</NavLink>
          </div>
      </div>
      <div className='px-5 py-3'>
         <NavLink to={"/"} className="">Home</NavLink>
         <NavLink to={"/"} className="px-5">Men</NavLink>
         <NavLink to={"/"} className="">Woman</NavLink>
         <NavLink to={"/"} className="px-5">Kid</NavLink>
         <NavLink to={"/"} className="">Sport</NavLink>
      </div>
    </div>
  )
}
