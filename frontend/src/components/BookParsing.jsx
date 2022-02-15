import axios from "axios";
import Book from "./Book";
import React, { useState, useEffect } from "react";
import "./Button.css";

function BookParsing() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [effect, setEffect] = useState("mount1");

  const fetchBooks = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 books 를 초기화하고
      setError(null);
      setBooks(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get("localhost:5001/data/request");
      setBooks(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error)
    return (
      <div className="mount2">
        <div className={`box-wrap ${effect}`}>
          <div className="box2">
            <div>에러가 발생했습니다</div>
          </div>
        </div>
      </div>
    );

  // 아직 books가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!books) return null;

  // 드디어 books가 성공적으로 받아와 진 상태입니다.
  return (
    <>
      <div className="box2">
            <ul>
              {books.map((book) => (
                <Book
                  key={book.title}
                  title={book.title}
                  writer={book.writer}
                  bookMade={book.bookMade}
                  sellPrice={book.sellPrice}
                  imageUri={book.imageUri}
                />
              ))}
            </ul>
      </div>
    </>
  );
}
//button 클릭하면 API 다시 받아옴

export default BookParsing;