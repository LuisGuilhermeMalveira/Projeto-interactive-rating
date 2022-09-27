const caixa1 = document.querySelector(".caixa1");
const caixa2 = document.querySelector(".caixa2");
const botaoSubmit = document.getElementById("submit");
const simboloX = document.querySelector(".simbolox");
const estrela = document.querySelector(".estrela");
const estrelacinza = document.querySelector(".estrelacinza");
const estrelalaranja = document.querySelector(".estrelalaranja");
const resultadoNota = document.getElementById("resultadoNota");
const botoesNota = document.querySelectorAll(".botoesNota");

simboloX.addEventListener("click", () => {
	caixa2.classList.add("hidden");
	caixa1.style.display = "flex";
});

var clickEstrela = false;

estrela.addEventListener("click", () => {
	clickEstrela = !clickEstrela;
	if (clickEstrela) {
		estrelacinza.classList.add("hidden");
		estrelalaranja.classList.remove("hidden");
	} else {
		estrelacinza.classList.remove("hidden");
		estrelalaranja.classList.add("hidden");
	}
});

botaoSubmit.addEventListener("click", () => {
	caixa2.classList.remove("hidden");
	caixa1.style.display = "none";
});

botaoSubmit.disabled = true;

botoesNota.forEach((nota) => {
	nota.addEventListener("click", () => {
		botaoSubmit.classList.add("botaosubmithover");
		botaoSubmit.disabled = false;
		resultadoNota.innerHTML = nota.innerHTML;
		console.log(nota);
	});
});
