# Leve Serverless Application

O projeto tem como objetivo subir um servidor serverless com funções Lambda
para expor rotas com um comportamento de GET e POST.

O projeto não usa nenhum framework para iniciar o servidor como NestJs ou Express a ideia
é mostrar uma implementação vanilla e fazer ao máximo sem o uso de libs externas.

Abaixo você terá instruções de como rodar e outra informações

## Pré requisitos

- NodeJs 18 ou superior
- package manager YARN
- Serverless Framework instalado (https://www.serverless.com/)
- Plugins do VSCode Eslint e Prettier (opcional)

## Instruções de Uso

### Local

Para rodar este projeto local você deve seguir os seguintes comandos:

Instalar as dependências

```
yarn install --frozen-lockfile
```

Rodar as funções lambda localmente
obs: para este teste você terá de configurar o **serverless** em sua máquina,
ao rodar o comando ele pedirá para que você logue com uma conta ou crie, é só seguir
as intruções no terminal ou consultar a documentação no site do [framework](https://www.serverless.com/)

```
yarn local
```

Após rodar este comando você pode interagir com as rotas através de uma interface de
teste de API (Postman, Insomnia), no terminal serão exibidas as rotas disponíveis.

![image](https://github.com/user-attachments/assets/2bf70ef2-e352-4d83-98fd-9c5fb5e1973f)

#### Rotas: 

**dev/schedulings**

nesta rota você pode passar algumas props no payload e o servidor responderá dinamicamente
![image](https://github.com/user-attachments/assets/68f3435c-802e-4f17-8f9c-46e7ffbd3cef)


**dev/schedules**

nesta rota você pode passar alguns query params e de acordo com ela será feito um filtro dinâmico nos dados mocados

sem parâmetros
![image](https://github.com/user-attachments/assets/fe4234d2-94be-4545-8829-f7c94e6a0bd6)

com parâmetros
![image](https://github.com/user-attachments/assets/bf09afe9-28eb-416b-8151-f1419cac5944)


### Testes

Este projeto possui testes com Jest para roda-los dê o comando:
```
yarn test
```

a seguinte mensagem aparecerá indicando cada módulo/arquivo:
![image](https://github.com/user-attachments/assets/34f8a6ab-7896-4221-a139-63a92341e930)


Para conferir a cobertura de testes use o comando:
```
yarn test:cov
```
este comando irá gerar uma pasta **coverage** na raiz, entre em **coverage/lcov-report/src** e dê dois cliques
no arquivo index.html para ver a cobertura. 


### Deploy

Para subir as funções para produção você precisa rodar o comando:

```
yarn deploy
```
obs: lembrando que sua conta AWS deve estar configurada para que tudo ocorra bem, de
qualquer forma o terminar irá apontar os erros.


depois de rodar o deploy você deve ver uma mensagem similar a esta:

```
Deploying "leve-serverless-app" to stage "dev" (us-east-1)

✔ Service deployed to stack leve-serverless-app (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: leve-serverless-app-hello (1.6 kB)
```

_Nota_: os dados estão mocados e apenas é simulada uma interação


