import React, { useEffect, useState } from "react";
import FieldSet from "../components/Fields/FieldSet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../validator";
import { alertMessage } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { tenantLogin } from "../app/features/tenant/tenantActions";

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
    username: "tenant",
    password: "tenant",
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
          <FieldSet
            modelValue={form.username}
            updateModelValue={(username) => setForm({ ...form, username })}
            field={{
              title: "Tài khoản",
              label: 'Tài khoản',
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
            <button className="btn btn-primary w-full" onClick={() => login()}>Đăng nhập</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TenantLoginPage;
