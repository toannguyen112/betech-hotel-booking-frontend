import "./index.scss";
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

import MediaManager from "../src/components/MediaManager";;

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
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
