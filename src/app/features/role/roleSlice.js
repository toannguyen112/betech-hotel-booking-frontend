import { createSlice } from '@reduxjs/toolkit';
import { createRole, getListRole, updateRole } from './roleAction';

const initialState = { roles: [] }

export const roomSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {},

    extraReducers: {
        [createRole.pending]: (state) => {
            state.loading = true
        },
        [createRole.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.roles = payload.data
        },
        [createRole.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [updateRole.pending]: (state) => {
            state.loading = true
        },
        [updateRole.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.roles = payload.data
        },
        [updateRole.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [getListRole.pending]: (state) => {
            state.loading = true
        },
        [getListRole.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.roles = payload.data
        },
        [getListRole.rejected]: (state, { payload }) => {
            state.loading = false
        },
    }
})

export const { setRooms, setCategories } = roomSlice.actions

export default roomSlice.reducer