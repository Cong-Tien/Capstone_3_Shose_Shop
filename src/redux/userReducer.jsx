import { createSlice } from '@reduxjs/toolkit'
import { ACESS_TOKEN, http, settings, USER_LOGIN } from '../Util/config';

const initialState = {
    userLogin:settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : {}
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state,action) => {
        state.userLogin=action.payload
    }
  }
});

export const {loginAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin) => {
    return async dispatch => {
        const result = await http.post('/api/users/signin',userLogin);
        const action = loginAction(result.data.content)
        dispatch(action)

        settings.setStorageJson(USER_LOGIN,result.data.content);
        settings.setStorage(ACESS_TOKEN,result.data.content.accessToken)
        settings.setCookie(ACESS_TOKEN,result.data.accessToken)
    }
}