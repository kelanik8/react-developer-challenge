import React from "react";
import PropTypes from "prop-types";

const TagContainer = ({ tag }) => {
  return (
    <div className="btn-group mb-3 search-tag" role="group">
      <button type="button" className="btn btn-ctm text-white text-bold">
        {tag}
      </button>
      <button type="button" className="btn btn-ctm text-white text-bold">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

TagContainer.propTypes = {
  tag: PropTypes.string
};

export default TagContainer;
