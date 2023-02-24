import React, {useState} from "react";
import TodoItem from "./TodoItem";

function App() {

    const [item, setNewItem] = useState("");
    const [addedItem, setItems] = useState([]);

    function updateItems(event){
       let newItem = event.target.value;
       setNewItem(newItem);
    }

    function addItem(){
        setItems((prevItems)=> {
            return [...prevItems, item]
        })
        //clear the input button for the next item after clicking the add button
        setNewItem("")
    }

    function deleteItem(id){
        //go through each item in prevItems array and return items which not equal to id
        setItems(prevItems => {
            return prevItems.filter((item, index)=>{
                return index !== id;
            })
        })
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
            { addedItem.map((todoItem,index) =>
                <TodoItem
                key={index}
                id={index}
                onChecked={deleteItem}
                item={todoItem} />)
            }
        </ul>
      </div>
    </div>
  );
}

export default App;
