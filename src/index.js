import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import Search from './Pages/Search/Search';
import Profile from './Pages/Profile/Profile';
import Detail from './Pages/Detail/Detail';
import './index.scss'
import { Provider } from 'react-redux';
import { store } from './redux/configStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
        <Route index element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail/>}></Route>
          </Route>
          <Route path='*' element={<Navigate to={""}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
);
