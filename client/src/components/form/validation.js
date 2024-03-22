const validation = (input) => {
    const error = {};
    if(!/^[0-9]+$/.test(input.numeroCard)){
        error.numeroCard = 'el campo solo acepta numeros del 0 al 9'
    }
    if(input.nombre === ''){
        error.numeroCard = 'el campo no puede estar vacio'
    }
    if(!/^[a-zA-Z]+$/.test(input.nombreCard)){
        error.nombreCard ='debe contener solo letras de a a la z'
    }
    if(input.nombre === ''){
        error.nombreCard = 'el campo no puede estar vacio'
    }
    if(!/^[a-zA-Z]+$/.test(input.apellidoCard)){
        error.apellidoCard ='debe contener solo letras de a a la z'
    }
    if(input.nombre === ''){
        error.apellidoCard = 'el campo no puede estar vacio'
    }
    if(!/^[0-9]+$/.test(input.DNICard)){
        error.DNICard = 'el campo solo acepta numeros del 0 al 9'
    }
    if(input.nombre === ''){
        error.DNICard = 'el campo no puede estar vacio'
    }
    if (input.fechaCard === '') {
        error.fechaCard = 'El campo no puede estar vacío';
    } else {
        const fechaArray = input.fechaCard.split('/');

        if (fechaArray.length !== 2) {
            error.fechaCard = 'se espera XX/XX';
        } else {
            const mes = fechaArray[0];
            const año = fechaArray[1];

            if (!/^(0[1-9]|1[0-2])$/.test(mes)) {
                error.fechaCard = 'El mes debe ser un número entre 01 y 12';
            }

            if (!/^(19\d{2}|20[0-9]{2})$/.test(año)) {
                error.fechaCard = 'El año debe ser un número entre 1900 y 2099';
            }
        }
    }    
    if(!/^[0-9]{3}$/.test(input.cvcCard)){
        error.cvcCard = 'solo acepta 3 numeros del 0 al 9'
    }
    if(input.nombre === ''){
        error.cvcCard = 'el campo no puede estar vacio'
    }
    return error
}



export default validation;