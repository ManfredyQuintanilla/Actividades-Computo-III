const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'prueba.csv',
    header: [
        {id: 'Nombre', title: 'Nombre'},
        {id: 'Codigo', title: 'Codigo'},
        {id: 'Edad', title: 'Edad'},
    ]
});

const records = [
    {Nombre: 'Manfredy Jose Quintanilla Chavez', Codigo: 'SMIS021120', Edad:20},
    {Nombre: 'Manfredy Jose Quintanilla Chavez', Codigo: 'SMIS021120', Edad:20},
    {Nombre: 'Manfredy Jose Quintanilla Chavez', Codigo: 'SMIS021120', Edad:20},
    {Nombre: 'Manfredy Jose Quintanilla Chavez', Codigo: 'SMIS021120', Edad:20},
    {Nombre: 'Manfredy Jose Quintanilla Chavez', Codigo: 'SMIS021120', Edad:20},    
];

csvWriter.writeRecords(records)
    .then(() => {
        console.log('Archivo creado');
    });