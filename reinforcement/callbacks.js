
// * El callback es una función que se manda como argumento a otra función

setTimeout(() => {
    console.log('¡¡Hola Mundo!!');
}, 1000);

const getUserById = ( id, callback ) => {
    const user = {
        id,
        nombre: 'Juanma'
    }

    setTimeout(() => {
        callback(user)
    }, 1500);
};

getUserById( 10, ( user ) => {
    console.log( user.nombre.toUpperCase() );
});
