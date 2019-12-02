const form3 = [
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
      name:'type',
      placeholder: 'Locada ou própria',
      type: 'select',
      options: [
        { id: '1', title: 'PRÓPRIA' },
        { id: '2', title: 'LOCADA' },
      ]
    },
    { 
      name:'type',
      placeholder: 'Tipo do impressora',
      type: 'select',
      options: [
        { id: '1', title: 'LASER' },
        { id: '2', title: 'JATO DE TINTA' },
        { id: '3', title: 'MATRICIAL' }
  
      ]
    },
    { 
        name:'type',
        placeholder: 'Conexão',
        type: 'select',
        options: [
          { id: '1', title: 'REDE' },
          { id: '2', title: 'USB' },
    
        ]
      },
    {
      name:'shared',
      placeholder: 'Compartilhada',
      type: 'text',
      options: [
        { id: '1', title: 'Sim' },
        { id: '2', title: 'Não' }
      ]
    }
  ]

  export default form3;