# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

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
|RF-03| O cadastro do usuário deverá conter: Nome completo, e-mail, telefone (WhatsApp), bairro, cidade, estado, login, senha e data de nascimento.   | ALTA |
|RF-04| O site deve permitir o cadastro de medicamentos para doação, com tais campos de preenchimento: Nome; Descrição; Quantidade e Validade.   | ALTA |
|RF-05| O site permitirá a submissão de registros fotográficos dos medicamentos ao cadastrá-los.   | BAIXA |
|RF-06| O site não permitirá o cadastro de medicamentos de controle rigoroso.   | MÉDIA |
|RF-07| O sistema permitirá o acesso dos usuários através do login e senha.   | ALTA |
|RF-08| O site deve ter uma funcionalidade de pesquisa que permita ao receptor buscar pelo medicamento que deseja obter.   | ALTA |
|RF-09| O site deve ter um botão para exibir as informações de contato do doador para que o receptor possa se comunicar com o mesmo.   | ALTA |
|RF-10| O site deverá conter um botão para o doador pausar o anúncio e quando esse botão for acionado, o contato com o doador será suspenso.   | ALTA |
|RF-11| O site deve ter um botão que permita a exclusão do remédio pelo doador quando ele desejar ou fizer a doação do mesmo.   | ALTA |
|RF-12| O site deve ter em sua home a história e objetivos da criação da REDOM-PET (Rede de Doação de Medicamentos para PET).   | MÉDIA |


### Requisitos não Funcionais

Os requisitos não funcionais que a equipe deverá seguir durante o desenvolvimento, como também seus respectivos níveis de prioridade de entrega são apresentados na tabela a seguir.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deve ser responsivo, ou seja, permitir a visualização em diferentes dimensões. | ALTA |
|RNF-02| O site deverá ter uma disponibilidade 24/7. |  ALTA |
|RNF-03| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Opera e Microsoft Edge). |  ALTA |
|RNF-04| A interface deve ser agradável, intuitiva e de fácil utilização para o usuário. |  MÉDIA |
|RNF-05| O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages). |  ALTA |


## Restrições

A tabela a seguir apresenta as condições que limitam a execução desse projeto.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deve ser entregue até dia 26/06/2022. |
|RE-02| A equipe não pode contratar terceiros para o desenvolvimento do projeto. |
|RE-03| O site deve ser desenvolvido utilizando linguagens de programação Web para Front-End, mais especificamente HTML, CSS e JavaScript. |