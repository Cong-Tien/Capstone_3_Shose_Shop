import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export default function FaceBookLogin() {
    const responseFacebook = (response) => {
        console.log(response)
    }
    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
                <button className='w-100 mt-3 btn-facebook' onClick={renderProps.onClick}><i class="fab fa-facebook"></i>Continue with Facebook</button>
            )}
        />
    )
}
