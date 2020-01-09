import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove  from 'react-flip-move'

const TodoList = (props) => {

    const items = props.items

    const listItems = items.map((item) =>
        { return <div key={item.key} >
        <p className="list-p">{item.text}
         <span>
         <FontAwesomeIcon onClick={() => props.deleteItem(item.key)} className="faicons" icon="trash" /> 
         </span>
        </p>
        </div>})
    return(
        <div className="list">
        <FlipMove duration={350} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    )
}

export default TodoList
