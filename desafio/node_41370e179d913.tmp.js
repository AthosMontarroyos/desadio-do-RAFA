//var final = prompt('Ate onde eu iremos?')
var final = 34
if (final <= 0) {
    alert('[ERROR]')
} else if (final == null){
    alert('[ERROR]')
}
var anterior = 0
var tabela = 1
do {
    //alert(`${tabela}`)
    var numero1 = ''
    var numero2 = ''
    var soma = numero1 + numero2
    tabela = soma
    var numero1 = anterior
    var numero2 = tabela
    var tabela = soma
    console.log(`${tabela}`)
   }  while (tabela < final)
