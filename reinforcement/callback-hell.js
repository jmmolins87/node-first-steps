

const empleados = [
    { id: 1, nombre: 'Juanma' },
    { id: 2, nombre: 'Linda' },
    { id: 3, nombre: 'Karen'  }
];

const salarios = [
    { id: 1, salario: 2050 },
    { id: 2, salario: 1500 }
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find(( e ) => e.id === id );
    if( empleado ) {
        callback( null, empleado );
    } else {
        callback( `El empleado con id ${ id } no existe` );
    }
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( s => s.id === id )?.salario;
    if( salario ) {
        callback( null, salario );
    } else {
        callback( `El salario del empleado con id ${ id } no existe` );
    }
}

const id = 1;

getEmpleado( id, ( error, empleado ) => {
    if( error ) {
        console.log('¡¡ERROR!!');
        return console.log( error );
    }
    getSalario( id, ( error, salario ) => {
        if( error ) {
            return console.log( error );
        }
        console.log( `El empleado: ${ empleado.nombre }, tiene un salario de: ${ salario }€` );
    });
});
