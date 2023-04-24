const { useState, useEffect } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

const InformacionFinanciera = () => {
    const [cargando, setCargando] = useState(true);
    const [informacionFinanciera, setInformacionFinanciera] = useState([]);
    const URL_API_TOKEN =
    "https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024";
    const URL_API_INFORMACION_FINANCIERA = "https://dhernandeza.inaeba.edu.mx/public/getNoticiaActiva/";
    const URL_API_STORAGE = "https://storage.inaeba.edu.mx/public/getFile/";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const anio = urlParams.get("year");

    const ordenarInformacionFinanciera = (data) => {
        data.sort((a, b) => a.id_seccion - b.id_seccion);

        for (let i = 0; i < data.length; i++) {
            data[i].rubros.sort((a, b) => a.id_rubro - b.id_rubro);

            for (let j = 0; j < data[i].rubros.length; j++) {
                data[i].rubros[j].elementos.sort((a, b) => a.id_elemento - b.id_elemento);

                for (let k = 0; k < data[i].rubros[j].elementos.length; k++) {
                    data[i].rubros[j].elementos[k].subelementos.sort((a, b) => a.id_subelemento - b.id_subelemento);
                }
            }
        }

        return data;
    }

    const getInformacionFinanciera = () => {
        /* axios
        .post(URL_API_TOKEN)
        .then(({ data: { access_token } }) => {
            if (access_token) {
                axios
                .get(`${URL_API_INFORMACION_FINANCIERA + anio}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then(({ data }) => {
                    if (data) {
                        data = ordenarInformacionFinanciera(data);
                        setInformacionFinanciera(data);
                        setCargando(false);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        })
        .catch((error) => console.log(error)); */

        let data = [
            {
                "id_seccion": 1,
                "seccion": "Información Anual",
                "rubros": [
                    {
                        "id_rubro": 1,
                        "rubro": "Ingreso",
                        "elementos": [
                            {
                                "id_elemento": 1,
                                "elemento": "Iniciativa de Ingresos",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "mhKJUgSsxpStxcLmilJOSHGQ48QeHWUKiBHnMZgR.pdf"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 2,
                                "elemento": "Información Adicional a la Iniciativa de Ingresos",
                                "link": null,
                                "periodos": [],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 3,
                                "elemento": "Dictámenes Acuerdo y Actas",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "rvUjHpQpVVucvgS4FLXhXU398GptUwM3zVmHq6sz.pdf"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 4,
                                "elemento": "Ley de Ingresos",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "FSQOUs38tLApOPBFNztjqCSdEPhYkrh0YfCoN99K.pdf"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 5,
                                "elemento": "Calendario de Ingresos",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "M9jMSQi5Ca839ZM66hKwrvEp0PipajgPGDCQjGBR.pdf",
                                            "gZsOiTh0IXT0Wh20rTmzTq2Tx5kv0Nly3nniDWwQ.xlsx"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            }
                        ]
                    },
                    {
                        "id_rubro": 2,
                        "rubro": "Egreso",
                        "elementos": [
                            {
                                "id_elemento": 6,
                                "elemento": "Proyecto de presupuesto de egresos",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "fS2UUD74RwkoW9LsRkJ1WhbFrPeGTDgHsWPxc0aX.pdf"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 7,
                                "elemento": "Información Adicional al proyecto de presupuesto de egresos",
                                "link": null,
                                "periodos": [],
                                "subelementos": []
                            }
                        ]
                    },
                    {
                        "id_rubro": 3,
                        "rubro": "Presupuesto Basado en Resultados",
                        "elementos": [
                            {
                                "id_elemento": 13,
                                "elemento": "Presupuesto Basado en Resultados",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "oLef8pTLsTCE9jMIq8DtGPR7VKPsAvULBxWxWMUl.pdf"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            }
                        ]
                    },
                    {
                        "id_rubro": 4,
                        "rubro": "Información Disciplina Financiera",
                        "elementos": [
                            {
                                "id_elemento": 14,
                                "elemento": "Proyecciones de Ingresos",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "3q2ehEJMYeqObGqtGOcGthCxI5JGEUGdcl1yztVW.xlsx"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            }
                        ]
                    }
                ]
            },
            {
                "id_seccion": 2,
                "seccion": "Información Trimestral",
                "rubros": [
                    {
                        "id_rubro": 5,
                        "rubro": "Información contable",
                        "elementos": [
                            {
                                "id_elemento": 8,
                                "elemento": "Estado de Actividades/Resultados",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "1er.Trim",
                                        "archivos": [
                                            "hNAUJUNwJBwzfQj1AJiCZcO1HlDPa1qHcdGkjGBx.pdf",
                                            "WjoyzzQy4WwuNhuerY1HMZgHQSwirOFAKiFvpw1x.xlsx"
                                        ]
                                    },
                                    {
                                        "periodo": "2do.Trim",
                                        "archivos": [
                                            "OjclXwB5BgaTuS8rbfNjhgFbhVf6llQFyUv4uw1V.pdf",
                                            "ZiLgfT7J2AIgHbRHgLfrTfHeWAwj0jKZmICAfzvT.xlsx"
                                        ]
                                    },
                                    {
                                        "periodo": "3er.Trim",
                                        "archivos": [
                                            "twSNOeZ8IbIg2S2TfKv3jMriv1virCIfpDw6qQn3.pdf",
                                            "tkV8KegB47XPr3IIeMPi3WZzWhFNQBaKSnGiR4oW.xlsx"
                                        ]
                                    },
                                    {
                                        "periodo": "4to.Trim",
                                        "archivos": [
                                            "0b9ZDfOJvPfzzb1oO5zD48kUelrSsH6hkPY05wNE.pdf",
                                            "nAFTp0Iz6QjEtgx0UyWwlCKWGCaXJ7iLBbEHVWZe.xlsx"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 9,
                                "elemento": "Estado de situación financiera",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "1er.Trim",
                                        "archivos": [
                                            "xfM5jDPI3o0T2nXuRfJamGVW93aqXJuDFHu8gOci.pdf",
                                            "4AH3DfECuWx9wY3Y6y24v9o0jWyHFBYc9zHfjnee.xlsx"
                                        ]
                                    },
                                    {
                                        "periodo": "2do.Trim",
                                        "archivos": [
                                            "ro3KRsHhfsj1pss1EY2cpVb53xUYZRmZriDLDoBu.pdf",
                                            "m8lhJwyI1sHEkOEMgQscPOyhC9ZKO9O8A6pVD50C.xlsx"
                                        ]
                                    },
                                    {
                                        "periodo": "3er.Trim",
                                        "archivos": [
                                            "HKzSIjOdb7PR55cQ9kcTHp4WqsYqAwBtpHBiDAix.pdf",
                                            "BfnVz6jxAwupGmNkdSgxgLzE1J6M05cpgDdCdNJq.xlsx"
                                        ]
                                    },
                                    {
                                        "periodo": "4to.Trim",
                                        "archivos": [
                                            "tTOKQpcIoR82MYJoURNeOVa7MyzGscY1z9eGEPg6.pdf",
                                            "CAw110w3pPWC0uMKPb40xFmLwzN9HRULjeHjIAhp.xlsx"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 15,
                                "elemento": "Estado de variación en la hacienda pública:",
                                "link": null,
                                "periodos": [],
                                "subelementos": [
                                    {
                                        "id_subelemento": 1,
                                        "subelemento": "Desglose y Memoria",
                                        "link": null,
                                        "periodos": [
                                            {
                                                "periodo": "1er.Trim",
                                                "archivos": [
                                                    "8sQacnNWZbq6IXaobbC3TwXLn3TLoxXGnGCDI8TY.pdf"
                                                ]
                                            },
                                            {
                                                "periodo": "2do.Trim",
                                                "archivos": [
                                                    "ClpoExXKsyepiT4VnHU0yuFK9wcN1EFrhi7O7YDm.xlsx"
                                                ]
                                            },
                                            {
                                                "periodo": "3er.Trim",
                                                "archivos": [
                                                    "Jl4fZohPRX7YDM3heJuhJVzAYGtTr2CYMQAtQxGl.doc"
                                                ]
                                            },
                                            {
                                                "periodo": "4to.Trim",
                                                "archivos": []
                                            }
                                        ]
                                    },
                                    {
                                        "id_subelemento": 2,
                                        "subelemento": "Gestión Administrativa",
                                        "link": null,
                                        "periodos": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id_rubro": 6,
                        "rubro": "Información presupuestaria",
                        "elementos": []
                    },
                    {
                        "id_rubro": 7,
                        "rubro": "Información programática",
                        "elementos": []
                    },
                    {
                        "id_rubro": 8,
                        "rubro": "Inventario de bienes",
                        "elementos": []
                    },
                    {
                        "id_rubro": 9,
                        "rubro": "Ejercicio presupuestario",
                        "elementos": []
                    },
                    {
                        "id_rubro": 10,
                        "rubro": "Información Disciplina Financiera",
                        "elementos": []
                    }
                ]
            },
            {
                "id_seccion": 3,
                "seccion": "Información Anual",
                "rubros": [
                    {
                        "id_rubro": 11,
                        "rubro": "Cuenta Pública",
                        "elementos": [
                            {
                                "id_elemento": 10,
                                "elemento": "Cuenta pública",
                                "link": "http://portaldgi.guanajuato.gob.mx/CuentaPublica/public/main",
                                "periodos": [],
                                "subelementos": []
                            }
                        ]
                    },
                    {
                        "id_rubro": 12,
                        "rubro": "Información Disciplina Financiera",
                        "elementos": [
                            {
                                "id_elemento": 11,
                                "elemento": "Guía de cumplimiento",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "nAUuaeMVtpGmrIiPMW9DCiUZMPKownBiivME6W3P.pdf",
                                            "LxjKrCTq2Etr9FMtTy7NmVN9OXMu8AzsSOGKton3.xlsx"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            }
                        ]
                    },
                    {
                        "id_rubro": 13,
                        "rubro": "Manual de Contabilidad",
                        "elementos": [
                            {
                                "id_elemento": 12,
                                "elemento": "Manual de Contabilidad del INAEBA",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "Descarga",
                                        "archivos": [
                                            "vQy5WQwpWbPGuw3TW2oB5eluJVRe24rfSZvIT8yg.pdf"
                                        ]
                                    }
                                ],
                                "subelementos": []
                            }
                        ]
                    }
                ]
            },
            {
                "id_seccion": 4,
                "seccion": "Información Cuatrimestral",
                "rubros": [
                    {
                        "id_rubro": 14,
                        "rubro": "Ingreso",
                        "elementos": [
                            {
                                "id_elemento": 16,
                                "elemento": "Dictámenes Acuerdo y Actas",
                                "link": null,
                                "periodos": [
                                    {
                                        "periodo": "1er.Cuat",
                                        "archivos": [
                                            "ZUUXEYiEiCLcGrHpicG53tlGANJjPRXihcuCjkS2.pdf",
                                            "3KvaAA7yiQPXYFvlxHt6Gge7KWU0W0geE0Uxa1bq.doc"
                                        ]
                                    },
                                    {
                                        "periodo": "2do.Cuat",
                                        "archivos": [
                                            "IFcTu1m6lUpMnSVKPJqmiaOWjKyIK5CDHlog6Sst.pdf",
                                            "Cb0kMB2nlsXDqafPNpWwEaNrEhLAUqRkvsfEQPTW.doc"
                                        ]
                                    },
                                    {
                                        "periodo": "3er.Cuat",
                                        "archivos": []
                                    }
                                ],
                                "subelementos": []
                            },
                            {
                                "id_elemento": 22,
                                "elemento": "Ley de Ingresos",
                                "link": null,
                                "periodos": [],
                                "subelementos": []
                            }
                        ]
                    }
                ]
            },
            {
                "id_seccion": 5,
                "seccion": "Información Mensual",
                "rubros": [
                    {
                        "id_rubro": 15,
                        "rubro": "Inventario de bienes",
                        "elementos": [
                            {
                                "id_elemento": 21,
                                "elemento": "Estado de Actividades/Resultados",
                                "link": null,
                                "periodos": [],
                                "subelementos": [
                                    {
                                        "id_subelemento": 8,
                                        "subelemento": "Ingreso",
                                        "link": "http://172.28.8.87:4400/subelemento/index/2023",
                                        "periodos": []
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id_seccion": 6,
                "seccion": "Información Bimestral",
                "rubros": []
            }
        ];
        data = ordenarInformacionFinanciera(data);
        setInformacionFinanciera(data);
        setCargando(false);
    }

    const getNombrePeriodo = (periodo) => {
        periodo = periodo.toUpperCase();
        const periodos = {
            "MES": "Mes",
            "BIME": "Bimestre",
            "TRIM": "Trim",
            "CUAT": "Cuatrimestre",
            "SEME": "Semestre"
        }

        return periodos[periodo];
    }

    const getNumPeriodosElemento = (elementos) => {
        let numEncabezadosColumna2 = [1];

        if (elementos && elementos.length) {
            for (let i = 0; i <= elementos.length; i++) {
                if (elementos[i]?.link)
                    numEncabezadosColumna2.push(1);

                let periodos = elementos[i]?.periodos;

                if (
                    elementos &&
                    elementos.length == 1 &&
                    periodos &&
                    periodos.length == 4 &&
                    !periodos[0].archivos.length &&
                    periodos[1].archivos.length &&
                    !periodos[2].archivos.length &&
                    periodos[3].archivos.length
                )
                    numEncabezadosColumna2.push(2);

                if (periodos && periodos.length) {
                    let periodosAux = [];

                    for (let j = 0; j < periodos.length; j++) {
                        periodosAux.push(periodos[j].periodo);
                    }

                    numEncabezadosColumna2.push(periodosAux.length);
                }
            }
        }

        numEncabezadosColumna2 = Math.max(...numEncabezadosColumna2);

        return numEncabezadosColumna2;
    }

    const getEncabezadoTabla = (elementos) => {
        let encabezadoColumna1 = "Documento";
        let encabezadosColumna2 = ["Descarga"];
        let encabezadosSubelementos = [];

        if (elementos && elementos.length) {
            for (let i = 0; i <= elementos?.length; i++) {
                if (elementos[i]?.link) {
                    encabezadoColumna1 = "Nombre";
                    encabezadosColumna2 = ["Ir a"];
                    break;
                }

                let periodos = elementos[i]?.periodos;

                if (periodos && periodos?.length > 1) {
                    periodos = periodos.map(({ periodo, archivos }) => {
                        let periodoAux = periodo.split(".");
                        periodoAux = `${periodoAux[0]}. ${getNombrePeriodo(periodoAux[1])}${periodos?.length == 4 ? "." : ""}`;

                        return { periodo: periodoAux, archivos };
                    });
                }

                if (
                    elementos &&
                    elementos.length == 1 &&
                    periodos &&
                    periodos.length == 4 &&
                    !periodos[0].archivos.length &&
                    periodos[1].archivos.length &&
                    !periodos[2].archivos.length &&
                    periodos[3].archivos.length
                ) {
                    encabezadosColumna2 = ["1er. Semestre", "2do. Semestre"];
                    break;
                }

                if (periodos && periodos.length) {
                    let periodosAux = [];

                    for (let j = 0; j < periodos.length; j++) {
                        periodosAux.push(periodos[j].periodo);
                    }

                    encabezadosColumna2 = periodosAux;
                    break;
                }

                if (elementos[i]?.subelementos && elementos[i]?.subelementos.length)
                    encabezadosSubelementos = [...encabezadosSubelementos, getEncabezadoSubelementos(elementos[i].subelementos)];
            }
        }

        if (encabezadosSubelementos.length)
            encabezadosSubelementos = encabezadosSubelementos.reduce((anterior, actual) => actual.length > anterior.length ? actual : anterior, []);

        encabezadosColumna2 = encabezadosColumna2.length > encabezadosSubelementos.length ? encabezadosColumna2 : encabezadosSubelementos;

        if (!Array.isArray(encabezadosColumna2)) encabezadosColumna2 = [encabezadosColumna2];

        const claseColumna2 = encabezadosColumna2.length == 1 ? "text-center" : "";

        return (
            <thead className="lt-head">
              <tr>
                <th>{encabezadoColumna1}</th>
                {encabezadosColumna2.map(encabezado => (
                  <th className={claseColumna2}>{encabezado}</th>
                ))}
              </tr>
            </thead>
        );
    }

    const getEncabezadoSubelementos = (subelementos) => {
        let encabezadosColumna2 = ["Descarga"];

        if (subelementos && subelementos.length) {
            for (let i = 0; i <= subelementos?.length; i++) {
                if (subelementos[i]?.link) {
                    encabezadosColumna2 = encabezadosColumna2.filter(encabezado => {
                        if (encabezado != ["Descarga"]) return encabezado
                    });
                    encabezadosColumna2 = [...encabezadosColumna2, ["Ir a"]];
                }

                let periodos = subelementos[i]?.periodos;

                if (periodos && periodos?.length > 1) {
                    periodos = periodos.map(({ periodo, archivos }) => {
                        let periodoAux = periodo.split(".");
                        periodoAux = `${periodoAux[0]}. ${getNombrePeriodo(periodoAux[1])}${periodos?.length == 4 ? "." : ""}`;

                        return { periodo: periodoAux, archivos };
                    });
                }

                if (
                    subelementos &&
                    subelementos.length == 1 &&
                    periodos &&
                    periodos.length == 4 &&
                    !periodos[0].archivos.length &&
                    periodos[1].archivos.length &&
                    !periodos[2].archivos.length &&
                    periodos[3].archivos.length
                ) {
                    encabezadosColumna2 = [...encabezadosColumna2, ["1er. Semestre", "2do. Semestre"]];
                }

                if (periodos && periodos.length) {
                    let periodosAux = [];

                    for (let j = 0; j < periodos.length; j++) {
                        periodosAux.push(periodos[j].periodo);
                    }

                    encabezadosColumna2 = [...encabezadosColumna2, periodosAux];
                }
            }
        }

        const encabezadosColumna2Aux = encabezadosColumna2.reduce((anterior, actual) => anterior.length > actual.length ? anterior : actual, []);
        encabezadosColumna2 = encabezadosColumna2Aux;

        return encabezadosColumna2;
    }

    const getColumnasTabla = (elementos, elemento) => {
        if (elemento.link != null) {
            return (
                <tr>
                    <td>{elemento.elemento}</td>
                    <td style={{ width: "20%" }} className="text-center">
                        <a href={elemento.link} target="_blank">
                        <i className="documento bi bi-box-arrow-up-right text-dark"></i>
                        </a>
                    </td>
                </tr>
            );
        }

        const columnas = [];

        if (elemento.subelementos.length) {
            columnas.push(
              <tr>
                <td colspan="100" className="text-center">
                  {elemento.elemento}
                </td>
              </tr>
            );
            const subelementos = elemento.subelementos;

            for (let j = 0; j < subelementos.length; j++) {
              const periodos = subelementos[j].periodos;
              const numPeriodos = getNumPeriodosElemento(subelementos)
              const columnasSubelementos = [];
              const anchoColumnaNombre = numPeriodos > 1 ? "60%"  : "80%";
              const anchoColumnaArchivo = numPeriodos > 1 ? "10%"  : "20%";

              for (let k = 0; k < numPeriodos; k++) {
                if (periodos[k]) {
                    const archivos = periodos[k].archivos;
                    const archivosPeriodo = [];

                    for (let l = 0; l < archivos.length; l++) {
                      const nombreArchivo = archivos[l].split(".").pop();
                      let claseIcono = "bi-file-earmark-pdf-fill text-danger";
                      let tituloArchivo = "Archivo PDF";

                      if (nombreArchivo == "xls" || nombreArchivo == "xlsx") {
                        claseIcono = "bi-file-earmark-excel-fill text-success";
                        tituloArchivo = "Archivo Excel";
                      }

                      if (nombreArchivo == "doc" || nombreArchivo == "docx") {
                        claseIcono = "bi-file-earmark-word-fill text-primary";
                        tituloArchivo = "Archivo Word";
                      }

                      archivosPeriodo.push(
                        <a
                          href={URL_API_STORAGE + archivos[k]}
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
                      <td className="text-center" style={{ width: anchoColumnaArchivo }}>
                        {archivos.length ? (
                          archivosPeriodo.map((archivoPeriodo) => archivoPeriodo)
                        ) : (
                          <i
                            className="bi bi-slash-circle-fill documento text-danger"
                            title="No aplica"
                          ></i>
                        )}
                      </td>
                    );
                }
                else {
                    columnasSubelementos.push(
                        <td className="text-center" style={{ width: anchoColumnaArchivo }}>
                            <i
                                className="bi bi-slash-circle-fill documento text-danger"
                                title="No aplica"
                            ></i>
                        </td>
                    );
                }
              }

              columnas.push(
                <tr>
                  <td style={{ width: anchoColumnaNombre }}>{subelementos[j].subelemento}</td>
                  {columnasSubelementos.map((columna) => columna)}
                </tr>
              );
            }

            return columnas;
        }

        columnas.push(<td style={{ width: elemento.periodos?.length > 1 ? "60%"  : "80%" }}>{elemento.elemento}</td>);
        let periodos = elemento.periodos;

        if (
        elementos &&
        elementos.length == 1 &&
        periodos &&
        periodos.length == 4 &&
        !periodos[0].archivos.length &&
        periodos[1].archivos.length &&
        !periodos[2].archivos.length &&
        periodos[3].archivos.length
        ) {
            const periodosAux = [periodos[1], periodos[3]];
            periodos = periodosAux;
        }

        const anchoColumnaArchivo = periodos?.length > 1 ? "10%"  : "20%";

        if (periodos && periodos.length) {
            for (let j = 0; j < periodos.length; j++) {
                const archivos = periodos[j].archivos;
                const archivosPeriodo = [];

                for (let k = 0; k < archivos.length; k++) {
                    const nombreArchivo = archivos[k].split(".").pop();
                    let claseIcono = "bi-file-earmark-pdf-fill text-danger";
                    let tituloArchivo = "Archivo PDF";

                    if (nombreArchivo == "xls" || nombreArchivo == "xlsx") {
                        claseIcono = "bi-file-earmark-excel-fill text-success";
                        tituloArchivo = "Archivo Excel";
                    }

                    if (nombreArchivo == "doc" || nombreArchivo == "docx") {
                        claseIcono = "bi-file-earmark-word-fill text-primary";
                        tituloArchivo = "Archivo Word";
                    }

                    archivosPeriodo.push(
                    <a
                        href={`${URL_API_STORAGE + archivos[k]}`}
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
                    <td className="text-center" style={{ width: anchoColumnaArchivo }}>
                        {archivos.length ? (
                            archivosPeriodo.map((archivoPeriodo) => archivoPeriodo)
                        ) : (
                            <i
                            className="bi bi-slash-circle-fill documento text-danger"
                            title="No aplica"
                            ></i>
                        )}
                    </td>
                );
            }
        } else {
            const numPeriodos = getNumPeriodosElemento(elementos);

            for (let i = 0; i < numPeriodos; i++) {
                columnas.push(
                    <td className="text-center" style={{ width: anchoColumnaArchivo }}>
                        <i
                            className="bi bi-slash-circle-fill documento text-danger"
                            title="No aplica"
                        ></i>
                    </td>
                );
            }
        }

        return <tr>{columnas.map((columna) => columna)}</tr>;
    }

    const getCuerpoTabla = (elementos) => <tbody>{elementos.map((elemento) => getColumnasTabla(elementos, elemento))}</tbody>;

    useEffect(() => getInformacionFinanciera(), []);

    return (
        <>
            {
                cargando ?
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem", color: "#000ea7"}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                informacionFinanciera.length > 0 ?
                    informacionFinanciera.map((data, i) =>  {
                        const { seccion, rubros } = data;

                        return (
                            rubros && rubros.length && rubros[0].elementos && rubros[0].elementos.length ?
                            <>
                                <h2>{ seccion }</h2>
                                { i == 0 ? <h4>Transparencia y Difusión de la Información Financiera LGCG</h4> : <></> }
                                <div className="wrapper grid3">
                                    {
                                        rubros.map(({ rubro, elementos }) =>  (
                                            elementos && elementos.length ? (
                                            <>
                                                { (rubro.toUpperCase().trim() != elementos[0]?.elemento.toUpperCase().trim()) && (!rubro.toUpperCase().trim().includes("CUENTA PÚBLICA" || "CUENTA PUBLICA")) ? <p className="tittle-tra tabtit2">{ rubro }</p> : <></> }
                                                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                                    <table className="table table-striped table-hover table-bordered">
                                                        { getEncabezadoTabla(elementos) }
                                                        { getCuerpoTabla(elementos) }
                                                    </table>
                                                </div>
                                            </>) :
                                            <></>
                                        ))
                                    }
                                </div>
                            </> :
                            <></>
                        )
                    })
                : <></>
            }
        </>
    );
}

ReactDOM.render(<InformacionFinanciera />, document.getElementById("informacionFinanciera"));
