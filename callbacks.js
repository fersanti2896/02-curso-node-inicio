
setTimeout(() => {
    console.log('Hola Mundo!')
}, 3000);

const getUsuarioById = (id, callback) => {
    const usuario = {
        id: id, 
        nombre: 'Fernando'
    }

    setTimeout(() => {
       callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario);
});