function classificador(integrantes) {

    const admin = integrantes.filter(integrante => (integrante.souEu === true))
      .map(integrante => (integrante.nome)) 
  
    const mods = integrantes.filter(integrante => (integrante.responsavel === true 
        && integrante.souEu === false))
      .map(integrante => (integrante.nome))
      .sort()
  
    const membros = integrantes.filter(integrante => (integrante.responsavel === false 
        && integrante.souEu === false))
      .map(integrante => (integrante.nome))
      .sort()
  
    const nomesOrganizados = [
        ...admin, 
        ...mods, 
        ...membros]
  
    return nomesOrganizados;
  }
  
  console.log(classificador([
    {
        souEu: false,
        responsavel: false,
        nome: 'Lucas'
    },
    {
        souEu: true,
        responsavel: true,
        nome: 'Thiago'
    },
    {
        souEu: false,
        responsavel: true,
        nome: 'Jesus'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Jorge'
    },
    {
        souEu: false,
        responsavel: true,
        nome: 'Gabriel'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Carlos'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Jeff'
    },
    {
        souEu: false,
        responsavel: true,
        nome: 'James'
    }
  ]))