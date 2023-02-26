import React, {useState} from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {

    const [addedItem, setItems] = useState([]);

    function addItem(item){
        setItems((prevItems)=> {
            return [...prevItems, item]
        })

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
      <InputArea add={addItem}/>
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
