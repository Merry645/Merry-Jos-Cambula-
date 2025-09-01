function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.toggle-btn');
  if(document.body.classList.contains('dark')){
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}
const lightbox = document.getElementById('lightbox');
const imagemGrande = document.getElementById('imagemGrande');
const fechar = document.getElementById('fechar');

const miniaturas = document.querySelectorAll('.miniatura');

miniaturas.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    imagemGrande.src = img.src;
  });
});

fechar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fechar clicando fora da imagem
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
// Seleciona todos os menus com a classe "menu-item"
const menus = document.querySelectorAll(".menu-item");

menus.forEach(menu => {
  menu.addEventListener("click", () => {
    const conteudo = menu.nextElementSibling; // pega o bloco logo abaixo
    const seta = menu.querySelector(".seta");

    // Alterna mostrar/ocultar
    conteudo.style.display = 
      conteudo.style.display === "block" ? "none" : "block";

    // Gira a setinha
    seta.classList.toggle("ativo");
  });
});
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});