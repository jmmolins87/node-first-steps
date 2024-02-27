

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

const getInfoUsuario = async( id ) => { 
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );

        return `El salario del empleado: ${ empleado }, es de: ${ salario }€`;
    }
    catch ( err ) {
        //!! con el throw llamaos al reject de la promesa
        throw err;
    }

};

const id = 3;

getInfoUsuario( id )
    .then( msg => {
        console.log( '¡¡TODO BIEN!!' );
        console.log( msg );
    })
    .catch( err => {
        console.log( '¡¡TODO MAL!!' );
        console.log( err );
    });
