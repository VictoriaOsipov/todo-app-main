import React from 'react'


const AddTodoItem = ({AddNewTodo}) => {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!e.target.value) {
                alert("Please add task")
                return
            }
            AddNewTodo(e.target.value)
            e.target.value = ''
        }
    };

    return (
        <div className="add-new-item ">
            <input 
                type='text' id='text'
                placeholder='Create a new todo..'
                onKeyPress={handleKeyPress} />
        </div>
    )
}

export default AddTodoItem
