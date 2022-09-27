import React, {useEffect, useState} from "react";
import Tasks from "./Tasks";

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>{
       setTasks(JSON.parse(localStorage.getItem("tasks") || ""));
    }, [])
    
    return <>
        {
            tasks.length ? (
                tasks.map((item, index) => (
                    <div key={item + index}>
                        <Tasks tasks={item}/>
                    </div>
                ))
            ) : null
        }
    </>
}