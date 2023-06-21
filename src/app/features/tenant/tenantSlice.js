import { createSlice } from '@reduxjs/toolkit'
import { tenantLogin, getTenantDetails, getTenantRooms, updateTenant, createTenant, deleteTenantRoom } from './tenantActions';

const tenantToken = localStorage.getItem('tenantToken')
    ? localStorage.getItem('tenantToken')
    : null

const initialState = {
    tenantInfo: null,
    tenantToken: tenantToken,
    error: null,
    success: false,

    tenantRooms: [],
    tenants: [],
}

export const tenantSlice = createSlice({
    name: 'tenant',
    initialState,
    reducers: {

        seTenants: (state, { action, payload }) => {
            state.tenants = [...payload];
        },

        logout: (state) => {
            localStorage.removeItem('tenantToken')
            state.loading = false
            state.tenantInfo = null
            state.tenantToken = null
            state.error = null
        },
    },

    extraReducers: {
        [tenantLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [tenantLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.tenantInfo = payload.data
            state.tenantToken = payload.token
        },
        [tenantLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [createTenant.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createTenant.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.tenants = payload.data
        },
        [createTenant.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [updateTenant.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updateTenant.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
        },
        [updateTenant.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [getTenantDetails.pending]: (state) => {
            state.loading = true
        },
        [getTenantDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.tenantInfo = payload.data
        },
        [getTenantDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [getTenantRooms.pending]: (state) => {
            state.loading = true
        },
        [getTenantRooms.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.tenantRooms = payload.data
        },
        [getTenantRooms.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [deleteTenantRoom.pending]: (state) => {
            state.loading = true
        },
        [deleteTenantRoom.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [deleteTenantRoom.rejected]: (state, { payload }) => {
            state.loading = false
        },
    },
})

export const { logout } = tenantSlice.actions

export default tenantSlice.reducer