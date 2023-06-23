import React from 'react'
import Table from '../../../components/Table';
import Authenticated from '../../../Layout/Authenticated'
import { deleteRole, getListRole } from '../../../app/features/role/roleAction';
import { useDispatch, useSelector } from 'react-redux';

function Role() {

    const roles = useSelector((state) => state.role.roles);

    const dispatch = useDispatch();

    const deleteRecord = async (id) => {
        await dispatch(deleteRole(id));
        await dispatch(getListRole());
    }

    return (
        <Authenticated>
            <div className="font-bold text-[32px] py-[32px]">
                Role
            </div>
            <Table
                deleteRecord={deleteRecord}
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