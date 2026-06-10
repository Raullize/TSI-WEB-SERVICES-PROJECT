<h1 align="center"> BasketLeague API </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
</p>

## Descrição
A BasketLeague API é o backend monolítico em NestJS responsável por centralizar o gerenciamento de times, jogadores, partidas e estatísticas da plataforma BasketLeague. A aplicação segue uma arquitetura em camadas, usa Prisma para persistência e expõe documentação interativa via Swagger.

## Tecnologias Utilizadas

- NestJS
- TypeScript
- PostgreSQL
- Prisma
- Docker
- Swagger

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- PNPM instalado
- Docker e Docker Compose instalados

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd TSI-WEB-SERVICES-PROJECT
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```

4. **Suba o banco de dados com Docker**
   ```bash
   docker compose up -d
   ```

5. **Gere o Prisma Client e aplique as migrations**
   ```bash
   pnpm prisma:generate
   pnpm prisma:migrate
   ```

6. **Inicie a aplicação**
   ```bash
   pnpm start:dev
   ```

## Documentação
- Swagger: `http://localhost:3000/swagger`
- Banco de dados: `docker-compose.yml`

## Contribuindo

Se você deseja contribuir para este projeto, siga estas etapas:

1. Crie um branch: `git checkout -b <nome_branch>`
2. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
3. Envie para o repositório remoto: `git push origin <branch>`
4. Crie a solicitação de pull

## Contribuidores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Raullize" title="Perfil no GitHub">
        <img src="https://github.com/Raullize.png" width="100px;" alt="Foto do Raul Lize Teixeira no GitHub"/><br>
        <sub>
          <b>Raul Lize Teixeira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
