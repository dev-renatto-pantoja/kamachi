import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceItem.css";

function ServiceItem({ data }) {

  let navigate = useNavigate();

  const handleClick = () => {
    console.log(data.title)
    navigate(`/servicio/${data.title}`)
  }

  //Por el momento se coloco descripcion como campo a mostrar en los detalles
  //Se recomienda que se coloque distrito y calificación en lugar de descripcion
  return (
    <>
      <div onClick={handleClick} className="serviceItemcontainer">
        <div className="itemImageContainer">
          <img src={data.imgSrc} alt="ServiceImage" />
        </div>
        <div className="itemDetailsContainer">
          <h2 className="itemTitle">{data.title}</h2>
          <p className="itemDescription">{data.description}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceItem;