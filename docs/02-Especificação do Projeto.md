# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As personas, ou seja, os usuários ideais do site foram definidos abaixo:

Matheus

- 21 anos, mora em Recife (PE);
- Está desempregado no momento;
- Matheus é dono de dois cachorros;
- Um dos cachorros estava sendo medicado, porém o medicamento estava acabando;
- Matheus no momento não tem condições de comprar o medicamento;
- Ele começou a anunciar em redes sociais sua necessidade por aquele medicamento, porém, infelizmente, não conseguiu receber o medicamento como doação.

Juliana

- 29 anos, mora em Paulista (PE);
- Ela trabalha na área de TI;
- Juliana possui 1 cachorro;
- O cachorro dela estava utilizando um medicamento, mas ele se recuperou e ela não precisou utilizar todos os medicamentos;
- Juliana pensou em descartar o restante dos medicamentos, mas antes queria verificar se alguém em sua rede de contatos estava precisando do mesmo, porém não obteve êxito;
- Juliana então descarta o medicamento de forma inadequada.

Gustavo

- 23 anos, mora em Igarassu (PE);
- Gustavo é líder de uma associação de pets e devido a quantidade de animais, precisa de um número elevado de medicamentos;
- Por conta disso a associação gasta muito dinheiro com a compra dos medicamentos;
- Gustavo sabe que muitos medicamentos de pets são desperdiçados na região e pensou que poderia receber doações;
- Gustavo não conhece outros tutores na região e não sabe como entrar em contato com eles.

Luana

- 35 anos, mora em Abreu e Lima (PE);
- Ela trabalha há 9 anos como veterinária;
- Luana faz o descarte dos medicamentos que sobram ou que estão próximos da data de validade;
- Luana percebeu que ao invés de descartar os medicamentos ela poderia fazer doações para tutores que necessitam daqueles medicamentos em específico;
- Ao começar as doações ela percebe que não conhece muitas pessoas na região que são tutores de animais e que precisam dos medicamentos que ela está doando no momento.

## Histórias de Usuários

Com a observação do cotidiano das personas e a compreensão de suas necessidades, foram definidas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Juliana   | Cadastrar os remédios que não foram utilizados no tratamento do meu pet | Realizar a doação dos medicamentos |
|Juliana   | Disponibilizar meu telefone e/ou e-mail | O receptor entrar em contato comigo e combinar a entrega dos medicamentos |
|Juliana   | Ter uma conta no site | Poder visualizar todos os remédios que cadastrei para doação |
|Juliana   | Pausar o anúncio no site quando algum usuário entrar em contato comigo | Não receber mensagens de outras pessoas que desejam a doação do mesmo medicamento |
|Luana     | Descadastrar alguns medicamentos em minha conta | Poder usar novamente em outros tratamentos |
|Matheus   | Pesquisar um remédio disponível para doação | Realizar o tratamento das enfermidades do meu pet |
|Matheus   | Entrar em contato com o doador  | Definir a forma que irei receber o medicamento |
|Gustavo   | Conhecer a história e motivos da criação da REDOM-PET (Rede de Doação de Medicamentos para PET) | Me sentir mais seguro e consciente da minha escolha de doar ou solicitar um medicamento nesse site |
|Gustavo   | Informar ao doador que me interessei pelo medicamento | Iniciar o tratamento do meu pet |
|Juliana   | Confirmar no site que o medicamento que doei foi entregue | Retirar o medicamento da lista de doações |
|Juliana   | Editar meus dados cadastrais | Atualizar minhas informações pessoais |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
