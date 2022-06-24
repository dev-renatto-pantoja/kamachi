
export const authLogin = async (body) => {
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

export const authRegister = async (body) => {
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

export const authRevalidateToken = async () => {
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

