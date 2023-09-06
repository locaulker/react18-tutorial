import React from "react"
import ReactDOM from "react-dom/client"

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL600_SR600,400_.jpg"
    alt="Holly Hardcover"
  />
)
const Title = () => <h2>Holly Hardcover</h2>
const Author = () => {
  return <h4>by Stephen King</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
