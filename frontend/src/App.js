import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./BookList";
import AddBook from "./AddBook";

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <h1 style={styles.header}>📚 Online Bookstore</h1>

        {/* Navigation */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Book List</Link>
          <Link to="/add" style={styles.link}>Add Book</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  app: { fontFamily: "Arial, sans-serif", padding: "20px", minHeight: "100vh", backgroundColor: "#f8f9fa" },
  header: { textAlign: "center", color: "#4e54c8", marginBottom: "30px" },
  nav: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" },
  link: { textDecoration: "none", color: "#4e54c8", fontWeight: "bold" },
};

export default App;
