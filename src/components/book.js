import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks, removeBook } from '../redux/books/bookSlice';
import '../styles/book.css';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBooks(id));
  };
  return (
    <div className="book">
      <div className="description">
        <p className="category">{bookInfo.category}</p>
        <h3 className="title">{bookInfo.title}</h3>
        <small className="author">{bookInfo.author}</small>
        <div className="btnContainer">
          <button type="button" className="comment">Comment</button>
          <button type="button" className="remove" onClick={() => removeHandler(bookInfo.item_id)}>Remove</button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="progressCircle" />
        <div className="completion">
          <p className="percent">65%</p>
          <small className="percentText">completed</small>
        </div>
        <div className="chapter">
          <p>
            <span className="span">Current chapter</span>
            <br />
            Chapter 17
          </p>
          <button type="button" className="update">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
