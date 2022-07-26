import { useContext } from "react";
import { ListContext } from "../context/ListContext";

export const useData = () => {
  const { dato1, dato2, dato3, dato4, dato5 } = useContext(ListContext);

  const data = {
    labels: [
      "IDENTIFICAR (ID)",
      "PROTEGER (PR)",
      "DETECTAR (DE)",
      "RESPONDER (RS)",
      "RECUPERAR (RC)",
    ],
    datasets: [
      {
        label: "Total",
        data: [dato1, dato2, dato3, dato4, dato5],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return { data };
};
