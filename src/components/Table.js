import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import { Modal } from "./Modal";

export const Table = () => {
  const { data, editarList, EstadoEdit } = useContext(ListContext);

  if (!data) return null;

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Función</th>
            <th scope="col">Categoría </th>
            <th scope="col">Descripción categoría</th>
            <th scope="col">Subcategoría</th>
            <th scope="col">Descripción Subcategoría</th>
            {/* <th scope="col">Respuesta/comentario</th> */}
            <th scope="col">Valoración % cumplimiento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <td>{el.Función}</td>
              <td>{el.Categoría}</td>
              <td>{el.Descripción_categoría}</td>
              <td>{el.Subcategoría}</td>
              <td>{el.Descripción_Subcategoría}</td>
              {/* <td>{el.Respuesta_comentario}</td> */}
              <td onDoubleClick={() => editarList(el)}>
                {el.Valoración_cumplimiento}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {EstadoEdit && <Modal />}
    </div>
  );
};
