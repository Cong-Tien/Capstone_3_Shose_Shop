import { createSlice } from '@reduxjs/toolkit'
import { history } from '..';
import { ACESS_TOKEN, http, settings, USER_LOGIN } from '../Util/config';

const initialState = {
    userLogin:settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : {},
    userProfile: {}
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state,action) => {
        state.userLogin=action.payload
    },
    getProfileAction: (state,action) => {
      state.userProfile =action.payload;
    }
  }
});

export const {loginAction,getProfileAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin) => {
    return async dispatch => {
        const result = await http.post('/api/users/signin',userLogin);
        const action = loginAction(result.data.content)
        dispatch(action)

        const actionGetProfile = getProfileApi();
        dispatch(actionGetProfile)

        history.push("/home")
        settings.setStorageJson(USER_LOGIN,result.data.content);
        settings.setStorage(ACESS_TOKEN,result.data.content.accessToken)
        settings.setCookie(ACESS_TOKEN,result.data.accessToken)
    }
}

export const getProfileApi = () => {
  return async dispatch => {
    const result = await http.post("/api/users/getprofile");
    const action = getProfileAction(result.data.content);
    dispatch(action) 
  }
}
export const loginFacebook = (tokenFBApp) => {
  return async dispatch => {
    const result = await http.post("/api/users/facebooklogin",{facebookToken:tokenFBApp});

    const action = loginAction(result.data.content)
    dispatch(action)

    settings.setStorageJson(USER_LOGIN,result.data.content);
    settings.setStorage(ACESS_TOKEN,result.data.content.accessToken)
    settings.setCookie(ACESS_TOKEN,result.data.accessToken)
  }
}

export const registerApi = (infor) => {
  return async dispatch => {
    try{
      const result = await http.post("/api/Users/signup",infor);
      alert("Đăng ký thành công. Vui lòng đăng nhập")
      history.push('/login')
    }
    catch(err){
      console.log(err);
    }
  }
}
export const updateUser = (infor) => {
  return async dispatch => {
    try{
      const result = await http.post("/api/Users/updateProfile",infor);
      alert("Cập nhật thành công")
    }
    catch(err){
      console.log(err);
    }
  }
}