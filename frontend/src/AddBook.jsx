import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const newBook = { title, author, price: parseFloat(price), stock: parseInt(stock) };
      await axios.post("http://localhost:8089/api/books/add", newBook);
      navigate("/");
    } catch (err) {
      setError("Error adding book");
    }
  };

//   D:\java\bookstore\src\main\java\com\bookstore\bookstore\BookstoreApplication.java

  return (
    <div style={styles.container}>
      <h2>Add New Book</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleAddBook} style={styles.form}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={styles.input} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required style={styles.input} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required style={styles.input} />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required style={styles.input} />
        <button type="submit" style={styles.button}>Add Book</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: "500px", margin: "0 auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc" },
  button: { padding: "10px", borderRadius: "6px", border: "none", backgroundColor: "#4e54c8", color: "#fff", fontWeight: "bold", cursor: "pointer" },
};

export default AddBook;
