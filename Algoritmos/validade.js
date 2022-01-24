function validade(dt, vd) {
    let data = new Date()

    const validadeDias = parseInt(vd.replace('d', ''))
    const validade = new Date(dt)

    validade.setDate(validade.getDate() + validadeDias)
  
    return validade > data;
}
  
    console.log(validade("2020-10-25T19:25:59.500Z", "500d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "30d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "1d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "0d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "31d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "32d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "60d"))
    console.log(validade("2018-01-01T20:00:00.000Z", "61d"))
