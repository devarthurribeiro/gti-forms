const form3 = [
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
    name: "type",
    placeholder: "Locada ou própria",
    type: "select",
    options: [
      { id: "propria", title: "PRÓPRIA" },
      { id: "locada", title: "LOCADA" }
    ]
  },
  {
    name: "type",
    placeholder: "Tipo do impressora",
    type: "select",
    options: [
      { id: "laser", title: "LASER" },
      { id: "jato", title: "JATO DE TINTA" },
      { id: "matricial", title: "MATRICIAL" }
    ]
  },
  {
    name: "typeConnection",
    placeholder: "Conexão",
    type: "select",
    options: [
      { id: "network", title: "REDE" },
      { id: "usb", title: "USB" }
    ]
  },
  {
    name: "shared",
    placeholder: "Compartilhada",
    type: "select",
    options: [
      { id: 1, title: "Sim" },
      { id: 0, title: "Não" }
    ]
  }
];

export default form3;
