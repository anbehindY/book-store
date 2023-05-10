import { useSelector } from 'react-redux';
import Book from './book';

const BooksList = () => {
  const booksInfo = useSelector((state) => state.books.booksArray);
  return (
    <div className="booksList">
      {booksInfo.map((bookInfo) => (
        (<Book key={bookInfo.id} bookInfo={bookInfo} />)
      ))}
    </div>
  );
};

export default BooksList;
