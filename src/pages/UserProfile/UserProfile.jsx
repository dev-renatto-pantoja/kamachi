import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { distritos } from '../../distritos';
import useForm from '../../hooks/useForm';
import "./UserProfile.css";

const aux = {
  nombre: "Renatto",
  apellido: "Pantoja",
  telefono: "9878654321",
  distrito: "San Juan de Lurigancho"
}

function UserProfile() {
  const [isEditable, setIsEditable] = useState(false);

  const [distritosDisponibles, setDistritosDisponibles] = useState([]);
  const [values, handleForm] = useForm();

  const handleEditable = () => {
    setIsEditable(true);
  }

  const handleCancel = () => {
    setIsEditable(false);
  }

  const handleSave = () => {
    /*
      Actualizar datos con la api 
    */
    setIsEditable(false);
  }

  useEffect(() => {
    /*Traer distritos de base de datos*/
    setDistritosDisponibles(distritos);
  }, []);
  return (
    <>
      <Header />
      <main className="mainProfile">
        <h2 className="profileTitle">Mi Perfil</h2>

        <div className='userPhoto'>
          <img src="" alt="userPhoto" />
        </div>
        <div className='userData'>
          <div className="userDataInput">
            <span>Nombre:</span>
            <input type="text" value={aux.nombre} disabled={!isEditable} />
          </div>
          <div className="userDataInput">
            <span>Apellido:</span>
            <input type="text" value={aux.apellido} disabled={!isEditable} />
          </div>
          <div className="userDataInput">
            <span>Telefono:</span>
            <input type="text" value={aux.telefono} disabled={!isEditable} />
          </div>
          <div className="userDataInput">
            <span>Distrito:</span>
            <input type="text" className={isEditable ? "hidden" : ""} value={aux.distrito} disabled={true} />

            <select
              name="distrito"
              className={isEditable ? "selectDistrict" : "hidden selectDistrict"}
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
        </div>
        <div
          onClick={handleEditable}
          className={isEditable
            ? "editHidden editData"
            : "editData"
          }>
          Editar Datos
        </div>
        <div
          className={isEditable
            ? "editButtons"
            : "saveHidden editButtons"
          }>
          <p onClick={handleCancel} className="cancelData">Cancelar</p>
          <p onClick={handleSave} className="saveData">Guardar</p>
        </div>
      </main>
    </>
  )
}

export default UserProfile;