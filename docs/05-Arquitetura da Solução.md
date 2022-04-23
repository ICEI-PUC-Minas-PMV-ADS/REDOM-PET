# Arquitetura da Solução

A arquitetura de solução é responsável por construir e implementar soluções com base nas necessidades do negócio. Pensando nisso, esta seção é composta dos detalhes técnicos, dos componentes e do ambiente de hospedagem que serão utilizados no projeto. 

## Diagrama de componentes

A Figura 14 detalha os componentes que fazem parte da aplicação. 

![Diagrama de Componentes](img/diagrama.png)

A solução implementada conta com os seguintes módulos: 
- Navegador - Interface básica do sistema 
    - Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema. 
    - Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles:

        - Imagens - imagens dos medicamentos adicionadas pelo doador, imagens dos perfis dos usuários e imagens gerais do sistema;
        - Dados de usuário- registro de informações dos usuários sobre seus dados;
        - Dados de medicamentos – medicamentos cadastrados no sistema, assim como as informações do mesmo;
        - Interesses - medicamentos que o usuário marcou como “Eu quero”.

- Hospedagem - serviço on-line onde os arquivos são armazenados e acessados pelo navegador. 

## Tecnologias Utilizadas

Para a implementação da solução faremos uso de algumas tecnologias, tal como o Visual Studio Code (VS Code), trata-se de um editor de código-fonte - também conhecido como IDE de desenvolvimento – foi escolhido por ser de fácil utilização. A equipe faz uso da ferramenta de comunicação da Microsoft, o Teams, onde acontece as reuniões com a orientadora do projeto. 
Para a criação dos wireframes e protótipos foi escolhido o Figma por se tratar de uma ferramenta de design para interfaces com possibilidade de trabalho colaborativo, além da forma intuitiva como ele se apresenta. Para uma segurança dos arquivos, definimos o OneDrive, serviço de armazenamento em nuvem da Microsoft, como ferramenta de backup e armazenamento. 
O GitHub também está sendo utilizado por se tratar de um serviço baseado em nuvem e que hospeda um sistema de controle de versão – o Git –. Para a hospedagem da nossa aplicação será utilizado o Microsoft Azure.  
Pela equipe ser iniciante na área e não ter conhecimento de frameworks ainda, utilizaremos as linguagens ensinadas na disciplina de Desenvolvimento Web Front-End que são: HTML, CSS e JavaScript. 

## Hospedagem

O site do projeto utiliza a plataforma Microsoft Azure como serviço de hospedagem. O site pode ser [acessado aqui](https://testeredompet.azurewebsites.net/).

