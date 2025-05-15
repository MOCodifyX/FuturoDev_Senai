import './Bebidas.css'

function Bebidas() {
    return(
    
    <section id='bebidas'>

        <div id='titulos'>
            <h1>Cardápio de Bebidas</h1>
        </div>

        <div id='categorias'>
            <h3>Água</h3>
        </div>

        <div>
            <div className="item-bebida"><p>Chá Mate</p> <p>R$40,00</p></div>
            <div className="item-bebida"><p>Chá Camomila</p> <p>R$50,00</p></div>
            <div className="item-bebida"><p>Água Voss</p> <p>R$30,00</p></div>
        </div>

        <div id='categorias'>
            <h3>Refrigerantes</h3>
        </div>

        <div>
            <div className="item-bebida"><p>Coca-Cola</p> <p>R$20,00</p></div>
            <div className="item-bebida"><p>Guarana</p> <p>R$20,00</p></div>
            <div className="item-bebida"><p>Sprite</p> <p>R$20,00</p></div>
        </div>

        <div id='categorias'>
            <h3>Sucos</h3>
        </div>

        <div>
            <div className="item-bebida"><p>Morango</p> <p>R$50,00</p></div>
            <div className="item-bebida"><p>Laranja</p> <p>R$60,00</p></div>
            <div className="item-bebida"><p>Uva</p> <p>R$30,00</p></div>
        </div>
 
    </section>

    );
}

export default Bebidas;