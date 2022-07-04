import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import useServices from "../../hooks/useServices";
import "./NewPublication.css";

function NewPublication() {
  const { getServices, createService } = useServices();
  const [newServiceButton, setNewServiceButton] = useState(false);
  const [newService, setNewService] = useState({ sector: "", nombre: "" });
  const [services, setServices] = useState([]);
  const [inputData, setInputData] = useState({});

  const handleNewService = () => {
    setNewServiceButton(true);
  }
  const handleCancelNewService = () => {
    setNewServiceButton(false);
  }

  const loadServices = async () => {
    let res = await getServices()
    setServices(res.servicios);
  }

  const handleCreateNewService = async () => {
    if (newService.sector === "" || !newService.nombre === "") return;
    await createService(newService);
    await loadServices();
    setNewServiceButton(false);
    setNewService({
      sector: "",
      nombre: ""
    });
  }
  useEffect(() => {
    loadServices();
  }, [])

  return (
    <>
      <Header />
      <main className="mainNewPublication">
        <h2>Nueva Publicación </h2>
        <p>Estas a un paso de conectarte con cientos de potenciales clientes.</p>
        <div className="inputDataPublicationContainer">
          <div
            className={
              newServiceButton
                ? "newServiceShadow dataServiceContainer"
                : "dataServiceContainer"
            }>
            <span>Servicio:</span>
            <select
              value={inputData.servicio}
              className={
                newServiceButton
                  ? "hidden"
                  : "selectService"
              }
              type="text"
              onChange={(e) => {
                setInputData({
                  ...inputData,
                  servicio: e.target.value
                })
              }}
            >
              <option value="">Seleccione un Servicio</option>
              {services.map((service, key) => {
                return <option key={key} value={service.nombre}>{service.nombre}</option>
              })}
            </select>
            <div>
              <p
                className={
                  newServiceButton
                    ? "hidden newServiceButton"
                    : "newServiceButton"
                }
                onClick={handleNewService}
              >Agregar Servicio</p>
            </div>
            <div
              className={
                newServiceButton
                  ? "newServiceDataInput"
                  : "hidden newServiceDataInput"
              }>
              <span>Sector (ejm: TI): </span>
              <input
                value={newService.sector}
                onChange={(e) => {
                  setNewService({
                    ...newService,
                    sector: e.target.value
                  })
                }}
                type="text"
                placeholder="ingrese el sector" />
              <span>Nombre (ejm: Consultoria TI):</span>
              <input
                value={newService.nombre}
                onChange={(e) => {
                  setNewService({
                    ...newService,
                    nombre: e.target.value
                  })
                }}
                type="text"
                placeholder="Ingrese el nombre" />
            </div>
            <div className={newServiceButton ? "newServiceButtons" : "hidden newServiceButtons"}>
              <p
                className="cancelNewServiceButton"
                onClick={handleCancelNewService}
              >Cancelar</p>
              <p
                className="newServiceButton"
                onClick={handleCreateNewService}
              >Guardar Servicio</p>
            </div>
          </div>
          <span>Titulo de la publicación:</span>
          <input type="text" placeholder="Ingresa el titulo de tu publicacion" />
          <span>Costo:</span>
          <input type="text" placeholder="Ingresa el costo de tu servicio" />
          <span>Agregar imagen: </span>
          <input type="file" />
        </div>
        <p className="publishButton">Publicar</p>
      </main>
    </>
  )
}

export default NewPublication;