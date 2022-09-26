const caixa1 = document.querySelector(".caixa1");

const caixa2 = document.querySelector(".caixa2");

const botaoSubmit = document.getElementById("submit");

const simboloX = document.querySelector(".simbolox");

const estrela = document.querySelector(".estrela");

const estrelacinza = document.querySelector(".estrelacinza");

const estrelalaranja = document.querySelector(".estrelalaranja");

botaoSubmit.addEventListener("click", () => {
	caixa2.classList.remove("hidden");
	caixa1.style.display = "none";
});

simboloX.addEventListener("click", () => {
	caixa2.classList.add("hidden");
	caixa1.style.display = "flex";
});

estrela.addEventListener("click", () => {
	estrelacinza.classList.add("hidden");
	estrelalaranja.classList.remove("hidden");
});
