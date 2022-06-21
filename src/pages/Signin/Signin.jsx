import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./Signin.css";

function Signin() {
  const [values, handleForm] = useForm();

  let navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    console.log(values);
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
          <input 
            name="username"
            value={values.username || ""}
            onChange={handleForm}
            placeholder="Correo Electronico" 
            type="text" />
          <input 
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