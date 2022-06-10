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

## Histórias de Usuários

Com a observação do cotidiano das personas e a compreensão de suas necessidades, foram definidas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Juliana   | Cadastrar os remédios que não foram utilizados no tratamento do meu pet | Realizar a doação dos medicamentos |
|Juliana   | Disponibilizar meu telefone e/ou e-mail | O receptor entrar em contato comigo e combinar a entrega dos medicamentos |
|Gustavo   | Ter uma conta no site | Visualizar os medicamentos disponíveis para doação |
|Matheus   | Verificar os remédios disponíveis no site | Realizar o tratamento das enfermidades do meu pet |
|Matheus   | Obter as informações de contato do doador  | Definir a forma que irei receber o medicamento |
|Gustavo   | Conhecer a história e motivos da criação da REDOM-PET (Rede de Doação de Medicamentos para PET) | Me sentir mais seguro e consciente da minha escolha de doar ou solicitar um medicamento nesse site |

## Requisitos

No projeto, sua estrutura e suas funções são determinadas a partir dos requisitos funcionais e não-funcionais.
Os requisitos funcionais podem ser definidos como a descrição das funções que os usuários poderão utilizar para satisfazer suas necessidades. Já os requisitos não funcionais são aqueles que descrevem as características de usabilidade e outros aspectos que o site necessita apresentar de maneira geral.
Portanto, com os estudos das personas e histórias dos usuários identificadas para o projeto, foram definidos os seguintes requisitos.

### Requisitos Funcionais

Os requisitos funcionais do projeto e seus respectivos níveis de prioridade de entrega são apresentados na tabela a seguir.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema permitirá que usuários realizem cadastro. | ALTA |
|RF-02| O cadastro do usuário deverá conter: Nome completo, e-mail, telefone, bairro, cidade, estado, senha e data de nascimento. | ALTA |
|RF-03| O site deve permitir o cadastro de medicamentos para doação, com tais campos de preenchimento: Nome; Quantidade e Validade. | ALTA |
|RF-04| O site permitirá a submissão de registros fotográficos dos medicamentos ao cadastrá-los de caráter obrigatório. | MÉDIA |
|RF-05| O sistema permitirá o acesso dos usuários através de uma página com login e senha. | ALTA |
|RF-06| O site irá exibir as informações do medicamento e de contato do doador para que o receptor possa se comunicar com o mesmo. | ALTA |
|RF-07| O site deve ter em sua homepage informações sobre a REDOM-PET (Rede de Doação de Medicamentos para PET), assim como um botão de “Quero Doar” e um botão de “Quero Receber”. | MÉDIA |

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
