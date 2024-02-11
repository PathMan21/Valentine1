import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../theme/accueil.css";
import "../theme/font.css";

const Accueil = () => {
    const [buttonNo, setButtonNo] = useState('');
    const [buttonNoLeft, setButtonNoLeft] = useState('');

    function aleatoire(max) {
        return Math.floor(Math.random() * max);
    }

    function supressSystem32() {
        console.log("clicked");

        let background = document.getElementById("background-overlay");
        background.style.animation = "whenNo 1 ease-in-out 5s";
        background.style += "animation-fill-mode: forwards;";

    }

    function noFunction() {
        const maxWidth = (document.documentElement.clientWidth)-100;
        const maxHeight = (document.documentElement.clientHeight)-50;

        const newButtonNo = aleatoire(maxHeight); 
        const newButtonNoLeft = aleatoire(maxWidth); 

        setTimeout(function(){
            setButtonNo(newButtonNo + "px");
            setButtonNoLeft(newButtonNoLeft + "px");
        },160);
        
    }

    return (
        <div id="background-overlay" className="background-overlay">
            <div className="pageAccueil">
                <h2>Nicolas, sois mon valentin</h2>
                <Link className='oui' to="/oui"><button>Oui</button></Link>
                <button
                    className="transition-button"
                    style={{
                        position: 'fixed',
                        left: buttonNoLeft,
                        top: buttonNo,
                    }}
                    onMouseEnter={noFunction}
                    onClick={supressSystem32}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default Accueil;
