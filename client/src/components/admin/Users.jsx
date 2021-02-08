import React from 'react'

export const Users = (props) => {

    return (
        <>
            <tr>
                <td>{props.email}</td>
                <td>
                    {props.status
                        ? 'Забанен'
                        : 'Не забанен'
                    }
                </td>
                <td>
                    <a
                        className="waves-effect waves-light btn modal-trigger"
                        onClick={() => props.getTodoUser(props.id)}
                    >
                        Показать todo
                    </a>
                </td>
                <td>
                    {props.status
                        ? <a
                            className="waves-effect waves-light btn-small blue lighten-2"
                            onClick={() => props.changeStatusUser(props.id)}
                        >
                            Разбанить
                        </a>
                        : <a
                            className="waves-effect waves-light btn-small red darken-1"
                            onClick={() => props.changeStatusUser(props.id)}
                        >
                            Забанить
                        </a>
                    }
                </td>
                <td>
                    <a
                        className="waves-effect waves-light btn-small"
                        onClick={() => props.deleteUser(props.id)}
                    >
                        Удалить пользователя
                    </a>
                </td>
            </tr>

            <div id="modal1" className="modal bottom-sheet">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </>
    )
}