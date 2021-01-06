# Test React

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

### Backend

O backend para este teste está pronto e encontra-se no diretório `backend`. Este, quando executado, gera um serviço web com as seguintes rotas:
 - _/login?user={email}&password={senha}_
 - _/ajuda_ 

Para fins de login, deve ser utilizado qualquer e-mail no campo `user`, desde que o mesmo possua sufixo `@trademaster.com.br`.

A senha a ser utilizada deve ser a data atual no formato `YYYYMMDD`.

```json
{
    "UserName": "admin",
    "Name": "Administrador do Sistema"
}
```

### Login

A tela de login deve apresentar dois campos:
- _Usuário:_ Campo `text` com no __mínimo__ `64 Bits` e no __máximo__ `128 Bits`.  
- _Senha:_ Campo `password` com no __mínimo__ `32 Bits` __máximo__ `64 Bits` caracteres.

![login](https://github.com/trademasterbr/test-react/raw/main/wireframe/login.png)


__Validation__
- _Usuário:_  O valor preenhido deve ser um `email`  
- _Senha:_ O campo deve ser preenchido

__Action__

Caso de Sucesso, o usuário deve ser direcionado a tela de Home do usuário

Em caso de Erro, deve ser mostrado na tela do usuáro uma mensagem contendo o seguinte conteúdo:
- `Acesso Negado, Verifique se o usuário e senha condizem com credenciais válidas.`

### Ajuda

A tela deve ter como título a palavara `Ajuda` e um texto explicativo provindo de um serviço do backend.

![ajuda](https://github.com/trademasterbr/test-react/raw/main/wireframe/ajuda.png)

### Home

A tela deve ter como título a palavara `Gerar Arvore AVL` e o corpo dividido entre duas partes; A primeira contemplando um campo `inteiro` com no __máximo__ `4 carcteres` e uma área que mostrará a árvore a ser criada.

O objetivo desta tela é desenhar uma [Árvore AVL](http://dcm.ffclrp.usp.br/~augusto/teaching/aedi/AED-I-Arvores-AVL.pdf) na tela contendo exatos numeros de nós imputados no campo intero em questão.

![home](https://github.com/trademasterbr/test-react/raw/main/wireframe/home.png)

__PS:__ Caso sejas em processo para vaga de __Júnior__ ou __Júnior/Pleno__, não é necessário a implementação da [Árvore AVL](http://dcm.ffclrp.usp.br/~augusto/teaching/aedi/AED-I-Arvores-AVL.pdf), esta pode ser substituida por uma árvore em que todo nó deve ter no máximo 2 filhos.  