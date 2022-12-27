import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './features/room/roomSlice'
import adminReducer from './features/admin/adminSlice'
import userReducer from './features/user/userSlice'
import tenantReducer from './features/tenant/tenantSlice'
import roleReducer from './features/role/roleSlice'
import permissionReducer from './features/permission/permissionSlice'

export const store = configureStore({
    reducer: {
        room: roomReducer,
        user: userReducer,
        tenant: tenantReducer,
        admin: adminReducer,
        role: roleReducer,
        permission: permissionReducer,
    },
})