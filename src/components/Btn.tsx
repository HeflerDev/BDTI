import React, {MouseEventHandler} from "react";

const Btn = ({text, onClick}: { text: string, onClick: MouseEventHandler }) => (
    <div className="btn-container">
        <button className={"btn"} onClick={onClick}>{text}</button>
    </div>
)

export default Btn;