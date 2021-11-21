import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

const Inicio = () => {
    return (
        <Container fluid className="p-0">
            <Cabecalho />
            <Row>
                <Col xs={12} lg={6}>
                    <h1><strong>Seja bem vindo ao E-cadastro!</strong></h1>
                    <p><h4>Faça o cadastro de novos funcionários no menu acima!</h4></p>
                </Col>
            </Row>
            <Rodape />
        </Container>
    )
}

export default Inicio