import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FieldSet from "../components/Fields/FieldSet";

function ContactPage() {

  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: ''
  });


  return (
    <div>
      <Header />
      <Slider />
      <section className="container py-[64px]">
        <div className="text-center font-bold text-[32px] mb-[60px]">
          Liên hệ
        </div>
        <div className="grid grid-cols-12 gap-[32px]">
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
          <div className="col-span-6">
            <FieldSet
              updateModelValue={(phone) => setForm({ ...form, phone })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Phone",
                placeholder: "Phone",
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
          <div className="col-span-6">
            <FieldSet
              updateModelValue={(note) => setForm({ ...form, note })}
              field={{
                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                title: "Ghi chú",
                placeholder: "Ghi chú",
              }}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-[32px]">
          Submit
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
