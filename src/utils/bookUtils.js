import books from "../assets/data/books.json";
function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

const imageContext = require.context(
  "../assets/images",
  false,
  /\.(png|jpg|jpeg|gif)$/
); // Задаёт контекст для изображений, чтобы их можно было получить только по названию

export { getBookById, imageContext };
