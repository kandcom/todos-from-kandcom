import React, {useState, useContext} from 'react'
import Context from '../context'
const stylesForm = {
    form: {
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between'
    }
}
const useInputValue = (defaultValue = '') => {
    const [value, setTodo] = useState(defaultValue);
    return {
        value,
        onChange: event => setTodo(event.target.value)
    }
}
const AddTodo = () => {
    const input = useInputValue('')
    const {addTodo} = useContext(Context)

    //const [value, setTodo] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        // if(value.trim()){
        //     addTodo(value)
        // }
        //setTodo('')
        if(input.value.trim()){
            addTodo(input.value)
        }
    }
    return (
        <form style={stylesForm.form} onSubmit={submitHandler}>
            <input type="text" placeholder="Введите заметку" {...input} /*value={value} onChange={(e) => setTodo(e.target.value)}*//>
            <button type="submit">Добавить форму</button>
        </form>
    )
}
export default AddTodo