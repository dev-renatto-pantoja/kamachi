import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { distritos } from '../../distritos';
import useForm from '../../hooks/useForm';
import "./Register.css";


function Register() {

  const [distritosDisponibles, setDistritosDisponibles] = useState([]);
  const [values, handleForm] = useForm();

  let navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();
    console.log(values);
    navigate("/login")
  }
  useEffect(() => {

    setDistritosDisponibles(distritos);
  }, []);

  return (
    <>
      <main className='register'>
        <div className='registerTitle'>
          <h1>Kamachi</h1>
          <p>Registrate para que puedas formar parte de nosotros o encontrar el servicio que deseas</p>
        </div>
        <form className="registerForm">
          <div className="registerInput">
            <div className="divInputName">
              <input 
                name="nombre" 
                value={values.nombre || ""} 
                onChange={handleForm} 
                placeholder="Nombre" 
                type="text"
              />
              <input 
                name="apellido" 
                value={values.apellido || ""} 
                onChange={handleForm} 
                placeholder="Apellido" 
                type="text" 
              />
            </div>
            <input 
              name="correo" 
              value={values.correo || ""} 
              onChange={handleForm} 
              placeholder="Correo" 
              type="text" 
            />
            <input 
              name="telefono" 
              value={values.telefono || ""} 
              onChange={handleForm} 
              placeholder="Telefono" 
              type="text" 
            />
            <input 
              name="password" 
              values={values.password || ""} 
              onChange={handleForm} 
              placeholder="Contraseña" 
              type="password" 
            />
            <select 
              name="distrito" 
              className="selectDistrict" 
              value={values.distrito || ""} 
              onChange={handleForm} 
            >
              {distritos.length ? (
                distritosDisponibles.map((distritoDisponible, key) =>
                  <option 
                    key={key} 
                    value={distritoDisponible}
                  >{distritoDisponible}</option>)) : ""
              }
            </select>
          </div>
          <div className="buttonSection">
            <button
              className="CreateAccountButton"
              onClick={onRegister}>Crear Cuenta</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Register;