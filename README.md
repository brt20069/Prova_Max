# 🔐 Sistema de Autenticação de Acesso Básico

Aplicação web fullstack com autenticação de utilizadores, desenvolvida com **Node.js + Express** no back-end e **HTML/CSS/JavaScript** no front-end.

---

## 📋 Descrição

O projeto simula um sistema de login com validação de credenciais, proteção contra injeção de código (SQL Injection) e comunicação entre cliente e servidor via requisições HTTP com `fetch()`.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor
- **Express** — Framework web para criação de rotas e servidor HTTP
- **Body-Parser** — Middleware para leitura do corpo das requisições JSON
- **CORS** — Middleware para permitir requisições entre origens diferentes
- **HTML5 / CSS3 / JavaScript** — Interface do utilizador

---

## 📁 Estrutura do Projeto

```
Prova_Max/
├── server.js       # Servidor Node.js com a rota POST /login
├── index.html      # Interface de login (front-end)
├── styles.css      # Estilos da página
├── package.json    # Dependências do projeto
└── README.md       # Documentação
```

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Passo a Passo

```bash
# 1. Clonar o repositório
git clone https://github.com/brt20069/Prova_Max.git

# 2. Entrar na pasta do projeto
cd Prova_Max

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor
node server.js
```

Depois abrir o ficheiro `index.html` no browser.

O servidor ficará disponível em: `http://localhost:3000`

---

## 🔑 Utilizadores de Teste

| Utilizador | Senha      |
|------------|------------|
| admin      | admin123   |
| pedro      | senha456   |
| guest      | guest789   |

---

## 🛡️ Segurança Implementada

- Rejeição de campos vazios → **HTTP 400**
- Bloqueio de entradas com `;` (proteção contra SQL Injection) → **HTTP 400**
- Credenciais inválidas → **HTTP 401**
- Login com sucesso → **HTTP 200**

---

## 📡 Endpoint da API

### `POST /login`

**Body (JSON):**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Respostas possíveis:**

| Status | Situação |
|--------|----------|
| `200`  | Login efetuado com sucesso |
| `400`  | Campos vazios ou entrada inválida |
| `401`  | Utilizador ou senha incorretos |
