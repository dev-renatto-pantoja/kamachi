import { useState } from 'react';

function usePublication() {
  const [state, setState] = useState();

  const getPublicationByName = async (name) => {

    const response = await fetch("https://kamachi-backend.herokuapp.com/api/publications/listarPublicacionesPorServicio", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ nombre: name })
    });
    const data = await response.json();

    return data;

  }
  const getPublications = async () => {
    const response = await fetch("https://kamachi-backend.herokuapp.com/api/publications/listarPublicaciones", {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem('token')
      }
    });
    const data = await response.json();
    return data;
  }

  return {state,getPublicationByName,getPublications}
}

export default usePublication;