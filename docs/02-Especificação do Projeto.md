# Especificações do Projeto

Por meio da técnica de observação, análise do público-alvo e suas necessidades, foram identificados os usuários que comumente irão acessar o site e foi realizado um levantamento de suas características e exigências.
A partir das informações coletadas, foram determinadas as personas e histórias de usuários que serão de suma importância para a definição das funcionalidades.
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

No projeto, sua estrutura e suas funções são determinadas a partir dos requisitos funcionais e não-funcionais.
Os requisitos funcionais podem ser definidos como a descrição das funções que os usuários poderão utilizar para satisfazer suas necessidades. Já os requisitos não funcionais são aqueles que descrevem as características de usabilidade e outros aspectos que o site necessita apresentar de maneira geral.
Portanto, com os estudos das personas e histórias dos usuários identificadas para o projeto, foram definidos os seguintes requisitos.

### Requisitos Funcionais

Os requisitos funcionais do projeto e seus respectivos níveis de prioridade de entrega são apresentados na tabela a seguir.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema permitirá que usuários realizem cadastro. | ALTA | 
|RF-02| O sistema permitirá que os usuários façam alterações em seus cadastros.   | ALTA |
|RF-03| O cadastro do usuário deverá conter: Nome completo, e-mail, telefone (WhatsApp), bairro, cidade, estado, login, senha e data de nascimento. | ALTA |
|RF-04| O site deve permitir o cadastro de medicamentos para doação, com tais campos de preenchimento: Nome; Descrição; Quantidade e Validade. | ALTA |
|RF-05| O site permitirá a submissão de registros fotográficos dos medicamentos ao cadastrá-los. | BAIXA |
|RF-06| O site não permitirá o cadastro de medicamentos de controle rigoroso. | MÉDIA |
|RF-07| O sistema permitirá o acesso dos usuários através do login e senha. | ALTA |
|RF-08| O site deve ter uma funcionalidade de pesquisa que permita ao receptor buscar pelo medicamento que deseja obter. | ALTA |
|RF-09| O site deve ter um botão para exibir as informações de contato do doador para que o receptor possa se comunicar com o mesmo. | ALTA |
|RF-10| O site deverá conter um botão para o doador pausar o anúncio e quando esse botão for acionado, o contato com o doador será suspenso. | ALTA |
|RF-11| O site deve ter um botão que permita a exclusão do remédio pelo doador quando ele desejar ou fizer a doação do mesmo. | ALTA |
|RF-12| O site deve ter em sua home a história e objetivos da criação da REDOM-PET (Rede de Doação de Medicamentos para PET). | MÉDIA |


### Requisitos não Funcionais

Os requisitos não funcionais que a equipe deverá seguir durante o desenvolvimento, como também seus respectivos níveis de prioridade de entrega são apresentados na tabela a seguir.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01 | O site deve ser responsivo, ou seja, permitir a visualização em diferentes dimensões. | ALTA |
|RNF-02 | O site deverá ter uma disponibilidade 24/7. |  ALTA |
|RNF-03 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Opera e Microsoft Edge). | ALTA |
|RNF-04 | A interface deve ser agradável, intuitiva e de fácil utilização para o usuário. |  MÉDIA |
|RNF-05 | O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages). | ALTA |


## Restrições

A tabela a seguir apresenta as condições que limitam a execução desse projeto.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01 | O projeto deve ser entregue até dia 26/06/2022. |
|RE-02 | A equipe não pode contratar terceiros para o desenvolvimento do projeto. |
|RE-03 | O site deve ser desenvolvido utilizando linguagens de programação Web para Front-End, mais especificamente HTML, CSS e JavaScript. |
