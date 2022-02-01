import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book';

//CSS
import './index.css';

//setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91vS2L5YfEL._AC_UL127_SR127,127_.jpg',
  title: 'Project Hail Mary',
  author: 'Andy Weir',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL127_SR127,127_.jpg',
  title: 'Little Blue Trucks Valentine',
  author: 'Alice Schertle',
};

const BooksList = () => {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

ReactDom.render(<BooksList />, document.getElementById('root'));

export default BooksList;
