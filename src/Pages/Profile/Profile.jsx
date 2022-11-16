import React from 'react'
import { Tabs } from 'antd'
import { Pagination } from 'antd';

export default function Profile() {
    return (
        <div className="container-fluid">
            <p className="product-title text-white fs-4" style={{ padding: '5px 300px 5px 20px' }}>
                Profile
            </p>
            <div className="row mx-5">
                <div className="col-4">
                    <img src="" />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-6 px-5">
                            <div className="form-group">
                                <span>Email</span>
                                <input className="form-control mb-4" value="email" />
                            </div>
                            <div className="form-group">
                                <span>Name</span>
                                <input className="form-control" value="name" />
                            </div>
                        </div>
                        <div className="col-6 px-5">
                            <div className="form-group">
                                <span>Phone</span>
                                <input className="form-control mb-4" value="phone" />
                            </div>
                            <div className="form-group">
                                <span>Password</span>
                                <input className="form-control" value="password" />
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
                                            <input
                                                className="form-check-input m-auto"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
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
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked
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
                                <div className="form-group text-right">
                                    <button className="mt-3 btn-default">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mx-5'/>
            <div className="container product-history">
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab={<span className='fs-5' style={{color:"#DD2AED"}}>Order history</span>} key="1">
                       
                    </Tabs.TabPane>
                    <Tabs.TabPane tab=<span className='fs-5'>Favourite</span> key="2">
                        
                    </Tabs.TabPane>
                </Tabs>
                <div>
                <Pagination className='text-right' defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}
