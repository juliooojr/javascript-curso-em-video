function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var formAno = document.getElementById('ano')
        var fAno = Number(formAno.value)
        var res = document.getElementById('res')
    
        if (formAno.value.length == 0 || formAno.value > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente.')
        } else { 
            var fsex = document.getElementsByName('sexo')
            var idade = ano - fAno
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'foto/criancaHomem.jpg')
                } else if (idade >10 && idade <= 18) {
                    img.setAttribute('src', 'foto/adolescenteHomem.jpg')
                } else if (idade > 18 && idade <= 60) {
                    img.setAttribute('src', 'foto/adultoHomem.jpg')
                } else {
                    img.setAttribute('src', 'foto/idosoHomem.jpg')
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'foto/criancaMulher.jpg')
                } else if (idade >10 && idade <= 18) {
                    img.setAttribute('src', 'foto/adolescenteMulher.jpg')
                } else if (idade > 18 && idade <= 60) {
                    img.setAttribute('src', 'foto/adultoMulher.jpg')
                } else {
                    img.setAttribute('src', 'foto/idosoMulher.jpg')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
}   

// function verificar() {
//     var data = new Date()
//     var ano = data.getFullYear()
//     var formAno = document.getElementById('ano')
//     var fAno = Number(formAno.value)
//     var res = document.getElementById('res')

//     if (formAno.value.length == 0 || formAno.value > ano) {
//         window.alert('[ERRO] Verifique os dados e tente novamente.')
//     } else { 
//         var fsex = document.getElementsByClassName('sexo')
//         var idade = ano - fAno
//         var foto = document.querySelector('#imagem')
//         res.innerText = `Idade Calculada ${idade}`
//         console.log(foto)
//         foto.setAttribute('src', 'foto/idosoMulher.jpg')
//         foto.src = 'foto/idosoMulher.jpg'
//     }
