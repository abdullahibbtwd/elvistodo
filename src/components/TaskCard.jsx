import React from 'react'
import "./Assets/TaskCard.css"
import Tag from './Tag'
import deleteIcon from './Assets/TodoAsset/delete.png'
import editicon from './Assets/TodoAsset/edit.png'
import doneicon from './Assets/TodoAsset/done1.png'

const TaskCard = ({headName ,tags,handleDelete,index}) => {

  return (
    <article className='task_card'>
      <p className='task_text'>{headName}</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
        {tags.map((tag,index) => <Tag key={index} tagName={tag} selected={true}/>)}
        </div>
        
        
        <div className='task_delete'  onClick={()=>handleDelete(index)}>
          <img src={deleteIcon} className='delete' ></img>
       
        </div>
        
      </div>
    </article>
  )
}

export default TaskCard 