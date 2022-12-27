import { createSlice } from '@reduxjs/toolkit'
import { getListPermission } from './permissionAction';

const initialState = {
    permissions: [],
}

export const adminSlice = createSlice({
    name: 'permission',
    initialState,
    extraReducers: {

        [getListPermission.pending]: (state) => {
            state.loading = true
        },
        [getListPermission.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.permissions = payload.data
        },
        [getListPermission.rejected]: (state, { payload }) => {
            state.loading = false
        },


    },
})

export const { logout } = adminSlice.actions

export default adminSlice.reducer