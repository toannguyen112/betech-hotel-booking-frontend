
import React, { useEffect, useState } from 'react'
import FieldSet from '../Fields/FieldSet';
import Avatar from '../../components/Avatar';
import Bell from '../Bell';
import Setting from '../Setting';
import SearchIcon from '../SearchIcon';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminDetails, getListAdmin } from '../../app/features/admin/adminAction';
import { getListRole } from '../../app/features/role/roleAction';
import { getListPermission } from '../../app/features/permission/permissionAction';

function HeaderAdmin() {
  const { adminInfo, adminToken } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (adminToken) {

      const fetchData = async () => {
        await dispatch(getAdminDetails());
        await dispatch(getListRole());
        await dispatch(getListAdmin())
        await dispatch(getListPermission())
      };

      fetchData()
        // make sure to catch any error
        .catch(console.error);;

    }
  }, [adminToken, dispatch])

  return (
    <header className='text-[#4B5563] border-b-2 py-[1rem] border-[#F6F5FA]'>
      <div className='container flex justify-between'>
        <div className='flex items-center space-x-[20px bg-[#F6F5FA] py-[2px] px-[1rem] text-[#4B5563] text-[14px] rounded-[8px] min-w-[25rem] focus:outline-none'>
          <SearchIcon />
          <FieldSet
            updateModelValue={(search) => setSearch(search)}
            field={{
              className: 'bg-[#F6F5FA] py-[9px] px-[1rem] text-[#4B5563] text-[14px] rounded-[8px] min-w-[25rem] focus:outline-none',
              placeholder: "Tìm kiếm",
            }}
          />
        </div>
        <div className='flex items-center space-x-[24px]'>
          <Link to="/admin/setting"><Setting /></Link>
          <Link to="/admin/notification"><Bell /></Link>
          <Avatar
            route={"/admin/profile"}
            userInfo={adminInfo} />
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin