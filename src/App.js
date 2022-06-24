import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import Register from './pages/Register/Register';
import Signin from "./pages/Signin/Signin";
import { useContext, useEffect } from 'react';
import { authRevalidateToken } from './auth/auth';
import InitialPage from './pages/InitialPage/InitialPage';

function App() {

  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === "undefined" || !token) {
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
            nombre: res.nombre
          })
        }
        data();

      } catch (error) {
        console.log(error);
      }

    }

  }, [])


  return (
    <div>
      <Router>
        <Routes>
          {
            !user.autenticado
              ? (
                <>
                  <Route path="/login" element={<Signin />} />
                  <Route exact path="/*" element={<Navigate to="/login" />} />
                </>
              )
              : (
                <>
                  <Route path="/" element={<InitialPage />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </>
              )
          }
          <Route exact path="/registro" element={<Register />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
