const { createApp } = Vue
  createApp({
    data() {
      return {
        urlImage : 'https://fakeimg.pl/120/',
        fullname : "Antoine OFFROY",
        genre : "Masculin",
        numero_ine : "01234567891",
        age : "26",
        departement : "informatique",
        promo : "BUT2",
        etoile: [
          { label: 'Cobol', level: "★☆☆☆☆" },
          { label: 'Amazon Web Service', level: "★★★★☆" },
          { label: 'Kubernetes', level: "★★★★☆" },
          { label: 'Angular', level: "★★★★★" }
        ],
      }
    },
    computed:{
        ageDisplay(){
          if(this.age && this.age >= 1 && this.age <= 100){
            return this.age;
          }
          return "XX";
        },
        color(){
          let color = "green";  
          if(this.genre == "Masculin"){
            color= "blue";
          }else if(this.genre == "Féminin"){
            color= "pink";
          
          return {"background-color: ":color}

        }
    }

}}
).mount('#app')