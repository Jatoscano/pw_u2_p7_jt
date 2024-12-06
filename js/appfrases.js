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
     
        agregarFrase1(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            };

            this.listaFrases.unshift(nuevaFrase);
        },
        
        agregarFrase2(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            };

            this.listaFrases.push(nuevaFrase);
        },
        
        agregarFrase3(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            };

            this.listaFraes.splice(2, 0, nuevaFrase);
        },

        eventoKeyPress1(event){

            if(event.key === "Enter"){
                console.log('evento');
                console.log(event);
                console.log(event.charCode);
                console.log(event.cancelable);
                console.log(event.key);
                console.log(event.keyCode);
                console.log(event.target);
                console.log(event.target.value);
                console.log(event.target.baseURI);
                this.agregarFrase2();
            }
        },

        eventoKeyPress2({charCode,key,target, cancelable, keyCode}){

            if(key === "Enter"){
                console.log('evento');
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(target);
                console.log(target.value);
                console.log(target.baseURI);
                this.agregarFrase1();
            }
        },

        eventoKeyPressModificador(){

            console.log('evento');
            this.agregarFrase1();
        },

        
    },
    data(){
      return{
          listaFrases: frase,
          frase: null,
          //autor: 'sin autor'
          autor: null
      }
    }
});

app.mount('#appFrases'); // Montar la aplicación en el div con id myApp