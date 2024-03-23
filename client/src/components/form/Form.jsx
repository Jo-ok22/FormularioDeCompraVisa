import { useState, useEffect } from 'react';
import validation from './validation';
import style from './Form.module.css';
//import imagen2 from '../../../public'

const Form = () => {
    const [input, setInput] = useState({
        numeroCard:'',
        nombreCard:'',
        apellidoCard:'',
        DNICard:'',
        fechaCard:'',
        cvcCard:''
    })

    const [error, setError] = useState({})


    const [imagen, setImagen] = useState('tarjeta-visa-ejemplo.jpg')
    console.log(setImagen);
    console.log(imagen);

    const handleChange = (event) =>{
        setInput({...input, [event.target.name]:event.target.value})
        
    }

    useEffect(()=>{
        if(input.numeroCard !== '' || input.nombreCard !== '' || input.apellidoCard !== '' || input.DNICard !== '' ||
        input.fechaCard !== '' || input.cvcCard !== ''){
            setError(validation(input))
        }
    },[input])
    return(
        <div className={style.center}>
            <h1>comprar con visa</h1>
            <div className={style.imageCenter}>
                 <img src='tarjeta-visa-ejemplo.jpg' alt='tarjeta' className={style.imageTamaño}/>
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
                  className={style.input} 
                  onChange={handleChange}/>
                 {error.numeroCard && <p className={style.validation}>{error.numeroCard}</p>}
             
             <div className={style.labelInput}>
                 <label htmlFor="nombreCard">Nombre</label>
             </div>
                 <input type="text" 
                 name="nombreCard" 
                 className={style.input} 
                 value={input.nombreCard} 
                 onChange={handleChange}/>
                 {error.nombreCard && <p className={style.validation}>{error.nombreCard}</p>}

             <div className={style.labelInput}>
                 <label htmlFor="apellidoCard">Apellido</label>
             </div>
                 <input type="text" 
                 name="apellidoCard" 
                 className={style.input} 
                 value={input.apellidoCard} 
                 onChange={handleChange}/>
                 {error.apellidoCard && <p className={style.validation}>{error.apellidoCard}</p>}

             <div className={style.labelInput}>
                <label htmlFor='DNICard'>DNI</label>
             </div>
                <input type="text" 
                name='DNICard' 
                className={style.input} 
                value={input.DNICard} 
                onChange={handleChange}/>
                {error.DNICard && <p className={style.validation}>{error.DNICard}</p>}   

             <div className={style.labelInput}>
                 <label htmlFor="fechaCard">Fecha de expiración</label>
             </div>
                 <input type="text" 
                 name="fechaCard" 
                 className={style.input} 
                 value={input.fechaCard} 
                 onChange={handleChange}/>
                 {error.fechaCard && <p className={style.validation}>{error.fechaCard}</p>}

             <div className={style.labelInput}>
                 <label htmlFor="cvcCard">CVC</label>
             </div>
                 <input type="text" 
                 name="cvcCard" 
                 className={style.input} 
                 value={input.cvcCard} 
                 onFocus={() => setImagen('tarjeta-visa-ejemplo-2.jpg')} // Cambiar imagen al enfocar el input CVC
                 onBlur={() => setImagen('tarjeta-visa-ejemplo.jpg')}
                 onChange={handleChange}/>
                 {error.cvcCard && <p className={style.validation}>{error.cvcCard}</p>}

             <div className={style.buttonCenter}>
                  <button type="submit" className={style.buttonColor}>Pagar</button>
             </div>

            </form>
        </div>
    )
}

export default Form;
