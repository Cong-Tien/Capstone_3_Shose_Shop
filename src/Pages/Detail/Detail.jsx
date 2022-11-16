import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getProductDetailApi } from '../../redux/productReducer'

export default function Detail() {
    const { productDetail } = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        const action = getProductDetailApi(id)
        dispatch(action)
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
                    <button className='btn-quantity'>+</button>
                    <span className='mx-2 fs-5'>1</span>
                    <button className='btn-quantity'>-</button><br/>
                    <NavLink className="btn-add">Add to card</NavLink>
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
