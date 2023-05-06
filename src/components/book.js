const Book = () => (
  <div>
    <div className="description">
      <p className="genre">Action</p>
      <h3 className="title">Harry Potter</h3>
      <small className="author">J.K.Rowling</small>
      <div className="btnContainer">
        <button type="button" className="comment">Comment</button>
        <button type="button" className="remove">Remove</button>
        <button type="button" className="edit">Edit</button>
      </div>
    </div>
    <div className="progress">
      <img src="" alt="Progress circle" />
      <div className="completion">
        <p className="percent">69%</p>
        <small className="percentText">completed</small>
      </div>
    </div>
    <div className="borderV" />
    <div className="chapter">
      <p>
        <span>Current chapter</span>
        <br />
        Chapter 17
      </p>
      <button type="button" className="update">Update Progress</button>
    </div>
  </div>
);

export default Book;
