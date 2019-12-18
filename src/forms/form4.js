const form4 = [
  {
    name: "type",
    placeholder: "Tipo",
    type: "select",
    options: [
      { id: "1", title: "ESTABILIZADOR" },
      { id: "2", title: "NOBREAK" }
    ]
  },
  {
    name: "location",
    placeholder: "Localizacao",
    type: "select",
    options: [
      { id: "1", title: "Região 1" },
      { id: "2", title: "Região 2" },
      { id: "3", title: "Região 3" },
      { id: "4", title: "Região 4" }
    ]
  },
  {
    name: "tombo",
    placeholder: "Tombo",
    type: "text"
  },
  {
    name: "serial",
    placeholder: "Serial",
    type: "text"
  },
  {
    name: "brand",
    placeholder: "Fabricante",
    type: "text"
  },
  {
    name: "model",
    placeholder: "Modelo",
    type: "text"
  },
  {
    name: "power",
    placeholder: "Potencia",
    type: "text"
  },
  {
    name: "pcName",
    placeholder: "Nome pc",
    type: "text"
  }
];

export default form4;
