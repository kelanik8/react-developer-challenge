import React from "react";
import CaptionCard from "../caption-card/caption-card";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const CaptionsContainer = ({ captions, loading }) => {
  return (
    <div className="container caption-container">
      <div className="text-center">
        {loading ? (
          <Loader
            type="RevolvingDot"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          ""
        )}
      </div>

      <div className="row">
        {captions.map(caption => (
          <CaptionCard key={caption.id} caption={caption.caption} />
        ))}
      </div>
    </div>
  );
};

CaptionsContainer.propTypes = {
  captions: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  captions: state.caption.captions,
  loading: state.caption.isLoading
});

export default connect(mapStateToProps)(CaptionsContainer);
