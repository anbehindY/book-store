import { useState } from 'react';
import Book from './book';

const BooksList = () => {
  const [booksInfo] = useState([
    {
      id: 1,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '65%',
      chapter: 'Chapter 9',
    },
    {
      id: 2,
      category: 'Drama',
      title: 'You lie in April',
      author: 'Frank Herbert',
      progress: '65%',
      chapter: 'Chapter 9',
    },
    {
      id: 3,
      category: 'Art',
      title: 'Subtle Art of not giving a fuck',
      author: 'Martins',
      progress: '65%',
      chapter: 'Chapter 9',
    },
  ]);

  return (
    <div className="booksList">
      {booksInfo.map((bookInfo) => (
        (<Book key={bookInfo.id} bookInfo={bookInfo} />)
      ))}
    </div>
  );
};

export default BooksList;
