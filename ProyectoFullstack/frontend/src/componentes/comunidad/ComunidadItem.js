import React from "react";

const ComunidadItem = (props) => {
  const { nombre, comentario, imagen, body } = props;

  return (
    <div className="comunidad">
      <h4>{nombre}</h4>
      <h5>{comentario}</h5>
      <img src={imagen} alt="imagen"></img>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      <hr  />
    </div>
  );
}

export default ComunidadItem;
