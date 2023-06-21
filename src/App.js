import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Register from "./page/Register";
import TenantLoginPage from "./page/TenantLoginPage";
import RoomDetail from "./page/RoomDetail";
import PostRoom from "./page/PostRoom";
import SearchPage from "./page/SearchPage";
import AboutPage from "./page/AboutPage";
import BlogPage from "./page/BlogPage";
import ContactPage from "./page/ContactPage";

import UserOrder from "./page/User/UserOrder";
import UserProfile from "./page/User/UserProfile";

import TenantProfile from "./page/Tenant/TenantProfile";
import TenantRoom from "./page/Tenant/TenantRooms";
import TenantRoomUpdate from "./page/Tenant/TenantRoomUpdate";

import LoginAdmin from "./page/Admin/LoginAdmin";
import Dashboard from "./page/Admin/Dashboard";
import Account from "./page/Admin/Account/Index";
import AccountShow from "./page/Admin/Account/Form";
import AccountCreate from "./page/Admin/Account/Create";

import Role from "./page/Admin/Role/Role";
import RoleShow from "./page/Admin/Role/Form";
import RoleCreate from "./page/Admin/Role/Create";

import MapPage from "./page/Admin/MapPage";
import Room from "./page/Admin/Room/Room";
import AdminRoomShow from "./page/Admin/Room/Form";
import AdminRoomCreate from "./page/Admin/Room/Create";

import Profile from "./page/Admin/Profile";
import Tenant from "./page/Admin/Tenant/Tenant";
import TenantShow from "./page/Admin/Tenant/Form";
import TenantCreate from "./page/Admin/Tenant/Create";

import User from "./page/Admin/User/User";
import UserShow from "./page/Admin/User/Form";
import UserCreate from "./page/Admin/User/Create";

import { useDispatch } from 'react-redux'
import { setRooms, setCategories } from './app/features/room/roomSlice'

import React, { useEffect } from "react";
import RoomApi from "./api/services/RoomApi";
import CategoriesApi from "./api/services/CategoriesApi";
import NotFoundPage from "./page/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import SettingPage from "./page/Admin/SettingPage";
import NotificationPage from "./page/Admin/NotiPage";
import ProtectedRouteTenant from "./ProtectedRouteTenant";

import MediaManager from "../src/components/MediaManager";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Booking";
    new RoomApi().getRooms().then((res) => {
      const rooms = res.items;
      dispatch(setRooms(rooms));
    });

    new CategoriesApi().getCategories().then((res) => {
      const categories = res.data.data;
      dispatch(setCategories(categories));
    });
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tenant/login" element={<TenantLoginPage />} />
          <Route path="/room/:id" element={<RoomDetail />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route element={<ProtectedRouteTenant />}>
            <Route path="/tenant/post-room" element={<PostRoom />} />
            <Route path="/tenant/profile" element={<TenantProfile />} />
            <Route path="/tenant/rooms" element={<TenantRoom />} />
            <Route path="/tenant/room/update/:id" element={<TenantRoomUpdate />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/user/order" element={<UserOrder />} />
            <Route path="/user/profile" element={<UserProfile />} />
          </Route>

          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin/tenant" element={<Tenant />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />

            <Route path="/admin/rooms" element={<Room />} />
            <Route path="/admin/room/form" element={<AdminRoomShow />} />
            <Route path="/admin/room/create" element={<AdminRoomCreate />} />

            <Route path="/admin/tenant" element={<Tenant />} />
            <Route path="/admin/tenant/form" element={<TenantShow />} />
            <Route path="/admin/tenant/create" element={<TenantCreate />} />

            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/user/form" element={<UserShow />} />
            <Route path="/admin/user/create" element={<UserCreate />} />

            <Route path="/admin/account" element={<Account />} />
            <Route path="/admin/account/form" element={<AccountShow />} />
            <Route path="/admin/account/create" element={<AccountCreate />} />

            <Route path="/admin/role" element={<Role />} />
            <Route path="/admin/role/form" element={<RoleShow />} />
            <Route path="/admin/role/create" element={<RoleCreate />} />

            <Route path="/admin/setting" element={<SettingPage />} />
            <Route path="/admin/notification" element={<NotificationPage />} />
            <Route path="/admin/map" element={<MapPage />} />
            <Route path="/admin/profile" element={<Profile />} />
          </Route>

          <Route path="" element={<NotFoundPage />} />
          <Route path="/media/manager" element={<MediaManager />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
