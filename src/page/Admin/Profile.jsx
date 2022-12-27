import React, { useEffect, useState } from 'react'
import FieldSet from '../../components/Fields/FieldSet'
import Authenticated from '../../Layout/Authenticated'
import { useDispatch, useSelector } from 'react-redux';
import { updateAdmin } from '../../app/features/admin/adminAction';

function Profile() {

  const { adminInfo } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    setForm({
      name: adminInfo?.name,
      username: adminInfo?.username,
      password: adminInfo?.password,
      address: adminInfo?.address,
      phone: adminInfo?.phone,
    })
    console.log(adminInfo);
  }, [adminInfo])

  const [form, setForm] = useState({
    name: "",
    password: "",
    address: "",
    phone: "",
  });

  const update = () => {
    dispatch(updateAdmin(form));
    alert("Cập nhật thành công")
  }

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Profile
      </div>
      {
        adminInfo ? (
          <section className='grid grid-cols-12 gap-[32px]'>
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
                modelValue={form.password}
                updateModelValue={(password) => setForm({ ...form, password })}
                field={{
                  className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                  title: "Password",
                  type: "password",
                  placeholder: "password",
                }}
              />
            </div>
            <div className='col-span-6'>
              <FieldSet
                modelValue={form.address}
                updateModelValue={(address) => setForm({ ...form, address })}
                field={{
                  className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                  title: "Địa chỉ",
                  placeholder: "Địa chỉ",
                }}
              />
            </div>
            <div className='col-span-6'>
              <FieldSet
                modelValue={form.phone}
                updateModelValue={(phone) => setForm({ ...form, phone })}
                field={{
                  className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                  title: "Phone",
                  type: "number",
                  placeholder: "Phone",
                }}
              />
            </div>
            <div className="col-span-full">
              <button className="btn btn-primary" onClick={() => update()}>
                Cập nhật
              </button>
            </div>
          </section>
        ) : <div>Loading...</div>
      }
    </Authenticated >
  )
}

export default Profile