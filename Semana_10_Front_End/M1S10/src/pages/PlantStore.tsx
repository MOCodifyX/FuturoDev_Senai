import { StoreLayout } from "../components/templates/StoreLayout";

type Plant = {
    id: string;
    name: string;
     price: number;
     light: "sun" | "shade";
}

const ListPlants : Plant[] = [
    { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
    { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
    { id: "1", name: "Girassol", price: 12.3, light: "sun" },
    { id: "2", name: "Cacto", price: 15, light: "sun" },
    { id: "3", name: "Bromélia", price: 20, light: "sun" },
    { id: "4", name: "Orquídea", price: 25, light: "shade" },
];

export const PlantStore = () => {
    const onAddToCart = (id: string) => {
        alert(`Produto ${id} foi adicionado ao Carrinho!!!`);
    };

    return (
        <StoreLayout plants={ListPlants} onAddToCart={onAddToCart} />
    );
}