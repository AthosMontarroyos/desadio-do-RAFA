//var final = prompt('Ate onde eu iremos?')
var final = 34
if (final <= 0) {
    alert('[ERROR]')
} else if (final == null){
    alert('[ERROR]')
}
var anterior = 0
var tabela = 1
do { console.log(`${tabela}`)
    var calculo = valor1 + valor2
    var valor1 = anterior //1
    var valor2 = tabela //1
    var anterior = tabela
    var tabela = calculo

    
   }  while (tabela < final)
