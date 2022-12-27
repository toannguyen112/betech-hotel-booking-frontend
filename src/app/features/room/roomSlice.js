import { createSlice } from '@reduxjs/toolkit';
import { createRoom, updateRoom, updateStatus } from './roomAction';

const initialState = {
    rooms: [],
    categories: [],
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setRooms: (state, { action, payload }) => {
            state.rooms = [...payload];
        },
        setCategories: (state, { action, payload }) => {
            state.categories = [...payload];
        },
    },

    extraReducers: {
        [createRoom.pending]: (state) => {
            state.loading = true
        },
        [createRoom.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [createRoom.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [updateRoom.pending]: (state) => {
            state.loading = true
        },
        [updateRoom.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [updateRoom.rejected]: (state, { payload }) => {
            state.loading = false
        },

        [updateStatus.pending]: (state) => {
            state.loading = true
        },
        [updateStatus.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [updateStatus.rejected]: (state, { payload }) => {
            state.loading = false
        },
    }
})

export const { setRooms, setCategories } = roomSlice.actions

export default roomSlice.reducer