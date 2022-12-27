import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/api"

export const createRoom = createAsyncThunk(
    'tenant/createRoom',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { tenant } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${tenant.tenantToken}`,
                },
            }
            const { data } = await axios.post(`/rooms/create`, arg, config)
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

export const updateRoom = createAsyncThunk(
    'tenant/updateRoom',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { tenant } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${tenant.tenantToken}`,
                },
            }
            const { data } = await axios.put(`/rooms/update/${arg.id}`, arg, config)
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

export const updateStatus = createAsyncThunk(
    'tenant/updateStatus',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }
            const { data } = await axios.put(`/admin/update-status-room/${arg.id}`, arg, config)
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

