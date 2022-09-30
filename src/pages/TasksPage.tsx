import React, {useEffect, useState} from "react";
import Tasks from "../components/Tasks";
import {Button, Col, Image, Row} from "react-bootstrap";
import Cat from "../assets/nothing_here.png";
import TasksForm from "../components/TasksForm";
import {useSelector} from "react-redux";

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false)
    const selector = useSelector((state: any) => state.task.filter);

    useEffect(() => {
        setTasks(selector)
    }, [tasks, modal, selector])

    return <>
        {
            tasks.length ? (
                tasks.map((item, index) => (
                    <div key={item + index}>
                        <Tasks tasks={item}/>
                    </div>
                ))
            ) : (
                <div className={"no-content"}>
                    <h3>No content</h3>
                    <p>No Content to display, click on the top right or the button bellow to create a task. </p>
                    <Row className={"justify-content-center"}>
                        <Col xs={12} md={6} lg={4}>
                            <Button variant={"primary"} onClick={() => setModal(!modal)}>Create Task</Button>
                            {
                                modal ? (
                                    <TasksForm setModal={setModal}/>
                                ) : null
                            }
                        </Col>
                    </Row>
                    <Row className={"justify-content-center"}>
                        <Col xs={12} md={6}>
                            <Image className="image" rounded fluid src={Cat}/>
                        </Col>
                    </Row>
                </div>
            )
        }
    </>
}

export default TasksPage;