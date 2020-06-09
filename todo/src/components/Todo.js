import React from 'react'

const Todo = props => {
    return (
        <div
            className={
                `todo${props.item.finished ? 'finished' : ''}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.what}</p>
        </div>
    )
}

export default Todo 