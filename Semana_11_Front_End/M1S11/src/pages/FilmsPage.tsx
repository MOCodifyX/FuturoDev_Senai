import { Link } from "react-router-dom";

const films = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

function FilmsPage() {
    return (

        <div>

            <h1>Catálogo de Filmes</h1>

            <ul>
                {films.map(films => (
                    <li key={films.id}>
                        <Link to={`/item/${films.id}`}>
                            Ler Sinopse {films.name} 
                        </Link>
                    </li>
                ))}
            </ul>

        </div>

    )   
}
export default FilmsPage;