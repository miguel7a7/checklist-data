import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import { useForm } from "../hooks/useForm";

import "./modal.css";

export const Modal = () => {
  const { cerrarModal, eleEdit, editForm } = useContext(ListContext);

  const { FormValues, handleInput } = useForm(eleEdit);
  const { Valoración_cumplimiento } = FormValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Valoración_cumplimiento) {
      return null;
    }

    // Envio de formulario
    FormValues.Valoración_cumplimiento = parseInt(
      FormValues.Valoración_cumplimiento
    );
    editForm(FormValues);
  };

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__title">
          <h5>Actualizar Valoración?</h5>
        </div>

        <div className="modal__header">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="number"
                name="Valoración_cumplimiento"
                id="valor"
                placeholder="Nueva valoración"
                onChange={handleInput}
                value={Valoración_cumplimiento}
                min={0}
                max={100}
              />
            </div>
            <div className="modal__footer">
              <button className="btn btn-danger" onClick={cerrarModal}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
