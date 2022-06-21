import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/registro" element={<Register />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
