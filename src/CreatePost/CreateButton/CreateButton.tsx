interface createProps {
    fnCreate: () => void
}

export function CreateButton({fnCreate}: createProps) {

    const handleClick = () => {
        fnCreate()
    }

    return <button onClick={handleClick} className="post-add-btn">Добавить</button>
}