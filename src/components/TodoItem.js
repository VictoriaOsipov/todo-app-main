import React from 'react'

const TodoItem = ({ todo, setCompleteFuncProp }) => {



    return (
        <div className='list-item' >
            <input checked={todo.markComplete} type='checkbox' id='checkbox' onClick={() => setCompleteFuncProp(todo.id) } />
            <h3 style = {{
                textDecoration: todo.markComplete ? 'line-through' : 'none',
                color: todo.markComplete ? 'grey' : '#111'
                }}> 
                {todo.text}
            </h3>
        </div>
    )
}

export default TodoItem
