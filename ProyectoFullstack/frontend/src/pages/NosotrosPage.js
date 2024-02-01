import React from "react";
import "./NosotrosPage.css";
import img7 from "./img7.jpg"

const NosotrosPage = (props) => {
  return (
    <main>
      <div className="App-container">
        <div className="Nosotros">
          <h2>Nuestra historia</h2>
          <br></br>
          <p>
            Nuestra marca, además de ser natural, es vegana, libre de derivados
            del petróleo y de maltrato animal. Realizamos nuestro aporte al
            cuidado del planeta utilizando bolsas de tela, papel kraft y La gran
            mayoría de nuestros envases de vidrio. Ofrecemos productos
            naturales, pensados en cada detalle, con pasión y algo de magia:
            Desde su envase, sus principios activos que le dan su funcionalidad,
            Sus aceites esenciales que gracias a la aromaterapia son
            seleccionados para mejorar nuestro bienestar además de lo
            superficial, El arte de sus etiquetas y el mensaje que queremos que
            le llegue a quien lo adquiera. El cuidado facial es muy importante
            para nuestra piel, el cuidado de ella nos va a brindar una piel más
            saludable y radiante. Proponemos elegir la cosmética natural porque
            tiene mucho más cantidad de principios activos. El hecho de usar
            productos naturales hace que la piel lo tolere mejor Y que absorba
            todo lo que colocamos porque la piel esta más permeable y activa y
            los principios naturales no obstuyen los poros. Su aplicación es
            100% beneficiosa. La idea es presentar un producto diferente, que
            más allá de lo superficial, sea algo integral. Por eso son muy
            importante nuestros principios y valores. El aire y el agua se estan
            contaminando, los bosques estan desapareciendo. El planeta es
            nuestra casa y hay que cuidarlo. Podemos hacerlo con actos pequeños,
            del día a día, que sumamos un gran aporte. Por eso, cada uno de
            estos productos son tan importantes para nosotros y creados con
            tanto amor, para aportar y Devolver algo de todos los recursos que
            nos da el planeta. Llevate un pedacito de naturaleza para mimarte
            diariamente y tener ese momento para vos.
          </p>
        </div>
        <div className="img7">
          <img src={img7} alt="img7" width="500px" height="570px" />
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
