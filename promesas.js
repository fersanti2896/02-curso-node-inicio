
const empleados = [
    {
        id: 1, 
        nombre: 'Fer Santi'
    },
    {
        id: 2, 
        nombre: 'Aline Rojas'
    },
    {
        id: 3,
        nombre: 'Cynthia Pineda'
    }
];

const salarios = [
    {
        id: 1, 
        salario: 15000
    },
    {
        id: 2, 
        salario: 8000
    }
];

const id = 3; 

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id == id)?.nombre;

        empleado ? resolve(`El nombre del empleado es: ${empleado}`) 
                 : reject(`El empleado con id: ${id} no existe!`)
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        salario ? resolve(`El salario del empleado es: $${salario}`) 
                : reject(`El id: ${id} no existe, por lo que no tiene un salario!`)
    })
}

/* Primera Forma */
/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(console.log)
    .catch(console.log) */

/* Segunda Forma - Promesas tipo Hell*/
/* getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log(`${empleado} \n${salario}`)
            })
            .catch(console.log)
    })
    .catch(console.log) */

/*  Tercera Forma - Promesas en cadena*/
let nombre = '';

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`${nombre} \n${salario}`))
    .catch(console.log);





