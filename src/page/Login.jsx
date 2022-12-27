import React, { useEffect, useState } from "react";
import FieldSet from "../components/Fields/FieldSet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { validateForm } from "../validator";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../app/features/user/userActions";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {

  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const [rules, setRules] = useState({
    "username": "required",
    "password": "required|password",
  });

  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Login";
    if (userInfo) {
      navigate('/user/profile')
    }
  }, [navigate, userInfo])

  const [form, setForm] = useState({
    username: "user",
    password: "user",
  });

  const handleLogin = () => {
    const errors = validateForm(form, rules);
    setErrors(errors)
    if (Object.keys(errors).length > 0) {
      if (errors.username === '' && errors.password === '') return alert("Please input your username and password");

      if (errors.username === '') return alert("Please input your username");

      if (errors.password === '') return alert("Please input your password");
    }

    dispatch(userLogin(form));
  }

  return (
    <React.Fragment>
      <Header />
      <section className="container py-[32px] flex justify-center">
        <div className="space-y-[16px]">
          <FieldSet
            modelValue={form.username}
            updateModelValue={(username) => setForm({ ...form, username })}
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
            <div onClick={() => handleLogin()}>
              <Button title={"Đăng nhập"} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Login;
