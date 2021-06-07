<p align="center"><a href="https://angular.io/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" width="200"></a></p>

# Medical Care (Front-end)

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) varsão 11.0.1.

## Development server

É necessário baixar e realizar os procedimentos de instalação do projeto [API Medical Care](https://github.com/flailton/api-medical-care), para que este projeto funcione corretamente.

Após clonar o projeto do [Medical Care](https://github.com/flailton/medical-care) do GitHub, na pasta do projeto, execute os comandos `npm install`, para instalar as dependências do projeto e, após finalizado, `ng serve` para iniciar o ambiente de desenvolvimento. 

O ambiente ficará acessível através do endereço `http://localhost:4200/`, ou através de uma porta diferente, caso esta já esteja ocupada.

## Acesso

Só será possível dar seguimento caso já tenha finalizado os procedimentos de instalação do projeto [API Medical Care](https://github.com/flailton/api-medical-care).

O acesso pode ser feito através do Usuário cadastrado, porém a aplicação permite a realização de cadastro de novos Usuários:
- Paciente 1
  - E-mail: p1@email.com
  - Senha:  p1@123

## Navegação

Ao acessar a a aplicação, o usuário será direcionado a tela de Login:
- O usuário deve inserir o e-mail e a senha nos respectivos campos e se conectar para ter acesso ao sistema.
- Caso o usuário perca a sessão, o token expire ou ele clique no botão Logout, o Usuário será direcionado para tela de Login novamente.

Ao realizar o login o usuário será redirecionado para tela de Agendar atendimento.
- O usuário deve preencher os campo de Profissional, Data do agendamento e selecionar ao menos um Procedimento.
- Para selecionar os Procedimentos, o Usuário deve selecionar o procedimento desejado e clicar no ícone ao lado (Adicionar procedimento).
- Após preenchidos os campos, para registrar o Agendamento o Usuário deve clicar no botão Salvar.
- Após salvar o Usuário será redirecionado para tela de Visualizar agendamento.

Na tela de Visualizar agendamento, o usuário poderá ver as informações do agendamento que foi realizado.
- Ao clicar no botão Voltar, o usuário será redirecionado para tela de Agendar atendimento.
