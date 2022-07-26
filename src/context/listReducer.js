import { types } from "../types/types";

export const listReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CARGA_LIST:
      return {
        ...state,
        data: action.payload,
      };
    case types.EDICION_LIST:
      return {
        ...state,
        data: state.data.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    default:
      return state;
  }
};
