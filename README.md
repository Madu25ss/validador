# 🪪 Validador e Gerador de Credenciais

Este projeto tem como objetivo validar e gerar dados comuns utilizados em sistemas brasileiros, como CPF, CNH, CNPJ e placas de veículos. Ele oferece uma interface simples para entrada de dados e retorna validações em tempo real, além de gerar documentos sintéticos válidos para testes e simulações.

## Funcionalidades

- **Validação de:**
  - CPF (Cadastro de Pessoa Física);
    - Ao enviar CPF e Data de nascimento: retorno de dados reais;
    - Ao enviar enviar apenas CPF: validação a partir do cálculo dos dígitos verificadores.
  - CNH (Carteira Nacional de Habilitação);
  - CNPJ (Cadastro Nacional da Pessoa Jurídica);
      - Ao enviar CNPJ real: retorno dos dados reais;
      - Ao enviar CNPJ gerado: validação a partir do cálculo do dígito verificador.
  - Placa de veículo (padrão Antigo e Mercosul).

Para validação, os valores podem ser enviados com ou sem máscara.

- **Geração de:**
  - CPFs válidos;
  - CNHs válidas;
  - CNPJs válidos;
  - Placas de veículos válidas (formato AAA-0000 ou AAA-0A00).


## Tecnologias Utilizadas

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express + Vite
- **APIs externas**: Integração com [BrasilAPI](https://brasilapi.com.br/), [ByTools](https://bytools.tech) e [CPFHub.io](https://www.cpfhub.io/).

## 🌟 Sobre o projeto: 
Este projeto marca minha primeira experiência prática com diversos conceitos e ferramentas do React!! 💕 <br><br> Nele, apliquei pela primeira vez o conceito de **Hooks** para controle de estado e efeitos. Também implementando **consumo de APIs REST**, integrando retorno de dados externos de forma dinâmica. <br><br> No front-end, utilizei frameworks como **ShadCN UI** e **MUI** para implementar componentes já estilizados, além do **Tailwind** para estilização geral do projeto. Para gerenciamento de estado global, implementei **Zustand**, tornando a comunicação entre componentes mais fluida. <br> Além disso, utilizei o **TanStack Query** (useMutate) para requisições assíncronas, melhorando a performance e a experiência do usuário.

##### 🐰 Você pode me encontrar no [GitHub](https://github.com/Madu25ss) e no [LinkedIn](www.linkedin.com/in/maria-eduarda-serpa-santos-29a6a5261)!! 

