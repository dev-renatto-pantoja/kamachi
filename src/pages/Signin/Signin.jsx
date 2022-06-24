import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../auth/auth";
import useForm from "../../hooks/useForm";
import "./Signin.css";

function Signin() {
  const [values, handleForm] = useForm();
  const [accountIsOk, setAccountIsOK] = useState(true);
  const { user, setUser } = useContext(AppContext);

  let navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authLogin(values);
      if (!res.ok) {
        setAccountIsOK(false);
      } else {
        setAccountIsOK(true);
        setUser({
          ...user,
          autenticado: true,
          uid: res.uid,
          nombre:res.nombre
        });
        localStorage.setItem('token', res.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        navigate("/");
      }

    } catch (error) {
      console.log(error);
    }
  }

  const onRegister = (e) => {
    e.preventDefault();
    navigate("/registro")
  }
  return (
    <main className="login">
      <div className="loginTitle">
        <h1>Kamachi</h1>
      </div>
      <form className="loginForm">

        <div className="loginInput">
          {!accountIsOk && <p className="errorMsg">Usuario o contraseña incorrecto</p>}
          <input
            className="emailLoginInput"
            name="email"
            value={values.email || ""}
            onChange={handleForm}
            placeholder="Correo Electronico"
            type="text" />
          <input
            className="passwordLoginInput"
            name="password"
            value={values.password || ""}
            onChange={handleForm}
            placeholder="********" type="password" />
        </div>
        <a className="forgotPassword" href="#login">Olvidaste tu contraseña?</a>
        <div className="buttonSection">
          <button
            className="loginButton"
            onClick={onLogin}>Iniciar Sesión</button>
          <button
            className="registerButton"
            onClick={onRegister}>Registrar</button>
        </div>
      </form>
    </main>
  )
}

export default Signin;