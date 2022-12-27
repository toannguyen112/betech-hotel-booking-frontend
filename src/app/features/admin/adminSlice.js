import { createSlice } from '@reduxjs/toolkit'
import { adminLogin, getAdminDetails, updateAdmin, updateAdminTenant, getListAdmin, createAdmin, updateAccountAdmin } from './adminAction';

const adminToken = localStorage.getItem('adminToken')
    ? localStorage.getItem('adminToken')
    : null

const initialState = {
    adminInfo: null,
    admins: [],
    adminToken: adminToken,
    error: null,
    success: false,
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('adminToken')
            state.loading = false
            state.adminInfo = null
            state.adminToken = null
            state.error = null
        },
    },

    extraReducers: {
        [adminLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [adminLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.adminInfo = payload.data
            state.adminToken = payload.token
        },
        [adminLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            alert(payload)
        },


        [updateAdminTenant.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updateAdminTenant.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [updateAdminTenant.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [getListAdmin.pending]: (state) => {
            state.loading = true
        },
        [getListAdmin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.admins = payload.data
        },
        [getListAdmin.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [getAdminDetails.pending]: (state) => {
            state.loading = true
        },
        [getAdminDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.adminInfo = payload.data
        },
        [getAdminDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [updateAdmin.pending]: (state) => {
            state.loading = true
        },
        [updateAdmin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.adminInfo = payload.data
        },
        [updateAdmin.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [createAdmin.pending]: (state) => {
            state.loading = true
        },
        [createAdmin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.admins = [];
            alert("create success")
        },
        [createAdmin.rejected]: (state, { payload }) => {
            state.loading = false
            alert("create error")
        },

        [updateAccountAdmin.pending]: (state) => {
            state.loading = true
        },
        [updateAccountAdmin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.admins = [];
            alert("update success")
        },
        [updateAccountAdmin.rejected]: (state, { payload }) => {
            state.loading = false
        },
    },
})

export const { logout } = adminSlice.actions

export default adminSlice.reducer