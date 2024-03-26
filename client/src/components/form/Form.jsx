import { useState, useEffect } from 'react';
import validation from './validation';
import style from './Form.module.css';


const Form = () => {
    const [input, setInput] = useState({
        numeroCard:'',
        nombreCard:'',
        apellidoCard:'',
        DNICard:'',
        fechaCard:'',
        cvcCard:''
    });

    const [error, setError] = useState({});


    const [imagen, setImagen] = useState('tarjeta-visa-ejemplo.jpg');


    const [focusInput, setFocusInput] = useState(null);


    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };


    const handleFocus = (event) => {
        if (event.target.name === 'cvcCard') {
            setImagen('tarjeta-visa-ejemplo-2.jpg');
        }
        setFocusInput(event.target.name);
    };


    const handleBlur = (event) => {
        if (event.target.name === 'cvcCard') {
            setImagen('tarjeta-visa-ejemplo.jpg');
        }
        setFocusInput(null);
    };


    useEffect(()=>{
        if(input.numeroCard !== '' || input.nombreCard !== '' || input.apellidoCard !== '' || input.DNICard !== '' ||
        input.fechaCard !== '' || input.cvcCard !== ''){
            setError(validation(input, focusInput))
        }
    },[input, focusInput]);


    return(
        <div className={style.center}>
            <h1 className={style.title}>Comprar con tarjeta</h1>
            <div className={style.imageCenter}>
                 <img src={imagen} alt='tarjeta' className={style.imageTamaño}/>
            </div>
            <form className={style.formStyle}>

             <div className={style.labelInput}>
                 <label htmlFor="numeroCard"
                  className={style.letras}
                  >Número de la tarjeta</label>
             </div>
                 <input type="text"
                  name="numeroCard"
                  value={input.numeroCard}
                  className={`${style.input} ${style.inputTamaño}`} 
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}/>
                 {error.numeroCard && <p className={style.validation}>{error.numeroCard}</p>}
             
             <div className={style.labelInput}>
                 <label htmlFor="nombreCard"
                 className={style.letras}>Nombre</label>
             </div>
                 <input type="text" 
                 name="nombreCard" 
                 className={`${style.input} ${style.inputTamaño}`} 
                 value={input.nombreCard} 
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
                 {error.nombreCard && <p className={style.validation}>{error.nombreCard}</p>}

             <div className={style.labelInput}>
                 <label htmlFor="apellidoCard"
                 className={style.letras}>Apellido</label>
             </div>
                 <input type="text" 
                 name="apellidoCard" 
                 className={`${style.input} ${style.inputTamaño}`} 
                 value={input.apellidoCard} 
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
                 {error.apellidoCard && <p className={style.validation}>{error.apellidoCard}</p>}

             <div className={style.labelInput}>
                <label htmlFor='DNICard'
                className={style.letras}>DNI</label>
             </div>
                <input type="text" 
                name='DNICard' 
                className={`${style.input} ${style.inputTamaño}`} 
                value={input.DNICard} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
                {error.DNICard && <p className={style.validation}>{error.DNICard}</p>}   

             <div className={style.labelInput}>
                 <label htmlFor="fechaCard"
                 className={style.letras}>Fecha de expiración</label>
             </div>
                 <input type="text" 
                 name="fechaCard" 
                 className={`${style.input} ${style.inputTamaño}`} 
                 value={input.fechaCard} 
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
                 {error.fechaCard && <p className={style.validation}>{error.fechaCard}</p>}

             <div className={style.labelInput}>
                 <label htmlFor="cvcCard"
                 className={style.letras}>Codigo de seguridad</label>
             </div>
                 <input type="text" 
                 name="cvcCard" 
                 className={`${style.input} ${style.inputTamaño}`} 
                 value={input.cvcCard} 
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
                 {error.cvcCard && <p className={style.validation}>{error.cvcCard}</p>}

             <div className={style.buttonCenter}>
                  <button type="submit" className={`${style.buttonColor} ${style.letras}`}>Pagar</button>
             </div>

            </form>
        </div>
    )
}

export default Form;
