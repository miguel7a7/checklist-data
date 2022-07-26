import React, { createContext, useEffect, useReducer, useState } from 'react';
import { types } from '../types/types';
import { listReducer } from './listReducer';

export const ListContext = createContext();
let dataJson = require('../json/detalle.json');

export const ListProvider = ({ children }) => {
  const [EstadoEdit, setEstadoEdit] = useState(false);
  const [eleEdit, setEleEdit] = useState(null);

  const initialState = {
    data: null,
    loading: false,
    elementoEdit: null,
  };
  const [state, dispatch] = useReducer(listReducer, initialState);

  useEffect(() => {
    cargadoList(dataJson);
  }, []);

  const cargadoList = (data) => {
    dispatch({
      type: types.CARGA_LIST,
      payload: data,
    });
  };

  const editarList = (el) => {
    setEstadoEdit(true);
    setEleEdit(el);
  };

  const cerrarModal = () => {
    setEstadoEdit(false);
  };

  const editForm = (el) => {
    console.log(el);
    dispatch({
      type: types.EDICION_LIST,
      payload: el,
    });
  };

  return (
    <ListContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        elementoEdit: state.elementoEdit,
        EstadoEdit,
        editarList,
        cerrarModal,
        eleEdit,
        editForm,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
