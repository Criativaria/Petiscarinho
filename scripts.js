
const produtos = [
  {
    nome: "Sandocão",
    preco: 1.70,
    id: 0
  },
  {
    nome: "Ursovo",
    preco: 2.30,
    id: 1
  },
  {
    nome: "Sapoiche",
    preco: 2.60,
    id: 2
  },
  {
    nome: "Hamburgurso",
    preco: 2.40,
    id: 3
  },
  {
    nome: "Pizza Boo",
    preco: 2.50,
    id: 4
  },
  {
    nome: "Gatoroons",
    preco: 1.00,
    id: 5
  }
]

const comanda = [];

function passarInfos() {
  const produtos_comanda = document.querySelector(".produtos_comanda");

  produtos_comanda.innerHTML = ''

  for (const produto of comanda) {

    const div = document.createElement("div");
    const nomeComanda = document.createElement("p");
    const precoComanda = document.createElement("p");

    nomeComanda.innerText = produto.nome
    precoComanda.innerText = " R$" + produto.preco.toFixed(2);

    nomeComanda.classList.add("nome_produto_comanda");
    precoComanda.classList.add("preco_produto_comanda");

    div.appendChild(nomeComanda);
    div.appendChild(precoComanda);
    produtos_comanda.appendChild(div);
  }
};


function calculo() {
  
  const totalPreco = comanda.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.preco
  }, 0);

  const calculoFinal = document.querySelector("span.calculoFinal")
  calculoFinal.innerText = " R$" + totalPreco.toFixed(2)

};



function foiClicado(qual) {
    
  let qualBotao = qual;

  let qualProduto = produtos.find(item => item.id === qualBotao);
  comanda.push(qualProduto);
 
  passarInfos();

  calculo();
  
};

function clean() {
  
  comanda.splice(0, comanda.length);

  passarInfos();

  calculo();

}


