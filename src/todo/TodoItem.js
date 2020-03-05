import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    img: {
        width: "24px",
        height: "24px"
    },
    input: {
        margin: "1rem"
    }
}
const ToDoItem = ({title, completed, index, onChange}) => {
    const classes = [];
    if(completed){
        classes.push('done');
    }
    const {removeTodo} = useContext(Context);
    return (
        <li style={styles.li}>
            <span className={/*completed ? 'done' : ''*/ classes.join(' ')}>
                <input 
                    style={styles.input} 
                    type="checkbox" 
                    onChange={() => onChange(index)}
                    checked={completed ? true : false}
                />
                <strong>{index}</strong>
                &nbsp;
                {title}
            </span>
            <button onClick={() => removeTodo(index)} className={'rm'}>&times;</button>
        </li>
    )
}
ToDoItem.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    completed: PropTypes.bool.isRequired,
    index: PropTypes.oneOf([1,2,3,4]),
    onChange: PropTypes.func.isRequired
}
ToDoItem.defaultProps = {
    title: 'Заголовок не указан',
    completed: false,
    index: 8888,
    onChange: () => console.log("Компонент не получил функцию")
}
export default ToDoItem