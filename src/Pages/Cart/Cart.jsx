import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTang, setGiam, postOrder } from '../../redux/productReducer'
import { getProfileApi } from '../../redux/userReducer'

export default function Cart() {
    const { arrCart } = useSelector((state) => state.productReducer)
    const {userProfile} = useSelector(state => state.userReducer)          
    const dispatch = useDispatch()
    useEffect(() => {
      const action =getProfileApi()
      dispatch(action)
    },[])
    return (
        <div className="container mt-5">
            <h3>Cart</h3>
            <hr />
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">img</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">total</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {arrCart?.map((cart, index) => {
                        return (
                            <tr key={index} className="">
                                <th scope="row">{cart.id}</th>
                                <td>
                                    <img
                                        style={{ width: 100, height: 50, objectFit: 'cover' }}
                                        src={cart.image}
                                    />
                                </td>
                                <td>{cart.name}</td>
                                <td>{cart.price} $</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            const action = setTang(cart.id)
                                            dispatch(action)
                                        }}
                                        className="text-white"
                                        style={{ background: '#6200EE', border: 'none' }}
                                    >
                                        +
                                    </button>
                                    <span className="px-3 mx-2 bg-secondary">{cart.quantity}</span>
                                    <button
                                        onClick={() => {
                                            const action = setGiam(cart.id)
                                            dispatch(action)
                                        }}
                                        className="text-white"
                                        style={{ background: '#6200EE', border: 'none' }}
                                    >
                                        -
                                    </button>
                                </td>
                                <td>{cart.quantity * cart.price} $</td>
                                <td>
                                    <button
                                        className="btn btn-danger me-2"
                                        style={{ background: '#6200EE', border: 'none' }}
                                    >
                                        Edit
                                    </button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <td colSpan={6}></td>
                    <td>
                        <button className="btn bg-warning text-white ps-3 mt-2" onClick={() => {
                          const action = postOrder(arrCart,userProfile.email);
                          dispatch(action)
                        }}>SUBMIT ORDER</button>
                    </td>
                </tfoot>
            </table>
        </div>
    )
}
