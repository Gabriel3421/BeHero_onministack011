# BeHero_onministack11

Ideia para ajudar ONG's a encontrar doadores usando React, React-Native e Node.js, utilizando a arquitetura MVC.


## Backend

Foi desenvolvido com **Node.js** e é usado como api para servir os dados tanto para a versão Web como para a Mobile, dentro dele também foi criado uma banco de dados para armazenar dados das ONG's e de seus casos, foi utilizado o banco de dados **Sqlite** para armazenar os dados bem como a ferramenta de teste automatizados **Jest** para fazer o testes das chamadas. Além disso foi utilizado o pacote **celebrate** para adicionar validações antes de adicionar os elementos no banco de dados.

## Frontend WEB

Foi desenvolvido com **React** uma interface onde as ONG's podem tanto se cadastrar como cadastrar seus casos que necessitam de doações, foi utilizado um controller para cada entidade, foi utilizado o pacote **axios** para se comunicar com o backend trazendo as informações necessárias.

## Frontend Mobile

Foi desenvolvido com **React-Native** uma interface onde os usuários que desejam ajudar as ONG's possam ver os casos que precisam de ajuda e mandar um whatsapp ou um email para a ONG, o app foi desenvolvido utilizando a plataforma expo como base do projeto para simplificar o desenvolvimento e foi utilizado o pacote **axios** para se comunicar com o backend trazendo as informações necessárias e o pacote do expo expo-mail-composer para ter acesso as funcionalidades de email do android. 
