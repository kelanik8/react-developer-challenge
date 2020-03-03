import React from "react";
import CreateCaption from "../../components/create-caption/create-caption";
import CreateTag from "../../components/create-tag/create-tag";

const CreateCaptionPage = () => {
  return (
    <div className="container pt-4">
      <div className="row">
        <CreateCaption />
        <CreateTag />
      </div>
    </div>
  );
};

export default CreateCaptionPage;
