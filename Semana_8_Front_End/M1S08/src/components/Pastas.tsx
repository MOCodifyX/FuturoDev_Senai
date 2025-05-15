import './Pastas.css';

import Espaguete from '../IMG/Espaguete.jpg';
import Tagliatelle from '../IMG/Tagliatelle.jpg';
import Fettuccine from '../IMG/Fettuccine.jpg';
import Penne from '../IMG/Penne.png';
import Rigatoni from '../IMG/Rigatoni.jpg';
import Pappardelle from '../IMG/Pappardelle.jpg';

const pastas = [
  {
    nome: 'Espaguete',
    imagem: Espaguete,
    preco: 'R$ 1,250',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
  },
  {
    nome: 'Tagliatelle',
    imagem: Tagliatelle,
    preco: 'R$ 3,250',
    molhos: ['Alla Puttanesca', 'Alla Matriciana']
  },
  {
    nome: 'Fettuccine',
    imagem: Fettuccine,
    preco: 'R$ 2,250',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe']
  },
  {
    nome: 'Penne',
    imagem: Penne,
    preco: 'R$ 7,250',
    molhos: ['Alla Puttanesca', 'Cacio e Pepe']
  },
  {
    nome: 'Rigatoni',
    imagem: Rigatoni,
    preco: 'R$ 6,250',
    molhos: ['Alla Matriciana']
  },
  {
    nome: 'Pappardelle',
    imagem: Pappardelle,
    preco: 'R$ 9,250',
    molhos: ['Alla Puttanesca', 'Alla Matriciana']
  }
];

function Pastas() {
  return (
    <section id='pastas'>
        
      <div id='titulos'>
        <h1>Cardápio de Pastas</h1>
      </div>

      <div className='card-Pastas'>
        {pastas.map((pasta, index) => (
          <div key={index}>
            <h2>{pasta.nome}</h2>
            <img src={pasta.imagem} alt={pasta.nome} />
            <p>Valor: {pasta.preco}</p>
            <h2>Molhos Permitidos:</h2>
            {pasta.molhos.map((molho, i) => (
              <p key={i}>{molho}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pastas;
