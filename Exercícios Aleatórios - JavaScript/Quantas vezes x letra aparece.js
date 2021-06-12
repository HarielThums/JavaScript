// Dada uma palavra qualquer escreva as letras repetidas e a quantidade de repetições

// Ex.: "Programming"
// resultado:
// "r : 2"
// "g : 2"
// "m : 2"

var countChars = function (word) {
	let Letras = {};
	for (let k = 0; k < word.length; k++) {
		let contLetra = 1;
		for (let i = 0; i < word.length; i++) {
			if (word[k] == word[i]) Letras[word[k]] = contLetra++;
		}
		contLetra = 1;
	}

	for (let letra in Letras) {
		const cont = Letras[letra];
		if (cont > 1) console.log(letra, cont);
	}
	console.log(word);
};

countChars("Programming");
