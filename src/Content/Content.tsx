import React from 'react';
import { Card } from '../Card/Card';
import './content.css';
import { db } from '../db';
import { CreateButton } from '../CreatePost/CreateButton/CreateButton';
import { CreateForm } from '../CreatePost/CreateForm';

interface postCreateElement {
    id: number,
    title: string,
    content: string
}


export function Content() {

    const [data, setData] = React.useState(db)
    const [modal, setModal] = React.useState(false)

    const postCreate = (el: postCreateElement) => {
        el.id = data[data.length - 1].id + 1
        data.push(el)
        setData([...data])
    }

    const modalShow = () => {
        setModal(!modal)
    }

    const blogPosts = data.map((item, pos) => {
        return <Card key={item.id} title={item.title} content={item.content} pos={pos}/> // postDelete передается в качетсве пропа
    })

        return <>
                    <ul className='post-list'>
                        {blogPosts}
                    </ul>
                    <CreateButton fnCreate={modalShow}/>
                    <CreateForm show={modal} modalVisiable={modalShow} postCreate={postCreate}/>
               </>

}


    // const postDelete =  (param: number) => {
    //     data.splice(param, 1)
    //     setData([...data])
    // } // функция, если пост необходимо удалить с главной страницы, передавать пропом в Card

    // const postUpdate = (newTitle: string, newContent: string, id: number) => {
    //     data[id].title = newTitle
    //     data[id].content = newContent
    //     setData([...data])
    // }