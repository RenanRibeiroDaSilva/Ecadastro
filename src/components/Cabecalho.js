import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { MdHomeWork, MdAppRegistration } from "react-icons/md";
import { VscPersonAdd } from "react-icons/vsc" 


const Cabecalho = () => {
    return(
    <Navbar bg="success" variant="dark">
        <Navbar.Brand> <h1><b><VscPersonAdd/> E-cadastro</b></h1></Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#/"><h4><MdHomeWork/> Início </h4></Nav.Link>
            <Nav.Link href="#/cadastrosFuncionarios"><h4><MdAppRegistration/> Cadastro de Funcionarios </h4></Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default Cabecalho