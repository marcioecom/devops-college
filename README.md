# Docker Compose - Exemplo Prático com Node.js, PostgreSQL e Redis

## 🧠 Objetivo

Este projeto demonstra o uso do **Docker Compose** para orquestrar múltiplos serviços em containers de forma simples e eficiente. Criamos um pequeno app em Node.js que se conecta a um banco PostgreSQL e a um cache Redis.

---

## 🚀 O que está incluído?

- **web**: Aplicação Node.js com Express.
- **db**: Container PostgreSQL para persistência de dados.
- **redis**: Container Redis para cache.

---

## 🧪 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcioecom/devops-college.git
   cd devops-college
   ```

2. Rode o Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Acesse no navegador:

   * `http://localhost:3000/` → Página inicial
   * `http://localhost:3000/cache` → Consulta ao PostgreSQL com cache Redis

---

## 🔍 Comandos úteis

```bash
docker-compose up         # Sobe todos os serviços
docker-compose down       # Derruba todos os serviços
docker-compose ps         # Lista containers ativos
docker-compose logs web   # Ver logs da aplicação Node.js
```

---

## 📚 Dificuldades enfrentadas

* Entender a ordem de inicialização dos containers (usamos `depends_on`).
* Redis exige conexão assíncrona — foi necessário usar `await` com `redisClient.connect()`.
* A configuração de variáveis de ambiente exigiu cuidado entre `.env` do app e `docker-compose.yml`.

---

## ✅ O que foi testado

* Instalação e execução local com `docker-compose up`
* Conexão entre serviços (web ↔ PostgreSQL ↔ Redis)
* Armazenamento e leitura de cache
* Leitura de dados do banco
* Outputs via terminal e logs da aplicação

---

## 🎯 Conclusão

O **Docker Compose** é ideal para projetos pequenos ou médios que usam múltiplos serviços, como apps web com banco de dados, cache e API. É perfeito para ambientes de desenvolvimento e testes locais, acelerando a produtividade sem necessidade de configurar manualmente cada serviço.

---

## 👥 Créditos

Trabalho desenvolvido para a disciplina de **Engenharia de Software**.<br>
Grupo: Márcio Mendonça, Dhayanne Espindola, Gabriel, Francisco, Bruno, Paulo Fidel

