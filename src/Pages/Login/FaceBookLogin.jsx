import React from 'react'
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
//import { loginFacebook } from '../../redux/userReducer';

export default function FaceBookLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const responseFacebook = async (response) => {
    //     console.log(response);
    //    const action = loginFacebook(response.accessToken);
    //    await dispatch(action)
    //    navigate('/profile')
    // }
    return (
        // <FacebookLogin
        //     appId="2681071498696012"
        //     autoLoad={false}
        //     fields="name,email,picture"
        //     callback={responseFacebook}
        //     render={(renderProps) => (
        //         <button className='w-100 mt-3 btn-facebook' onClick={renderProps.onClick}><i class="fab fa-facebook"></i>Continue with Facebook</button>
        //     )}
        // />
        <div></div>
    )
}
