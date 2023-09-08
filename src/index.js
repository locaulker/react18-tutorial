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
        const { img, title, author, id } = book
        return <Book key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

const Book = props => {
  console.log(props)

  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
