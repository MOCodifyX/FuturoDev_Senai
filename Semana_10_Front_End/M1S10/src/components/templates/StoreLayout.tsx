import { PlantGrid } from "../organisms/PlantGrid";
import type { Plant } from "../organisms/PlantGrid";

type StoreLayoutProps = {
    plants: Plant[];
    onAddToCart: (id: string) => void;
    footerText?: string;
};

export const StoreLayout = ({ plants, onAddToCart, footerText }: StoreLayoutProps) => {

  return (

    <div className="min-h-screen flex flex-col">
      <header className="bg-green-700 text-white p-4">
        <h1 className="text-center text-2xl font-bold">🌿 PlantStore 🌿</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <PlantGrid plants={plants} onAddToCart={onAddToCart} />
      </main>

      <footer className="bg-green-700 text-white p-4 text-center text-sm">
        <p>{footerText ?? "© 2025 PlantStore - Todos os direitos reservados."}</p>
      </footer>
    </div>

  );
};