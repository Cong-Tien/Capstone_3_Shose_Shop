import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from '../Components/FooterHome/FooterHome'
import HeaderHome from '../Components/HeaderHome/HeaderHome'

export default function HomeTemplate() {
  return (
    <div>
        <HeaderHome/>
        <div style={{minHeight:400}}>
        <Outlet/>
        </div>
        <FooterHome/>
    </div>
  )
}
