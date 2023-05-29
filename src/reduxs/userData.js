import {createSlice} from '@reduxjs/toolkit'

export const userData = createSlice({
    name: 'userData',
    initialState: { value: []},
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setUser} = userData.actions
export default userData.reducer