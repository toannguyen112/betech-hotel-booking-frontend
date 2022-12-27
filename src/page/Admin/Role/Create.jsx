import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'
import { Checkbox, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createRole } from '../../../app/features/role/roleAction';
import { useNavigate } from 'react-router-dom';
function Create() {

  const permissions = useSelector((state) => state.permission.permissions);

  const [form, setForm] = useState({
    role_name: "",
    permissions: []
  });

  const dispatch = useDispatch();

  const onChange = (checkedValues) => {
    setForm({
      ...form, permissions: checkedValues
    })
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await dispatch(createRole(form));
    navigate({
      pathname: '/admin/role',
    });
  }

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Role Create
      </div>
      <div className='grid grid-cols-12 gap-[32px]'>
        <div className='col-span-6'>
          <FieldSet
            modelValue={form.role_name}
            updateModelValue={(role_name) => setForm({ ...form, role_name })}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Tên vai trò",
              placeholder: "Tên",
            }}
          />
        </div>
        <div className='col-span-6'>
          <div className='text-[20px] mb-2 font-medium'>Danh sách quyền</div>
          <Checkbox.Group
            defaultValue={form.permissions}
            className='space-y-2'
            style={{
              width: '100%',
            }}
            onChange={onChange}
          >
            {permissions.map((item, index) => {
              return (
                <Row key={index}>
                  <Checkbox value={item.id}>{item.perm_name}</Checkbox>
                </Row>
              )
            })}
          </Checkbox.Group>
        </div>
        <div className="col-span-full">
          <button className="btn btn-secondary" onClick={() => handleSubmit()}>
            Tạo mới
          </button>
        </div>
      </div>
    </Authenticated >
  )
}

export default Create