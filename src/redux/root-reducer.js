import { combineReducers } from "redux";

import { captionReducer } from "./caption/caption.reducer";

const rootReducer = combineReducers({
  caption: captionReducer
});

export default rootReducer;
