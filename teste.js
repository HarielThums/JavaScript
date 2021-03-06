const dadosjira = [
	{
		"id": "0db2dfdc-a4b8-4055-b2ad-6655c06a7663",
		"status": "PROD_DEPLOYING",
		"user": {
			"id": "659e4749-0237-4b89-9ad7-7402491b5bb5",
			"avatar": "http://placeimg.com/640/480/people",
			"first_name": "Gustavo",
			"last_name": "Santos",
			"email": "gustavo.santos@gsw.com.br"
		},
		"amountHours": 2.42,
		"startedAt": "2020-04-25T21:01:17.288Z",
		"finished": true,
		"project": "[Souza Comércio e Associados] - Innovative background implementation",
		"cardDescription": "index optical capacitor",
		"gitMetadata": {
			"branch": "microchip-parse",
			"hash": "bb84719579164f7c68a171d224ae533c7471cd40"
		}
	}
]

const arquivoJson = json => JSON.parse(json)
const recebendodados = dadosjira.map(arquivoJson)


console.log(recebendodados)
