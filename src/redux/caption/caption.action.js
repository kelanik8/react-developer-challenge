import { SET_CAPTIONS, SET_TAGS, SET_LOADING } from "./caption.types";

export const setCaptions = captions => ({
  type: SET_CAPTIONS,
  payload: captions
});

export const setTags = tags => ({
  type: SET_TAGS,
  payload: tags
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});
