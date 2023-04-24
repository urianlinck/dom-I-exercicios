//1 - Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.
const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML += frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML += frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML += frutas[2]

//2 - Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
//Depois disso, escreva o código necessário para que seja possível imprimir o valor do input escrito no console.
//Cole o comando aqui:
//```jsx
//    cole o código JS nesta área.
//```

const valorInput = document.getElementById("nova-fruta")

function imprimir (){
    console.log(valorInput.value)
}

//3 - Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.

function adiciona(){
    const fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = valorInput.value
}