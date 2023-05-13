import BooksList from './booksList';
import AddBook from './addBook';
import '../styles/books.css';

const Books = () => (
  <main className="mainSection">
    <BooksList />
    <AddBook />
  </main>
);

export default Books;
