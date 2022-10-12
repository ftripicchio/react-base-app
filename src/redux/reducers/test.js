/* eslint-disable import/no-anonymous-default-export */
import { TEST } from "../constants";

const initialState = {
  info: null,
};

export const doTest = (info) => {
  return {
    type: TEST,
    info,
  };
};


export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        info: action.info,
      };
    default:
      return state;
  }
};
