import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProductApi } from '../../redux/productReducer'
import { Carousel } from 'antd'
import { getProfileApi } from '../../redux/userReducer'
import { ACESS_TOKEN, settings } from '../../Util/config'

export default function Home() {
    const dispatch = useDispatch()
    const { arrProduct } = useSelector((state) => state.productReducer)
    useEffect(() => {
        const action = getProductApi()
        dispatch(action)

        if(settings.getStore(ACESS_TOKEN)){
            const action2 = getProfileApi();
        dispatch(action2)
        }
    }, [])

    return (
        <div>
            <div className="carousel my-5 py-5">
                <Carousel autoplay dotPosition dots>
                    {arrProduct.slice(0, 3)?.map((prod, index) => {
                        return (
                            <div
                                key={index}
                                className="d-flex justify-content-center align-items-center row px-5"
                            >
                                <div className="col-8">
                                    <img
                                        className="ms-5"
                                        style={{ width: 689, height: 383, objectFit: 'cover' }}
                                        src={prod.image}
                                    />
                                </div>
                                <div className="col-4">
                                    <h1>{prod.name}</h1>
                                    <p className="fs-5">{prod.description}</p>
                                    <button className="btn btn-warning px-4 py-2">Buy now</button>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="container">
                <div className="product-title">
                    <h2>Product Feature</h2>
                </div>
                <div className="row mx-5">
                    {arrProduct.map((prod, index) => {
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
        </div>
    )
}
