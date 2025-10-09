# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript, criado para demonstrar aos alunos da Mentoria 2.0 como estruturar, implementar e organizar automações de testes end-to-end utilizando Cypress, Custom Commands e geração de relatórios.

## Objetivo

O objetivo deste projeto é servir como referência prática para automação de testes de aplicações web, utilizando o Cypress, com foco em boas práticas, organização do código e geração de relatórios automatizados.

## Componentes do Projeto

- **Cypress**: Framework principal para automação dos testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de teste automatizados.
  - `cypress/fixtures/`: Dados de teste (ex: credenciais).
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos

- Node.js instalado
- Clonar e executar a [API](https://github.com/juliodelimas/banco-api) e a [aplicação web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```sh
   git clone <url-do-repo>
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para rodar todos os testes em modo headless:
  ```sh
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```sh
  npm run cy:open
  ```
- Os relatórios em HTML serão gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- **login.cy.js**: Testa fluxos de login com dados válidos e inválidos.
- **transferencia.cy.js**: Testa transferências válidas e cenários de erro (ex: valor acima de R$5.000,00 sem autenticação).

## Custom Commands

Os comandos personalizados estão implementados em [`cypress/support/commands/`](cypress/support/commands/):

- [`cy.fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js): Realiza login com usuário e senha válidos do fixture.
- [`cy.fazerLoginComCredenciaisInvalidas`](cypress/support/commands/login.js): Realiza login com senha inválida.
- [`cy.verificarMansagemNoToast`](cypress/support/commands/common.js): Valida mensagem exibida no toast.
- [`cy.selecionarOpcaoNaCombobox`](cypress/support/commands/common.js): Seleciona uma opção em um combobox pelo label.
- [`cy.realizarTransferencia`](cypress/support/commands/transferencia.js): Executa o fluxo de transferência entre contas.

## Observações

- Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.
- Os dados de acesso estão em [`cypress/fixtures/credenciais.json`](cypress/fixtures/credenciais.json).

---
Mentoria 2.0 – Automação de Testes com Cypress