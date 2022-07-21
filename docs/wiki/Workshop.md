# Workshop de testes automatizados com cypress

## Participantes do Workshop
| Nome                | Matrícula | GitHub                              | Disciplina |
| ------------------- | --------- | ----------------------------------- | ---------- |
| Arthur D'Assumpcao  | 190084570 | https://github.com/ArtAssLou        | MDS        |
| Gustavo Barbosa     | 180042041 | https://github.com/brbsg            | MDS        |
| João Paulo Monteiro | 202045141 | https://github.com/joaombc          | MDS        |
| Lucas Rodrigues     | 200059211 | https://github.com/lucascard        | MDS        |

## Documentação do cypress
https://www.cypress.io/

## Pra que serve um teste automatizado? 

Testes automatizados são frequentemente utilizados na construção de um software. Na maioria dos projetos ágeis, é comum o produto ter entregas contínuas durante o seu ciclo de vida, porém, como muitas alterações são feitas constantemente, é preciso de uma ferramenta para assegurar que as funcionalidades que já estejam funcionando continuem funcionando, é aí que entram os testes automatizados.

Basicamente, um script corre a aplicação e automatiza as ações de um usuário comum, ao mesmo tempo que ele faz essas ações, ele vai fazendo verificações, para assegurar que o sistema está respondendo corretamente. Esse tipo de prática economiza muita tempo de um testador, além de assegurar que a cobertura de testes vai ser bem maior. Por fim, conseguimos concluir que os testes automatizados são muito importantes, mas não substituem testes manuais. 

## O que é o cypress? 

Cypress é um framework de testes automatizados e2e, ou seja, cobre 100% da aplicação, podendo realizar testes tanto no front quanto no back. Sua linguaguem é Typescript e Javascript, sendo muito mais utilizado em Javascript. Sua estrutura é bastante intuitiva, extremamente fácil de aprender. Importante citar que o cypress pode trabalhar fora do repositório da aplicação, sendo assim, muitas vezes é o trabalho de um QA(Quality Assurance) que nem mesmo precisa ter acesso ao código fonte do sistema.

## O que o cypress faz? 

Como supracitado, o cypress tem duas principais frentes, a automação e os testes. 

Cypress é capaz de visitar páginas, correr uma aplicação e realizar testes específicos. Abaixo alguns exemplos de como o cypress pode ser utilizado.

Cenário de teste 1: O usuário entra no site X, visualiza a tela de login, insere o seu email, senha e clica no botão login.

| Comando | Comentário |
|----------------|-----------|
|cy.visit('X') | Visita o site X |
|cy.url().should('be.eq','X') | Confere se a url está correta |
|cy.contains('Título da tela de login').should('be.visible') | Confere se o título da tela de login está visivel |
|cy.get('#login').type('email@gmail.com') | Localiza o campo de input de email e digita o email correspondente |
|cy.get('#senha').type('12345678') | Localiza o input de senha e digita a senha correspondente |
|cy.get('#botaoLogin').click() | Localiza o botão de login e clica nele |
|cy.contains('Título da página inicial').should('be.visible') | Localiza o título da página e confere se o login ocorreu corretamente |

Com essa caso de teste, podemos subir uma versão do nosso software e ter garantido que o login correto está funcionando corretamente. O ideal é que todas as funcionalidades de um software esteja mapeada em um teste automatizado, pois assim, é possível garantir que ele não quebrará em produção. 

## Quais empresas utilizam cypress?
* Petz
* Carrefour
* TypeForm
* PayPal
* Walt Disney 
* DHL
* HashiCorp
* Airtable
* Room&Board
* Pendo
* Kiwi.com
* Pandora
* Nielsen
* OpenTable 
* Autodesk
* Snyk
* Warby Parker
* Twilio
* Zocdoc
* Johnson & Johnson
* Trulia

## Workshop 
A primeira parte do workshop é uma explicação de todos os temas supracitados, pois é uma base teórica para responder todos os porques sobre testes automatizados. 
Posteriormente, será preenchido um formulário simples com o cypress, de forma automatizada. Com esse primeiro rápido projeto já é possível aprender pelo menos as 10 principais funcionalidades do cypress.
Após o primeiro projeto ser concluído, um desafio extra é lançado, criar casos de teste para uma aplicação que é uma calculadora feita com vue.js. 

### Instalação do Ambiente 

- Instalar o Visual Studio Code;
- Instalar a última versão do node.js;
- Criar um diretório vázio;
- Entrar neste diretório;
- Rodar os seguintes comandos: 
- git init
- criar o .gitignore e colocar a pasta node_modules
- npm init
- npm install
- npm install cypress --save-dev
- npx cypress open

- Clonar neste repositório o código HTML do formulário que nós vamos usar para testar;
- git clone https://github.com/rafaballerini/Formulario.git;
- Instalar a extensão 'Live Server' para por o nosso formulário no ar;

## Desafio - Formulário
Dentro do VSCODE, clicar no arquivo .html e na extensão Go Live (canto inferior direito), ao clicar, irá abrir uma guia no navegador com o formulário. 

Passo a passo para concluir o desafio, usar as funcionalidades do cypress para conseguir automatizar o envio do formulário.

Comandos que a serem utilizados: 

|Comandos | Função |
|---------|--------|
|Describe | Suíte de testes |
|it | Representa cada caso de teste
|cy.visit('url' | Visita o site desejado |
|cy.get('id') | Localiza o elemento classe, ID, div.. etc |
|cy.contains('texto') | Localiza o elemento pelo texto | 
|cy.get('id').click() | Clica no elemento |
|cy.get('id').select('option') | Seleciona uma das options de um elemento do tipo select |
|cy.get('id').should('be.') | Faz verficações, como conferir se o elemento está visível, vázio e etc..|

É muito importante que a documentação do cypress seja consultada nesse processo de aprendizado.

Somente um cenário deve ser criado: Preenchimento de todos os campos e envio do formulário.

## Desafio - Calculadora

Site do desafio da calculadora: https://kylbutlr-calculator.herokuapp.com/ . 
Cenários que devem ser criados: 
* Soma de dois números
* Subtração de dois números
* Multiplicação de dois números
* Divisão de dois números 
* Limpar resultado no visor 

## Referências Bibliográficas

* https://softdesign.com.br/blog/cypress_passo_a_passo_para_comecar_a_usar
* https://www.cypress.io/
* https://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-basico





