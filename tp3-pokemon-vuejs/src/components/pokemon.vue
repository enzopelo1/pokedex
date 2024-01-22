<template>
    <div class="pokemon-card" :style="{ backgroundColor: getTypeColor(test.apiTypes[0].name) }">
      <h2>{{ test.name }}</h2>
      <img :src="test.image" alt="Pokemon Image">
    </div>
</template>

<script>
    
export default {
    name: "pokemon",
    props: [
        "test", 
        ],
        methods: {
        getTypeColor(type) {
            const typeColors = {
                Feu: "#FF4D4D",  // Rouge
                Eau: "#4DA6FF",  // Bleu
                Plante: "#6B8E23",  // Vert olive
                Insecte: "#A8B820",  // Vert
                Vol: "#A890F0",  // Violet
                Normal: "#A8A878",  // Gris
                Poison: "#A040A0",  // Violet foncé
                Fée: "#EE99AC",  // Rose
                Électrik: "#FFD700",  // Or
                Roche: "#B8A038",  // Jaune
                Sol: "#DEB887",  // Brun clair
                Combat: "#C03028",  // Rouge foncé
                Psy: "#F85888",  // Rose vif
                Spectre: "#705898",  // Violet foncé
                Acier: "#B8B8D0",  // Gris clair
                Glace: "#98D8D8",  // Cyan
                Dragon: "#7038F8",  // Indigo
                Ténèbres: "#705848",  // Marron
                Vol: "#A890F0",  // Violet (utilisé à nouveau pour Vol)
                
            };
            return typeColors[type];
        }
    },
    }
    

</script>
