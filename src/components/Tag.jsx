import React from 'react'
import './Assets/Tag.css'

const Tag = ({tagName,selectTag,selected}) => {
  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#15d4c8"},
    JavaScript: {backgroundColor: "#18b3fa"},
    React: {backgroundColor: "#07db59"},
    default: {backgroundColor: "#ffffff"}
  }
  return (
    <div> 
    <button type='button' 
    style={selected?tagStyle[tagName]:tagStyle.default}
    className='tag' onClick={() => selectTag(tagName)}>{tagName}</button>
    </div>
  )
}

export default Tag