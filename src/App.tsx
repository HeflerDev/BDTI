import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {populateTasks} from "./services/slice/taskSlice";
import TasksPage from "./pages/TasksPage";

import {Col, Container, Row} from "react-bootstrap";
import './App.scss';
import Sidebar from "./components/Sidebar";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        /*
            Marquei as mensagens com "T0DO" para marcar os comentários e facilitar a navegação.
            TODO: Utilizo o localStorage para popular o redux e ter o "material" para manipular.
         */
        if (localStorage.getItem("tasks") || "") {
            dispatch(populateTasks())
        }
    }, [dispatch])

    return (
        <Row className={"app"}>
            <Col xs={1} md={4} className={"side-container"}>
                <Sidebar/>
            </Col>
            <Col>
                <Container fluid={"md"}>
                    <section className="menu-section"></section>
                    <TasksPage/>
                    <section className="footer-section"></section>
                </Container>
            </Col>
        </Row>
    );
}

export default App;