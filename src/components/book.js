import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="description">
        <p className="category">{bookInfo.category}</p>
        <h3 className="title">{bookInfo.title}</h3>
        <small className="author">{bookInfo.author}</small>
        <div className="btnContainer">
          <button type="button" className="comment">Comment</button>
          <button type="button" className="remove" onClick={() => dispatch(removeBook(bookInfo.item_id))}>Remove</button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress">
        <img src="" alt="Progress circle" />
        <div className="completion">
          <p className="percent">{bookInfo.progress}</p>
          <small className="percentText">completed</small>
        </div>
      </div>
      <div className="borderV" />
      <div className="chapter">
        <p>
          <span>Current chapter</span>
          <br />
          {bookInfo.chapter}
        </p>
        <button type="button" className="update">Update Progress</button>
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
