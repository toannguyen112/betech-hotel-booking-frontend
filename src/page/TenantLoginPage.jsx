import React, { useEffect, useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../validator";
import { alertMessage } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { tenantLogin } from "../app/features/tenant/tenantActions";
import { Button } from 'primereact/button';

function TenantLoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { tenantInfo } = useSelector((state) => state.tenant);
  const [errors, setErrors] = useState({});

  const [rules, setRules] = useState({
    "username": "required",
    "password": "required|password",
  },);

  useEffect(() => {
    if (tenantInfo) {
      navigate('/tenant/post-room')
    }
  }, [navigate, tenantInfo])

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const login = () => {
    const errors = validateForm(form, rules);
    setErrors(errors)

    if (Object.keys(errors).length > 0) {
      if (errors.username === '' && errors.password === '') return alertMessage("Please input your username and password", "error");

      if (errors.username === '') return alertMessage("Please input your username", "error");

      if (errors.password === '') return alertMessage("Please input your password", "error");
    }

    dispatch(tenantLogin(form));
  }
  return (
    <div>
      <Header />
      <section className="container py-[32px] flex justify-center">
        <div className="space-y-[16px]">
          <div className="text-center text-[20px]" > Đăng Nhập</div>
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
            <div onClick={() => login()}>
              <Button label="Đăng nhập" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TenantLoginPage;
