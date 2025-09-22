import React, { useState, useEffect } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8089/api/books");
      setBooks(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching books");
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {books.map((book) => (
        <div key={book.id} style={styles.card}>
          <h3 style={styles.title}>{book.title}</h3>
          <p style={styles.author}>{book.author}</p>
          <p style={styles.price}>${book.price}</p>
          <p style={styles.stock}>{book.stock} left in stock</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" },
  card: { backgroundColor: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", textAlign: "center" },
  title: { color: "#4e54c8", marginBottom: "10px" },
  author: { color: "#555", marginBottom: "8px" },
  price: { fontWeight: "bold", marginBottom: "8px" },
  stock: { color: "#888", fontSize: "14px" },
};

export default BookList;
