var primeiro = 0
var final = prompt('Ate onde eu iremos?')
console.log(`${final}`)
if (final <= 0) {
    alert('[ERROR]')
} else if (final == null){
    alert('[ERROR]') }
    var numeroanterior = 0
    var numeroproxterior = 1
    var tabela = 0
while(tabela < final) {

   
    

    var somadosnumb = numeroanterior + numeroproxterior
    //1
    let numeroanterior1 = numeroproxterior
    //1
    let numeroproxterior1 = somadosnumb
    //1
    var numeroproxterior = numeroproxterior1
    var numeroanterior = numeroanterior1
    var tabela = somadosnumb
    alert(`${tabela}`)
}

