import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {populateTasks} from "./services/slice/taskSlice";

import TasksPage from "./pages/TasksPage";

import {Container} from "react-bootstrap";
import './App.scss';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem("tasks") || "") {
            const tasks = JSON.parse(localStorage.getItem("tasks") || "");
            dispatch(populateTasks(tasks))
        }
    }, [dispatch])

  return (
    <main>
      <section className="header-section"></section>
      <Container fluid={"md"}>
        <section className="menu-section"></section>
        <TasksPage />
        <section className="footer-section"></section>
      </Container>
    </main>
  );
}

export default App;