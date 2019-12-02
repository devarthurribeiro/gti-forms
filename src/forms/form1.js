const form1 = [
    { 
      name:'pcName',
      placeholder: 'Nome pc',
      type: 'text'
    },
    { 
      name:'code',
      placeholder: 'Código und.',
      type: 'text'
    },
    { 
      name:'tombo',
      placeholder: 'Tombo',
      type: 'text'
    },
    { 
      name:'serial',
      placeholder: 'Serial',
      type: 'text'
    },
    { 
      name:'state',
      placeholder: 'Estado',
      type: 'select',
      options: [
        { id: '1', title: 'EM USO' },
        { id: '2', title: 'IRRECUPERAVEL' },
        { id: '3', title: 'IRRECUPERAVEL(CANIBALIZADO)' },
        { id: '4', title: 'OCIOSO' },
      ]
    },
    { 
      name:'type',
      placeholder: 'Tipo do computador',
      type: 'select',
      options: [
        { id: '1', title: 'DESKTOP' },
        { id: '2', title: 'MINI-DESKTOP' },
        { id: '3', title: 'NOTEBOOK' },
        { id: '4', title: 'TABLET' },
        { id: '5', title: 'THIN CLIENT' },
        { id: '6', title: 'THIN CLIENT ALL-IN-ONE' },
  
      ]
    },
    {
      name:'brand',
      placeholder: 'Fabricante',
      type: 'text'
    },
    {
      name:'model',
      placeholder: 'Modelo',
      type: 'text'
    },
    {
      name:'so',
      placeholder: 'Sistema operacional',
      type: 'text',
      options: [
        { id: '1', title: 'Android' },
        { id: '2', title: 'Linux' },
        { id: '3', title: 'Windows' },
        { id: '4', title: 'Macos' },
        { id: '5', title: 'Dual boot win/lin' },
      ]
    },
    {
      name:'cpuBrand',
      placeholder: 'Fabricante cpu',
      type: 'text'
    },
    {
      name:'cpuModel',
      placeholder: 'Modelo cpu',
      type: 'text'
    },
    {
      name:'diskSize',
      placeholder: 'Capacidade HD',
      type: 'number'
    },
    {
      name:'ethernetMac',
      placeholder: 'MAC ADDRESS ETHERNET',
      type: 'text'
    },
    {
      name:'velocityEthernet',
      placeholder: 'MAC ADDRESS ETHERNET',
      type: 'text'
    },
    {
      name:'wifiMac',
      placeholder: 'MAC ADDRESS WIFI',
      type: 'text'
    },
    {
      name:'wifiType',
      placeholder: 'Padrao wifi',
      type: 'text',
      options: [
        { id: '1', title: '802. 11 a' },
        { id: '2', title: '802. 11 b' },
        { id: '3', title: '802. 11 g' },
        { id: '4', title: '802. 11 n' },
        { id: '5', title: '802. 11 ac' },
      ]
    },
  ]

  export default form1;