import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from "react-redux";
import {populateTasks} from "./store/slice/taskSlice";

import {Container} from "react-bootstrap";
import './App.scss';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem("tasks") || "") {
            const tasks = JSON.parse(localStorage.getItem("tasks") || "");
            dispatch(populateTasks(tasks))
        }
    }, [])

  return (
    <main>
      <section className="header-section"></section>
      <Container fluid={"md"}>
        <section className="menu-section"></section>
        <section className="tasks-section"></section>
        <section className="footer-section"></section>
      </Container>
    </main>
  );
}

export default App;
