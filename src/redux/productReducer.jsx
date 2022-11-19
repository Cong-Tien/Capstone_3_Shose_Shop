import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import { history } from '..'
import { http, TOKEN_CYBERSOFT } from '../Util/config'

const initialState = {
    arrProduct: [
        {
            id: 1,
            name: 'Adidas Prophere',
            alias: 'adidas-prophere',
            price: 350,
            description:
                'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
            size: '[36,37,38,39,40,41,42]',
            shortDescription:
                'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
            quantity: 995,
            deleted: false,
            categories:
                '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
            relatedProducts: '[2,3,5]',
            feature: true,
            image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
        },
    ],
    productDetail: {},
    arrCart:[],
    arrSearch:[]
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductAction: (state, action) => {
            state.arrProduct = action.payload
        },
        getProductDetailAction: (state, action) => {
            state.productDetail = action.payload
        },
        getItemCart: (state, action) => {
            //let arr = [...state.arrCart];
            const item = action.payload;
            state.arrCart = [...state.arrCart,action.payload]
            console.log(action.payload);
            console.log(state.arrCart);
        },
        setTang: (state, action) => {
            const item = state.arrCart.find(item => item.id = action.payload);
            item.quantity +=1
        },
        setGiam: (state, action) => {
            const item = state.arrCart.find(item => item.id = action.payload);
            if(item.quantity>1){
                item.quantity -=1
            }
        },
        searchAction: (state, action) => {
            state.arrSearch = action.payload
        },
        searchSortAction: (state, action) => {
            if(action.payload===true){
                state.arrSearch = _.sortBy(state.arrSearch, [function(o) { return o.price; }])
            }else{
                state.arrSearch = _.sortBy(state.arrSearch, [function(o) { return -o.price; }])
            }
        },
    },
})

export const { getProductAction,getProductDetailAction,getItemCart,searchSortAction,setTang,setGiam,searchAction} = productReducer.actions

export default productReducer.reducer

export const getProductApi = () => {
    return async (dispatch) => {
        let result = await http.get('/api/Product');
        const action = getProductAction(result.data.content)
        dispatch(action)
    }
}

export const getProductDetailApi = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/Product/getbyid?id=${id}`);
            const action = getProductDetailAction(result.data.content)
            dispatch(action)
        } catch (err) {}
    }
}

export const postOrder = (arrCart,email) => {
    return async (dispatch) => {
        let order = {
            orderDetail:[],
            email:email
        }
        try {  
            console.log(email);
            console.log(arrCart);
            arrCart.map((cart,index) => {
                let item ={productId:cart.id,
                quantity:cart.quantity}
                order.orderDetail.push(item)
            })
            console.log(order.orderDetail);
            let result = await http.post(`/api/Users/order`,order);
            console.log(order);
            console.log(result.data.content);
            history.push('/profile')
            
        } catch (err) {}
    }
}


export const getSreach = (name) => {
    return async (dispatch) => {
        try {  
            let result = await http.get(`/api/Product?keyword=${name}`);
            const action = searchAction(result.data.content)
            console.log(result.data.content);
            dispatch(action)
        } catch (err) {}
    }
}

