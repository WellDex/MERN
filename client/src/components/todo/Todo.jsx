import React, {useState} from 'react'
import {MyMoment} from "../common/MyMoment"
import {ShowAndEditTodo} from "./ShowAndEditTodo"


export const Todo = (props) => {
    const [isActive, setActive] = useState(false)
    const [editMode, setEditMode] = useState([false, false]) //1-name 2-description

    const toggleActiveClass = () => {
        setActive(!isActive)
    }

    const toggleNameEditMode = () => {
        setEditMode({...editMode, 0: !editMode[0]})
    }
    const toggleDescEditMode = () => {
        setEditMode({...editMode, 1: !editMode[1]})
    }

    return (
        <li className={`${isActive ? 'active' : ''} pos-rel`}>
            <div
                className={'collapsible-header'}
                onDoubleClick={toggleActiveClass}
            >
                <label>
                    <input
                        type="checkbox"
                        className="filled-in"
                        checked={props.isCondition}
                        disabled={props.loading}
                        onClick={() => props.changeIsCondition(props.id)}
                    />
                    <span></span>
                </label>
                <ShowAndEditTodo
                    config={'name'}
                    text={props.name}
                    changeHandler={(e) => props.changeHandler(e, props.id)}
                    update={props.updateTodo}
                    editMode={editMode[0]}
                    isActive={isActive}
                    toggleNameEditMode={toggleNameEditMode}
                    toggleDescEditMode={toggleDescEditMode}
                />
                <div className='block-del-pos'>
                    {props.dateEx !== null
                        ? <MyMoment dateEx={props.dateEx}/>
                        : ''
                    }
                    <i
                        className='material-icons'
                        onClick={() => props.deleteTodoHandler(props.id)}
                    >
                        delete_forever
                    </i>
                </div>
            </div>
            <div className="collapsible-body">
                <ShowAndEditTodo
                    config={'description'}
                    text={props.description}
                    changeHandler={(e) => props.changeHandler(e, props.id)}
                    update={props.updateTodo}
                    isActive={isActive}
                    editMode={editMode[1]}
                    toggleNameEditMode={toggleNameEditMode}
                    toggleDescEditMode={toggleDescEditMode}
                />
            </div>
        </li>
    )
}