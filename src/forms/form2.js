const form2 = [
  {
    name: "location",
    placeholder: "Localizacao",
    type: "select",
    options: [
      { id: "1", title: "Região 1" },
      { id: "2", title: "Região 2" },
      { id: "3", title: "Região 3" }
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
    type: "select",
    options: [
      { id: "hp", title: "HP" },
      { id: "dell", title: "dell" },
      { id: "samsung", title: "samsung" },
      { id: "aoc", title: "aoc" }
    ]
  },
  {
    name: "model",
    placeholder: "Modelo",
    type: "text"
  },
  {
    name: "size",
    placeholder: "Tamanho",
    type: "text"
  },
  {
    name: "pcName",
    placeholder: "Nome pc",
    type: "text"
  }
];

export default form2;
