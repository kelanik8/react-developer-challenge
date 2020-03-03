import React, { useEffect } from "react";
import Navbar from "./components/navbar-component/navbar-component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./views/home-page/home-page";
import CreateCaptionPage from "./views/create-caption-page/create-caption-page";
import { useDispatch } from "react-redux";
import {
  setCaptions,
  setTags,
  setLoading
} from "./redux/caption/caption.action";
import API from "./API";

function App() {
  const dispatch = useDispatch();
  const fetchCaptions = async () => {
    dispatch(setLoading(true));
    await API.get("/caption")
      .then(response => {
        dispatch(setLoading(false));
        dispatch(setCaptions(response.data.data.captions));
      })
      .catch(error => {
        dispatch(setLoading(false));
        console.log(error.response);
      });
  };

  const fetchTags = async () => {
    dispatch(setLoading(true));
    await API.get("/tag")
      .then(response => {
        dispatch(setLoading(false));
        dispatch(setTags(response.data.data.tags));
      })
      .catch(error => {
        dispatch(setLoading(false));
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    fetchCaptions();
    fetchTags();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/create-caption" exact component={CreateCaptionPage} />
      </Switch>
    </div>
  );
}

export default App;
