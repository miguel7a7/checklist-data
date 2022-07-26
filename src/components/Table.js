import React from 'react';

export const Table = () => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Función</th>
            <th scope="col">Categoría </th>
            <th scope="col">Descripción categoría</th>
            <th scope="col">Subcategoría</th>
            <th scope="col">Descripción Subcategoría</th>
            <th scope="col">Respuesta/comentario</th>
            <th scope="col">Valoración % cumplimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <br /> <a href="!#">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
