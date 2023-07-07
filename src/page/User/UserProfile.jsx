import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FieldSet from '../../components/Fields/FieldSet';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../app/features/user/userActions';

function UserProfile() {
    const { userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: userInfo?.username,
        password: userInfo?.password,
        address: userInfo?.address,
        phone: userInfo?.phone,
    });

    const update = async () => {
        if (form.phone.length > 11) {
            return alert("Số điện thoại không được quá 11 số")
        }
        await dispatch(updateUser(form));
        alert("Cập nhật thành công")
    }

    return (
        <React.Fragment>
            <Header />
            {
                userInfo ? (
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
                                        title: "Số điện thoại",
                                        type: "number",
                                        placeholder: "Số điện thoại",
                                    }}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={() => update()}>
                                Gửi
                            </button>
                        </section>
                    </section>
                ) : null
            }
            <Footer />
        </React.Fragment>
    )
}

export default UserProfile
