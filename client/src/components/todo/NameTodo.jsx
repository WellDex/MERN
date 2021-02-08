import React from 'react'

export const NameTodo = (props) => {
    return (
        <>
            <span onClick={props.changeInputEditMode}>{props.name}</span>
            {props.config === 'name'
                ? <i className='material-icons'>{props.isActive ? 'arrow_drop_up' : 'arrow_drop_down'}</i>
                : ''
            }
        </>
    )
}