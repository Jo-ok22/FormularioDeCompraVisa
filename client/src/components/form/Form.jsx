import style from './Form.module.css';

const Form = () => {
    return(
        <div className={style.center}>
            <form className={style.formStyle}>

             <div className={style.labelInput}>
                 <label htmlFor="numeroCard">Número de la tarjeta</label>
             </div>
                 <input type="text" name="numeroCard"/>
             
             <div className={style.labelInput}>
                 <label htmlFor="nombreCard">Nombre</label>
             </div>
                 <input type="text" name="nombreCard"/>

             <div className={style.labelInput}>
                 <label htmlFor="apellidoCard">Apellido</label>
             </div>
                 <input type="text" name="apellidoCard"/>

             <div className={style.labelInput}>
                 <label htmlFor="fechaCard">Fecha de expiración</label>
             </div>
                 <input type="text" name="fechaCard"/>

             <div className={style.labelInput}>
                 <label htmlFor="cvcCard">CVC</label>
             </div>
                 <input type="text" name="cvcCard"/>

             <div className={style.buttonCenter}>
                  <button type="submit" >Pagar</button>
             </div>

            </form>
        </div>
    )
}

export default Form;
