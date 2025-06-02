import { useState } from "react";
import { FilmsGrid } from "../components/molecules/FilmsGrid";
import { SynopsisCard } from "../components/molecules/SynopsisCard";

const fakeFilms = [
  {
    id: "1",
    name: "Matrix",
    image: "matrix.jpg",
    gender: "Ação",
    age: 16,
    synopsis: "Thomas Anderson, um jovem programador conhecido como Neo, vive uma vida dupla como hacker. Ao ser contatado por misteriosos rebeldes, ele descobre que o mundo em que vive é uma simulação criada por máquinas para controlar a humanidade. Neo é recrutado para liderar a luta pela liberdade e descobrir seu verdadeiro destino como 'O Escolhido'.",
  },
  {
    id: "2",
    name: "Toy Story",
    image: "toystory.jpg",
    gender: "Animação",
    age: 0,
    synopsis: "Quando Andy sai do quarto, seus brinquedos ganham vida. Woody, o caubói favorito de Andy, vê sua liderança ameaçada pela chegada do novo brinquedo moderno: Buzz Lightyear. Entre conflitos e aventuras, os dois precisam aprender a trabalhar juntos para voltar para casa antes que Andy se mude.",
  },
  {
    id: "3",
    name: "Interestelar",
    image: "interestelar.jpg",
    gender: "Ficção Científica",
    age: 12,
    synopsis: "Num futuro onde a Terra está morrendo, um grupo de astronautas parte numa missão para encontrar um novo lar para a humanidade. Entre eles está Cooper, um ex-piloto e pai dedicado. Viajando por buracos de minhoca e enfrentando dilemas temporais, eles lutam contra o tempo e o espaço em busca da salvação da espécie humana.",
  },
  {
    id: "4",
    name: "A Origem",
    image: "aorigem.jpg",
    gender: "Suspense",
    age: 14,
    synopsis: "Dom Cobb é um ladrão especializado em extrair segredos do subconsciente durante os sonhos. Ele recebe uma missão impossível: plantar uma ideia na mente de alguém — a chamada 'inception'. Para isso, ele monta uma equipe e embarca em uma jornada pelo mundo dos sonhos, onde a linha entre realidade e imaginação se torna cada vez mais tênue.",
  },
  {
    id: "5",
    name: "Divertida Mente",
    image: "divertidamente.jpg",
    gender: "Animação",
    age: 0,
    synopsis: "Dentro da mente da jovem Riley vivem cinco emoções: Alegria, Tristeza, Medo, Raiva e Nojinho. Quando a família se muda para uma nova cidade, essas emoções enfrentam desafios para manter Riley emocionalmente equilibrada. Uma jornada emocionante e educativa sobre sentimentos, crescimento e identidade.",
  },
  {
    id: "6",
    name: "O Senhor dos Anéis: A Sociedade do Anel",
    image: "senhordanéis.jpg",
    gender: "Fantasia",
    age: 12,
    synopsis: "O jovem hobbit Frodo recebe a missão de destruir um anel mágico que possui o poder de corromper e dominar toda a Terra Média. Ao lado de uma sociedade formada por humanos, elfos, anões e outros hobbits, Frodo inicia uma perigosa jornada até a Montanha da Perdição, enfrentando forças sombrias e descobrindo o valor da amizade e da coragem.",
  },
];

function FilmsPage() {
  const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);

  const selectedFilm = fakeFilms.find(film => film.id === selectedFilmId);

  return (
    <div>
      
      <br />
      <br />

      <h1>Catálogo de Filmes</h1>

      {selectedFilm ? (
        <SynopsisCard film={selectedFilm} onBack={() => setSelectedFilmId(null)} />
      ) : (
        <FilmsGrid films={fakeFilms} onSeeDetails={setSelectedFilmId} />
      )}
    </div>
  );
}

export default FilmsPage;