# 🚀 MiniProjeto 1 - Semana MS07 Curso **FuturoDev** - SENAI

Este repositório contém o Primeiro MiniProjeto do curso **FuturoDev** do **SENAI**.

---

Estaremos desenvolvendo nosso mini-projeto front-end.

Já entendemos conteúdos básicos e avançados de HTML, CSS e JavaScript e, com base nesses conhecimentos, criaremos a interface para uma aplicação de Reflorestamento. Nosso foco principal é a interface visual, logo não lidaremos, nesse momento, com persistências de dados no back-end e/ou banco de dados.
Poderão ser usados dados fakes para testar a aplicação e suas funcionalidades; isso, fica de acordo com a necessidade de cada desenvolvedor.
Os projetos tentam simular, o mais fielmente, um ambiente de desenvolvimento, incentivando a autonomia na tomada de decisões. Serão apresentadas especificações de regras de negócio e somente teremos especificações técnicas quando as mesmas foram imprescindíveis para as regras do negócio (aplicação).

---

Link para o resultado final da junção das atividades

🔗 **[👉 Visualizar MiniProjeto](https://mocodifyx.github.io/FuturoDev_Senai/Semana_7_Front_End/MiniProjeto/)** 

🔗 **[👉 Visualizar Video de Defesa do MiniProjeto](https://mocodifyx.github.io/FuturoDev_Senai/Semana_7_Front_End/VideoDefesaMiniProjeto/)**

---

## 🔐 **[M1S07] MiniProjeto: Cadastro de usuário**
📌 **Descrição:**  

Ao entrar na aplicação, o usuário deve fazer o cadastro de seus dados, cadastrando usuário e senha, escolhendo uma das três árvores que deverão serão disponibilizadas de avatar de reflorestamento; são elas: o Pau-Brasil, a Castanheira e a Peroba-Rosa.

Ao escolher um dessas árvores, o estilo de exibição de todas as páginas devem ficar com a cor principal da árvore: o Pau-Brasil com um tom de vermelho; a Castanheira com um tom de marrom e, a Peroba-Rosa, com um tom de cor de rosa.

Nota técnica: Para o cadastro, deixe pronto o objeto de usuário em Json, para, posteriomente, ser enviado para o back-end. É interessante salvar o modo do usuário utilizador no localStorage.

---

## 🧭 **[M1S07] MiniProjeto: Navegação**
📌 **Descrição:**  

Temos a necessidade de criar um menu de navegação ao início das seguintes páginas html: cadastro de ações de reflorestamento, perfil de usuário, relatório e destaques.

O menu deve conter todas essas opções e enviar o usuário para a tela em questão.

---

## 🏅 **[M1S07] MiniProjeto: Destaques**
📌 **Descrição:**  

Aqui, faremos uma página simples com os 3 (usuários) destaques em reflorestamento. Será exibido somente o avatar e o nome dos 3 usuários que tiverem mais contribuído com o reflorestamento; não existirá exibição de posição.

Nota técnica: Use uma coleção do objeto de usuário para teste, preencha totalmente com dados ficticios.

---

## 🖼️ **[M1S07] MiniProjeto: Perfil de usuário**
📌 **Descrição:**  

Cada usuário poderá acessar uma tela que mostrará seu perfil, com suas informações. Aqui, o usuário só poderá alterar sua BIO e nada a mais.

Nesse perfil, também teremos a exibição de sua participação como reflorestador, que é a exibição de quantas árvores que o mesmo plantou (sem distinção de tipo).
Um artificio interessante que foi solicitado é que não teremos upload de imagem para foto de avatar; os avatares de todos os usuárioa são fixos e é uma das três arvores que escolheram durante a fase de cadastro de seus perfis.

Essa imagem muda confome a quantidade de árvores plantadas (100, 300, 700 e 1500+), basicamente, são estágios de crescimento dessa árvore (plantada, broto, jovem e madura).

Nota técnica: Use um objeto de usuário fake para testar essa tela.

---

## 🌳 **[M1S07] MiniProjeto: Cadastro de ações de reflorestamento**
📌 **Descrição:**  

Precisamos de uma tela em que o usuário poderá realizar o cadastro de suas ações de reflorestamento.

Para essa tela, teremos a quantidade de árvores plantadas e qual sua espécie entre as que estão cadastradas no projeto (Ipês, Angicos, Aroeiras, Jequitibás e Peroba do campo).

Nota técnica: Para o cadastro deixe pronto o objeto do novo registro de reflorestamento em Json, para posteriomente ser enviado para o back-end, como não possuímos uma conexão com o banco podemos deixar o campo de usuário vazio, mas ele precisa existir.

---

## 🧾 **[M1S07] MiniProjeto: Relatório**
📌 **Descrição:**  

Precisaremos de uma tela de relatório. Será basicamente uma busca nos registros de reflorestamento (que já fizemos a tela de cadastro). A busca deve ter o campo usuário e tipo de árvore, com um dos campos preenchidos (ou os dois) deve ser exibido em tela o resultado da busca em tela.

Nota técnica: Use uma coleção do objeto usado para o registro de reflorestamento para teste, preencha totalmente com dados ficticios.

---
