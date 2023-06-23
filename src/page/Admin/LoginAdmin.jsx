import React, { useEffect, useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import ToastMessage from "../../components/ToastMessage";
import { validateForm } from "../../validator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../app/features/admin/adminAction";
import { Button } from 'primereact/button';

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
    username: "",
    password: "",
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
          <div className="space-y-[16px]">
            <div>
              <InputText
                className="w-full"
                placeholder="Tài khoản"
                value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
            </div>
            <div>
              <Password
                placeholder="Mật khẩu"
                value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} toggleMask />
            </div>
            <div className="flex justify-center">
              <div onClick={() => handleLogin()}>
                <Button label="Đăng nhập" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AdminLogin;
