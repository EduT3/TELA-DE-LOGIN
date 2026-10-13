# Cadastro e login demonstrativo

Exercício de interfaces e estados de formulário com HTML, CSS e JavaScript puro. O fluxo simula cadastro, entrada e saída de um perfil temporário.

## O que o projeto faz

- Cadastro com validação nativa; envio por botão ou tecla Enter.
- Erros acessíveis, gerenciamento de foco e rótulos visíveis.
- Fluxos de entrada, saída e reinício do cadastro.
- Interface responsiva com somente uma etapa visível por vez.
- Credenciais fictícias mantidas apenas em memória, sem localStorage.

## Executar

Abra `index.html` em um navegador moderno. Não há instalação de dependências, build ou servidor obrigatório. Para desenvolvimento, também é possível servir a pasta com qualquer servidor estático, por exemplo `python -m http.server 8000` e acessar `http://localhost:8000`.

## Estrutura

- `index.html`: estrutura e conteúdo.
- `style.css`: apresentação.
- `script.js`: comportamento da página.

## Limites e cuidados

- Isto **não é autenticação segura**: todo o código e a comparação são executados no navegador.
- Use somente nome, e-mail e senha fictícios. Recarregar apaga o perfil.
- Uma aplicação real exige backend, hashing de senha no servidor, sessão segura e HTTPS.
- Versões antigas gravavam `nome`, `email` e `senha` no localStorage. Esta versão não lê nem grava essas chaves e não remove dados antigos automaticamente. Se já utilizou uma senha real na versão antiga, apague os dados desse site no navegador e troque a senha onde ela era utilizada.

## Roteiro de verificação manual

1. Teste cadastro vazio, e-mail inválido e senha com menos de 6 caracteres.
2. Cadastre dados fictícios e tente entrar com senha incorreta.
3. Entre corretamente, saia e entre novamente.
4. Use “Refazer cadastro” e confira que o perfil anterior não é aceito.
5. Recarregue e confirme que o cadastro temporário não persiste.

Não há suíte de testes de navegador configurada no repositório. O roteiro acima deve ser executado antes de publicar alterações. Nenhum deploy é feito por estes arquivos.
