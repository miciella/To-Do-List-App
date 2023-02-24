import React, {useState} from "react";

function App() {

    const [item, setNewItem] = useState("");
    const [addedItem, setItems] = useState([]);

    function updateItems(event){
       let newItem = event.target.value;
       setNewItem(newItem);
    }

    function addItem(){
        setItems((prevState)=> {
            return [...prevState, item]
        })
        //clear the input button for the next item after clicking the add button
        setNewItem("")
    }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateItems} type="text" value={item}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            { addedItem.map(todoItem => <li>{todoItem}</li>)
            }
        </ul>
      </div>
    </div>
  );
}

export default App;
