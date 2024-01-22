<template>
    <div>
      <pokemon-type-counter :pokemons="pokemons" />
      <pokemonvue v-for="pokemon in pokemons" :key="pokemon.name" :test="pokemon"></pokemonvue>

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
      };
    },
    components: { Pokemonvue, PokemonTypeCounter },
    mounted() {
      axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/1000')
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
  };
  </script>
  