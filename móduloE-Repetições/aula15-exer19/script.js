function contar() {
    var n1 = window.document.querySelector('input#ini')
    var n2 = window.document.querySelector('input#fim')
    var pas = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')

    if (n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = ('Impossível Contar!')
    } else {
        for (var x = Number(n1.value);x <= Number(n2.value);x += Number(pas.value)) {
            var span = document.createElement('span')
            span.innerHTML = `${x} &#128073`
            res.appendChild(span)
        }
        span.innerHTML = '&#127937'
    } 
    

}
    
    // console.log(n1,n2,pas)
    // console.log(n1.value,n2.value,pas.value)
