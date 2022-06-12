# Plano de Testes de Software

O requisito abordado pelo grupo para a realização dos testes: 
- Site publicado na Internet 
- Navegador da Internet - Chrome, Firefox ou Edge 

 
O grupo identificou, inicialmente, a necessidade do teste de navegabilidade descrito a seguir:

|CASO DE TESTE| CT-01 – Navegabilidade para efetuar Login |
| :--------------------: | :------------------------------------ |
| Requisitos Associados | RF – 05 - O sistema permitirá o acesso dos usuários através de uma página com login e senha. |
| Objetivo do Teste | Visualizar a HomePage após inserir os dados corretamente para efetuar o login. |
| Passos | 1) Acessar o Navegador. |
||2) Informar o endereço do Site.
||3) Visualizar a página de Login.
||4) Inserir os dados corretamente.
||5) Acionar a opção “Acessar”.
| Critérios de Êxito | 1) O login deverá ser efetuado apenas com informações corretas. |
||2) Ao clicar em “Acessar” deverá ser redirecionado para a Homepage.

|CASO DE TESTE| CT-02 – Navegabilidade para efetuar Login |
| :--------------------: | :------------------------------------ |
| Requisitos Associados | RF – 01 - O sistema permitirá que usuários realizem cadastro. |
||RF – 02 - O cadastro do usuário deverá conter: Nome completo, e-mail, telefone, bairro, cidade, estado, senha e data de nascimento.
| Objetivo do Teste | Efetuar com êxito o cadastro de um novo usuário. |
| Passos | 1) Acessar o Navegador. |
||2) Informar o endereço do site.
||3) Visualizar a página de Login.
||4) Acionar o botão "cadastro".
||5) Preencher todos os campos obrigatórios corretamente.
||6) Acionar o botão "Cadastrar" ao finalizar o preenchimento dos campos.
| Critérios de Êxito | 1) Todos os campos do cadastro deverão ser preenchidos corretamente. |
||2) Ao clicar em "Cadastrar" deverá ser redirecionado para a página Login.

|CASO DE TESTE| CT-03 – Cadastro de medicamentos |
| :--------------------: | :------------------------------------ |
| Requisitos Associados | RF – 03 - O site deve permitir o cadastro de medicamentos para doação, com tais campos de preenchimento: Nome, Tipos de Medicamentos, Quantidade e Validade. |
||RF – 04 - O site permitirá a submissão de registros fotográficos dos medicamentos ao cadastrá-los de caráter obrigatório.
| Objetivo do Teste | Efetuar com êxito o cadastro de um novo medicamento com submissão de registro fotográfico de caráter obrigatório. |
| Passos | 1) Acessar o Navegador.  |
||2) Informar o endereço do site. 
||3) Visualizar a página de Login. 
||4) Preencher os dados de Login corretamente. 
||5) Visualizar a Homepage. 
||6) Acionar o botão "Quero doar". 
||7) Preencher todos os campos corretamente.
||8) Adicionar um registro fotográfico do medicamento ao clicar no botão "Enviar foto do medicamento".
||9) Acionar o botão "Cadastrar". 
| Critérios de Êxito | 1) Todos os campos do cadastro deverão ser preenchidos corretamente.  |
||2) A submissão da foto do medicamento deverá ter sido efetuada. 
||3) Ao clicar em "Cadastrar" deverá ser redirecionado para a página de medicamentos cadastrados. 

|CASO DE TESTE| CT-04 – Visualizar informações do medicamento/doador.  |
| :--------------------: | :------------------------------------ |
| Requisitos Associados | RF – 06 - O site irá exibir as informações do medicamento e de contato do doador para que o receptor possa se comunicar com o mesmo. |
| Objetivo do Teste | Acessar a página de medicamentos e visualizar as informações do medicamento e do doador. |
| Passos | 1) Acessar o Navegador. |
||2) Informar o endereço do site.
||3) Visualizar a página de Login.
||4) Preencher os dados de Login corretamente.
||5) Visualizar a Homepage.
||6) Acionar o botão "Quero receber".
||7) Será redirecionado para a página dos medicamentos cadastrados. 
| Critérios de Êxito | 1) Necessário ter medicamentos no banco de dados. |

|CASO DE TESTE| CT-05 – Botões do conteúdo da Homepage |
| :--------------------: | :------------------------------------ |
| Requisitos Associados | RF – 07 - O site deve ter em sua homepage informações sobre a REDOM-PET (Rede de Doação de Medicamentos para PET), assim como um botão de “Quero Doar” e um botão de “Quero Receber”. |
| Objetivo do Teste | Visualizar dentro do conteúdo da HomePage, um botão para efetuar doações e outro para acessar os medicamentos cadastrados. |
| Passos | 1) Acessar o Navegador. |
||2) Informar o endereço do site
||3) Visualizar a página de Login
||4) Preencher os dados corretamente e efetuar o Login
||5) Visualizar a HomePage
||6) Visualizar os botões “Quero Doar” e “Quero Receber” com imagens no conteúdo da página. 
| Critérios de Êxito | 1) Logar corretamente no site. |
||2) Visualizar os botões na Homepage.

|CASO DE TESTE| CT-06 – Responsividade do site |
| :--------------------: | :------------------------------------ |
| Requisitos Associados | RNF – 01 - O site deve ser responsivo, ou seja, permitir a visualização em diferentes dimensões. |
| Objetivo do Teste | Visualizar se o site está se adequando a diferentes tamanhos de telas. |
| Passos | 1) Acessar o Navegador. |
||2) Informar o endereço do site
| Critérios de Êxito | 1) Visualizar se a página está se adequando ao tamanho da tela do dispositivo. |

## Ferramentas de Testes
Para realizar os testes e verificar a responsividade das páginas, foram utilizados:
- Computadores
- Navegadores de Internet
