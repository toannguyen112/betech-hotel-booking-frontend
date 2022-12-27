import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/api"

export const getListPermission = createAsyncThunk(
    'admin/permissions',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { admin } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${admin.adminToken}`,
                },
            }

            return await axios.get(`/permission/index`, config)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)


