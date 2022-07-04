import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleMenu = (e) => {
    setIsOpen(true);
  }

  const handleClose = (e) => {
    setIsOpen(false);
  }

  const handleExit = () => {
    setUser({
      autenticado: false
    });
    localStorage.setItem('token', 'undefined');
    navigate("/");
  }
  return (
    <>
      <header className="initialHeader">
        <div className="headerContainer">
          <h2 onClick={() => { navigate("/") }} className="headerLogo">Kamachi</h2>
          <div className="menuToggleContainer">
            <i
              className=
              {isOpen
                ? "toggleHidden menuToggle fas fa-bars"
                : "menuToggle fas fa-bars"
              }
              onClick={handleMenu}></i>
            <i
              className=
              {isOpen
                ? "menuClose fa-solid fa-xmark"
                : "closeHidden menuClose fa-solid fa-xmark"
              }
              onClick={handleClose}></i>
          </div>
          <div
            className={
              isOpen
                ? "menuDisplay menu"
                : "menu"
            }>
            <ul>
              <li onClick={() => { navigate("/Perfil") }}>Mi Perfil</li>
              {<li className={user.rol === "vendedor" ? "" : "hidden"} onClick={() => { navigate("/Publicaciones") }}>Mis publicaciones</li>}
              <li id="logout" onClick={handleExit}><i className="fa-solid fa-right-from-bracket"></i> Salir</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;