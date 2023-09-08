import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1
  },

  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
    id: 2
  }
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map(book => {
        // const { img, title, author, id } = book

        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

const Book = props => {
  const { img, title, author } = props.book
  console.log(props)

  return (
    <article className="book">
      <img src={img} alt={props.title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
