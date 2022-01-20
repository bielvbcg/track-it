# Track It

Um aplicativo para ajudar o usuário a rastrear seus hábitos diários, onde é possível criar uma conta e se logar para criar rotinas pessoais <br/>

### Sobre

Esse app tem as seguntes features:
  - Permite o usuário logar na sua conta
  - No caso do usuário não possuir uma conta é possível criar uma na tela de cadastro 
    - Para se cadastrar o usuário precisa informar seu email, senha, nome e uma URL de imagem válida para foto de perfil
  - Depois de logar, a tela ```Hoje``` é mostrada, aonde é possível:
    -  Checar seus hábitos diários, se houver algum
    -  Clicar no checkmark pra marcar como concluído no dia
    -  Acompanhar a sequência atual de hábitos e o recorde de dias em sequência em que aquele hábito foi feito
    -  Verificar seu progresso diário numa barra de progresso circular na parte de baixo da página
  - No caso do usuário não possuir hábitos para acompanhar,eles podem ir para a tela ```Hábitos```, onde é possível:
    - Criar novos hábitos
    - Escolher os dias para esse novo hábito
    - Salvar ou cancelar a criação do hábito
    - E deletar o hábito clicando no ícone de lixeira

### Feito com

ReactJS, HTML e Styled Components.
  
## Como rodar

1. Clone este repositório

2. Instale as dependências 
```bash
npm i
```

3. Rode o app com
```bash
npm start
```

4. Ou você pode buildar o projeto com
```bash
npm run build
```
5. Agora basta acessar http://localhost:3000 no seu navegador
