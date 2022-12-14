import React, {useEffect} from "react";
import {Tasks} from "../lib/Tasks";
import {Col, Row} from "react-bootstrap";
import {Important} from "../assets/Icons";
import {useDispatch} from "react-redux";
import {completeTask, populateTasks, saveData} from "../services/slice/taskSlice";

const Task = ({tasks}: { tasks: Tasks }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(completeTask(tasks))
        dispatch(saveData())
        dispatch(populateTasks())
    }

    return (
        <Row className="task-container">
            <div className="repeat">{tasks.repeat.toUpperCase()}</div>
            <Col xs={3} className={"check-container"} onClick={handleClick}>
                <div className={tasks.completed ? "completed" : "incomplete"}></div>
            </Col>
            <Col xs={9} className={"text-container"}>
                <Row>
                    <Col xs={10} className={"text-container"}>
                        <div className="title">{tasks.title}</div>
                    </Col>
                    <Col xs={2} className={"important-container"}>
                        {
                            tasks.important ? (
                                <div className="important"><Important size={"2rem"}/></div>
                            ) : null
                        }
                    </Col>
                </Row>
                <p className="description">{tasks.description}</p>
            </Col>
            <Col xs={6}>
                <div className="dropdown"></div>
            </Col>
            <div className="tag-list">{tasks.tags}</div>
        </Row>
    )

}
export default Task;