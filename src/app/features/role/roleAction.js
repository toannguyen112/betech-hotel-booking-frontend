import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/api"

export const createRole = createAsyncThunk(
    'role/createRole',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }

            const { data } = await axios.post(`/role/create`, arg, config)
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

export const updateRole = createAsyncThunk(
    'role/updateRole',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            const { data } = await axios.put(`/role/update/${arg.role_id}`, arg, config);
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

export const getListRole = createAsyncThunk(
    'role/getListRole',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }

            return await axios.get(`/role/index`, config)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)



