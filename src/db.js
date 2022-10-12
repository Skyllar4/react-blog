export let db = [
    {
        "id": 1,
        "title": "Статья 1",
        "content": "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
    },
    {
        "id": 2,
        "title": "Статья 2",
        "content": "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
    },
    {
        "id": 3,
        "title": "Статья 3",
        "content": "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
    },
    {
        "id": 4,
        "title": "Статья 4",
        "content": "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
    },
    {
        "id": 5,
        "title": "Статья 5",
        "content": "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
    },
    {
        "id": 6,
        "title": "Статья 6",
        "content": "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
    },
]

export function getPost(postId) {
    return db.find((item) => item.id === (Number(postId)))// функция, отдает в компонент детальной страницы карточки нужный пост
}

export function deletePost(id) {
    db.splice(id, 1)
  }

export function updatePost(newTitle, newContent, id) {
    db[id].title = newTitle
    db[id].content = newContent
}