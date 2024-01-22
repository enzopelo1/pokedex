<!-- DetailsPokemon.vue -->
<template>
    <div>
        <h2>{{ pokemonDetails.name }}</h2>
        <!-- Affichez d'autres informations sur le Pokémon en utilisant les données de l'API -->
        <img :src="pokemonDetails.image" alt="Pokemon Image">
        <h2>{{ pokemonDetails.description }}</h2>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DetailsPokemon',
    data() {
      return {
        pokemonDetails: {},
      };
    },
    methods: {
      fetchPokemonDetails() {
        // Utilisez l'identifiant du Pokémon passé en paramètre
        const pokemonId = this.$route.params.id;
  
        // Appelez l'API pour obtenir les détails du Pokémon
        axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
          .then(response => {
            if (response.data) {
              this.pokemonDetails = response.data;
            } else {
              console.error('La réponse de l\'API ne contient pas de données valides');
            }
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des détails du Pokémon', error);
          });
      },
    },
    mounted() {
      // Appelez la méthode pour charger les détails du Pokémon au montage initial
      this.fetchPokemonDetails();
    },
  };
  </script>
  
  <style scoped>
    /* Ajoutez des styles spécifiques au composant DetailsPokemon si nécessaire */
  </style>
  