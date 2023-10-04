const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			planets: [],
			starships: [],
			characters: [],
			selectCharacter: {},
			selectCharacterProperties: {},
			selectPlanet: {},
			selectPlanetProperties: {},
			selectStarship: {},
			selectStarshipProperties: {},
			array: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPeople: async () => {
				const url = 'https://www.swapi.tech/api/people/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					let character = data.results
					setStore({ users: character });
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			getPlanets: async () => {
				const url = 'https://www.swapi.tech/api/planets';
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					let planet = data.results
					setStore({ planets: planet });
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			getStarships: async () => {
				const url = 'https://www.swapi.tech/api/starships';
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					let starship = data.results
					setStore({ starships: starship });
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			infoCharacters: async (id) => {
				const url = 'https://www.swapi.tech/api/people/' + id;
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					let charactersInfo = data.result;
					setStore({ selectCharacter: charactersInfo });
					let characterProperties = data.result.properties;
					setStore({ selectCharacterProperties: characterProperties });
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			detailPlanets: async (id) => {
				const url = 'https://www.swapi.tech/api/planets/' + id;
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					let planetsDetail = data.result;
					setStore({ selectPlanet: planetsDetail });
					let planetProperties = data.result.properties;
					setStore({ selectPlanetProperties: planetProperties });
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			detailStarship: async (id) => {
				const url = 'https://www.swapi.tech/api/starships/' + id;
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					let starshipDetail = data.result;
					setStore({ selectStarship: starshipDetail });
					let starshipProperties = data.result.properties;
					setStore({ selectStarshipProperties: starshipProperties });
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
