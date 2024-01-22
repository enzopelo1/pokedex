<template>
    <div>
      <div v-for="(count, type) in typeCounts" :key="type">
        <img :src="getTypeImage(type)" alt="Type Image" width="20" height="20" />
        {{ type }}: {{ count }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PokemonTypeCounter",
    props: {
      pokemons: Array,
    },
    computed: {
      typeCounts() {
        const counts = {};
        this.pokemons.forEach(pokemon => {
          const typeName = pokemon.apiTypes[0].name;
          counts[typeName] = (counts[typeName] || 0) + 1;
        });
        return counts;
      },
    },
    methods: {
      getTypeImage(type) {
        const typeImages = {
            Feu: "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
            Plante:"https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
            Eau:"https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png",
            Insecte:"https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png",
            Normal:"https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png",
            Vol:"https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png",
            Poison:"https://static.wikia.nocookie.net//pokemongo//images//0//05//Poison.png",
            Electrik:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/2\/2f\/Electric.png",
            Sol:"https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png",
            Fée:"https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png",
            Combat:"https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png",
            Psy:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/2\/21\/Psychic.png",
            Roche:"https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png",
            Spectre:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/a\/ab\/Ghost.png",
            Dragon:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/c\/c7\/Dragon.png",
            Acier:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/c\/c9\/Steel.png",
            Glace:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/7\/77\/Ice.png",
            Ténèbres:"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/0\/0e\/Dark.png",

        };
        return typeImages[type] ;
      },
    },
  };
  </script>
  