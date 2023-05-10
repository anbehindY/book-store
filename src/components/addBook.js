import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      title: e.target.title.value,
      author: e.target.author.value,
      item_id: nanoid(),
    };
    dispatch(addBook(book));
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
