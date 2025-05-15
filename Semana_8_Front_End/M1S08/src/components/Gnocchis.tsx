import './Gnocchis.css'

import GnocchiDeBatata from '../IMG/GnocchiDeBatata.jpg'
import GnocchiDeEspinafre from '../IMG/GnocchiDeEspinafre.jpg'
import GnocchiDeCenoura from '../IMG/GnocchiDeCenoura.jpg'
import GnocchiDeBeterraba from '../IMG/GnocchiDeBeterraba.jpg'

function Gnocchis() {
    return(
    
    <section id='gnocchis'>

        <div id='titulos'>
            <h1>Cardápio de Gnocchis</h1>
        </div>

        <div className='card-gnocchis'>

            <div>
                <img src={GnocchiDeBatata} alt="Gnocchi de Batata" />
                <h2>Gnocchi de Batata</h2>
                <p>Valor R$:250</p>
            </div>
            
            <div>
                <img src={GnocchiDeEspinafre} alt="Gnocchi de espinafre" />
                <h2>Gnocchi de espinafre</h2>
                <p>Valor R$:300</p>
            </div>

            <div>
                <img src={GnocchiDeCenoura} alt="Gnocchi de cenoura" />
                <h2>Gnocchi de cenoura</h2>
                <p>Valor R$:150</p>
            </div>

            <div>
                <img src={GnocchiDeBeterraba} alt="Gnocchi de beterraba" />
                <h2>Gnocchi de beterraba</h2>
                <p>Valor R$:1,500</p>
            </div>

        </div>

        <div id='titulos'>
            <h1>Cardápio de Molhos</h1>
        </div>

        <div id='molhos'>

            <h3>Alla Puttanesca</h3>
            <h3>Al Pesto di Basilico</h3>
            <h3>Cacio e Pepe</h3>
            <h3>Alla Matriciana</h3>

        </div>

        
    </section>

    );
}

export default Gnocchis;