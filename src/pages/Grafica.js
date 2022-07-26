import React, { useContext } from "react";
import { GraficaChart } from "../components/GraficaChart";
import { ListContext } from "../context/ListContext";

import "./styles/grafica.css";

export const Grafica = () => {
  const { data, setDato1, setDato2, setDato3, setDato4, setDato5 } = useContext(
    ListContext
  );

  if (!data) return;

  const newData1 = data.slice(0, 29);
  const sumall = newData1
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  const data1 = Math.round((sumall * 100) / 2900);
  setDato1(data1);

  const newData2 = data.slice(29, 68);
  const sumall2 = newData2
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  const data2 = Math.round((sumall2 * 100) / 3900);
  setDato2(data2);

  const newData3 = data.slice(68, 86);
  const sumall3 = newData3
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  const data3 = Math.round((sumall3 * 100) / 1800);
  setDato3(data3);

  const newData4 = data.slice(86, 102);
  const sumall4 = newData4
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  const data4 = Math.round((sumall4 * 100) / 1600);
  setDato4(data4);

  const newData5 = data.slice(102, 108);
  const sumall5 = newData5
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  const data5 = Math.round((sumall5 * 100) / 600);
  setDato5(data5);

  return (
    <div className="grafica__container">
      <div className="grafica__content">
        <h5>Promedio de valoración % cumplido</h5>
        <div className="grafica__contenedor">
          <GraficaChart />
        </div>
      </div>
    </div>
  );
};
