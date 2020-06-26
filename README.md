# Monitor Cidadão - Backend

O Monitor Cidadão é um sistema desenvolvido através da parceria entre a CampinaTec e o laboratório Analytics da Universidade Federal de Campina Grande-PB com finalidade possibilitar aos cidadãos o acompanhamento dos contratos realizados pelos municípios do estado da Paraíba.


## Motivação

O projeto surge a partir da urgente necessidade de acompanhamento e fiscalização dos gastos públicos em licitações e contratos, com o intúito de facilitar o acesso da comunidade aos dados e o que eles representam.


## Tecnologias/frameworks usados

<b>Desenvolvido com</b>
- [JavaScript](https://www.javascript.com/)
- [Dockerfile](https://www.docker.com/)


## Executando o back-end

A execução do back-end pode ser feita de duas maneiras: via **docker** ou executando diretamente com o **nodemon**. 

Antes de tudo, para executar tanto manualmente quanto com o docker, adicione as informações do SQLServer SAGRES 2019 no .env (essas informações estão no arquivo '07 - Instruções e Acessos Monitor Cidadão') .

- POSTGRES_HOST
- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_PORT

### Executando back-end manualmente

Caso queira executar o back-end sem o docker, garanta que você tenha instalado em sua máquina o **nodejs**, **npm** e o **nodemon**.

Para executar, bastar entrar na pasta **server** via terminal e inserir o comando:

> nodemon

Você pode testar se tudo deu certo com o link abaixo:

>  [http://localhost:3000/api/licitacoes](http://localhost:3000/api/licitacoes)

### Executando back-end via docker
O docker-compose está configurado para executar tanto o back-end quanto o front-end. Sendo assim, as instruções para executar ambos projetos foram adicionadas no **monitor-cidadao-frontend**.

