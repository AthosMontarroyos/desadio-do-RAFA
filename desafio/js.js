var final = prompt('Ate onde eu iremos?')
if (final <= 0) {
    alert('[ERROR]')
} else if (final == null){
    alert('[ERROR]')
}
var anterior = 0
var tabela = 1
do {alert(`${tabela}`) 
    var soma = anterior + tabela
    var anterior = tabela 
    var tabela = soma 
   }  while (tabela <= final)
