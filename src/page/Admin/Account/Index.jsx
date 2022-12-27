import React from 'react'
import { useSelector } from 'react-redux';
import Table from '../../../components/Table';
import Authenticated from '../../../Layout/Authenticated'

function Index() {
  const admins = useSelector((state) => state.admin.admins);
  return (
    <Authenticated>
      <section>
        <div className="font-bold text-[32px] py-[32px]">
          Account
        </div>
        <Table
          route="/admin/account"
          isCreate={true}
          data={admins}
          columns={[
            { field: "id", label: "id" },
            { field: "name", label: "name" },
            { field: "username", label: "username" },
            { field: "createdAt", label: "createdAt" },
            { field: "updatedAt", label: "updatedAt" },
          ]} />
      </section>
    </Authenticated>
  )
}

export default Index