import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            "SearchBook" is an innovative online platform designed to
            revolutionize the way users discover and access books. Our platform
            offers a comprehensive database of books across various genres,
            providing users with a one-stop solution for all their reading
            needs. With a user-friendly interface, SearchBook allows users to
            easily search for books based on title, author, genre, or keyword,
            ensuring a seamless browsing experience.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
