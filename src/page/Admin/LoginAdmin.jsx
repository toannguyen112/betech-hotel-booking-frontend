import React, { useEffect, useState } from "react";
import FieldSet from "../../components/Fields/FieldSet";
import ToastMessage from "../../components/ToastMessage";
import { validateForm } from "../../validator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../app/features/admin/adminAction";

function AdminLogin() {

  const [errors, setErrors] = useState({});
  const [rules, setRules] = useState({
    "username": "required",
    "password": "required|password",
  },);

  const { adminInfo } = useSelector((state) => state.admin);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "admin",
    password: "admin",
  });

  useEffect(() => {
    document.title = "Admin Login";
    if (adminInfo) {
      navigate('/admin/dashboard')
    }
  }, [navigate, adminInfo])

  const handleLogin = () => {
    const errors = validateForm(form, rules);
    setErrors(errors)
    if (Object.keys(errors).length > 0) {
      if (errors.username === '' && errors.password === '') return alert("Please input your username and password");

      if (errors.username === '') return alert("Please input your username");

      if (errors.password === '') return alert("Please input your password");
    }
    dispatch(adminLogin(form));
  }

  return (
    <React.Fragment>
      <ToastMessage />
      <section className="container py-[32px] flex justify-center h-[100vh] items-center">
        <div className="space-y-[16px] shadow-sm rounded-[10px] p-12 border-[0.5px]">
          <div className="text-center font-bold text-[28px] mb-[60px]">Đăng nhập</div>
          <FieldSet
            updateModelValue={(username) => setForm({ ...form, username })}
            modelValue={form.username}
            field={{
              title: "Tài khoản",
              label: 'Tài khoản',
              type: "text",
              fieldName: "username",
              placeholder: "tài khoản",
              isRequired: true,
              rules: rules,
              errors: errors,
            }}
          />
          <FieldSet
            modelValue={form.password}
            updateModelValue={(password) => setForm({ ...form, password })}
            field={{
              title: "Mật khẩu",
              label: 'Mật khẩu',
              fieldName: "password",
              type: "password",
              placeholder: "Mật khẩu",
              isRequired: true,
              rules: rules,
              errors: errors,

            }}
          />
          <div className="flex justify-center">
            <button className="btn btn-primary w-full" onClick={() => handleLogin()} >Đăng nhập</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AdminLogin;
