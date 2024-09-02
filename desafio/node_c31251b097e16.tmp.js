//var final = prompt('Ate onde eu iremos?')
var final = 34
if (final <= 0) {
    alert('[ERROR]')
} else if (final == null){
    alert('[ERROR]')
}
do {
    var anterior = 0
    var tabela = 1
    var calculo = anterior + tabela
    anterior = tabela
    tabela = calculo
    console.log(`${tabela}`)
   }  while (tabela < final)
