import React, {useState} from "react";
import {Tasks} from "../lib/Tasks";
import {Col, Row} from "react-bootstrap";
import Validate from "../services/utils/Validate";
import {useDispatch} from "react-redux";
import {addTask, saveData} from "../services/slice/taskSlice";

const TasksForm = ({setModal}: { setModal: any }) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errors, setErrors] = useState([])
    const [input, setInput]: [input: Tasks | any, setInput: any] = useState({
        title: "",
        description: "",
        completed: false,
        archived: false,
        important: false,
        repeat: "unique",
        tags: []
    })

    function handleSubmit(e: any) {
        e.preventDefault();
        const validation = new Validate(input)
        if (validation.valid) {
            dispatch(addTask(input))
            dispatch(saveData())
            setModal()
        } else {
            // @ts-ignore
            setErrors(validation.errors)
        }
    }

    function handleChange({target}: any) {
        switch (target.type) {
            case "text":
            case "select-one":
                setInput({...input, [target.name]: target.value})
                break
            case "checkbox":
                setInput({...input, [target.name]: target.checked})
                break
            default:
                console.error("Problem identifying input type");
                break
        }
    }

    return <div className={"task-modal"}>
        <form onSubmit={handleSubmit}>
            <Row className={"justify-content-between"}>
                <Col xs={12}>
                    <label htmlFor="title">
                        Title:
                        <input name={"title"} type="text" onChange={handleChange} value={input.title}/>
                    </label>
                </Col>

                <Col xs={12}>
                    <label htmlFor="description" className={"form-label"}>
                        Description:
                        <input name={"description"} type="textarea" onChange={handleChange} value={input.description}/>
                    </label>
                </Col>

                <Col xs={12} md={5}>
                    <label htmlFor="important" className={"form-label"}>
                        <div className={"align"}>
                            Important:
                            <input name={"important"} type="checkbox" onChange={handleChange}
                                   checked={input.important}/>
                        </div>
                    </label>
                </Col>

                <Col xs={12} md={7}>
                    <label htmlFor="repeat" className={"form-label"}>
                        <div className="align">
                            Repeat:
                            <select name="repeat" onChange={handleChange} id="repeat">
                                <option value="unique">Unique</option>
                                <option value="weekday">Weekday</option>
                                <option value="weekend">Weekend</option>
                                <option value="always">Always</option>
                            </select>
                        </div>
                    </label>
                </Col>
                <Col xs={12} className={"submit-container"}>
                    <input type="submit"/>
                </Col>
            </Row>
        </form>
    </div>
}

export default TasksForm;