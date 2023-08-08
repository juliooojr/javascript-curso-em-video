function gerar() {
    var n1 = window.document.querySelector('input#ini')
    var tab = window.document.querySelector('select#seltab')   

    if (n1.value.length == 0) {
        window.alert('Digite um número')
    } else {
        var n = Number(n1.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}






    // if (n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0) {
    //     res.innerHTML = 'Impossível contar!'
    // } else {
    //     res.innerHTML = 'Contando: </br>'
    //     var i = Number(n1.value)
    //     var f = Number(n2.value)
    //     var p = Number(pas.value)

    //     if (p <= 0) {
    //         window.alert('Passo inváliddo! Considerando PASSO = 1')
    //         p = 1
    //     }
    //     if (i < f) {
    //         for (var x = i; x <= f; x += p) { //contagem crescente
    //             res.innerHTML += `${x} &#128073`  // += aqui é concatenação com a linha 10
    //         }
    //     } else {
    //         for (var x = i; x >= f; x -= p) { //contagem regressiva
    //             res.innerHTML += `${x} &#128073`
    //         }
    //     }
    //     res.innerHTML += '&#127937'
    // }


