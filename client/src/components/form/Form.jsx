import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
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


    const [clickCount, setClickCount] = useState(0);


    const [Month, setMonth] = useState('');
    const [Year, setYear] = useState('');

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };


    const handleMonthChange = (event) => {
        setMonth(event.target.value);
        updateFormattedDate(Month, event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
        updateFormattedDate(event.target.value, Year);
    };



    const updateFormattedDate = (month, year) => {
        const formattedDate = `${month.padStart(2, '0')}/${year.slice(-2)}`;
        setInput({ ...input, fechaCard: formattedDate });
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


    const handlePayment = (event) => {
        //alert('¡Pago Exitoso!')
        event.preventDefault()
            if (clickCount === 0) {
                // Mostrar el pop-up de éxito en el primer clic
                Swal.fire({
                    icon: 'success',
                    title: '¡Pago Exitoso!',
                    showConfirmButton: false,
                    timer: 9000, // Duración del pop-up en milisegundos (en este caso, 2 segundos)
                    confirmButtonClass: 'boton',
                });
            } else if((Month === '01' || Month ==='02' || Month ==='03' || Month ==='04') && (Year ==='2023' || Year ==='2024')){
                Swal.fire({
                    icon: 'warning',
                    title: 'Tarjeta Caducada',
                    text: 'El pago ha sido rechazado debido a que la tarjeta esta caducada.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#0079c8',
                });
            } else {
                //Mostrar el pop-up de rechazo en el segundo clic
                Swal.fire({
                    icon: 'error',
                    title: 'Pago Rechazado',
                    text: 'El pago ha sido rechazado debido a falta de fondos.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#0079c8',
                });
            }
            
    
            
            // Incrementar el contador de clics
            setClickCount(clickCount + 1);
            setInput({
                numeroCard:'',
                nombreCard:'',
                apellidoCard:'',
                DNICard:'',
                fechaCard:'',
                cvcCard:''
            })
            setMonth('');
            setYear('');

           
    }

   

    return(
        <div className={style.center}>
            <h1 className={style.title}>Comprar con tarjeta</h1>
            <div className={style.imageCenter}>
                 <img src={imagen} alt='tarjeta' className={style.imageTamaño}/>
            </div>
            <form className={style.formStyle} onSubmit={handlePayment}>

             <div className={style.labelInput}>
                 <label htmlFor="numeroCard"
                  className={style.letras}
                  >Número de la tarjeta</label>
             </div>
                 <input type="text"
                  name="numeroCard"
                  id="numeroCard"
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
                 id="nombreCard"
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
                 id="apellidoCard" 
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
                name="DNICard" 
                id="DNICard"
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

                 <div >
                <select value={Month} onChange={handleMonthChange} className={`${style.input} ${style.inputDesplegable}`}>
                    <option value="">Mes</option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                </select>

                <select value={Year} onChange={handleYearChange} className={`${style.input} ${style.inputDesplegable}`}>
                    <option value="">Año</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>
                </select>
            </div>

             <div className={style.labelInput}>
                 <label htmlFor="cvcCard"
                 className={style.letras}>Codigo de seguridad</label>
             </div>
                 <input type="text" 
                 name="cvcCard" 
                 id="cvcCard"
                 className={`${style.input} ${style.inputTamaño}`} 
                 value={input.cvcCard} 
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
                 {error.cvcCard && <p className={style.validation}>{error.cvcCard}</p>}

                <div className={style.buttonCenter}>
                  {(input.numeroCard === '' || error.numeroCard ||
                  input.nombreCard === '' || error.nombreCard ||
                  input.apellidoCard === '' || error.apellidoCard ||
                  input.DNICard === '' || error.DNICard ||
                  input.fechaCard === '' || error.fechaCard ||
                  input.cvcCard === '' || error.cvcCard) ? (
                    <button type="submit" className={style.buttongrey} disabled>Pagar</button>
                  ) : (
                     <button type="submit" className={style.buttonColor} >Pagar</button>
                 )}
                </div> 



            </form>
           
        </div>
    )
}

export default Form;