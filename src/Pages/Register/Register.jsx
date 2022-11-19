import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { registerApi } from '../../redux/userReducer'

export default function Register() {
  const dispatch = useDispatch()
  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
  const frm = useFormik({
    initialValues:{
      email:'',
      password:'',
      name:'',
      gender:true,
      phone:""
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email invalid"),
      phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    }),
    onSubmit: (value) => {
      console.log(value);
      const action = registerApi(value);
      dispatch(action)
    }
  })
    return (
        <div className="container">
            <h1>Register</h1>
            <hr />
            <form onSubmit={frm.handleSubmit}>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <div className="form-group">
                            <p>Email</p>
                            <input className="form-control" name="email" onChange={frm.handleChange}/>
                            {frm.errors.email ? <p className='text-danger'>{frm.errors.email}</p>:''}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <p>Name</p>
                            <input className="form-control" name="name" onChange={frm.handleChange}/>
                            {frm.errors.name ? <p className='text-danger'>{frm.errors.name}</p>:''}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <div className="form-group">
                            <p>Password</p>
                            <input type="password" className="form-control" name="password" onChange={frm.handleChange}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <p>Phone</p>
                            <input className="form-control" name="phone" onChange={frm.handleChange}/>
                            {frm.errors.phone ? <p className='text-danger'>{frm.errors.phone}</p>:''}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <div className="form-group">
                            <p>Password confirm</p>
                            <input className="form-control" name="passwordconfirm" />
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="form-group d-flex justify-content-between mt-3">
                                <div className="d-flex">
                                    <p className="mt-3 me-5">Gender</p>
                                    <div className="d-flex mt-3">
                                        <div
                                            className="form-check d-flex"
                                            style={{
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                defaultChecked
                                                name="gender"
                                                id="flexRadioDefault1"
                                                value={true}
                                                onChange={frm.handleChange}
                                            />
                                            <label
                                                className="form-check-label mt-3"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Male
                                            </label>
                                        </div>
                                        <div
                                            className="form-check d-flex"
                                            style={{
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                name="gender"
                                                id="flexRadioDefault2"
                                                value={false}
                                                onChange={frm.handleChange}
                                            />
                                            <label
                                                className="form-check-label mt-3"
                                                htmlFor="flexRadioDefault2"
                                            >
                                                Femail
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-left">
                                    <button className="mt-3 btn-default">SUBMIT</button>
                                </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
