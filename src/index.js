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
  <img
    src="https://m.media-amazon.com/images/I/51Azhu94JlL._SX348_BO1,204,203,200_.jpg"
    alt="Facts For Curious Minds"
  />
)
const Title = () => <h2>Facts For Curious Minds</h2>
const Author = () => {
  return <h4>by Stephen King</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
