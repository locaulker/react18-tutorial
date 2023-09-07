import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  )
}
const author = "Jordan Moore"
const title = "Interesting Facts For Curious Minds"
const img = "./images/book-1.jpg"

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
