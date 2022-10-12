import React from 'react';
import './create.css';

interface createModalProps {
    show: boolean,
    modalVisiable: () => void,
    postCreate: any
}

export function CreateForm({show, modalVisiable, postCreate}: createModalProps) {

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')

    const createEl = (titleValue: string, contentValue: string) => { // Нужно типизировать, чтобы нельзя было отправлять цифры или пустой инпут
        const newEl  = {
            id: 0,
            title: titleValue,
            content: contentValue
        }
        postCreate(newEl)
    }

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        createEl(title, content)
        modalVisiable()
        event.preventDefault()
    }

    if (show) {
        return   <div className='create-container'>
                        <form onSubmit={handleSubmit} className='create-form'>
                            <input onChange={handleChangeTitle} type="text" placeholder="Введите заголовок" className='create-from-elemetnts' />
                            <input onChange={handleChangeContent} type="text" placeholder="Введите содержание" className='create-from-elemetnts' />
                            <input type="submit" className='create-from-elemetnts'/>
                        </form>
                        <button onClick={modalVisiable}>Назад</button>
                </div>
    } else {
        return <span></span>
    }
    
}