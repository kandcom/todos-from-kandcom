import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './TodoItem'
const styles = {
    ul: {
      listStyle: 'none',
      margin:0,
      padding: 0,
    }
  }
const ToDoList = ({todos, onToggle}) => {
    return (
        <ul style={styles.ul}>
           {
              todos.map( (item, index) => {
                  return <ToDoItem title={item.title} completed={item.completed} index={item.id} onChange={onToggle} key={index}/>
              })
           }
        </ul>
    )
}
ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
ToDoList.defaultProps = {
    todos: [{id: 1000, title: 'не получил todos', completed: false}],
}
export default ToDoList