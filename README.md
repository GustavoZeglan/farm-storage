# FarmSoftware Backend

Este é um backend básico desenvolvido em Node.js com TypeScript que permite o cadastro, edição, leitura e exclusão de itens de fazenda.

## Requisitos(Opcionais para inciar o projeto mais facilmente)

- Docker
- Docker Compose
- Make

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/farmsoftware-backend.git
cd farmsoftware-backend

```

### 2. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
DATABASE_URL=link de conexão do banco(exemplo: mysql://root:1234@localhost:3306/farmsoftware)
FRONTEND_URL=endereço ip do frontend na sua network(exemplo: http://10.10.8.104:3000/)
```
### 3. Construir e iniciar os containers

Execute o seguinte comando para construir e iniciar os containers Docker:

```bash
docker compose up --build -d
```

### 4. Executar comandos adicionais

Após iniciar os containers, execute o comando abaixo para finalizar a configuração do ambiente:

```bash
make all
```

### Documentação da API

A documentação completa da API está disponível na rota /api-docs utilizando o Swagger.

### Tecnologias Utilizadas
  - Node.js
  - TypeScript
  - Docker
  - Docker Compose
  - Swagger



