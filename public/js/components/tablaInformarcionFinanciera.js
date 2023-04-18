import React, { useState, useEffect } from 'react';

const CuerpoTabla = ({ elementos }) => {
  const obtenerColumnas = (elemento) => {
    if (elemento.link != null) {
      return (
        <tr>
          <td>{elemento.elemento}</td>
          <td style={{ width: '20%' }} class="text-center">
            <a href={elemento.link} target="_blank">
              <i class="documento bi bi-box-arrow-up-right text-dark"></i>
            </a>
          </td>
        </tr>
      );
    }

    const columnas = [];

    if (elemento.subelementos.length) {
      columnas.push(
        <tr>
          <td colspan="100" class="text-center">
            {elemento.elemento}
          </td>
        </tr>
      );

      const subelementos = elemento.subelementos;

      for (let j = 0; j < subelementos.length; j++) {
        const periodos = subelementos[j].periodos;
        const columnasSubelementos = [];

        for (let k = 0; k < periodos.length; k++) {
          const archivos = periodos[k].archivos;
          const archivosPeriodo = [];

          for (let l = 0; l < archivos.length; l++) {
            const nombreArchivo = archivos[l].split('.').pop();
            let claseIcono = 'bi-file-earmark-pdf-fill text-danger';
            let tituloArchivo = 'Archivo PDF';

            if (nombreArchivo == 'xls' || nombreArchivo == 'xlsx') {
              claseIcono = 'bi-file-earmark-excel-fill text-success';
              tituloArchivo = 'Archivo Excel';
            }

            if (nombreArchivo == 'doc' || nombreArchivo == 'docx') {
              claseIcono = 'bi-file-earmark-word-fill text-primary';
              tituloArchivo = 'Archivo Word';
            }

            archivosPeriodo.push(
              <a
                href={`http://storage.inaeba.edu.mx//public/getFile/${archivos[k]}`}
                target="_blank"
              >
                <i
                  className={`bi ${claseIcono} documento`}
                  title={tituloArchivo}
                ></i>
              </a>
            );
          }

          columnasSubelementos.push(
            <td className="text-center">
              {archivos.length ? (
                archivosPeriodo.map((archivoPeriodo) => archivoPeriodo)
              ) : (
                <i
                  class="bi bi-slash-circle-fill documento text-danger"
                  title="No aplica"
                ></i>
              )}
            </td>
          );
        }

        columnas.push(
          <tr>
            <td>{subelementos[j].subelemento}</td>
            {columnasSubelementos.map((columna) => columna)}
          </tr>
        );
      }
      return columnas;
    }

    columnas.push(<td>{elemento.elemento}</td>);
    let periodos = elemento.periodos;

    if (
      elementos.length == 1 &&
      periodos.length == 4 &&
      !periodos[0].archivos.length &&
      periodos[1].archivos.length &&
      !periodos[2].archivos.length &&
      periodos[3].archivos.length
    ) {
      const periodosAux = [periodos[1], periodos[3]];
      periodos = periodosAux;
    }

    for (let j = 0; j < periodos.length; j++) {
      const archivos = periodos[j].archivos;
      const archivosPeriodo = [];

      for (let k = 0; k < archivos.length; k++) {
        const nombreArchivo = archivos[k].split('.').pop();
        let claseIcono = 'bi-file-earmark-pdf-fill text-danger';
        let tituloArchivo = 'Archivo PDF';

        if (nombreArchivo == 'xls' || nombreArchivo == 'xlsx') {
          claseIcono = 'bi-file-earmark-excel-fill text-success';
          tituloArchivo = 'Archivo Excel';
        }

        if (nombreArchivo == 'doc' || nombreArchivo == 'docx') {
          claseIcono = 'bi-file-earmark-word-fill text-primary';
          tituloArchivo = 'Archivo Word';
        }

        archivosPeriodo.push(
          <a
            href={`http://storage.inaeba.edu.mx//public/getFile/${archivos[k]}`}
            target="_blank"
          >
            <i
              className={`bi ${claseIcono} documento`}
              title={tituloArchivo}
            ></i>
          </a>
        );
      }

      columnas.push(
        <td className="text-center">
          {archivos.length ? (
            archivosPeriodo.map((archivoPeriodo) => archivoPeriodo)
          ) : (
            <i
              class="bi bi-slash-circle-fill documento text-danger"
              title="No aplica"
            ></i>
          )}
        </td>
      );
    }

    return <tr>{columnas.map((columna) => columna)}</tr>;
  };

  return (
    <tbody>{elementos.map((elemento) => obtenerColumnas(elemento))}</tbody>
  );
};

export default CuerpoTabla;
