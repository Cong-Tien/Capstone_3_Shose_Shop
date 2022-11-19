import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../../assets/scss/Header.scss'
import { ACESS_TOKEN, settings, USER_LOGIN } from '../../Util/config'

export default function HeaderHome() {
    const { userProfile } = useSelector((state) => state.userReducer)
    const { arrCart } = useSelector((state) => state.productReducer)
    const renderLogin = () => {
        if (userProfile.name) {
            return (
                <>
                    <NavLink data-bs-toggle="dropdown" className="text-white mx-2">
                        Hello ! {userProfile.name}
                    </NavLink>
                    <ul class="dropdown-menu">
                        <li>
                            <NavLink to="/profile" class="dropdown-item" >
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink class="dropdown-item" onClick={() => {
                              settings.eraseCookie(ACESS_TOKEN,0);
                              localStorage.removeItem(USER_LOGIN);
                              localStorage.removeItem(ACESS_TOKEN)
                              window.location.href('/login')
                            }}>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </>
            )
        }
        return (
            <NavLink to="/login" className="text-white mx-2 " style={{ opacity: 0.7 }}>
                Login
            </NavLink>
        )
    }
    return (
        <div>
            <div className="bg-dark d-flex py-2 text-white justify-content-between align-items-center">
                <div className="ms-3">
                    <img src="./img/logo.png" />
                </div>
                <div className="me-5">
                    <NavLink className="text-white" to="/search">
                        <i className="fa fa-search fs-4"></i>
                        <span className="mx-2 fs-5">Search</span>
                    </NavLink>
                    <NavLink className="text-white" to="/cart">
                        <i className="fas fa-cart-plus fs-5" style={{ opacity: 0.7 }}></i>{' '}
                        <span className="fs-5">({arrCart.length ? arrCart.length : 0})</span>
                    </NavLink>
                    {renderLogin()}
                    <NavLink to="/register" className="text-white" style={{ opacity: 0.7 }}>
                        Register
                    </NavLink>
                </div>
            </div>
            <div className="px-5 py-3">
                <NavLink to={'/'} className="">
                    Home
                </NavLink>
                <NavLink to={'/'} className="px-5">
                    Men
                </NavLink>
                <NavLink to={'/'} className="">
                    Woman
                </NavLink>
                <NavLink to={'/'} className="px-5">
                    Kid
                </NavLink>
                <NavLink to={'/'} className="">
                    Sport
                </NavLink>
            </div>
        </div>
    )
}
