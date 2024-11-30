console.log(Vue); // Verificar que Vue está cargado

// Declarar un objeto de Vue
const app = Vue.createApp({
    // Uso de Backticks para escribir el template ``
    template: `
    <h1>Hola Mundo</h1>
    <p>Con Vue.js</p>`
});

app.mount('#myApp'); // Montar la aplicación en el div con id myApp