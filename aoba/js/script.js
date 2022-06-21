function pytas(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var sec = data.getSeconds()
    var min = data.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}.`
    if (hora >= 0 && hora < 12){
        img.src = "img/sol.png"
        document.body.style.background = '#FFF8DC'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#FF7F50'
    }
    else{
        img.src = "img/lua.png"
        document.body.style.background = '#191970'
    }
}