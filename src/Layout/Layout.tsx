import React from 'react';
import '../Layout/layout.css';

interface LayoutProp {
    children?: React.ReactNode
}

export function Layout({children}: LayoutProp) {

    return <div className='main-container'>
                 {children}
            </div>

}

