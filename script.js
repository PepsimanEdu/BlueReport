// Sistema de Datas

var start1 = window.document.getElementById('saudacao')
var data = new Date()
var dia = data.getDay()
var ano = data.getFullYear()
var mes1 = data.getMonth()
var hora = data.getHours()
var bomdia = String()
var mes2 = String()

if (hora >= 0 && hora < 12) {
    bomdia = 'Bom Dia'
} else if (hora >= 12 && hora < 18) {
    bomdia = 'Boa Tarde'
} else {
    bomdia = 'Boa Noite'
}

switch(mes1) {
    case 1:
        mes2 = 'Janeiro'
        break
    case 2:
        mes2 = 'Fevereiro'
        break
    case 3:
        mes2 = 'Março'
        break
    case 4:
        mes2 = 'Abril'
        break
    case 5:
        mes2 = 'Maio'
        break
    case 6:
        mes2 = 'Junho'
        break
    case 7:
        mes2 = 'Julho'
        break
    case 8:
        mes2 = 'Agosto'
        break
    case 9:
        mes2 = 'Setembro'
        break
    case 10:
        mes2 = 'Outubro'
        break
    case 11:
        mes2 = 'Novembro'
        break
    case 12:
        mes2 = 'Dezembro'
        break
}

start1.innerHTML = `${bomdia} ! - ${dia} de ${mes2} de ${ano}`

var telargura = window.innerWidth;

console.log(`${telargura}`)

