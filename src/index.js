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
      <EventExamples />
      {books.map(book => {
        // const { img, title, author, id } = book

        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = e => {
    console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log("form submitted")
  }

  const handleButtonClick = () => {
    alert("handle Button Click")
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem" }}
        />
        <button onClick={handleButtonClick}>Click Me</button>
      </form>
    </section>
  )
}

const Book = props => {
  const { img, title, author } = props.book
  // console.log(props)

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
