import React from 'react'

export default function FooterHome() {
  return (
    <>
  <div style={{margin:"10px 200px",marginTop:"50px"}}>
    <div className='d-flex container justify-content-between'>
        <div className=''>
            <h3>GET HELP</h3>
            <a className='d-block'>Home</a>
            <a className='d-block'>Nike</a>
            <a className='d-block'>Adidas</a>
            <a className='d-block'>Contact</a>
        </div>
        <div className=''>
            <h2>SUPPORT</h2>
            <a className='d-block'>About</a>
            <a className='d-block'>Contact</a>
            <a className='d-block'>Help</a>
            <a className='d-block'>Phone</a>
        </div>
        <div className=''>
            <h2>Register</h2>
            <a className='d-block'>Register</a>
            <a className='d-block'>Login</a>
        </div>
    </div>
    </div>
    <p className='text-center py-3 mt-3' style={{background:"#D9D9D9"}}>© 2022 Cybersoft All Rights Reserved | Design Theme by Me.</p>
    </>
  )
}
