let add = document.querySelector(`input#add`)
add.addEventListener(`click`, adicionar)

let fim = document.querySelector(`input#fim`)
fim.addEventListener(`click`, finalizar)

let txtn = document.querySelector(`input#txtn`)
let lista = document.querySelector(`select#lista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(txtn.value) && !inLista(txtn.value, valores)){
        valores.push(Number(txtn.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${txtn.value} foi adicionado!`
        lista.appendChild(item)
        res.innerHTML = ``
    } else{
        alert(`Valor inválido ou já adicionado a lista!`)
    }

    txtn.value = ``
    txtn.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert(`Adicione um número antes de finalizar!`)
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ``
        res.innerHTML += `<p>Foram adicionados: ${tot} números</p>`
        res.innerHTML += `<br><p>A soma de todos os numeros é: ${soma}</p>`
        res.innerHTML += `<br><p>O maior número adicionado foi: ${maior}</p>`
        res.innerHTML += `<br><p>O menor número adicionado foi: ${menor}</p>`
        res.innerHTML += `<br><p>Por fim, a média é de: ${media}</p>`
    }
    

    
}