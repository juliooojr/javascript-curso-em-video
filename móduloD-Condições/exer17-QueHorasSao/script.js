function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'foto/manha.jpg'
        window.document.body.style.backgroundColor = '#e0c28bfd'
    } else if (hora >= 12 && hora < 18){
        img.src = 'foto/tarde.jpg'
        window.document.body.style.backgroundColor = '#b87c0cfd'
    } else {
        img.src = 'foto/noite.jpg'
        window.document.body.style.backgroundColor = '#302b2bfd'
    }

}

