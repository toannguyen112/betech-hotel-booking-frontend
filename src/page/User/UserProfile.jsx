import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FieldSet from '../../components/Fields/FieldSet';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../app/features/user/userActions';
import Button from '../../components/Button';

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
        await dispatch(updateUser(form));
        alert("Cập nhật thành công")
    }

    return (
        <React.Fragment>
            <Header />
            {
                userInfo ? (
                    <section className='container '>
                        <div className='text-center text-[40px] py-[64px] font-bold'>User Profile</div>
                        <section className='grid grid-cols-12 gap-[32px] pb-[32px]'>
                            <div className='col-span-6'>
                                <FieldSet
                                    modelValue={form.username}
                                    updateModelValue={(username) => setForm({ ...form, username })}
                                    field={{
                                        className: "w-full border rounded-md border-black p-[12px]",
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
                                        className: "w-full border rounded-md border-black p-[12px]",
                                        title: "Mật khẩu",
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
                                        title: "Phone",
                                        type: "number",
                                        placeholder: "Phone",
                                    }}
                                />
                            </div>

                        </section>

                    </section>
                ) : null
            }
            <div className="container pb-[20px]">
                <div className='w-full' onClick={() => update()}>
                    <Button title="Submit" />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default UserProfile
