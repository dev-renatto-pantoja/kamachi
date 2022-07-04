import { useState } from 'react';

function useServices() {

  const [state, setState] = useState();

  const getServices = async () => {
    const response = await fetch("https://kamachi-backend.herokuapp.com/api/services/listarServicios", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      }
    });
    const data = await response.json();
    return data;
  }

  const createService = async (body) => {
    const response = await fetch("https://kamachi-backend.herokuapp.com/api/services/crearServicio", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      },
      body:JSON.stringify(body)
    });
    const data = await response.json();
    return data;

  }

  return { state, getServices, createService }
}


export default useServices;