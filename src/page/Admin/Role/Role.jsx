import React from 'react'
import { useSelector } from 'react-redux';
import Table from '../../../components/Table';
import Authenticated from '../../../Layout/Authenticated'

function Role() {

    const roles = useSelector((state) => state.role.roles);

    return (
        <Authenticated>
            <div className="font-bold text-[32px] py-[32px]">
                Role
            </div>
            <Table
                isCreate={true}
                route="/admin/role"
                data={roles}
                columns={[
                    { field: "id", label: "id" },
                    { field: "role_name", label: "role_name" },
                    { field: "createdAt", label: "createdAt" },
                    { field: "updatedAt", label: "updatedAt" },
                ]} />

        </Authenticated>
    )
}

export default Role