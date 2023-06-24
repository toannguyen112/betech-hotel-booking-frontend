import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/api"

export const tenantLogin = createAsyncThunk(
    'tenant/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                '/tenant/login',
                { username, password },
                config
            )

            localStorage.setItem('tenantToken', data.token)
            return data
        } catch (error) {
            alert(error.response.data);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getTenantDetails = createAsyncThunk(
    'tenant/getTenantDetails',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { tenant } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${tenant.tenantToken}`,
                },
            }
            const { data } = await axios.get(`/tenant/profile`, config)
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getTenantRooms = createAsyncThunk(
    'tenant/getTenantRooms',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { tenant } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${tenant.tenantToken}`,
                },
            }
            const { data } = await axios.get(`/tenant/get-rooms`, config)
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const updateTenant = createAsyncThunk(
    'tenant/updateTenant',
    async (arg, { getState, rejectWithValue }) => {
        try {

            const { tenant } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${tenant.tenantToken}`,
                },
            }

            const { data } = await axios.put(`/tenant/update`, arg, config)
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const createTenant = createAsyncThunk(
    'tenant/createTenant',
    async (arg, { getState, rejectWithValue }) => {
        try {

            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }

            const { data } = await axios.post(`/tenant/create`, arg, config)
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const deleteTenant = createAsyncThunk(
    'tenant/deleteTenant',
    async (id, { getState, rejectWithValue }) => {
        try {

            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }

            const { data } = await axios.delete(`/tenant/delete/${id}`, config)
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const deleteTenantRoom = createAsyncThunk(
    'tenant/deleteTenantRoom',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { tenant } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${tenant.tenantToken}`,
                },
            }
            const { data } = await axios.delete(`/tenant/delete-room/${arg.id}`, config)
            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

