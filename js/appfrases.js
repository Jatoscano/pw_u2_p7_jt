// Declarar un objeto de Vue
const frase = [{frase: 'Programacion Web', autor: 'Axel'},
    {frase: 'hello', autor: 'Ale'},
    {frase: 'esto', autor: 'Andres'},
    {frase: 'es ', autor: 'Alvaro'},
    {frase: 'una prueba', autor: 'Aleja'},
    {frase: 'de frases', autor: 'Alicia'},
    {frase: 'random', autor: 'Arturo'},
    {frase: 'de clase', autor: 'Alexander'}];

const app = Vue.createApp({

    methods: {
     
    },
    data(){
      return{
          listaFrases: frase,
      }
    }
});

app.mount('#appFrases'); // Montar la aplicación en el div con id myApp