import { useParams, useNavigate } from "react-router-dom";

function DetailItemPage() {

    const {id} = useParams();
    const navigate = useNavigate();

    //DADOS (SIMULAÇÃO)

    const items = {
        id: id,
        name: `Item ${id}`,
        description: `Descrição detalhada do Item ${id}`,
    }

     return (
        <div>

            <h2>Item ID: {items.id}</h2>
            <p>Name: {items.name}</p>
            <p>Description: {items.description}</p>

            <button onClick={() => navigate(-1)}>Voltar para a lista de items</button>
            <button onClick={() => navigate('/')}>Ir para a HomePage</button>

        </div>
    );
    }

export default DetailItemPage;