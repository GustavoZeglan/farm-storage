NPM_INSTALL = npm i
PRISMA_GENERATE = npx prisma generate
PRISMA_DB_PUSH = npx prisma db push
NPM_START = npm run start

all: install generate db_push start

install:
	$(NPM_INSTALL)

# Alvo para gerar os artefatos do Prisma
generate: install
	$(PRISMA_GENERATE)

# Alvo para fazer o push do banco de dados do Prisma
db_push: generate
	$(PRISMA_DB_PUSH)

# Alvo para iniciar a aplicação
start: db_push
	$(NPM_START)
