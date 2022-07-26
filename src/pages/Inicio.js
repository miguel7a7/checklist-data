import React from 'react';
import { Table } from '../components/Table';

import './styles/inicio.css';

let data = require('../json/detalle.json');

export const Inicio = () => {
  console.log(data);
  return (
    <div className="inicio__container">
      <h2>CheckList</h2>
      <Table />
    </div>
  );
};
