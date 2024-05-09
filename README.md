# 🏆 API da Champions League

API desenvolvida em Node.js com TypeScript e Express.js para gerenciar informações sobre jogadores e clubes da Champions League.

## Endpoints

### Jogadores

#### Listar Jogadores

```shell
GET /players
```

Retorna uma lista de 20 jogadores da Champions League.

#### Obter Jogador por ID

```shell
GET /players/:id
```

Retorna informações sobre um jogador específico com o ID fornecido.

#### Cadastrar Jogador

```shell
POST /players
```

Cadastra um novo jogador na base de dados.

#### Deletar Jogador por ID

```shell
DELETE /players/:id
```

Remove um jogador da base de dados com o ID fornecido.

#### Atualizar Dados do Jogador por ID

```shell
PATCH /players/:id
```

Atualiza as estatísticas de um jogador específico com o ID fornecido.

### Clubes

#### Listar Clubes

```shell
GET /clubs
```

Retorna uma lista de 20 clubes da Champions League.

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm run start:dev
```

ou

```bash
npm run start:watch
```
