import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTenant } from '../../../app/features/tenant/tenantActions';
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'

function Create() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = async () => {
    if (!form.username || !form.password) {
      return alert("Yêu cầu nhập đủ username và password")
    }

    await dispatch(createTenant(form));
    alert("Create Success");
    navigate({
      pathname: '/admin/tenant',
    });
  }

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Người thuê / Tạo mới
      </div>
      <div className='grid grid-cols-12 gap-[32px]'>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(username) => setForm({ ...form, username })}
            modelValue={form.username}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Tài khoản",
              placeholder: "Tài khoản",
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(password) => setForm({ ...form, password })}
            modelValue={form.password}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Mật khẩu",
              placeholder: "Mật khẩu",
            }}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => submit()}>
            Gứi
          </button>
        </div>
      </div>
    </Authenticated>
  )
}

export default Create