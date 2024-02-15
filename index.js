const perguntas = [
  {
    pergunta: "Qual é a cor 'vermelho' em inglês?",
    respostas: [
      "Red",
      "Blue",
      "Green"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a cor 'azul' em inglês?",
    respostas: [
      "Green",
      "Yellow",
      "Blue"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a cor 'amarelo' em inglês?",
    respostas: [
      "Purple",
      "Black",
      "Yellow"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a cor 'verde' em inglês?",
    respostas: [
      "White",
      "Green",
      "Orange"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a cor 'roxo' em inglês?",
    respostas: [
      "Brown",
      "Purple",
      "Pink"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a cor 'preto' em inglês?",
    respostas: [
      "Gray",
      "Black",
      "Orange"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a cor 'branco' em inglês?",
    respostas: [
      "Blue",
      "White",
      "Red"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a cor 'cinza' em inglês?",
    respostas: [
      "Gray",
      "Pink",
      "Brown"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a cor 'laranja' em inglês?",
    respostas: [
      "Orange",
      "Yellow",
      "Green"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a cor 'rosa' em inglês?",
    respostas: [
      "Pink",
      "Purple",
      "Red"
    ],
    correta: 0
  }
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }