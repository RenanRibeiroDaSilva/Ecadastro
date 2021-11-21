import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Table, Form, Toast, Modal } from "react-bootstrap";

import { BsPersonPlusFill } from "react-icons/bs"
import { FaClipboardList } from "react-icons/fa"
import { GrFormEdit } from "react-icons/gr"
import { MdOutlineDeleteOutline, MdSaveAlt } from "react-icons/md"

import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { BACKEND } from "../constants";

const CadastrosFuncionarios = () => {
    const valorInicial = { nome: '', idade: '', genero: '', profissao: '', status: true }
    const [funcionario, setFuncionario] = useState(valorInicial)
    const [funcionarios, setFuncionarios] = useState([])
    const [carregandoFuncionarios, setCarregandoFuncionarios] = useState(false)
    const [erros, setErros] = useState({})
    const [aviso, setAviso] = useState('')
    const [salvandoFuncionarios, setSalvandoFuncionarios] = useState(false)
    const [confirmaExclusao, setConfirmaExclusao] = useState(false)

    const { nome, idade, genero, profissao, status } = funcionario

    async function obterFuncionarios() {
        setCarregandoFuncionarios(true)
        let url = `${BACKEND}/funcionarios`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                setFuncionarios(data)
            })
            .catch(function (error) {
                console.error('Erro ao obeter o cadastro dos funcionarios: ' + error.message)
            })
        setCarregandoFuncionarios(false)
    }

    useEffect(() => {
        obterFuncionarios()
        document.title = 'Cadastro de Funcionarios'
    }, [])

    const validaErrosFuncionario = () => {
        const novosErros = {}
        //Validação do campo Nome:
        if (!nome || nome === '') novosErros.nome = 'O campo nome não pode estar vazio!'
        else if (nome.length > 100) novosErros.nome = 'O nome informado é muito grande!'
        else if (nome.length < 3) novosErros.nome = 'O nome informado é muito curto!'

        //Validação do campo Idade:
        if (!idade || idade === '') novosErros.idade = 'O campo idade não pode estar vazio!'
        else if (idade.length > 3) novosErros.idade = 'O campo idade não pode ser maior que 999!'
        else if(idade < 1) novosErros.idade = 'Idade não poder ser menor que 1'

        //Validação do campo Genero:
        if (!genero || genero === '') novosErros.genero = 'O campo genero não pode estar vazio!'

        //Validação do campo Profissão:
        if (!profissao || profissao === '') novosErros.profissao = 'O campo profissao não pode estar vazio!'
        else if (profissao.length > 100) novosErros.profissao = 'A profissao informada é muito grande!'
        else if (profissao.length < 3) novosErros.profissao = 'A profissao informada é muito curta!'

        return novosErros
    }

    async function salvarFuncionarios(event) {
        event.preventDefault() //Evita que a página seja recarregada
        const novosErros = validaErrosFuncionario()
        if (Object.keys(novosErros).length > 0) {
            //Sim. Temos erros!
            setErros(novosErros)
        } else {
            setSalvandoFuncionarios(true)
            const metodo = funcionario.hasOwnProperty('_id') ? 'PUT' : 'POST'
            funcionario.status = (funcionario.status === true || funcionario.status === 'ativo') ? 'ativo' : 'inativo'
            let url = `${BACKEND}/funcionarios`
            await fetch(url, {
                method: metodo,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(funcionario)
            }).then(response => response.json())
            .then(data => {
                (data._id || data.message) ? setAviso('Registro salvo com sucesso') : setAviso('')
                setFuncionario(valorInicial) // Lipar  a tela com os valores iniciais
                obterFuncionarios() // Atualiza a tela com os registros atualizados
            }).catch(function (error){
                console.error(`Erro ao salvar o campo: ${error.message}`)  
            })
            setSalvandoFuncionarios(false)
        }
    }

    async function excluirFuncionario(){
        let url = `${BACKEND}/funcionarios/${funcionario._id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            data.message ? setAviso(data.message) : setAviso('')
            obterFuncionarios()
        })
        .catch(function (error) {
            console.error(`Erro ao excluir o funcionario: ${error.message}`)
        })
    }

    const alteraDadosFuncionario = e => {
        setFuncionario({ ...funcionario, [e.target.name]: e.target.value })
        setErros({})
    }

    return (
        <Container fluid className="p-0" >
            <Cabecalho />
            <Row>
                <Col xs={12} lg={4}>
                    {/*Formulario do cadastro dos funcionarios*/}
                    <h4>&nbsp; <BsPersonPlusFill /> Cadastro dos Funcionários</h4>
                    <Form method="post">
                        <Form.Group controlId="nome">
                            <Form.Label>Nome do funcionário</Form.Label>
                            <Form.Control
                                name="nome"
                                placeholder="Ex: João"
                                value={nome}
                                onChange={alteraDadosFuncionario}
                                isInvalid={!!erros.nome} />
                            <Form.Control.Feedback type='invalid'>
                                {erros.nome}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="idade">
                            <Form.Label>Idade do funcionário</Form.Label>
                            <Form.Control
                                name="idade"
                                type="number"
                                placeholder="Ex: 22"
                                value={idade}
                                onChange={alteraDadosFuncionario}
                                isInvalid={!!erros.idade} />
                            <Form.Control.Feedback type='invalid'>
                                {erros.idade}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="genero">
                            <Form.Label>Gênero do funcionário</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                name="genero"
                                value={genero}
                                onChange={alteraDadosFuncionario}
                                isInvalid={!!erros.idade}>
                                    <option>Selecione aqui</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="profissao">
                            <Form.Label>Profissão do funcionário</Form.Label>
                            <Form.Control
                                name="profissao"
                                placeholder="Ex: Motorista"
                                value={profissao}
                                onChange={alteraDadosFuncionario}
                                isInvalid={!!erros.profissao} />
                            <Form.Control.Feedback type='invalid'>
                                {erros.profissao}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Check
                                type="checkbox"
                                label="Ativo"
                                name="status"
                                onChange={(e) => setFuncionario({ ...funcionario, [e.target.name]: e.target.checked })}
                                checked={status} />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={(e) => salvarFuncionarios(e)} title="Cadastrar">
                            {salvandoFuncionarios
                                ? <><Spinner animation="border" size="sm"/> Aguarde...</>
                                : <> <MdSaveAlt /> Cadastrar novo funcionário</>
                            }
                        </Button>
                    </Form>
                </Col>
                <Col xs={12} lg={8}>
                    {/*Listagem do cadastro dos funcionarios*/}
                    <h4>&nbsp; <FaClipboardList /> Listagem dos Funcionários</h4>
                    {carregandoFuncionarios && <>
                        <Button variant="success" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Carregando...
                        </Button>
                    </>}
                    <Table striped bordered>
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Genero</th>
                                <th>Profissão</th>
                                <th>Status</th>
                                <th>Inclusão</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {funcionarios.map(item => (
                                <tr key={item._id}>
                                    <td>{item.nome}</td>
                                    <td>{item.idade}</td>
                                    <td>{item.genero}</td>
                                    <td>{item.profissao}</td>
                                    <td>{item.status}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <Button variant="success" title="Editar os registos">
                                            <GrFormEdit />
                                        </Button>
                                        &nbsp;
                                        <Button variant="danger" title="Deletar o registro"
                                        onClick={() => {
                                            setConfirmaExclusao(true)
                                            setFuncionario(item)
                                        }}
                                        >
                                            <MdOutlineDeleteOutline />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            <tr className="bg-secondary text-light">
                                <td colSpan="6">Total de registos</td>
                                <td>{funcionarios.length}</td>
                            </tr>
                        </tbody>

                    </Table>
                </Col>
            </Row>
            <Toast
                onClose={() => setAviso('')}
                show={aviso.length > 0}
                animation={false}
                delay={4000}
                autohide
                className="bg-warning"
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}>
                <Toast.Header closeButton={false}>Aviso</Toast.Header>
                <Toast.Body>{aviso}</Toast.Body>
            </Toast>
            <Modal animation={false} show={confirmaExclusao}
            onHide={()=> setConfirmaExclusao(false)}>
                <Modal.Header>
                    <Modal.Title>Confirmação da Exclusão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Confirma a exclusão do funcionário selecionado?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setConfirmaExclusao(!confirmaExclusao)}>
                    ❌Cancelar
                    </Button>
                    <Button variant="success"
                    onClick={() => {
                        excluirFuncionario()
                        setConfirmaExclusao(!confirmaExclusao)
                    }}>
                    ✅Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Rodape />
        </Container>
    )
}

export default CadastrosFuncionarios