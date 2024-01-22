<template>
  <div>
    <label for="pokemonCount">Nombre de Pokémon à afficher:</label>
    <input type="number" id="pokemonCount" v-model="pokemonCount" />
    <button @click="fetchPokemons">Afficher</button>

    <pokemon-type-counter :pokemons="pokemons" />
    
    <router-link
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :to="{ name: 'DetailsPokemon', params: { id: pokemon.id } }"
    >
      <pokemonvue :test="pokemon"></pokemonvue>
    </router-link>
  </div>
</template>

<script>
import Pokemonvue from './pokemon.vue';
import PokemonTypeCounter from './nbType.vue';
import axios from 'axios';

export default {
  name: "pokedex",
  data() {
    return {
      pokemons: [],
      pokemonCount: 20, // Valeur par défaut
    };
  },
  components: { Pokemonvue, PokemonTypeCounter },
  methods: {
    fetchPokemons() {
      axios.get(`https://pokebuildapi.fr/api/v1/pokemon/limit/${this.pokemonCount}`)
        .then(response => {
          if (response.data) {
            this.pokemons = response.data;
          } else {
            console.error('La réponse de l\'API ne contient pas de données valides');
          }
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données des Pokémon', error);
        });
    },
  },
  mounted() {
    // Charger les pokémons au montage initial
    this.fetchPokemons();
  },
};
</script>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.card {
  flex: 0 0 calc(33.33% - 16px); /* Fait en sorte que chaque carte occupe environ 1/3 de l'espace, avec un espace entre les cartes */
  margin-bottom: 16px; /* Ajoutez un espace en bas de chaque carte */
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px; /* Ajoutez un espace entre les cartes */
}

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px; /* Ajoutez un espace entre les cartes */
  
}
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>
