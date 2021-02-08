import React from 'react'

export const EditField = (props) => {
    return (
        <>
            <>
                <input
                    id="updateName"
                    type="text"
                    className="yellow-input custom-input"
                    name={props.config}
                    onChange={props.changeHandler}
                    defaultValue={props.text}
                />
                <a
                    className="cur-pointer none-style-a"
                    onClick={props.changeField}
                    aria-disabled={props.loading}
                >
                    <i className="material-icons">mode_edit</i>
                </a>
            </>
        </>
    )
}