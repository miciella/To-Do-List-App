import React, {useState} from "react";

function TodoItem(props){

    return (
        //function will not be called unless div detects a click
        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
            <li>{props.item}</li>
        </div>
    );
}
export default TodoItem;