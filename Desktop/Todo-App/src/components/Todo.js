import { Fragment } from "react"
import Button from "./FORM/Button.js"

export default function Todo ({item,deleteTodo}) {
    return (
       <Fragment>
        <div className="todo-list">
                <li className="todo" key={item.id}>
                    {item}
                </li>
                <button onClick={deleteTodo}>Delete</button>
                </div>
        </Fragment>
    )
}