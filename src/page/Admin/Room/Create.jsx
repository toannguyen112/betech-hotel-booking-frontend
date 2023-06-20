import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormSubmit from '../../../components/FormSubmit';
import Authenticated from '../../../Layout/Authenticated'

function Create() {
  const [form, setForm] = useState({
    name: "",
    category_id: "",
    city_id: "",
    exp_date: "",
    info: "",
    address: "",
    size: "",
    price: "",
    star: "",
    number_room: "",
  });

  return (
    <Authenticated>
      <FormSubmit form={form}>
        <div className='grid grid-cols-12 gap-[32px]'>
          <div className='col-span-6'>
            <FieldSet
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
              updateModelValue={(category_id) => setForm({ ...form, category_id })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Thể loại",
                placeholder: "Thể loại",
              }}
            />
          </div>
          <div className='col-span-6'>
            <FieldSet
              updateModelValue={(city_id) => setForm({ ...form, city_id })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Thành phố",
                placeholder: "Thành",
              }}
            />
          </div>
          <div className='col-span-6'>
            <FieldSet
              updateModelValue={(exp_date) => setForm({ ...form, exp_date })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Ngày hết hạn",
                type: "date",
                placeholder: "Ngày hết hạn",
              }}
            />
          </div>
          <div className='col-span-6'>
            <FieldSet
              updateModelValue={(number_room) => setForm({ ...form, number_room })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Số phòng",
                type: "number",
                placeholder: "Số phòng",
              }}
            />
          </div>
          <div className='col-span-6'>
            <FieldSet
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
              updateModelValue={(price) => setForm({ ...form, price })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Giá",
                type: "number",
                placeholder: "price",
              }}
            />
          </div>
          <div className='col-span-6'>
            <FieldSet
              updateModelValue={(info) => setForm({ ...form, info })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Số điện thoại",
                type: "number",
                placeholder: "Số điện thoại",
              }}
            />
          </div>
        </div>
      </FormSubmit>
    </Authenticated>
  )
}

export default Create