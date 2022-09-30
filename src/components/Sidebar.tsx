import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Btn from "./Btn";
import TasksForm from "./TasksForm";

const Sidebar = () => {
    const [modal, setModal] = useState(false)
    const handleClick = () => {
        setModal(!modal)
    }

    return (
        <Row className={"main-nav"}>
            <Col xs={"12"}>
                <Btn text={"Criar nova Tarefa"} onClick={handleClick}></Btn>
            </Col>
            {
                modal ? (<TasksForm setModal={setModal}/>) : null
            }
        </Row>
    )
}

export default Sidebar