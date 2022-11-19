import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getSreach, searchSortAction } from '../../redux/productReducer';
import _ from "lodash"
import ColumnGroup from 'antd/lib/table/ColumnGroup';

export default function Search() {
  const dispatch = useDispatch()
  const {arrSearch} = useSelector(state => state.productReducer);
  let name = ""
  const handleChange = (e) => {
    name = e.target.value
  }
    return (
        <>
            <div className="container mt-5">
                <form className="d-flex" onSubmit={(e) => {
                  e.preventDefault()
                  const action = getSreach(name)
                                  dispatch(action)
                }}>
                    <div className="form-group" style={{ width: '35%' }}>
                        <p>Search</p>
                        <div className="d-flex">
                            <input
                                style={{
                                    background: 'rgba(33, 33, 33, 0.08)',
                                    borderRadius: 'none',
                                }}
                                className="form-control  me-5"
                                onChange={(e) => {
                                  handleChange(e)
                                }}
                            />
                            <button
                                style={{
                                    borderRadius: '50px',
                                    background: '#6200EE',
                                    boxShadow:
                                        '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
                                    border: 'none',
                                }}
                                className="btn btn-danger"
                                onClick={()=> {
                                  const action = getSreach(name)
                                  dispatch(action)
                                }}
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <p className="w-100 mt-5 product-title fs-3 text-white block">Search result</p>

                <div className="container">
                    <p>Price</p>
                    <button onClick={() => {
                      const action = searchSortAction(true);
                      dispatch(action)
                    }} className="py-1 fs-5" style={{ position:"relative",paddingRight: 210,border:"none",paddingLeft:20,background:"rgba(33, 33, 33, 0.08)"}}>
                        <span>decrease</span>
                        <i className="fa fa-caret-down fs-3" style={{position:"absolute",right:"10px",top:5}}></i>
                    </button><br/>
                    <button onClick={() => {
                      const action = searchSortAction(false);
                      dispatch(action)
                    }} className="py-1 fs-5 mt-3" style={{ paddingRight: 200,border:"none",paddingLeft:20,background:"rgba(33, 33, 33, 0.08)"}}>ascending</button>
                </div>
            </div>
            <div className="row mx-5 mt-5">
                    {arrSearch?.map((prod, index) => {
                        return (
                            <div key={index} className="col-4">
                                <div className="card mx-3 mb-5">
                                    <img src={prod.image} />
                                    <div className="card-body">
                                        <h4>{prod.name}</h4>
                                        <span>{prod.description.substring(0,40) + "..."}</span>
                                       
                                        
                                    </div>
                                    <div className='card-footer d-flex'>
                                    <NavLink
                                            to={`/detail/${prod.id}`}
                                            className=" w-50 m-0"
                                        >
                                            Buy now
                                        </NavLink>
                                        <p className='w-50'>{prod.price}$</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </>
    )
}
