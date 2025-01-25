import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    eusers:[],
    fruits:[]
}



export const fruitSlice= createSlice({
    name:'mySlice1',
    initialState,
    reducers:{
        setUsers:(state,action)=> {
            state.eusers=[...state.eusers,action.payload]
        }

    }

})

export const{setUsers}=userSlice.actions
export default userSlice.reducer