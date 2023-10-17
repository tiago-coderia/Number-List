let numeros = [];

function adicionarNumero() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero) && numero >= 1 && numero <= 100) {
        numeros.push(numero);

        // Adicionar o valor à lista de valores
        const listaValores = document.getElementById('listaValores');
        const listItem = document.createElement('li');
        listItem.textContent = numero;
        listaValores.appendChild(listItem);

        numeroInput.value = '';
    } else {
        alert('Por favor, insira um número entre 1 e 100.');
    }
}

function finalizar() {
    document.getElementById('totalNumeros').textContent = numeros.length;
    document.getElementById('somaValores').textContent = numeros.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('maiorNumero').textContent = Math.max(...numeros);
    document.getElementById('menorNumero').textContent = Math.min(...numeros);
    document.getElementById('mediaValores').textContent = (numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length).toFixed(2);
}