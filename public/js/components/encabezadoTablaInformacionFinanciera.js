import React, { useState, useEffect } from 'react';

const EncabezadoTabla = ({ elementos }) => {
  const [encabezadoColumna1, setEncabezadoColumna1] = useState('Documento');
  const [encabezadosColumna2, setEncabezadosColumna2] = useState(['Descarga']);

  useEffect(() => {
    for (let i = 0; i <= elementos.length; i++) {
      if (elementos[i].link) {
        setEncabezadoColumna1('Nombre');
        setEncabezadosColumna2(['Ir a']);
        break;
      }

      const periodos = elementos[i].periodos;

      if (
        elementos.length == 1 &&
        periodos.length == 4 &&
        !periodos[0].archivos.length &&
        periodos[1].archivos.length &&
        !periodos[2].archivos.length &&
        periodos[3].archivos.length
      ) {
        setEncabezadosColumna2(['1er.Semestre', '2do.Semestre']);
        return;
      }

      if (periodos.length) {
        let periodosAux = [];

        for (let j = 0; j < periodos.length; j++) {
          periodosAux.push(periodos[j].periodo);
        }

        setEncabezadosColumna2(periodosAux);
        break;
      }
    }
  }, []);

  return (
    <thead class="lt-head">
      <tr>
        <th>{encabezadoColumna1}</th>
        {encabezadosColumna2.map((encabezado) => (
          <th class="text-center">{encabezado}</th>
        ))}
      </tr>
    </thead>
  );
};

export default EncabezadoTabla;
