# monitor-cidadao-backend

## Executando back-end

A execução do back-end ainda não está sendo feita com o auxílio do docker. Dessa forma, antes de tudo, garanta que você tenha instalado em sua máquina o **nodejs**, **npm** e o **nodemon**.

Adicione as informações do SQLServer no .env (essas informações estão no arquivo '07 - Instruções e Acessos Monitor Cidadão') .
- SQLSERVER_SAGRES19_HOST
- SQLSERVER_SAGRES19_Database
- SQLSERVER_SAGRES19_USER
- SQLSERVER_SAGRES19_PASS
- SQLSERVER_SAGRES19_PORT


Agora, para executar, bastar entrar na pasta **server** via terminal e inserir o comando:
 > nodemon
 
 Você pode testar se tudo deu certo com o link abaixo:
 > [http://localhost:3000/api/licitacoes](http://localhost:3000/api/licitacoes)
