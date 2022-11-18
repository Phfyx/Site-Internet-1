import './Texte.css';
import React, { useState } from 'react';
import Bouton from '../Bouton/Bouton';

export default function Texte() {

    const [tempP, setTempP] = useState("");
    const [tempA, setTempA] = useState("");
    const [prenom, setPrenom] = useState('Momo');
    const [age, setAge] = useState(3);

    return (
        <div>
            <div>
                <p className='Texte-centre'>
                    <b>{prenom}</b> est le plus beau, il a <b>{age}</b> ans
                </p>
            </div>
            <div className= 'boite-Parametres'>
                <div className='Parametres'>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        setPrenom(tempP);
                    }}>
                        <input
                            type='text'
                            placeholder='Prénom'
                            onChange={(e) => setTempP(e.target.value)}
                        />
                        <Bouton 
                            onClick={() => setPrenom(tempP)}
                            title="Changer le prénom"
                            type="submit"
                        />
                    </form>
                </div>
                <div className='Parametres'>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        setAge(tempA);
                    }}>
                        <input 
                            type='text'
                            placeholder='Âge'
                            onChange={(e) => setTempA(e.target.value)}
                        />
                        <Bouton
                            onClick={() => setAge(tempA)}
                            title="Changer l'âge"
                        />
                    </form>
                    
                </div>
            </div>
            
        </div>

    )
}