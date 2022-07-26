import { types } from '../types/types';

export const listReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CARGA_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
