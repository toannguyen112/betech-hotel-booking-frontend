import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/api"

export const adminLogin = createAsyncThunk(
    'admin/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                '/admin/login',
                { username, password },
                config
            )

            localStorage.setItem('adminToken', data.token);
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

export const getAdminDetails = createAsyncThunk(
    'admin/getAdminDetails',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            const { data } = await axios.get(`/admin/profile`, config)
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

export const updateAdmin = createAsyncThunk(
    'admin/updateAdmin',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            const { data } = await axios.put(`/admin/update-profile`, arg, config)
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


export const getListAdmin = createAsyncThunk(
    'admin/getListAdmin',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }

            return await axios.get(`/admin/index`, config)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)


export const createAdmin = createAsyncThunk(
    'admin/createAdmin',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            return await axios.post(`/admin/create`, arg, config)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const updateAccountAdmin = createAsyncThunk(
    'admin/updateAccountAdmin',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            return await axios.put(`/admin/update/${arg.id}`, arg, config)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const updateAdminTenant = createAsyncThunk(
    'admin/updateAdminTenant',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            return await axios.put(`/admin/update/tenant/${arg.id}`, arg, config)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)








