import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { distritos } from '../../distritos';
import useForm from '../../hooks/useForm';
import "./Register.css";


function Register() {
  const [dataIsOk, setDataIsOK] = useState(true);
  const [distritosDisponibles, setDistritosDisponibles] = useState([]);
  const [values, handleForm] = useForm();
  const { authRegister } = useAuth();
  let navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      console.log(values);
      const res = await authRegister(values);
      if (!res.ok) {
        setDataIsOK(false);
        console.log(res);
      } else {
        setDataIsOK(true);
        navigate("/login")
      }

    } catch (error) {
      console.log(error);
    }


  }
  useEffect(() => {
    /*Traer distritos de base de datos*/
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
            {!dataIsOk && <p className="errorMsg">Complete todos los campos</p>}
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
              name="email"
              value={values.email || ""}
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
              value={values.password || ""}
              onChange={handleForm}
              placeholder="Contraseña"
              type="password"
            />
            <div className="rolLoginInput">
              <p>Ofreceras algun servicio?:</p>
              <select
                name="rol"
                value={values.rol}
                onChange={handleForm}>
                <option value="">Seleccionar rol</option>
                <option value="vendedor">Si</option>
                <option value="cliente">No</option>
              </select>
            </div>
            <select
              name="distrito"
              className="selectDistrict"
              value={values.distrito || ""}
              onChange={handleForm}
            >
              <option value="">Seleccionar distrito</option>
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