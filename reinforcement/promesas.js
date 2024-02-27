

const empleados = [
    { id: 1, nombre: 'Juanma' },
    { id: 2, nombre: 'Linda' },
    { id: 3, nombre: 'Karen'  }
];

const salarios = [
    { id: 1, salario: 2050 },
    { id: 2, salario: 1500 }
];

const getEmpleado = ( id ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;
    return new Promise(( resolve, reject ) => {
        ( empleado ) 
            ? resolve( empleado ) 
            : reject( `El empleado con id ${ id } no existe` );
    });
}

const getSalario = ( id ) => {
    const salario = salarios.find( s => s.id === id )?.salario;
    return new Promise(( resolve, reject ) => {
        ( salario ) 
            ? resolve( salario ) 
            : reject( `El salario del empleado con id ${ id } no existe` );
    });
}

const id = 3;

// getEmpleado( id )
//     .then( empleado => console.log( empleado ))
//     .catch( err => console.log( err ));

// getSalario( id )
//     .then( salario => console.log( salario ))
//     .catch( err => console.log( err ));

// * Promesas en cadena
let nombre;
getEmpleado( id )
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => console.log( `El empleado: ${ id }, tiene un salario de: ${ salario }€` ))
    .catch( err => console.log( err ));