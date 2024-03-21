const cep = fetch('https://viacep.com.br/ws/60710000/json')

cep.then(resolucao => {
  return resolucao.json();
})
.then((body) => {
  console.log(body.bairro)
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body.logradouro
})
