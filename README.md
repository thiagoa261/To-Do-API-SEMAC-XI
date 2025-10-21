# 📝 To-Do API - SEMAC XI

API para gerenciamento de tarefas desenvolvida em NestJS como projeto prático do minicurso ministrado por mim na **Semana da Computação - IFSP Catanduva**.

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[MongoDB](https://www.mongodb.com/)** - Banco de dados NoSQL
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript

## 📋 Funcionalidades

- ✅ Criar nova tarefa
- ✅ Atualizar tarefa existente
- ✅ Deletar tarefa
- ✅ Buscar tarefa por ID
- ✅ Listar tarefas com filtros
- ✅ Paginação de resultados

## 🛠️ Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- [npm](https://www.npmjs.com/) ou [bun](https://bun.com)
- [MongoDB](https://www.mongodb.com/) local ou MongoDB Atlas

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/thiagoa261/To-Do-API-SEMAC-XI.git
cd To-Do-API-SEMAC-XI
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/todo-semac
```

### 4️⃣ Execute a aplicação

```bash
# Modo de desenvolvimento
npm run start:dev

# Modo de produção
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:3000`

## 📚 Endpoints da API

### 📌 Base URL
```
http://localhost:3000/todo-list
```

### 🔗 Rotas Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/todo-list` | Criar nova tarefa |
| `POST` | `/todo-list/filter` | Listar tarefas com filtros |
| `GET` | `/todo-list/:id` | Buscar tarefa por ID |
| `PUT` | `/todo-list/:id` | Atualizar tarefa por ID |
| `DELETE` | `/todo-list/:id` | Deletar tarefa por ID |

### 📝 Exemplos de Uso

#### Criar Tarefa
```bash
POST /todo-list
Content-Type: application/json

{
  "title": "Estudar NestJS",
  "isCompleted": false
}
```

#### Filtrar Tarefas
```bash
POST /todo-list/filter
Content-Type: application/json

{
  "offset": 0,
  "limit": 10,
  "filter": {
    "isCompleted": false
  }
}
```

#### Buscar por ID
```bash
GET /todo-list/507f1f77bcf86cd799439011
```

#### Atualizar Tarefa
```bash
PUT /todo-list/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "title": "Estudar NestJS - Concluído!",
  "isCompleted": true
}
```

#### Deletar Tarefa
```bash
DELETE /todo-list/507f1f77bcf86cd799439011
```

## 🏗️ Estrutura do Projeto

```
src/
├── 🎮 app.controller.ts       # Controlador principal
├── 📦 app.module.ts          # Módulo principal - orquestra toda a aplicação NestJS
├── ⚙️ app.service.ts         # Serviço principal
├── 🚀 main.ts                # Inicializa servidor e configurações
├── 📊 models/                # Camada de dados - schemas e modelos do MongoDB
│   ├── 📦 models.module.ts   # Módulo de schemas - exporta modelos para toda app
│   └── 🏷️ task.ts           # Schema Task - define estrutura da tarefa no banco
└── 📝 to-do-list/           # Módulo de tarefas
    ├── 🎮 to-do-list.controller.ts  # Controlador to-do
    ├── ✅ to-do-list.dto.ts         # DTOs para validação
    ├── 📦 to-do-list.module.ts      # Módulo to-do
    └── ⚙️ to-do-list.service.ts     # Serviço to-do - Lógica de negócio
```

## ‍💻 Sobre o Instrutor
  - GitHub: [@thiagoa261](https://github.com/thiagoa261)
  - LinkedIn: [linkedin.com/in/thiagoaio](https://www.linkedin.com/in/thiagoaio)