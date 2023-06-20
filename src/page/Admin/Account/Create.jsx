import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'
import { useDispatch, useSelector } from 'react-redux';
import { createAdmin } from '../../../app/features/admin/adminAction';

function Create() {
  const roles = useSelector((state) => state.role.roles.map((item) => {
    return {
      id: item.id,
      name: item.role_name
    }
  }));

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    role_id: 1
  });

  const handleSubmit = () => {
    dispatch(createAdmin(form));
  };

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Tạo mới tài khoản
      </div>
      <div className='grid grid-cols-12 gap-[32px]'>
        <div className='col-span-6'>
          <FieldSet
            modelValue={form.name}
            updateModelValue={(name) => setForm({ ...form, name })}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Tên",
              placeholder: "Tên",
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            modelValue={form.username}
            updateModelValue={(username) => setForm({ ...form, username })}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Tài khoản",
              placeholder: "Tài khoản",
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            modelValue={form.password}
            updateModelValue={(password) => setForm({ ...form, password })}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Mật khẩu",
              placeholder: "Mật khẩu",
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            modelValue={form.role_id}
            updateModelValue={(role_id) => setForm({ ...form, role_id })}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] h-full",
              typeValue: "id",
              title: "Vai trò",
              type: "select_single",
              options: roles,
            }}
          />
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