import React from "react";
import PropTypes from "prop-types";
import "./caption-card.css";

const CaptionCard = ({ caption }) => {
  return (
    <div className="col-12 col-md-4 col-lg-4">
      <div className="card p-4">
        <div className="card-body">{caption}</div>
      </div>
    </div>
  );
};

CaptionCard.propTypes = {
  caption: PropTypes.string
};

export default CaptionCard;
