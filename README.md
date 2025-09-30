# FarmáFacil - Sistema de Gestão Farmacêutica

## Visão Geral

## 📋 Índice

* [Visão Geral]()
* [Funcionalidades]()
* [Pré-requisitos]()
* [Instalação e Configuração]()
* [Execução do Projeto]()
* [Tecnologias Utilizadas]()
* [Estrutura do Projeto]()

O **FarmáFacil** é uma aplicação web desenvolvida em React.js para gestão de farmácias e drogarias. O sistema oferece uma solução completa para o controle de estoque, gerenciamento de clientes, vendas e relatórios, proporcionando uma experiência intuitiva e eficiente para os usuários.

Este projeto demonstra habilidades avançadas em desenvolvimento front-end, incluindo gerenciamento de estado, roteamento, consumo de APIs e criação  de interfaces responsivas.

## Funcionalidades

### Gestão de Estoque

* **Cadastro de Produtos** : Inclusão de medicamentos e produtos com informações completas (nome, descrição, preço, quantidade)
* **Controle de Lotes** : Rastreamento de lotes e datas de validade
* **Alertas Automáticos** : Notificações para produtos próximos do vencimento ou com estoque baixo
* **Atualização em Tempo Real** : Alterações no estoque refletidas instantaneamente

### Gestão de Clientes

* **Cadastro Completo** : Armazenamento de dados pessoais e histórico de compras
* **Ficha de Cliente** : Visualização detalhada com informações de contato e preferências
* **Busca Avançada** : Localização rápida de clientes por diversos critérios

### Gestão de Vendas

* **Processo de Venda** : Interface intuitiva para registro de vendas
* **Carrinho de Compras** : Sistema completo de adição/remoção de produtos
* **Cálculo Automático** : Cálculo de totais, descontos e impostos
* **Emissão de Recibos** : Geração de comprovantes de venda

### 📊 Relatórios e Analytics

* **Dashboard Interativo** : Visualização de métricas e KPIs importantes
* **Relatórios de Vendas** : Análise de desempenho por período
* **Estoque Crítico** : Identificação de produtos necessitando reposição
* **Vendas por Cliente** : Análise do comportamento de compra

## 🛠️ Pré-requisitos

Antes de iniciar a instalação, certifique-se de ter os seguintes requisitos atendidos:

* **Node.js** versão 14 ou superior
* **npm** (Node Package Manager) versão 6 ou superior
* **Git** para clonagem do repositório
* Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Verificação dos Pré-requisitos

Abra o terminal/command prompt e execute:

```
node --version
npm --version
git --version
```

Caso algum comando retorne erro, instale o software correspondente antes de prosseguir.

## 📥 Instalação e Configuração

Siga estes passos para configurar o projeto em seu ambiente local:

### 1. Clonagem do Repositório

```
# Clone o repositório
git clone https://github.com/arthursepp/FarmaFacil-ReactJS.git

# Acesse o diretório do projeto
cd FarmaFacil-ReactJS

# Mude para a branch develop
git checkout develop
```

### 2. Instalação de Dependências

```
# Instale todas as dependências do projeto
npm install
```

### 3. Configuração de Variáveis de Ambiente (se necessário)

Caso o projeto utilize variáveis de ambiente, crie um arquivo `.env` na raiz do projeto seguindo o exemplo do `.env.example` (se existir).

## 🚀 Execução do Projeto

### Ambiente de Desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```
# Inicie o servidor de desenvolvimento
npm start
```

O sistema estará disponível em: `http://localhost:5173`

**Características do modo desenvolvimento:**

* Recarregamento automático ao salvar alterações
* Source maps para debugging
* Hot reload para componentes React
* Mensagens de erro detalhadas no console

### Build para Produção

Para criar uma versão otimizada para produção:

```
# Crie o build de produção
npm run build
```

Este comando gera os arquivos estáticos na pasta `build/`, otimizados para:

* Performance máxima
* Tamanho reduzido de arquivos
* Cache eficiente

### Outros Scripts Disponíveis

```
# Executar testes unitários
npm test

# Executar testes em modo watch
npm run test:watch

# Analisar bundle para otimização
npm run analyze
```

## 🛠️ Tecnologias Utilizadas

### Frontend

* **React.js 18+** : Biblioteca principal para construção da interface
* **React Router** : Roteamento e navegação entre páginas
* **Context API** : Gerenciamento de estado global
* **CSS3/SASS** : Estilização e design responsivo
* **Axios** : Cliente HTTP para consumo de APIs

### Ferramentas de Desenvolvimento

* **Create React App** : Setup e configuração do projeto
* **ESLint** : Análise estática de código
* **Prettier** : Formatação consistente de código
* **Git** : Controle de versão

## 📁 Estrutura do Projeto

```
FarmaFacil-ReactJS/
├── public/                 # Arquivos públicos estáticos
│   ├── index.html
│   └── favicon.ico
├── src/                    # Código fonte da aplicação
│   ├── components/         # Componentes React reutilizáveis
│   ├── pages/             # Páginas principais da aplicação
│   ├── contexts/          # Contextos para gerenciamento de estado
│   ├── services/          # Serviços e APIs
│   ├── utils/             # Utilitários e helpers
│   ├── styles/            # Arquivos de estilo
│   └── assets/            # Imagens, ícones e outros recursos
├── package.json           # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```
