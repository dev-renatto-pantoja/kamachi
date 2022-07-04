import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useAuth = () => {
  const [state, setState] = useState("");
  const { setUser } = useContext(AppContext);

  const authLogin = async (body) => {
    const response = await fetch("https://kamachi-backend.herokuapp.com/api/auth/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();

    return data;

  }

  const authRegister = async (body) => {
    const response = await fetch("https://kamachi-backend.herokuapp.com/api/auth/registro", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();

    return data;
  }

  const authRevalidateToken = async () => {
    const response = await fetch("https://kamachi-backend.herokuapp.com/api/auth/renew", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      }
    });

    const data = await response.json();
    return data;

  }

  const checkToken = async () => {
    const token = localStorage.getItem('token');
    if (token === "undefined" || !token || token === "") {
      setUser({ autenticado: false });
      console.log("usuario no logueado");
    } else {
      try {
        const data = async () => {
          const res = await authRevalidateToken();
          localStorage.setItem('token', res.token);
          localStorage.setItem('token-init-date', new Date().getTime());
          setUser({
            autenticado: true,
            uid: res.uid,
            nombre: res.nombre,
            rol: res.rol
          })
        }
        data();

      } catch (error) {
        console.log(error);
      }
    }
  }

  return { state, authLogin, authRegister, authRevalidateToken, checkToken };
}

export default useAuth;