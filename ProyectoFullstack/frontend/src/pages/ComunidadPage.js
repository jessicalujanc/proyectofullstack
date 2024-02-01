import React, { useState, useEffect } from "react"; //useState es un hook de React que permite manipular de forma sencilla el estado
import axios from "axios"; //Librería que facilita las peticiones HTTP
import ComunidadItem from "../componentes/comunidad/ComunidadItem";
import "./ComunidadPage.css";

const ComunidadPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [comunidad, setComunidad] = useState([]);

  useEffect(() => { //Seteamos el valor de la variable loading a true
    const cargarComentarios = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/comunidad`);
        setComunidad(response.data);
      } catch (error) {
        console.error("Error al cargar los comentarios:", error);
      }
      setLoading(false);
    };

    cargarComentarios();
  }, []);

  return (
    <section className="comentarios">
      <h2>Comunidad Sinergia</h2>
      {loading ? (
        <p>Cargando...</p> //El usuario verá el texto cargando hasta que llegue el comentario
      ) : (
        comunidad.map((item) => (
          <ComunidadItem
            key={item.id}
            nombre={item.nombre}
            comentario={item.comentario}
            imagen={item.imagen}
          />
        ))
      )}
    </section>
  );
};

export default ComunidadPage;
