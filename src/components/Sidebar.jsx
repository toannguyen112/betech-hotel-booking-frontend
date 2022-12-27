import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { logout } from '../app/features/admin/adminSlice';

function Sidebar() {

  const { adminInfo } = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState([
    {
      title: "Thống kê",
      route: "/admin/dashboard",
      permission_name: "dashboard"
    },
    {
      title: "Danh sách phòng",
      route: "/admin/rooms",
      permission_name: "rooms"
    },
    {
      title: "Map",
      route: "/admin/map",
      permission_name: "maps"
    }
    ,
    {
      title: "Tenant",
      route: "/admin/tenant",
      permission_name: "tenants"

    },
    {
      title: "User",
      route: "/admin/user",
      permission_name: "users"
    }
    ,
    {
      title: "Account",
      route: "/admin/account",
      permission_name: "accounts"
    },
    {
      title: "Role",
      route: "/admin/role",
      permission_name: "roles"
    }
  ])

  const handleLogout = () => {
    dispatch(logout());
    navigate({
      pathname: "/admin/login",
    });
  }

  const userExists = (name) => {
    return adminInfo?.role?.permissions.some(function (el) {
      return el.perm_name === name;
    });
  }

  return (
    <nav className="sidebar w-[var(--sidebar-width)] h-screen flex flex-col fixed text-[#4B5563] border-r-2  border-[#F6F5FA]">
      <div className="flex items-center justify-center text-center px-3 py-5 text-[#4B5563]">
        <NavLink to="/" >
          <Logo />
        </NavLink>
      </div>
      <div className="py-6 space-y-4">
        <div>
          <div >
            {
              adminInfo ? sidebar.map((item, index) => {
                return (
                  userExists(item.permission_name) ? (
                    <div className="nav-tab" key={index}>
                      <NavLink to={item.route} className="cursor-pointer 
                       w-full gap-2
                        px-6 py-2
                        text-[#4B5563] 
                        transition 
                        duration-150
                         text-base 
                      active:text-[#524FA1] 
                      active:border-l-4
                      active:border-[#FFCD5D]
                       active:font-bold 
                       hover:opacity-100 hover:text-[#524FA1]
                       opacity-70
                       ">
                        <div className="flex">
                          <span> {item.title} </span>
                        </div>
                      </NavLink>
                    </div>
                  ) : null
                )
              }) : ""
            }
          </div>
          <div className="py-6 space-y-4"></div>
          <div className="mt-auto">
            <div className="cursor-pointer  w-full gap-2 px-6 py-2 text-[#4B5563] transition duration-150 text-base">
              <span onClick={() => handleLogout()} >Đăng xuất</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );


}

export default Sidebar;
