const form1 = [
  {
    name: "pcName",
    placeholder: "Nome computador",
    type: "text"
  },
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
    name: "state",
    placeholder: "Estado",
    type: "select",
    options: [
      { id: 1, title: "EM USO" },
      { id: 2, title: "IRRECUPERAVEL" },
      { id: 3, title: "IRRECUPERAVEL(CANIBALIZADO)" },
      { id: 4, title: "OCIOSO" }
    ]
  },
  {
    name: "type",
    placeholder: "Tipo do computador",
    type: "select",
    options: [
      { id: "DESKTOP", title: "DESKTOP" },
      { id: "MINI-DESKTOP", title: "MINI-DESKTOP" },
      { id: "NOTEBOOK", title: "NOTEBOOK" },
      { id: "TABLET", title: "TABLET" },
      { id: "THIN-CLIENT", title: "THIN-CLIENT" },
      { id: "ALL-IN-ONE", title: "ALL-IN-ONE" }
    ]
  },
  {
    name: "brand",
    placeholder: "Fabricante",
    type: "select",
    options: [
      { id: "hp", title: "HP" },
      { id: "dell", title: "DELL" },
      { id: "lenovo", title: "Lenovo" }
    ]
  },
  {
    name: "model",
    placeholder: "Modelo",
    type: "select",
    options: [
      { id: "hp-compaq", title: "HP compaq 60005-pro small " },
      { id: "hp-ed-800", title: "HP Elitedesk 800glsff" },
      { id: "hp-ed-705", title: "HP Elitedesk 705g2-mini" },
      { id: "hp-ed-800g3", title: "HP Elitedesk 800g3sff" },
      { id: "dell-op-7050", title: "Dell Optiplex 7050" },
      { id: "thinkcentre", title: "Lenovo thinkcentre" }
    ]
  },
  {
    name: "so",
    placeholder: "Sistema operacional",
    type: "select",
    options: [
      { id: "Android", title: "Android" },
      { id: "Linux", title: "Linux" },
      { id: "Windows", title: "Windows" },
      { id: "Macos", title: "Macos" },
      { id: "Dual boot win/lin", title: "Dual boot win/lin" }
    ]
  },
  {
    name: "cpuBrand",
    placeholder: "Fabricante cpu",
    type: "select",
    options: [
      { id: "intel", title: "Intel" },
      { id: "amd", title: "Amd" }
    ]
  },
  {
    name: "cpuModel",
    placeholder: "Modelo cpu",
    type: "select",
    options: [
      { id: "i3", title: "i3" },
      { id: "i5", title: "i5" },
      { id: "i7", title: "i7" },
      { id: "amd", title: "Amd" }
    ]
  },
  {
    name: "ramSize",
    placeholder: "Capacidade RAM",
    type: "select",
    options: [
      { id: 2, title: "2gb" },
      { id: 4, title: "4gb" },
      { id: 8, title: "8gb" },
      { id: 16, title: "16gb" }
    ]
  },
  {
    name: "diskSize",
    placeholder: "Capacidade disco",
    type: "select",
    options: [
      { id: 320, title: "320gb" },
      { id: 500, title: "500gb" },
      { id: 1000, title: "1tb" },
      { id: 2000, title: "2tb" }
    ]
  },
  {
    name: "ethernetMac",
    placeholder: "Mac Address ethernet",
    type: "text"
  },
  {
    name: "velocityEthernet",
    placeholder: "Velocidade ethernet",
    type: "select",
    options: [
      { id: "100mb", title: "100mb" },
      { id: "1gb", title: "1gb" }
    ]
  },
  {
    name: "wifiMac",
    placeholder: "MAC address wifi",
    type: "text"
  },
  {
    name: "wifiType",
    placeholder: "Padrao wifi",
    type: "select",
    options: [
      { id: "a", title: "802. 11 a" },
      { id: "b", title: "802. 11 b" },
      { id: "c", title: "802. 11 g" },
      { id: "n", title: "802. 11 n" },
      { id: "ac", title: "802. 11 ac" }
    ]
  }
];

export default form1;
