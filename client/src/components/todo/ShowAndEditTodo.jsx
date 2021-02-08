import React, {useState} from 'react'
import {EditField} from "../common/EditField"
import {NameTodo} from "./NameTodo"

export const ShowAndEditTodo = (props) => {

    const changeEditMode = () => {
        if (props.config === 'name') {
            props.toggleNameEditMode()
        } else {
            props.toggleDescEditMode()
        }
    }

    const changeField = () => {
        props.update()
    }

    return (
        <>
            {props.editMode
                ? <EditField
                    config={props.config}
                    text={props.text}
                    changeHandler={props.changeHandler}
                    changeField={changeField}
                />
                : <NameTodo
                    config={props.config}
                    changeInputEditMode={changeEditMode}
                    name={props.text}
                    isActive={props.isActive}
                />
            }
        </>

    )
}