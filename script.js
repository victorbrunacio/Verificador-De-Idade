function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (nascimento.value == 0 || Number(nascimento.value) > ano) {
        window.alert('Erro, verifique o seu ano de nascimento!!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {

            genero = 'Homen'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'bebehomen.png')
            }else if (idade < 12) {
                img.setAttribute('src', 'criançahomen.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomen.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {

            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'bebemulher.png')
            }

            else if (idade < 12) {
                img.setAttribute('src', 'criançamulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}