import Input from "./FORM/Input.js"
import Button from "./FORM/Button.js"
import { useState } from "react"
import Todo from './Todo.js'


export default function Todoinput() {

    const [inputTask, setInputTask] = useState("");

   
    // Step 2: 
    const [list, setList] = useState([]);
    
    const handleAddToDo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };

        setList([...list,newTask]) // spread operator [...list] to create a new array with the existing taks in the list. Append the new Task to the end of the array
        setInputTask('') // clear the input field when the user clisks the button
    }

     // Step 1: trigger an event when we type a task into the input box
     const handleInputChange = (event) => {
        setInputTask(event.target.value) // access the value of revent's target
    }

    const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id)
        setList(newList);
    }

    const deleteTodo = (idTodoDelete) => {
        setList((currentTodos)=> currentTodos.filter((todo) => todo.id !== idTodoDelete ))
    }
 
    return (
        <div className="appToDo">
        <h1>My To-Do List</h1>
        <div className="input-section">
            <Input
            id="todoInput"
            type="text"
            placeholder = "Add item..."
            value={inputTask}
            onChange={handleInputChange}
            />

            <Button 
            id="addBtn"
            // type="submit"
            className="add"
            onClick = {handleAddToDo}
            >Add</Button>
        </div>
        <ul>
    
            {list.map((todo) => (
            <div>
                <Todo 
                key={todo.id}
                item = {todo.todo}
                deleteTodo={() => handleDeleteTodo(todo.id) }
                ></Todo>
            </div>
            ))}
        </ul>
        </div>
    )
}


