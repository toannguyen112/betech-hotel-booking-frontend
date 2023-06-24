import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/api"

// userAction.js
export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            // make request to backend
            await axios.post(
                '/user/register',
                { username, password },
                config
            )

            alert("Đăng kí thành công")
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                '/user/login',
                { username, password },
                config
            )

            // store user's token in local storage
            localStorage.setItem('userToken', data.token)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (arg, { getState, rejectWithValue }) => {
        try {
            // get user data from store
            const { user } = getState()

            // configure authorization header with user's token
            const config = {
                headers: {
                    Authorization: `Bearer ${user.userToken}`,
                },
            }
            const { data } = await axios.get(`/user/profile`, config)
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

export const orderRoom = createAsyncThunk(
    'user/orderRoom',
    async (arg, { getState, rejectWithValue }) => {
        try {
            // get user data from store
            const { user } = getState()

            // configure authorization header with user's token
            const config = {
                headers: {
                    Authorization: `Bearer ${user.userToken}`,
                },
            }
            const { data } = await axios.post(`/user/order`, arg, config)
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

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (arg, { getState, rejectWithValue }) => {
        try {
            // get user data from store
            const { user } = getState()

            // configure authorization header with user's token
            const config = {
                headers: {
                    Authorization: `Bearer ${user.userToken}`,
                },
            }
            const { data } = await axios.put(`/user/update`, arg, config)
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

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()

            const config = {
                headers: {
                    Authorization: `Bearer ${user.userToken}`,
                },
            }
            const { data } = await axios.delete(`/user/delete/${id}`, config)
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



