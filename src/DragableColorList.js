import React from 'react'
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';
const DragableColorList=SortableContainer(({colors,removeColor})=> {
    return (
        <div style={{height:"100%"}}> 
            {colors.map((color,i)=>(
             <DraggableColorBox index={i} key={color.name} color={color.color} name={color.name} handleDelete={()=>removeColor(color.name)}/>
         ))} 
        </div>
    )
})

export default DragableColorList
