//Função para Criar os "Cards"

function criarCard() {

//     const card =  document.createElement('div');
//     card.className = 'card';
//     document.body.appendChild(card);

//     //Estilização dos cards

// card.style.border = '2px solid #ff6600'

const mainCard = document.querySelector('.mainCard'); // Obtém o estilo do .mainCard
const newCard = mainCard.cloneNode(true); // Clona o elemento .mainCard

// Adicione uma classe adicional (opcional) para estilização específica
newCard.classList.add('dynamicCard');

document.body.appendChild(newCard);
}

for (let i = 0; i < 3; i++){
    criarCard();
}