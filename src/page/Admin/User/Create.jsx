import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'

function Create() {
  const [form, setForm] = useState({
    name: "",
    address: "",
  });

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Người thuê / Tạo mới
      </div>
      <div className='grid grid-cols-12 gap-[32px]'>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(name) => setForm({ ...form, name })}
            modelValue={form.name}
            field={{
              disable: true,
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Tên",
              placeholder: "Tên",
            }}
          />
        </div>
        <div className='col-span-6'>
          <FieldSet
            updateModelValue={(address) => setForm({ ...form, address })}
            modelValue={form.address}
            field={{
              disable: true,
              className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
              title: "Địa chỉ",
              placeholder: "Địa chỉ",
            }}
          />
        </div>
      </div>
    </Authenticated>
  )
}

export default Create