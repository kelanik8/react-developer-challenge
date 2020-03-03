import React, { useState } from "react";
import Swal from "sweetalert2";
import API from "../../API";

const CreateCaption = () => {
  const [form, setForm] = useState({
    caption: ""
  });
  const [error, setErrorStatus] = useState({
    status: false,
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSumbit = e => {
    e.preventDefault();
    setIsLoading(true);
    setErrorStatus({
      status: false,
      message: ""
    });
    API.post("/caption", {
      caption: form.caption
    })
      .then(() => {
        setIsLoading(false);
        setForm({ ...form, caption: "" });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Caption Created Successfully!"
        });
      })
      .catch(error => {
        setIsLoading(false);
        if (error.response.data.status == "fail") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
          setErrorStatus({
            status: true,
            message: error.response.data.error.message
          });
        }
      });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="col-12 col-md-6 col-lg-6">
      <div className="card">
        <div className="card-body">
          <h4>Create Caption</h4>
          <br />
          <form onSubmit={handleSumbit}>
            {error.status ? (
              <div className="alert alert-danger">{error.message}</div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>Caption</label>
              <input
                type="text"
                name="caption"
                value={form.caption}
                onChange={handleChange}
                className="form-control creditcard uatp"
                required
              />
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCaption;
