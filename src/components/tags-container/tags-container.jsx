import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TagContainer from "../tag-container/tag-container";

const TagsContainer = ({ tags }) => {
  console.log(tags);
  return (
    <>
      {tags.map((tag, index) => (
        <TagContainer key={index} tag={tag} />
      ))}
    </>
  );
};

TagsContainer.propTypes = {
  tags: PropTypes.string
};

const mapStateToProps = state => ({
  tags: state.caption.tags
});

export default connect(mapStateToProps)(TagsContainer);
