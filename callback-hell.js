
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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id == id)?.nombre;

    empleado ? callback(null, empleado) : callback(`El empleado con id: ${id} no existe!`)
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;

    salario ? callback(null, salario) : callback(`El id: ${id} del salario no existe`)
}

getEmpleado(id, (err, empleado) => {
    if(err) {
        console.log('Error!')
        return console.log(err)
    }

    getSalario(id, (err, salario) => {
        if(err) {
            return console.log(err);
        }
    
        console.log(`El empleado: ${empleado} tiene un salario de: $${salario}`);
    });
});






