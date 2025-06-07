# 🚀 Exercícios Semana 10 do Curso **FuturoDev** - SENAI

Este repositório contém os exercícios do curso **FuturoDev** do **SENAI**.

Link para o resultado final da junção das atividades:
🔗 **[👉 Visualizar Exercício](https://mocodifyx.github.io/FuturoDev_Senai/Semana_9_Front_End/Exercises/)** 

---

## 📓 **Exercise 1 - Loja de plantas: Estrutura do projeto**
📌 **Descrição:**  

Sua demanda é desenvolver um e-commerce de plantas de jardim. Para iniciar, você deve **criar o Projeto** de React + TypeScript e fazer a criação das pastas, seguindo os moldes do **Atomic Design.**

 

- src

   - components

   - atoms

   - molecules

   - organisms

   - templates

- pages

---

## ⚛️ **Exercise 2 - Loja de plantas: Átomos**
📌 **Descrição:**  

Crie os **3** componentes atômicos:

- Button:

  - Props: variant: ""primary" | "secundary".

- PriceTag:

  - Props: value: number;

  - Deve aparecer como formatação monetária (R$ 12,30).

- PlantIcon:

  - Props: size: "sm" | "md" | "lg";

  - Usar ícone @‌mui/icons-material/LocalFlorist.

---

## 📝 **Exercise 3 - Loja de plantas: Molécula**
📌 **Descrição:**  

Crie um Card de produtos (PlantCard) usando os átomos da tarefa anterior e qualquer componente extra que achar necessário. Utilize CSS Modules para estilização, se necessário.

**Props**: Plant (id, name, price e light: "sun" | "shade")

---

## ✔️ **Exercise 4 - Loja de plantas: Organismos Responsivo**
📌 **Descrição:**  

Crie o Componente PlantGrid, que será basicamente para apresentar os CardPlants.

Use useMediaQuery para:

- Mostrar 1 coluna em mobile;

- 2 colunas em tablet;

- 3 colunas em desktop.

---

## 🖼️ **Exercise 5 - Loja de plantas: Tema**
📌 **Descrição:**  

Você deve criar uma variação do **tema claro e escuro** utilizando o theme do Material UI. O tema claro deve ser baseado em um tom de marrom e, o escuro, em um tom de verde; devemos ter um **botão** para fazer a mudança destes temas.

Deve aplicar o temas no default e no paper; nesse caso, aqui, é interessante a utilização do paper em pontos chaves do projeto para colaborar com o design.

Sugestão de cores:
Claro: #c2a39a | #e1d1c8
Escuro: #001600 | #0a3007

---

## 📎 **Exercise 6 - Loja de plantas: Template e Page**
📌 **Descrição:**  

Crie o **StoreLayout**:

- Header com logo;

- Área de conteúdo;

- Footer.

Crie a página **PlantStore**:

- Usa o template;

- Mostra o grid com pelo menos 6 produtos mockados;
  

```
const mockPlants: Plant[] = [
  { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
  { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
  // Adicione mais 4 itens...
];
```

---
