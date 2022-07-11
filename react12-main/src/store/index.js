import { configureStore , combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import storage from 'redux-persist/lib/storage'; // 로컬스토리지 (탭 닫아도 유지)
// import sessionStorage from 'redux-persist/es/storage/session'; // 세션스토리지 (탭 닫으면 없어져)
import persistReducer from 'redux-persist/es/persistReducer'; //리듀서가 실행될 때 persist를 같이 묶어서 사용할 수 있게 해줌
import userSlice from './user/userSlice';

const persistConfig = {
    key : 'root', // 로컬스토리지 저장될때의 키값
    storage,
}

const rootReducer = combineReducers({
    cart:cartSlice,
    user:userSlice,
})

const persistedReducer = persistReducer(persistConfig,rootReducer) ;
//rootReducer 와 persist 를 묶어서 사용
//redux-persist 를 사용해서 로컬스토리지에 state 저장하면 페이지가 새로고침 되어도 
//initialState값이 local storage 에 저장된 state 값으로 대체되기 때문에 초기화 되지 않는다.

const store = configureStore({
    reducer : persistedReducer,
    middleware : (GetDefaultMiddleware) => GetDefaultMiddleware({
        serializableCheck : false,
    })
})
export default store;


