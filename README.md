# Threewygo
Mini aplicação web para cadastro e listagem de cursos

## Descrição
Projeto criado para o teste seletivo `@twygo.`
Essa aplicação web possui:

### Área pública
- Homepage com listagem de cursos
- Página do curso com a listagem de vídeos e o player

### Área logada
- CRUD de cursos
- Página para cadastro/exclusão de vídeos

## Ferramentas
Essa aplicação foi criada utilizando `Ruby on Rails`, `React` e o framework `Inertia.js`

- Ruby on Rails
- React
- Inertia.js
- Typescript
- TailwindCSS
- Docker
- GitHub actions
- Vite
- RSpec

## Configuração
### Pré-requisitos
- Docker
- Docker compose

### Rodando o projeto
1. Clone o projeto em sua máquina
2. Copie o arquivo de variáveis de ambiente
`cp .env.example .env`
3. Execute o docker compose
`docker compose up`
4. Acesso o projeto através da url http://localhost:3100

### Para rodar os testes

#### Testes de backend

`docker compose run --rm app bin/rails spec`

#### Testes de frontend

`docker compose run --rm app npm run test`






