import React from 'react';
import logo2 from '../../assets/img/logo_2.png';

const Rodape = () => {
    return (
        
        <footer className="text-center">
            <div className="rodape">
                <img src={logo2} style={{width : '100px'}} />
                <p>Desenvolvido pelo <a href="https://github.com/fernandoaraujodev/Edux-Frontend">Squad</a></p>
            </div>
        </footer>
    )
}

export default Rodape;
