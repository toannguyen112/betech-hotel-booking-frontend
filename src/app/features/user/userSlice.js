import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin, getUserDetails, orderRoom, updateUser } from './userActions';

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    userInfo: null,
    userToken: userToken,
    error: null,
    success: false,
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, { action, payload }) => {
            state.users = [...payload]
        },
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            alert(payload)
        },

        [updateUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.data
            state.userToken = payload.token
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            alert(payload)
        },

        [getUserDetails.pending]: (state) => {
            state.loading = true
        },
        [getUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.data
        },
        [getUserDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [orderRoom.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [orderRoom.fulfilled]: (state, { payload }) => {
            state.loading = false
            alert("Đặt thành công")
        },
        [orderRoom.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            alert(payload)
        },
    },
})

export const { setUsers, logout } = userSlice.actions

export default userSlice.reducer