import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getItemCart, getProductDetailApi } from '../../redux/productReducer'
import { getProfileApi } from '../../redux/userReducer'

export default function Detail() {
    const { productDetail } = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()
    const [soLuong,setSoLuong] = useState(1);
    const { id } = useParams()
    useEffect(() => {
        const action = getProductDetailApi(id)
        dispatch(action)
        const action2 =getProfileApi()
        dispatch(action2)
    }, [id])
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-4 mt-2">
                    <img src={productDetail.image} />
                </div>
                <div style={{paddingLeft:150}} className="col-8 mt-2">
                    <h3>{productDetail.name}</h3>
                    <p>{productDetail.description}</p>
                    <h4 style={{color:"#1ED90E"}} className="fs-4 mb-4">Available size</h4>
                    {productDetail.size?.map((size, index2) => {
                        return (
                            <button  key={index2} className="btn-size">
                                {size}
                            </button>
                        )
                    })}
                    <p className='price'>{productDetail.price} $</p>
                    <button className='btn-quantity' onClick={() => {
                        setSoLuong(soLuong+1)
                    }}>+</button>
                    <span className='mx-2 fs-5' id='soLuong'>{soLuong}</span>
                    <button className='btn-quantity' onClick={() => {
                        if(soLuong > 1){
                            setSoLuong(soLuong-1)
                        }
                    }}>-</button><br/>
                    <button className="btn-add" onClick={() => {
                        let productDetailFake = {...productDetail}
                        productDetailFake.quantity=soLuong;
                        const action = getItemCart(productDetailFake)
                        dispatch(action)
                    }}>Add to card</button>
                </div>
            </div>
            <h3 className="mt-2 text-center">-Related Product-</h3>
            <div className="row mt-2">
                {productDetail.relatedProducts?.map((prod, index) => {
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
        </div>
    )
}
