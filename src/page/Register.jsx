import React, { useEffect, useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { validateForm } from "../validator";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../app/features/user/userActions";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';

function Register() {

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )

  const [errors, setErrors] = useState({});
  const [rules, setRules] = useState({
    "username": "required",
    "password": "required|password",
  },);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Login";
    if (success) navigate('/login')
    if (userInfo) navigate('/user/profile')
  }, [navigate, userInfo, success])

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const register = () => {
    const errors = validateForm(form, rules);
    setErrors(errors)
    if (Object.keys(errors).length > 0) {
      if (errors.username === '' && errors.password === '') return alert("Please input your username and password");

      if (errors.username === '') return alert("Please input your username",);

      if (errors.password === '') return alert("Please input your password",);
    }

    dispatch(registerUser(form));
  }

  return (
    <div>
      <Header />
      <section className="container py-[32px] flex justify-center">
        <div className="space-y-[16px]">
          <div className="text-center text-[20px]" > Đăng Kí</div>
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
            <div onClick={() => register()}>
              <Button label="Đăng Kí" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Register;
