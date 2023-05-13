import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook, postBooks } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const book = {
      title: e.target.title.value,
      author: e.target.author.value,
      category: 'not yet',
      item_id: nanoid(),
    };
    if (book.title && book.author) {
      dispatch(addBook(book));
      dispatch(postBooks(book))
        .then(() => {
          e.target.title.value = '';
          e.target.author.value = '';
        })
        .catch((error) => {
          alert.error('Failed to add book', error);
        });
    }
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div className="bookInput">
      <h3 className="addBook">ADD NEW BOOK</h3>
      <form className="bookForm" onSubmit={submitHandler}>
        <input type="text" className="title" name="title" placeholder="Book title" />
        <input type="text" className="author" name="author" placeholder="Author" />
        <button type="submit" className="btnAdd">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
