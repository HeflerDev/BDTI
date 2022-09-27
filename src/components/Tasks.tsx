import React from "react";
import {Tasks} from "../lib/Tasks";

const Task = ({tasks}:{tasks: Tasks}) => (
    <div className="task-container">
        <div className="repeat">{tasks.repeat}</div>
        <div className="completed">{tasks.completed}</div>
        <div className="title">{tasks.title}</div>
        <div className="important">{tasks.important}</div>
        <div className="tag-list">{tasks.tags}</div>
        <div className="dropdown"></div>
    </div>
)

export default Task;