# TÔ Dentro

Esta é uma aplicarão [React](https://reactjs.org/) simple para avaliar o conhecimento do candidato para uma vaga de desenvolvedor frontend para [Trademaster Servicos e Participações S.A.](https://www.trademaster.com.br/) 

## TODO
[PR](https://docs.github.com/pt/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests) é a melhor maneira de propor alterações na base de código (usamos o [Github Flow](https://guides.github.com/introduction/flow/index.html)). Acolhemos e analisamos ativamente suas requisições:

1. Faça o fork do repo e crie seu branch a partir do principal.
2. Se você adicionou um código que deve ser testado, adicione testes.
3. Se você mudou APIs, atualize a documentação.
4. Certifique-se de que o conjunto de testes seja aprovado.
5. Certifique-se de que seu código seja executado.
6. Emita essa solicitação pull!

## Requisitos

Devem ser criadas 3 telas:
- Login
- Home
- Ajuda

### Login

A tela de login deve apresentar dois campos:
- _Usuário:_ Campo `text` com no mínimo `64 Bits` e no máximo `128 Bits`.  
- _Senha:_ Campo `password` com no mínimo `32 Bits` máximo `64 Bits` caracteres.

![login](https://github.com/trademasterbr/test-react/raw/main/wireframe/login.png)


__Validation__
- _Usuário:_  O valor preenhido deve ser um `email`  
- _Senha:_ O valor preenchido deve conter:
    - Número
    - Letra Minúscula
    - Letra maiúscula
    - Caracter especial

__Action__

Caso de Sucesso (Acesso Garantido):
- O valor do campo _Usuário_ deve conter a string '`@trademaster.com.br`'
- O valor do campo _Senha_ deve conter a string '`Tm`'

Caso de Erro (Acesso Negado):
- Qualquer valor diferente do descrito no facículo `Caso de Sucesso`

Em caso de Erro, deve ser mostrado na tela do usuáro uma mensagem contendo o seguinte conteúdo:
- Acesso Negado, Verifique se o usuário e senha condizem com credenciais válidas.


