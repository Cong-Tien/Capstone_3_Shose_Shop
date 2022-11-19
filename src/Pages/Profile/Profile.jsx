import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd'
import { Pagination } from 'antd'
import { getProfileApi, updateUser } from '../../redux/userReducer'
import { useFormik } from 'formik'

export default function Profile() {
    const { userProfile } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        const action = getProfileApi()
        dispatch(action)
        console.log(userProfile)
    }, [])

    const frm = useFormik({
        enableReinitialize:true,
        initialValues:{
          email:userProfile.email,
          password:userProfile.password,
          name:userProfile.name,
          gender:userProfile.gender,
          phone:userProfile.phone
        },
        onSubmit: (value) => {
          console.log(value);
           const action = updateUser(value);
          dispatch(action)
        }
    })
    return (
        <div className="container-fluid mt-5">
            <p className="product-title text-white fs-4" style={{ padding: '5px 300px 5px 20px' }}>
                Profile
            </p>
            <form onSubmit={frm.handleSubmit}>
            <div className="row mx-5">
                <div className="col-4">
                    <img
                        src={userProfile.avatar}
                        style={{ marginLeft: '25%', borderRadius: '50%' }}
                        className="w-50"
                    />
                </div>
                <div className="col-8 mt-3">
                    <div className="row">
                        <div className="col-6 px-5">
                            <div className="form-group">
                                <span>Email</span>
                                <input name='email' className="form-control mb-4" value={frm.values.email} onChange={frm.handleChange}/>
                            </div>
                            <div className="form-group">
                                <span>Name</span>
                                <input name='name' onChange={frm.handleChange} className="form-control" value={frm.values.name} />
                            </div>
                        </div>
                        <div className="col-6 px-5">
                            <div className="form-group">
                                <span>Phone</span>
                                <input name='phone' onChange={frm.handleChange} className="form-control mb-4" value={frm.values.phone} />
                            </div>
                            <div className="form-group">
                                <span>Password</span>
                                <input name='password' onChange={frm.handleChange} className="form-control" value={frm.values.password} />
                            </div>
                        </div>
                        <div className="col-6"></div>
                        <div className="col-6 px-5">
                            <div className="form-group d-flex justify-content-between">
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
                                            {userProfile.gender===true ? <input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                defaultChecked
                                                name="gender"
                                                value={true}
                                                id="flexRadioDefault1"
                                                onChange={frm.handleChange}
                                            />:<input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                name="gender"
                                                value={true}
                                                id="flexRadioDefault1"
                                                onChange={frm.handleChange}
                                            />}
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
                                            {userProfile.gender===false ? <input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                defaultChecked
                                                name="gender"
                                                value={false}
                                                id="flexRadioDefault1"
                                                onChange={frm.handleChange}
                                            />:<input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                name="gender"
                                                value={false}
                                                id="flexRadioDefault1"
                                                onChange={frm.handleChange}
                                            />}
                                            <label
                                                className="form-check-label mt-3"
                                                htmlFor="flexRadioDefault2"
                                            >
                                                Femail
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-right">
                                    <button className="mt-3 btn-default">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>

            <hr className="mx-5" />
            <div className="container product-history">
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane
                        tab={
                            <span className="fs-5" style={{ color: '#DD2AED' }}>
                                Order history
                            </span>
                        }
                        key="1"
                    >
                        {userProfile.ordersHistory?.map((orderDetail, index) => {
                            return (<>
                                <p style={{ color: '#DD2AED' }}>+ Orders have been placed on {orderDetail.date}</p>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">img</th>
                                            <th scope="col">name</th>
                                            <th scope="col">price</th>
                                            <th scope="col">quantity</th>
                                            <th scope="col">total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={index} className="">
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                <img
                                                    style={{
                                                        width: 100,
                                                        height: 50,
                                                        objectFit: 'cover',
                                                    }}
                                                    src={orderDetail.orderDetail[0].image}
                                                />
                                            </td>
                                            <td>{orderDetail.orderDetail[0].name}</td>
                                            <td>{orderDetail.orderDetail[0].price} $</td>
                                            <td>
                                                <span className="px-3 mx-2 bg-secondary">
                                                    {orderDetail.orderDetail[0].quantity}
                                                </span>
                                            </td>
                                            <td>
                                                {orderDetail.orderDetail[0].quantity *
                                                    orderDetail.orderDetail[0].price}{' '}
                                                $
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </>
                            )
                        })}
                    </Tabs.TabPane>
                    <Tabs.TabPane
                        tab=<span className="fs-5">Favourite</span>
                        key="2"
                    ></Tabs.TabPane>
                </Tabs>
                <div>
                    <Pagination className="text-right" defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}
