import { useState } from 'react';

const useForm = () => {
  const [state, setState] = useState({});

  const handleForm = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  return [state, handleForm];
}

export default useForm;