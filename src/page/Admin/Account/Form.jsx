import React, { useEffect, useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateAccountAdmin } from '../../../app/features/admin/adminAction';
import { Alert, Spin } from 'antd';
function Form() {
    const roles = useSelector((state) => state.role.roles.map((item) => {
        return {
            id: item.id,
            name: item.role_name
        }
    }));

    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        id: id,
        name: "",
        username: "",
        password: "",
        role_id: 1
    });

    useEffect(() => {
        setLoading(true);
        fetch(
            `${process.env.REACT_APP_BACKEND_URL}/admin/show/${id}`)
            .then((res) => res.json())
            .then((res) => {
                const admin = res
                console.log(admin);
                setForm({
                    ...form,
                    name: admin.name,
                    username: admin.username,
                    password: admin.password,
                    role_id: admin.role_id
                });
                setLoading(false);
            })
        window.scrollTo(0, 0);

    }, []);

    const handleSubmit = () => {
        dispatch(updateAccountAdmin(form));
    };

    return (
        <Authenticated>
            <div className="font-bold text-[32px] py-[32px]">
                Account Form
            </div>
            <Spin spinning={loading} delay={500}>
                <div className='grid grid-cols-12 gap-[32px]'>
                    <div className='col-span-6'>
                        <FieldSet
                            modelValue={form.name}
                            updateModelValue={(name) => setForm({ ...form, name })}
                            field={{
                                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                                title: "Name",
                                placeholder: "Name",
                            }}
                        />
                    </div>
                    <div className='col-span-6'>
                        <FieldSet
                            modelValue={form.username}
                            updateModelValue={(username) => setForm({ ...form, username })}
                            field={{
                                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                                title: "Username",
                                placeholder: "Username",
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
                                placeholder: "Password",
                            }}
                        />
                    </div>
                    <div className='col-span-6'>
                        <FieldSet
                            modelValue={form.role_id}
                            updateModelValue={(role_id) => setForm({ ...form, role_id })}
                            field={{
                                className: "w-full border-[0.5px] border-black rounded-md  p-[12px] h-full",
                                typeValue: "id",
                                title: "Role",
                                type: "select_single",
                                options: roles,
                            }}
                        />
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-secondary" onClick={() => handleSubmit()}>
                            Cập nhật
                        </button>
                    </div>
                </div>
            </Spin>
        </Authenticated >
    )
}

export default Form