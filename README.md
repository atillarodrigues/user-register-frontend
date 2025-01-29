## Gerenciamento de Usuários - Frontend

# Sobre o Projeto

Este é o frontend de um sistema de cadastro e exclusão de usuários, desenvolvido com React.js e Vite. Ele permite:

✅ Cadastrar novos usuários
✅ Exibir a lista de usuários cadastrados
✅ Excluir um usuário com confirmação antes da remoção

O backend foi desenvolvido com Node.js, Prisma e MongoDB para armazenamento dos dados.

## Tecnologias Utilizadas
- 🔹 **React.js** - Biblioteca para a interface
- 🔹 **Vite** - Ferramenta para build rápida do projeto
- 🔹 **Styled Components** - Estilização dinâmica
- 🔹 **React Router** - Gerenciamento de rotas
- 🔹 **SweetAlert2** - Alertas interativos
- 🔹 **Axios** - Requisições HTTP para a API
- 🔹 **Prisma** - ORM para manipulação do banco de dados
- 🔹 **MongoDB** - Banco de dados NoSQL utilizado

# Como Executar o Projeto

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Acesse a pasta do projeto:
```
cd nome-do-projeto
```
3. Instale as dependências:
```
npm install
# ou
yarn install
```
4. Configure a API

Certifique-se de que o backend está rodando e configurado corretamente. Altere a URL da API em services/api.js, se necessário.

5. Execute o projeto:
```
npm run dev
# ou
yarn dev
```
O projeto estará disponível em http://localhost:5173/ (ou outra porta configurada pelo Vite).

Estrutura do Projeto:
```
/src
  /components     # Componentes reutilizáveis
  /pages          # Páginas principais (Cadastro, Lista de Usuários)
  /services       # Configuração da API
  /styles        # Estilos globais
  /assets        # Ícones e imagens
```
## Funcionalidades

# Cadastro de Usuários
- 🔹Campos: Nome, Idade, Email

- 🔹Validação: Apenas maiores de 18 anos podem ser cadastrados

- 🔹Feedback visual com SweetAlert2

# Listagem de Usuários
- 🔹Exibição dos dados cadastrados

- 🔹Avatar gerado automaticamente baseado no ID do usuário

# Exclusão de Usuários
- 🔹Confirmação antes da remoção

- 🔹Atualização dinâmica da lista sem necessidade de recarregar a página

# Melhorias Futuras

- 🔹Editar usuários cadastrados

- 🔹Melhorar a interface com animações

- 🔹Implementar autenticação e controle de acesso

Contribuição

Fique à vontade para sugerir melhorias ou abrir issues. Pull Requests são bem-vindos! 🚀
