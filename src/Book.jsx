import React from 'react';

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h5>{author}</h5>
    </article>
  );
};

export default Book;

// const Image = () => {
//   return (
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/91vS2L5YfEL._AC_UL127_SR127,127_.jpg"
//       alt="knygos paveikslelis"
//     />
//   );
// };
// const Title = () => {
//   return <h1>Book name</h1>;
// };
// const Author = () => {
//   return <h5>Book Author</h5>;
// };
