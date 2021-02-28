
import React, {useState} from 'react'
import TodoItem from './TodoItem'

const filters = {
    All: "All",
    Active: "Active",
    Completed: "Completed"
}


const TodoList = ({ todos, setCompleteFunc }) => {

    const[filterState, setFilterSTate] = useState(filters.All);

    const filterTodos = () => {
        switch (filterState) {
            case filters.All:
                return todos;
            case filters.Active:
                return todos.filter(todo => !todo.markComplete);
            case filters.Completed:
                return todos.filter(todo => todo.markComplete);
            default:
                return todos;
        }

    }

    return (
        <div className="flex-row list">
            {filterTodos().map((todo) => (
                <TodoItem key={todo.id} todo={todo} setCompleteFuncProp={setCompleteFunc} />
            ))}
            <div className='btns-filter'>
             <button id='btn' placeholder='All' onClick={() => setFilterSTate(filters.All)}>All</button>
             <button id='btn'placeholder='Active' onClick={() => setFilterSTate(filters.Active)}>Active</button>
             <button id='btn'placeholder='Completed' onClick={() => setFilterSTate(filters.Completed)}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList
