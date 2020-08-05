import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/41237418?s=460&u=ba115d05384f88035dcc44aa0f318d2b94b44e6c&v=4" alt="Michel Lima"/>
                <div>
                    <strong> Michel Lima </strong>
                    <span> Progrador front-end </span>
                </div>
            </header>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur nisl. Vivamus id turpis commodo, vulputate augue ac, semper lorem. Nullam urna justo, pellentesque id arcu nec, ultricies varius sem. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;