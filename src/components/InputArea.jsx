import React, {useState} from "react";

function InputArea(props){

    const [item, setNewItem] = useState("");

    function updateItems(event){
        let newItem = event.target.value;
        setNewItem(newItem);
    }

    return (
        <div className="form">
            <input onChange={updateItems} type="text" value={item}/>
            {/*creating a function to call the addItem function to be triggered*/}
            <button onClick={() => {
                props.add(item)
                //clear the input button for the next item after clicking the add button
                setNewItem("")
            }}
            >
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;