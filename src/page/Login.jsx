import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { validateForm } from "../validator";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../app/features/user/userActions";
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";

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
    username: "",
    password: "",
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
          <div className="text-center text-[20px]" > Đăng nhập </div>
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
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Login;
