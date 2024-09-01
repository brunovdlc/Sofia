function mudaTema() {
  document.body.classList.toggle("dark");
  let mode = document.querySelector(".tema-dark");
  if (mode.innerHTML == "🌙 Dark Mode") {
    mode.innerHTML = "☀️ Clear Mode";
  } else {
    mode.innerHTML = "🌙 Dark Mode";
  }
}
 
 
// Adicionar um evento de clique ao elemento body para fechar o card quando o usuário clicar em qualquer lugar da tela, exceto no card
document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.card-overlay')) {
        closeStory(); // Fecha o card quando o clique não ocorre dentro do card
    }
});

 
// icone coração

function openCard() {
    document.getElementById('cardOverlay').classList.add('active');
    setTimeout(closeCard, 50000); // Fecha o card após 10 segundos
}

function closeCard() {
    document.getElementById('cardOverlay').classList.remove('active');
}

document.getElementById('cardOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeCard();
    }
});



// cor married



