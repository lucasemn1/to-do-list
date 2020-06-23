# To Do List - Backend

O backend está online e acessível na plataforma Heroku.
Disponível [aqui](http://backendtodoapp.herokuapp.com/)

## 💻 Tecnologias 
* NodeJS
* Javascript (em ambiente de produção)
* Typescript (em ambiente de desenvolvimento)
* TypeORM
* Sqlite3 (em ambiente de desenvolvimento)
* PostgreSQL (em ambiente de produção)

## ❗Pré-requisitos
* [Node.JS](https://nodejs.org/en/)

## 📝 Instalação
1. Clone o projeto
```
$ git clone https://github.com/lucasemn1/be-the-hero
```

2. Instale as dependências
```
$ npm install
```

3. Gere o arquivo de configuração do TypeORM
```
$ npm run orm-configurate
```

4. Sincronize o banco de dados
```
$ npx typeorm schema:sync
```

5. Execute o servidor

5.1 Em modo de desenvolvimento
```
$ npm run start-dev
```

5.2 Em modo de produção

5.2.1 Gere a build
```
$npx tsc
```

5.2.2 Execute o servidor
```
$ npm run start
```

<hr/>

##### Desenvolvido por Lucas Emanuel Nascimento Nóbrega Dias 😁.
##### Visite meu [Linkedin! 🌐🗯](https://www.linkedin.com/in/lucas-emn/) 