function contar() {
    var n1 = window.document.querySelector('input#ini')
    var n2 = window.document.querySelector('input#fim')
    var pas = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')

    if (n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: </br>'
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(pas.value)

        if (p <= 0) {
            window.alert('Passo inváliddo! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            for (var x = i; x <= f; x += p) { //contagem crescente
                res.innerHTML += `${x} &#128073`  // += aqui é concatenação com a linha 10
            }
        } else {
            for (var x = i; x >= f; x -= p) { //contagem regressiva
                res.innerHTML += `${x} &#128073`
            }
        }
        res.innerHTML += '&#127937'
    }
}

