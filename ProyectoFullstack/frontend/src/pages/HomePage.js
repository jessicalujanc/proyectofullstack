import React from 'react';
import './HomePage.css';
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import img6 from "./img6.jpg";
import img5 from "./img5.jpg";


const HomePage = (props) => {
    return ( <><main>
        <div className='App-container'>
            <div className='Bienvenidos'>
                <h2>Bienvenidos</h2>
                <br></br>
                <h3>Propósito</h3>
                <p>Construir juntos un nuevo concepto de belleza y de cuidado personal, conectándonos con nosotros mismos y el planeta.</p>
                <h3>Visión</h3>
                <p>Posicionarnos como una marca líder de cosmética vegana, natural y libre de maltrato animal a nivel mundial, revolucionando el concepto de cuidado personal.</p>
                <h3>Misión</h3>
                <p>Producir algo lindo en nuestros clientes a traves de productos de cosmética consciente y una atención personalizada.</p>
                <h3>Valores</h3>
                <p>AUTOCONOCERNOS.
                    Para evolucionar y preservarnos es necesario conocernos a nosotros mismos.
                    CUIDARNOS.
                    Proponemos el cuidado de las personas y su relación consigo mismas.
                    Buscamos un intercambio justo mientras cuidamos el planeta.
                    CONECTARNOS.
                    Invitamos a las personas a vivir una experiencia diferente, compartiendo con una comunidad que piensa y siente como vos, sin estereotipos ni prejucios.
                    APASIONARNOS.
                    Es nuestro máximo valor. Somos personas comprometidas. Nos dedicamos a asesorarte y brindarte exactamente lo que necesitas.
                    Ponemos pasión en cada detalle, haciendo lo que sentimos y viviéndolo hasta las últimas consecuencias.
                    TRASCENDER.
                    Dejar huella a traves de lo que hacemos.
                    Nuestros valores nos conectan con la forma en la que haremos las cosas...</p>
            </div>
        </div>
    </main><main className="container">
            <div className="App-container">
                <div className="Novedades">
                    <h2>Nuevos lanzamientos</h2>
                    <br></br>
                </div>
                <Row className="cards">
                    <Col sm="6">
                        <Card className="Card" body>
                            <CardTitle>
                                <h2>Loción ultrahidratante con AH</h2>
                            </CardTitle>
                            <div className="img5">
                                <img src={img5} alt="img5" width="300px" height="350px" />
                            </div>
                            <br></br>
                            <CardText>
                                Es hidratante, rejuvenecedora, ayuda a regular el brillo y la
                                producciòn de sebo, protege de los daños de agentes externos.
                            </CardText>
                            <Button className="boton">Ver más</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className="Card" body>
                            <CardTitle>
                                <h2>Crema liviana con Vit C</h2>
                            </CardTitle>
                            <div className="img6">
                                <img src={img6} alt="img6" width="300px" height="350px" />
                            </div>
                            <br></br>
                            <CardText>
                                Hidrata y nutre la piel con rápida absorción. Rica en Vitamina
                                C, aporta nutrientes esenciales que favorecen a la vitalidad de
                                la piel.
                            </CardText>
                            <Button className="boton">Ver más</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </main></>
    )
}

export default HomePage;