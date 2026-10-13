"use strict";
// Apenas uma simulação: dados em memória, sem autenticação ou persistência.
let perfil = null;
const cadastro = document.getElementById("cadastroForm");
const entrada = document.getElementById("loginDiv");
const informacoes = document.getElementById("userInfo");
const status = document.getElementById("status");
const campo = id => document.getElementById(id);
function mostrar(etapa, foco) {
  [cadastro, entrada, informacoes].forEach(elemento => { elemento.hidden = elemento !== etapa; });
  campo(foco).focus();
}
cadastro.addEventListener("submit", event => {
  event.preventDefault();
  campo("nome").value = campo("nome").value.trim();
  campo("email").value = campo("email").value.trim();
  if (!cadastro.reportValidity()) return;
  perfil = { nome: campo("nome").value, email: campo("email").value, senha: campo("senha").value };
  cadastro.reset();
  entrada.reset();
  status.textContent = "Perfil de teste criado. Entre com os mesmos dados.";
  mostrar(entrada, "loginEmail");
});
entrada.addEventListener("submit", event => {
  event.preventDefault();
  if (!entrada.reportValidity()) return;
  if (!perfil || campo("loginEmail").value.trim() !== perfil.email || campo("loginSenha").value !== perfil.senha) {
    status.textContent = "E-mail ou senha não correspondem ao cadastro de teste.";
    campo("loginSenha").value = "";
    campo("loginSenha").focus();
    return;
  }
  campo("userInfoNome").textContent = perfil.nome;
  campo("userInfoEmail").textContent = perfil.email;
  entrada.reset();
  status.textContent = "Você entrou na demonstração.";
  mostrar(informacoes, "perfil-titulo");
});
campo("sair").addEventListener("click", () => {
  campo("userInfoNome").textContent = "";
  campo("userInfoEmail").textContent = "";
  status.textContent = "Você saiu. O perfil continua disponível até recarregar a página.";
  mostrar(entrada, "loginEmail");
});
campo("voltar").addEventListener("click", () => {
  perfil = null;
  entrada.reset();
  status.textContent = "Cadastre um novo perfil de teste.";
  mostrar(cadastro, "nome");
});
