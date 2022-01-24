const moldura = (coluna, linha) => {

    const inicioFim = (coluna) => {
      var resultado = ""
    
      for (var i = 0; i < coluna; i++) {
        if(i === 0 || i === coluna - 1) {
          resultado += "+"
        } else {
          resultado += "-"
        }
      }
    
      console.log(resultado)
    }
    
    const corpoMoldura = (coluna) => {
      var resultado = ""

      for (var i = 0; i < coluna; i++) {
        if(i === 0 || i === coluna - 1) {
          resultado += "-"
        } else {
          resultado += " "
        }
      }
      console.log(resultado)
    }
  
    for (var i = 0; i < linha ; i++) {
      if(i === 0 || i === linha -1) {
        inicioFim(coluna)
      } else {
        corpoMoldura(coluna)
      }
    }
  }
  
  moldura(9, 6)