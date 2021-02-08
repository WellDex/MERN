import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/ru'

export const MyMoment = (props) => {
    return <Moment locale="ru" format="H:mm DD MMM">{props.dateEx}</Moment>
}