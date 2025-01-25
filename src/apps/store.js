import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice';
import arrReducer from '../slices/arrSlice'
const store=configureStore({
    reducer:{
        userInfo:userReducer,
        arrInfo:arrReducer
    }
})
export default store