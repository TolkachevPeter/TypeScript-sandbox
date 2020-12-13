import React, { useRef} from 'react';

interface TodoFormProps{
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props: any) => {
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const onPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            console.log(ref.current!.value)
            ref.current!.value = ''
            // console.log(title);
            // setTitle('')
        }
    }

    return (
        <div className="input-field mtp2">
        <input 
        // onChange={changeHandler}
        // value={title} 
        ref={ref}
        type="text" 
        className="text" 
        id='title' 
        placeholder='Введите название дела'
        onKeyPress={onPressHandler}/>
        <label htmlFor="title" className='active'>Введите название дела</label>
    </div>
    )
}