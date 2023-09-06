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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="./images/book-1.jpg" alt="Facts For Curious Minds" />
)
const Title = () => <h2>Facts For Curious Minds</h2>
const Author = () => {
  return <h4>by Stephen King</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
