import React from 'react';
import './style.scss';

const Newsletter = () => {
    return (
        <form className="newsletter">
            <fieldset>
                <legend>Cadastro newsletter</legend>
                <label htmlFor="add-contact">Newsletter texto de apoio lorem ipsum sit amet consectur adiscipling</label>
                <input 
                    type="text" 
                    id="add-contact" 
                    name="add-contact"
                    placeholder="Digite seu email aqui" 
                />
                <button type="submit">Call to action</button>
            </fieldset>
        </form>
    );
}

export default Newsletter;