import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import { getBooks } from '../redux/books/bookSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksInfo = useSelector((state) => state.books.booksArray);
  const isLoading = useSelector((state) => state.books.isLoading);

  return (
    <div className="booksList">
      {isLoading && <div>Loading...</div>}
      {!isLoading && booksInfo.map((bookInfo) => (
        (<Book key={bookInfo.id} bookInfo={bookInfo} />)
      ))}
    </div>
  );
};

export default BooksList;
