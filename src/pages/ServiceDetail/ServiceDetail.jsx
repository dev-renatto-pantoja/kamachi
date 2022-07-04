import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ServiceDetail.css";

function ServiceDetail() {

  let { id } = useParams();

  useEffect(() => {
    //Descargar datos de la publicación
    //Recibe data de la publicación
    /*
      {
        usuario:{
          uid:id,
          nombre:string
        },
        servicio:{ 
          nombre:string,
          sector:string
        },
        fecha_publicacion: Date,
        costo: Number
      }
    */
  }, [])

  const data = {
    usuario: {
      uid: 123456,
      nombre: "pepito"
    },
    servicio: {
      nombre: "Gasfiteria Pepito",
      sector: "gasfiteria"
    },
    fecha_publication: new Date().toLocaleDateString(),
    costo: 1000,
    description:"Gasfiteria pepito es una gasfiteria creada hace 90 años. Profesionales comprometidos"
  }
  return (
    <>
      <main>
        <h2>{data.servicio.nombre}</h2>
        <p>{data.description}</p>
        <p>Publicado el: {data.fecha_publication}</p>
        <p>Precio del servicio: {data.costo} por avería</p>
      </main>
    </>
  )
}

export default ServiceDetail;