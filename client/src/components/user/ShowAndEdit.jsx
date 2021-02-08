import React, {useState} from 'react'
import {EditField} from "../common/EditField"

export const ShowAndEdit = (props) => {
    const [editMode, setEditMode] = useState(false)

    const changeField = () => {
        props.update()
        setEditMode(!editMode)
    }

    return (
        <li className="collection-item">
            {!editMode
                ? <div>
                    {props.text}
                    <a
                        href="#!"
                        onClick={() => setEditMode(!editMode)}
                        className="secondary-content"
                    >
                        <i className="material-icons">
                            edit
                        </i>
                    </a>
                </div>
                : <EditField
                    config={props.config}
                    text={props.text}
                    changeHandler={props.changeHandler}
                    changeField={changeField}
                />
            }
        </li>
    )
}