type PriceTagProps = {
  value: number;
};

export const PriceTag = ({ value }: PriceTagProps) => {
  const formatted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return <span>{formatted}</span>;
};