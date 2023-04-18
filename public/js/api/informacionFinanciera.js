const { useState, useEffect } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

const InformacionFinanciera = () => {
    const [cargando, setCargando] = useState(true);
    const [informacionFinanciera, setInformacionFinanciera] = useState([]);
    const URL_API_TOKEN =
    'https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024';
    const URL_API_INFORMACION_FINANCIERA = 'https://dhernandeza.inaeba.edu.mx/public/getNoticiaActiva/';
    const URL_API_STORAGE = 'https://storage.inaeba.edu.mx/public/getFile/';

    const getInformacionFinanciera = () => {
        /* axios
        .post(URL_API_TOKEN)
        .then(({ data: { access_token } }) => {
            if (access_token) {
                axios
                .get(`${URL_API_INFORMACION_FINANCIERA + idNoticia}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then(({ data }) => {
                    if (data) setInformacionFinanciera(data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        })
        .catch((error) => console.log(error)); */

        const data = [
            {
              "id_seccion": 10,
              "seccion": "Información Anual",
              "rubros": [
                {
                  "id_rubro": 16,
                  "rubro": "Ingreso",
                  "elementos": [
                    {
                      "id_elemento": 61,
                      "elemento": "Iniciativa de Ingresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["Estadias 2023.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 62,
                      "elemento": "Información Adicional a la Iniciativa de Ingresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": []
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 63,
                      "elemento": "Dictámenes Acuerdo y Actas ",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": [
                            "Entrega de Informe Final de Estadía al Centro de Información.pdf.pdf"
                          ]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 64,
                      "elemento": "Ley de Ingresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["Josué Israel Durán Alberto.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 65,
                      "elemento": "Calendario de Ingresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": [
                            "Josué Israel Durán Alberto.pdf.pdf",
                            "excel1.xlsx.xlsx"
                          ]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 17,
                  "rubro": "Egreso",
                  "elementos": [
                    {
                      "id_elemento": 66,
                      "elemento": "Proyecto de presupuesto de egresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["archivo1.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 67,
                      "elemento": "Información Adicional al proyecto de presupuesto de egresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": []
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 18,
                  "rubro": "Presupuesto Basado en Resultados",
                  "elementos": [
                    {
                      "id_elemento": 68,
                      "elemento": "PBR",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["Estadias 2023.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 19,
                  "rubro": "Información Disciplina Financiera",
                  "elementos": [
                    {
                      "id_elemento": 69,
                      "elemento": "Proyecciones de Ingresos",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["excel1.xlsx.xlsx", "archivo1.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 70,
                      "elemento": "Proyecciones de Egresos\t",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["excel1.xlsx.xlsx", "archivo2.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                }
              ]
            },
            {
              "id_seccion": 11,
              "seccion": "Información Trimestral",
              "rubros": [
                {
                  "id_rubro": 20,
                  "rubro": "Información contable",
                  "elementos": [
                    {
                      "id_elemento": 71,
                      "elemento": "Estado de actividades/Resultados",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo3.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo3.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 72,
                      "elemento": "Estado de situación financiera",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 73,
                      "elemento": "Estado de variación en la hacienda pública\t",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 74,
                      "elemento": "Notas a los estados financieros:",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": []
                        }
                      ],
                      "subelementos": [
                        {
                          "id_subelemento": 16,
                          "subelemento": "Desglose y Memoria",
                          "link": null,
                          "periodos": [
                            {
                              "periodo": "1er.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            },
                            {
                              "periodo": "2do.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            },
                            {
                              "periodo": "3er.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            },
                            {
                              "periodo": "4to.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            }
                          ]
                        },
                        {
                          "id_subelemento": 17,
                          "subelemento": "Gestión Administrativa",
                          "link": null,
                          "periodos": [
                            {
                              "periodo": "1er.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            },
                            {
                              "periodo": "2do.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            },
                            {
                              "periodo": "3er.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            },
                            {
                              "periodo": "4to.Trim",
                              "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id_rubro": 21,
                  "rubro": "Información presupuestaria",
                  "elementos": [
                    {
                      "id_elemento": 75,
                      "elemento": "Estado analítico de ingresos CE",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 76,
                      "elemento": "Estado analítico de ingresos CFF\t",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo1.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 22,
                  "rubro": "Información programática",
                  "elementos": [
                    {
                      "id_elemento": 77,
                      "elemento": "Gasto por categoría programática",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 78,
                      "elemento": "Programas y proyectos de inversión",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 23,
                  "rubro": "Inventario de bienes",
                  "elementos": [
                    {
                      "id_elemento": 79,
                      "elemento": "Relación de Bienes Muebles",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 24,
                  "rubro": "Ejercicio presupuestario",
                  "elementos": [
                    {
                      "id_elemento": 80,
                      "elemento": "Ejercicios presupuestario",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 81,
                      "elemento": "Aportación Federal para la Salud",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": []
                        }
                      ],
                      "subelementos": []
                    },
                    {
                      "id_elemento": 82,
                      "elemento": "Aportación a la Infraestructura Social (FAIS)\t",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": []
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": []
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 25,
                  "rubro": "Información Disciplina Financiera",
                  "elementos": [
                    {
                      "id_elemento": 83,
                      "elemento": "Estado de Situación financiera",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "2do.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "3er.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        },
                        {
                          "periodo": "4to.Trim",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                }
              ]
            },
            {
              "id_seccion": 12,
              "seccion": "Cuenta Pública",
              "rubros": [
                {
                  "id_rubro": 26,
                  "rubro": "Cuenta Pública",
                  "elementos": [
                    {
                      "id_elemento": 84,
                      "elemento": "Cuenta Pública",
                      "link": "http://portaldgi.guanajuato.gob.mx/CuentaPublica/public/main",
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": []
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 27,
                  "rubro": "Información Disciplina Financiera",
                  "elementos": [
                    {
                      "id_elemento": 85,
                      "elemento": "Guía de cumplimiento",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["archivo2.pdf.pdf", "excel1.xlsx.xlsx"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                },
                {
                  "id_rubro": 28,
                  "rubro": "Manual de Contabilidad",
                  "elementos": [
                    {
                      "id_elemento": 87,
                      "elemento": "Manual de Contabilidad del INAEBA",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "Descarga",
                          "archivos": ["archivo2.pdf.pdf"]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                }
              ]
            },
            {
              "id_seccion": 13,
              "seccion": "Información Semestral",
              "rubros": [
                {
                  "id_rubro": 29,
                  "rubro": "Información Disciplina Financiera",
                  "elementos": [
                    {
                      "id_elemento": 88,
                      "elemento": "Dictámenes Acuerdo y Actas",
                      "link": null,
                      "periodos": [
                        {
                          "periodo": "1er.Semestre",
                          "archivos": [
                            "Plantilla_del_informe_final_Lic-Ing_Leon_2022_.docx.docx",
                            "Estadias 2023.pdf.pdf"
                          ]
                        },
                        {
                          "periodo": "2do.Semestre",
                          "archivos": [
                            "excel1.xlsx.xlsx",
                            "Plantilla_del_informe_final_Lic-Ing_Leon_2022_.docx.docx"
                          ]
                        }
                      ],
                      "subelementos": []
                    }
                  ]
                }
              ]
            }
        ];

        setInformacionFinanciera(data);
        setCargando(false);
    }

    const getEncabezadoTabla = (elementos) => {
        let encabezadoColumna1 = "Documento";
        let encabezadosColumna2 = ["Descarga"];

        for (let i = 0; i <= elementos.length; i++) {
            if (elementos[i].link) {
                encabezadoColumna1 = "Nombre";
                encabezadosColumna2 = ['Ir a'];
                break;
            }

            let periodos = elementos[i].periodos;

            if (periodos.length > 1) {
                periodos = periodos.map(({ periodo, archivos }) => {
                    let periodoAux = periodo.split(".");
                    periodoAux = `${periodoAux[0]}. ${periodoAux[1]}${periodos.length == 4 ? "." : ""}`;

                    return { periodo: periodoAux, archivos };
                });
            }

            if (
                elementos.length == 1 &&
                periodos.length == 4 &&
                !periodos[0].archivos.length &&
                periodos[1].archivos.length &&
                !periodos[2].archivos.length &&
                periodos[3].archivos.length
            ) {
                encabezadosColumna2 = ["1er. Semestre", "2do. Semestre"];
                break;
            }

            if (periodos.length) {
                let periodosAux = [];

                for (let j = 0; j < periodos.length; j++) {
                    periodosAux.push(periodos[j].periodo);
                }

                encabezadosColumna2 = periodosAux;
                break;
            }
        }

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
              const columnasSubelementos = [];
              const anchoColumnaNombre = periodos.length > 1 ? "60%"  : "80%";
              const anchoColumnaArchivo = periodos.length > 1 ? "10%"  : "20%";

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

              columnas.push(
                <tr>
                  <td style={{ width: anchoColumnaNombre }}>{subelementos[j].subelemento}</td>
                  {columnasSubelementos.map((columna) => columna)}
                </tr>
              );
            }

            return columnas;
        }

        columnas.push(<td style={{ width: elemento.periodos.length > 1 ? "60%"  : "80%" }}>{elemento.elemento}</td>);
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

        const anchoColumnaArchivo = periodos.length > 1 ? "10%"  : "20%";

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
                            <>
                                <h2>{ seccion }</h2>
                                { i == 0 ? <h4>Transparencia y Difusión de la Información Financiera LGCG</h4> : <></> }
                                <div className="wrapper grid3">
                                    {
                                        rubros.map(({ rubro, elementos }) =>  (
                                            <>
                                                { (rubro.toUpperCase().trim() != elementos[0]?.elemento.toUpperCase().trim()) && (!rubro.toUpperCase().trim().includes("CUENTA PÚBLICA" || "CUENTA PUBLICA")) ? <p className="tittle-tra tabtit2">{ rubro }</p> : <></> }
                                                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                                    <table className="table table-striped table-hover table-bordered">
                                                        { getEncabezadoTabla(elementos) }
                                                        { getCuerpoTabla(elementos) }
                                                    </table>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </>
                        )
                    })
                 : <></>
            }
        </>
    );
}

ReactDOM.render(<InformacionFinanciera />, document.getElementById("informacionFinanciera"));
