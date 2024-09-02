//var final = prompt('Ate onde eu iremos?')
var final = 2000
if (final <= 0) {
    alert('[ERROR]')
} else if (final == null){
    alert('[ERROR]')
}
var anterior = 0
var tabela = 1
do {console.log(`${tabela}`) 
    var soma = anterior + tabela
    var anterior = tabela 
    var tabela = soma 
   }  while (tabela <= final)
