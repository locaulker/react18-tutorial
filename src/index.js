import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = "Interesting Facts For Curious Minds"
  const author = "Jordan Moore"

  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Facts For Curious Minds" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
