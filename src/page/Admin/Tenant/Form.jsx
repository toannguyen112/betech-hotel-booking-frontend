import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import FieldSet from '../../../components/Fields/FieldSet';
import Authenticated from '../../../Layout/Authenticated'
import { useDispatch } from 'react-redux';
import { updateAdminTenant } from '../../../app/features/admin/adminAction';

function Form() {

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [tenant, setTenant] = useState({})
  const [errors, setErrors] = useState({});

  const [rules, setRules] = useState({
    "username": "required",
  },);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/tenant/show/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const tenant = res.data
        setForm({ ...tenant });
      })
    window.scrollTo(0, 0);

  }, []);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    status: "ACTIVE",
    username: "",
    password: "",
  });

  const update = async () => {
    if (!form.username || !form.password) {
      return alert("Yêu cầu nhập đủ username và password")
    }

    await dispatch(updateAdminTenant(form));
    alert("Update Success");
    navigate({
      pathname: '/admin/tenant',
    });
  }


  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Người thuê / Chỉnh sửa /{id}
      </div>
      <div className='grid grid-cols-12 gap-[32px]'>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(username) => setForm({ ...form, username })}
            modelValue={form.username}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Username",
              placeholder: "Username",
              isRequired: true,
              fieldName: "username",
              rules: rules,
              errors: errors,
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(password) => setForm({ ...form, password })}
            modelValue={form.password}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Password",
              type: "password",
              placeholder: "password",
              isRequired: true,
              fieldName: "password",
              rules: rules,
              errors: errors,
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={() => update()}>
          Cập nhật
        </button>
      </div>
    </Authenticated>
  )
}

export default Form