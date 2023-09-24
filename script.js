// Exercício Seleção

// Retorne no console todas as imagens do site
// R: const img = document.querySelectorAll("img");
// console.log(img);
// ###

// Retorne no console apenas as imagens que começaram com a palavra imagem
// R: const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imagensAnimais);
// ###

// Selecione todos os links internos
// R: const linkInterno = document.querySelectorAll("[href^='#']");
// console.log(linkInterno);
// ###

// Selecione o primeiro H2 dentro de .animais-descricao
// R: const primeiro = document.querySelector(".animais-descricao h2");
// console.log(primeiro);
// ###

// Selecione o último P do site
// R: const paragrafo = document.querySelectorAll("p");
// console.log(paragrafo[--paragrafo.length]);
// ###

// Exercício forEach & Arrow Function

// Mostre no console cada parágrado do site
// R: const paragrafos = document.querySelectorAll("p");
// paragrafos .forEach((item) => {
//   console.log(item);
// });
// ###

// Mostre o texto dos parágrafos no console
// R: const paragrafos = document.querySelectorAll("p");
// paragrafos.forEach((item) => {
//   console.log(item.innerHTML);
// });
// ###

// Como corrigir os erros abaixo:
// R: const imgs = document.querySelectorAll("img");
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });
// ###

// Exercício Classes e Atributos

// Adicione a classe ativo a todos os itens do menu
// R: const itensMenu = document.querySelectorAll(".menu a");
// itensMenu.forEach((item) => {
//   item.classList.add("ativo");
// });
// ###

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// R: const itensMenu = document.querySelectorAll(".menu a");
// itensMenu.forEach((item) => {
//   item.classList.add("ativo");
// });
// itensMenu.forEach((item) => {
//   item.classList.remove("ativo");
// });
// itensMenu[0].classList.add("ativo");
// ###

// Verifique se as imagens possuem o atributo alt
// R: const imgs = document.querySelectorAll("img");
// imgs.forEach((img) => {
//   const possuiAtt = img.hasAttribute("alt");
//   console.log(possuiAtt);
// });
// ###

// Modifique o href do link externo no menu
// R: const link = document.querySelector("a[href^='http']");
// link.setAttribute("href", "google.com");
// console.log(link);
// ###
