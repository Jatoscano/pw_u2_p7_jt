console.log(Vue); // Verificar que Vue está cargado

// Declarar un objeto de Vue
const app = Vue.createApp({
    // Uso de Backticks para escribir el template ``
    //Programacion declarativa {{}}
    /*
    template: `
    <h1>Hola Mundo</h1>
    <p>Con Vue.js</p>
    <p>{{ 2 + 5 }}</p>
    <p>{{['a','b','c'].join(' - ')}}</p>
    <p>{{[1,2,3,4,5,6]}}</p>
    <p>{{ {nombre: 'Juan', apellido: 'Toscano'} }}</p>
    <p>{{{nombre: 'Juan', apellido: 'Toscano'}.nombre}}</p>
    <p>{{true ? 'Activo' : 'Inactivo'}}</p>
    <p>{{false ? 'Activo' : 'Inactivo'}}</p>
    <p>{{1===1}}
    <p>{{ 1 === 1 ? 'Es igual' : 'No es igual' }}</p>`
    */

    methods: {
       cambiarMensaje(){
           this.mensaje = 'Este es un mensaje diferente';
           this.edad = 30;
       }
    },
    data(){
        return{
            mensaje: 'Hola Mundo con Vue.js',
            edad: 25,
        }
    }
});

app.mount('#myApp'); // Montar la aplicación en el div con id myApp