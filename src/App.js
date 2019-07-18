//
// Exercice #1 - 18 juillet 2019
//
// Nicholas Gratton - 0270256
//

/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		var image = document.createElement("img");
		image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Grue_chantier.JPG/800px-Grue_chantier.JPG");

		app.appendChild(image);
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
