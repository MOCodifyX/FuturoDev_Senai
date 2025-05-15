import './Inicio.css'
import Fachada1 from '../IMG/Fachada1.jpg'

function Inicio() {
    return(
    
    <section id='inicio'>

        <div id='text-container'>
            <h1>Servindo massas<br />há mais de 70 anos</h1>
            <h2>qualidade passada por gerações</h2>
        </div>

        <div id='image-container'>
            <img src={Fachada1} alt="Fachada do restaurante Mamamia Massas" />
        </div>

    </section>

    );
}

export default Inicio;