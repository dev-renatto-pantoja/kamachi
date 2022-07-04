import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import useAuth from './hooks/useAuth';
import Register from './pages/Register/Register';
import Signin from "./pages/Signin/Signin";
import { useContext, useEffect } from 'react';
import InitialPage from './pages/InitialPage/InitialPage';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import UserProfile from './pages/UserProfile/UserProfile';
import NewPublication from './pages/NewPublication/NewPublication';

function App() {

  const { user } = useContext(AppContext);
  const { checkToken } = useAuth();

  useEffect(() => {
    checkToken();
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
                  <Route path="/login" element={<Navigate to="/" />} />
                  <Route exact path="/servicio/:id" element={<ServiceDetail />} />
                  <Route exact path="/perfil" element={<UserProfile />} />
                  <Route exact path="/publicar" element={<NewPublication />} />
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
