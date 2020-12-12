import React, {useState} from 'react';

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    return (
        <div className="input-field mtp2">
        <input 
        onChange={changeHandler}
        value={title} 
        type="text" 
        className="text" 
        id='title' 
        placeholder='Введите название дела'/>
        <label htmlFor="title" className='active'>Введите название дела</label>
    </div>
    )
}