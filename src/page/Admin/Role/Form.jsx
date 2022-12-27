import React, { useEffect, useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'
import { Checkbox, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateRole } from '../../../app/features/role/roleAction';
import { useLocation, useNavigate } from 'react-router-dom';

function Form() {

    const permissions = useSelector((state) => state.permission.permissions);
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        role_id: id,
        role_name: "",
        permissions: []
    });

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(
            `{process.env.REACT_APP_BACKEND_URL}/role/show/${id}`)
            .then((res) => res.json())
            .then((res) => {
                const role = res
                const permissions = role.permissions.map((item) => item.id);
                setForm({
                    ...form,
                    role_name: role.role_name,
                    permissions: permissions
                });
                setLoading(false);
            })
        window.scrollTo(0, 0);

    }, []);

    const dispatch = useDispatch();

    const onChange = (checkedValues) => {
        setForm({
            ...form, permissions: checkedValues
        })
    };

    const handleSubmit = async () => {
        await dispatch(updateRole(form));
        alert("update success");
        navigate({
            pathname: '/admin/role',
        });
    }

    return (
        <Authenticated>
            <div className="font-bold text-[32px] py-[32px]">
                Role Form {id}
            </div>
            {
                loading ? (
                    <div>loading...</div>
                ) : (
                    <div className='grid grid-cols-12 gap-[32px]'>
                        <div className='col-span-6'>
                            <FieldSet
                                modelValue={form.role_name}
                                updateModelValue={(role_name) => setForm({ ...form, role_name })}
                                field={{
                                    className: "w-full border-[0.5px] border-black rounded-md  p-[12px] ",
                                    title: "Tên vai trò",
                                    placeholder: "Tên",
                                }}
                            />
                        </div>
                        <div className='col-span-6'>
                            <div className='text-[20px] mb-2 font-medium'>Danh sách quyền</div>
                            <Checkbox.Group
                                defaultValue={form.permissions}
                                className='space-y-2'
                                style={{
                                    width: '100%',
                                }}
                                onChange={onChange}
                            >
                                {permissions.map((item, index) => {
                                    return (
                                        <Row key={index}>
                                            <Checkbox value={item.id}>{item.perm_name}</Checkbox>
                                        </Row>
                                    )
                                })}
                            </Checkbox.Group>
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-secondary" onClick={() => handleSubmit()}>
                                Update
                            </button>
                        </div>
                    </div>
                )
            }
        </Authenticated >
    )
}

export default Form