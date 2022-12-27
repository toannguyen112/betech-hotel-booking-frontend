import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import FieldSet from '../../../components/Fields/FieldSet';
import Authenticated from '../../../Layout/Authenticated'

function Form() {

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({});

  const [rules, setRules] = useState({
    "username": "required",
  },);

  const [form, setForm] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user/show/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const user = res.data
        setForm(user)
      })
    window.scrollTo(0, 0);

  }, []);

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        User/edit/{id}
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
              disable: true,
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
              disable: true,
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(address) => setForm({ ...form, address })}
            modelValue={form.address}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Địa chỉ",
              placeholder: "address",
              isRequired: true,
              fieldName: "address",
              rules: rules,
              errors: errors,
              disable: true,
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(phone) => setForm({ ...form, phone })}
            modelValue={form.phone}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md p-[12px] ",
              title: "Phone",
              type: "number",
              placeholder: "phone",
              disable: true,
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(status) => setForm({ ...form, status })}
            modelValue={form.status}
            field={{
              className: "w-full border-[0.5px] border-black rounded-md p-[12px] ",
              typeValue: "string",
              title: "Trạng thái",
              type: "select_single",
              disable: true,
              options: [{
                name: "Active",
                value: "ACTIVE"
              },
              {
                name: "Inactive",
                value: "INACTIVE"
              }],
            }}
          />
        </div>
      </div>
    </Authenticated>
  )
}

export default Form