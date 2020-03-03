import React, { useState } from "react";
import TagsContainer from "../tags-container/tags-container";
// import { useDispatch } from "react-redux";
import "./search-container-component.css";

const SearchContainer = () => {
  let [searchField, setSearchField] = useState("");
  let [tags, setTags] = useState([]);

  const handleChange = e => {
    const { value } = e.target;
    setSearchField(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTags([
      ...tags,
      {
        id: tags.length + 1,
        tag: searchField
      }
    ]);

    setSearchField("");
  };

  return (
    <div
      className="jumbotron jumbotron-fluid bg-none"
      style={{
        background: "#f8f8f4"
      }}
    >
      <div className="container">
        <form className="form-inline search-container" onSubmit={handleSubmit}>
          <input
            className="form-control form-control-lg search-feild"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchField}
            onChange={handleChange}
          />
          <button className="btn btn-outline-dark search-btn" type="submit">
            Search
          </button>
        </form>
        <br />
        <TagsContainer />
      </div>
    </div>
  );
};

export default SearchContainer;
