import React from 'react';
import { Link } from 'react-router-dom';
import '../Card/card.css';

interface CardProps {
    title: string,
    content: string,
    pos: number
} // передается из Content

export function Card({title, content, pos}: CardProps) {

    // const deleteClick = (): number => { // вспомогательная функция, для передачи key элемента, по которому был произведен клик в Content
    //         return postDelete(pos)
    // }

        return <li className='post-continer'>
                    <h1 className='post-title'>{title}</h1>
                    <div className='content-window'>
                        <p className='post-content'>{content}</p>
                    </div>
                    <Link to={`/post/${pos + 1}`} className="post-detail-link">Перейти</Link>
              </li>
}