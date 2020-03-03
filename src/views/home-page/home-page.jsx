import React from "react";
import CaptionsContainer from "../../components/captions-container/captions-container";
import SearchContainer from "../../components/search-container-component/search-container-component";

const HomePage = () => {
  return (
    <React.Fragment>
      <SearchContainer />
      <CaptionsContainer />
    </React.Fragment>
  );
};

export default HomePage;
