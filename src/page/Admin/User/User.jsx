import React, { useEffect, useState } from 'react'
import UserApi from '../../../api/services/UserApi';
import Table from '../../../components/Table';
import Authenticated from '../../../Layout/Authenticated';

function User() {
  const [users, setTenant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new UserApi().getUsers().then((res) => {
      const users = res.data;
      setTenant(users);
      setIsLoading(false);
    });

  }, []);

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        User
      </div>
      {!isLoading ? (
        <Table
          route="/admin/user"
          data={users}
          columns={[
            { field: "id", label: "id" },
            { field: "username", label: "ussername" },
            { field: "status", label: "status" },
            { field: "phone", label: "phone" },
            { field: "createdAt", label: "createdAt" },
            { field: "updatedAt", label: "updatedAt" },
          ]} />
      ) : <div>Loading...</div>}

    </Authenticated>
  )
}

export default User