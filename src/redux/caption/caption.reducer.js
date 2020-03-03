import { SET_CAPTIONS, SET_TAGS, SET_LOADING } from "./caption.types";

const INITAL_STATE = {
  captions: [],
  tags: [],
  isLoading: false
};

export const captionReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SET_CAPTIONS:
      return {
        ...state,
        captions: action.payload
      };
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
