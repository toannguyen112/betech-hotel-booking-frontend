import React, { useEffect } from 'react'
import {
  Link, NavLink
} from "react-router-dom";
import Logo from './Logo';
import Avatar from '../components/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../app/features/user/userActions';
import { logout } from '../app/features/user/userSlice';
import { logout as logoutTenant } from '../app/features/tenant/tenantSlice';
import { getTenantDetails, getTenantRooms } from '../app/features/tenant/tenantActions';
import Button from './Button';

function Header() {

  const { userInfo, userToken } = useSelector((state) => state.user);

  const { tenantInfo, tenantToken } = useSelector((state) => state.tenant);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) dispatch(getUserDetails());

    if (tenantToken) {
      dispatch(getTenantDetails());
      dispatch(getTenantRooms());
    }

  }, [userToken, tenantToken, dispatch])

  return (
    <header className="header sticky top-0 bg-white z-[20] border-b shadow-sm">
      <div className="container flex justify-between items-center py-[8px]">
        <Link to="/" className="logo"><div className='max-w-[80px]'><Logo /></div></Link>
        <div className="hidden md:flex justify-between space-x-[32px] items-center font-bold ">
          <Link to="/" className='text-[16px] font-bold transition-all hover:text-primary cursor-pointer'>Trang chủ</Link>
          <Link to="/about" className='text-[16px] font-bold transition-all hover:text-primary cursor-pointer  '>Về chúng tôi</Link>
          <Link to="/blog" className='text-[16px] font-bold transition-all hover:text-primary cursor-pointer  '>Blog</Link>
          <Link to="/contact" className='text-[16px] font-bold transition-all hover:text-primary cursor-pointer  '>Liên hệ</Link>
          <div className='flex items-center space-x-[6px]'>
            {userToken ? (
              <React.Fragment>
                <div className='relative group'>
                  <Avatar
                    route={"/user/profile"}
                    userInfo={userInfo} />
                  <div className='absolute space-y-[16px] top-full right-0 hidden group-hover:block min-w-[200px] bg-white shadow-md min-h-[200px] border p-2'>
                    <Link to='/user/profile' className='cursor-pointer hover:text-primary transition-all'>Hồ sơ</Link>
                    <Link to='/user/order' className='cursor-pointer hover:text-primary transition-all'>Danh sách phòng đã đặt</Link>
                    <div className='cursor-pointer hover:text-primary transition-all' onClick={() => dispatch(logout())}>Đăng Xuất</div>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavLink to="/login" className="btn btn-primary">
                  <Button title="Đăng nhập" />
                </NavLink>
                <NavLink to="/register">
                  <Button title="Đăng kí" />
                </NavLink>
                {
                  tenantToken ? (
                    <div className='relative group'>
                      <Avatar
                        route={"/tenant/post-room"}
                        userInfo={tenantInfo} />
                      <div className='absolute space-y-[16px] top-full right-0 hidden group-hover:block min-w-[200px] bg-white shadow-md min-h-[200px] border p-2'>
                        <Link to='/tenant/profile' className='cursor-pointer hover:text-primary transition-all'>Hồ sơ</Link>
                        <Link to='/tenant/post-room' className='cursor-pointer hover:text-primary transition-all'>Đăng tin</Link>
                        <Link to='/tenant/rooms' className='cursor-pointer hover:text-primary transition-all'>Danh sách phòng đã đăng</Link>
                        <div className='cursor-pointer hover:text-primary transition-all' onClick={() => dispatch(logoutTenant())}>Đăng Xuất</div>
                      </div>
                    </div>
                  ) : (

                    <NavLink to="/tenant/login">
                      <Button title="Đăng tin mới" />
                    </NavLink>
                  )
                }
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header