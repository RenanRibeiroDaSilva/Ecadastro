import React from "react";

import { Navbar } from "react-bootstrap";

import { VscPersonAdd } from "react-icons/vsc" 

const Rodape = () => {
    return(
        <Navbar bg="dark" fixed="bottom">
            <Navbar.Brand className="text-light">
                <h5><VscPersonAdd/> E-cadastro &copy; - Todos os direito reservados.</h5>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Rodape