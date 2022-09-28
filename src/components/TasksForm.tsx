import React, {useState} from "react";

const TasksForm = () => {
   const [input, setInput] = useState({
      title: "",
      description: "",
      completed: false,
      archived: false,
      important: false,
      repeat: "unique",
      tags: []
   })

   function handleSubmit() {

   }

   function handleChange() {
      return undefined;
   }

   return <div className={"task-modal"}>
      <form onSubmit={handleSubmit}>
         <label htmlFor="title">
            Title:
            <input name={"title"} type="text" onChange={handleChange} value={input.title} />
         </label>

         <label htmlFor="description">
            Description:
            <input name={"description"} type="textarea" onChange={handleChange} value={input.description} />
         </label>

         <label htmlFor="important">
            Important:
            <input name={"important"} type="checkbox" onChange={handleChange} checked={input.important} />
         </label>

         <label htmlFor="repeat">
            Repeat:
            <select name="repeat" id="repeat">
               <option value="unique">Unique</option>
               <option value="weekday">Weekday</option>
               <option value="weekend">Weekend</option>
               <option value="always">Always</option>
            </select>
         </label>
      </form>
   </div>
}

export default TasksForm;