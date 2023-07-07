import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FieldSet from '../../components/Fields/FieldSet';
import { useDispatch, useSelector } from 'react-redux';
import { updateTenant } from '../../app/features/tenant/tenantActions';

function TenantProfile() {
    const { tenantInfo } = useSelector((state) => state.tenant);

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: tenantInfo?.username,
        password: tenantInfo?.password,
        address: tenantInfo?.address,
        phone: tenantInfo?.phone,
    });

    const update = async () => {
        await dispatch(updateTenant(form));
        alert("Cập nhật thành công")
    }

    return (
        <React.Fragment>
            <Header />
            <section className='container '>
                <div className='text-center text-[40px] py-[64px] font-bold'>Hồ sơ</div>
                <section className='grid grid-cols-12 gap-[32px] pb-[32px]'>
                    <div className='col-span-6'>
                        <FieldSet
                            modelValue={form.username}
                            updateModelValue={(username) => setForm({ ...form, username })}
                            field={{
                                className: "w-full border rounded-md border-black p-[12px]",
                                title: "Tài khoản",
                                disable: true,
                                placeholder: "Tài khoản",
                            }}
                        />
                    </div>
                    <div className='col-span-6'>
                        <FieldSet
                            modelValue={form.password}
                            updateModelValue={(password) => setForm({ ...form, password })}
                            field={{
                                className: "w-full border rounded-md border-black p-[12px]",
                                title: "Mật khẩu",
                                disable: true,
                                type: "password",
                                placeholder: "Mật khẩu",
                            }}
                        />
                    </div>
                    <div className='col-span-6'>
                        <FieldSet
                            modelValue={form.address}
                            updateModelValue={(address) => setForm({ ...form, address })}
                            field={{
                                className: "w-full border rounded-md border-black p-[12px]",
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
                                className: "w-full border rounded-md border-black p-[12px]",
                                title: "Số diện thoại",
                                type: "number",
                                placeholder: "Số diện thoại",
                            }}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={() => update()}>
                        Gửi
                    </button>
                </section>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default TenantProfile
