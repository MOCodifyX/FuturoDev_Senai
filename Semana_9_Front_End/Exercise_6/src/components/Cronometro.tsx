//mickael_oliveira@estudante.sc.senai.br
//filipe_rezende@estudante.sesisenai.org.br
//igor_h_koehler@estudante.sc.senai.br
//rodrigo_padilha150@estudante.sesisenai.org.br

import { useState, useEffect} from 'react'

function Cronometro(){

    const [segundos, setSegundos] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        let delay: number | null = null;

        if(ativo) {
            delay = setInterval(() => {setSegundos ((s) => s + 1)},1000);
        }
     

        return () => {
            if (delay) {
            clearInterval(delay);
        }
        };

    }, [ativo]);

    useEffect(() => {
    document.title = `Cronometro: ${segundos}'s`;
  }, [segundos]);

    const iniciarCronometro = () => {
        setAtivo(true);
    };

    const pausarCronometro = () => {
    setAtivo(false);
    };

    const ZerarCronometro = () => {
    setAtivo(false);
    setSegundos(0);

    };


    return (
        
    <section id='cronometro'>

        <div>
            <h1>Contagem: {segundos} segundos</h1>
        </div>

        <div>

            <button onClick={iniciarCronometro}>Iniciar</button>

            <button onClick={pausarCronometro}>Pausar</button>

            <button onClick={ZerarCronometro}>Zerar</button>

        </div>

    </section>

    )

}

export default Cronometro;