import React from 'react';
import '../Card/card.css';
import { Link, useParams } from 'react-router-dom';
import { getPost, deletePost, updatePost } from '../db';

export function CardDetail() {

    const params = useParams();
    const post = getPost(params.postId)
    console.log(params.postId)

    const [postTitle, setPostTitle] = React.useState(post?.title)
    const [postContent, setPostContent] = React.useState(post?.content)
    const [cardState, setCardState] = React.useState(true); // для того, чтобы после удаления карточка пропадала

    const deleteCard = () => { // дублируется удаление, удаление уже есть в App
        setCardState(false)
        deletePost(post?.id)
    }

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(event.target.value)
    }

    const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // при submit происходит редактирование карточки
        updatePost(postTitle, postContent, post?.id)
        event.preventDefault()
    }

    if (cardState) {
    return <div className='post-detail-container'>
                <Link to={`/`} className="back-btn">Назад</Link>
                <h1 className='post-title'>Запись {post?.title}</h1>
                {/* title почему то самопроизвольно склоняется */}
                {/* <p className='post-content'>{post?.content}</p> */}
                <form onSubmit={handleSubmit} className="update-form">
                    <input className='update-form-input-element' onChange={handleChangeTitle} type="text" defaultValue={post?.title}/>
                    <textarea className='update-form-input-element content-input-element' onChange={handleChangeContent} defaultValue={post?.content} />
                    <button type='submit'>Сохранить</button>
                </form>
                <button onClick={deleteCard}>Удалить</button> 
            </div>
    } else {
        return <div>Карточка удалена</div>
    }
} // ПЕРЕПИСАТЬ DELETEPOST РАБОТАЕТ НЕККОРЕКТНО