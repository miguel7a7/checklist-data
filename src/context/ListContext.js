import React, { createContext, useEffect, useReducer, useState } from "react";
import { types } from "../types/types";
import { listReducer } from "./listReducer";

export const ListContext = createContext();
let dataJson = require("../json/detalle.json");

export const ListProvider = ({ children }) => {
  const [EstadoEdit, setEstadoEdit] = useState(false);
  const [eleEdit, setEleEdit] = useState(null);
  const [dato1, setDato1] = useState(0);
  const [dato2, setDato2] = useState(0);
  const [dato3, setDato3] = useState(0);
  const [dato4, setDato4] = useState(0);
  const [dato5, setDato5] = useState(0);

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
    dispatch({
      type: types.EDICION_LIST,
      payload: el,
    });
    setEstadoEdit(false);
  };

  return (
    <ListContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        elementoEdit: state.elementoEdit,
        dato1,
        dato2,
        dato3,
        dato4,
        dato5,
        setDato1,
        setDato2,
        setDato3,
        setDato4,
        setDato5,
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
