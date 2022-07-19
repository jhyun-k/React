import axios from 'axios';
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'

export const getVideoList = createAsyncThunk(
    "GET_VIDEO_LIST",
    async (url) => {
        try{
            const res = await axios.get(url)
            return res.data.items
        }catch(err){
            console.log(err)
        }
    }
)


const videoSlice =  createSlice({
    name:'video',
    initialState:{
        data:[],
    },
    reducers: {  
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideoList.fulfilled,(state,action)=>{
            console.log('액션페이로드',action.payload)
            state.data=action.payload;
        })
    }
})

export default videoSlice.reducer