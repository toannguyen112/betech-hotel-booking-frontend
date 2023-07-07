import React, { useEffect, useState } from 'react'
import UserApi from '../../../api/services/UserApi';
import Table from '../../../components/Table';
import Authenticated from '../../../Layout/Authenticated';
import { deleteUser } from '../../../app/features/user/userActions';
import { useDispatch, useSelector } from 'react-redux';

function User() {
  const [users, setTenant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    new UserApi().getUsers().then((res) => {
      const users = res.data;
      setTenant(users);
      setIsLoading(false);
    });
  }

  const dispatch = useDispatch();

  const deleteRecord = async (id) => {
    dispatch(deleteUser(id)).then((res) => {
      fetchData();
    });
  }

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Người dùng
      </div>
      {!isLoading ? (
        <Table
          deleteRecord={deleteRecord}
          route="/admin/user"
          data={users}
          columns={[
            { field: "id", label: "id" },
            { field: "username", label: "Tên" },
            { field: "phone", label: "phone" },
            { field: "createdAt", label: "Ngày tạo" },
            { field: "updatedAt", label: "Ngày cập nhật" },
          ]} />
      ) : <div>Loading...</div>}

    </Authenticated>
  )
}

export default User