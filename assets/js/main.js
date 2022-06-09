const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var imagem
function previewImagem(){
  imagem = localStorage.getItem('bd_imagem')
  let select_imagem = document.getElementById('teste_imagem')
  select_imagem.setAttribute('src', imagem)
  select_imagem.setAttribute('class', 'editar_imagem')
}

function validaNome(){
  let nome = document.getElementById('inputname').value
  let nomeVal = nome.split(" ")
  let inputnome = document.getElementById('inputname')
  if(nomeVal.length < 2 || nomeVal[1] == ''){
    let errorNome = document.getElementById('msg-error-nome')
    errorNome.innerHTML = "Nome incompleto."
    inputnome.setAttribute('style', 'border: 1px solid rgb(220, 87, 103)')
  }else{
    inputnome.setAttribute('style', 'border: ')
  }
}

function redefinirNomeMsg(){
  let errorNome = document.getElementById('msg-error-nome')
  let inputnome = document.getElementById('inputname')
  if(errorNome.innerHTML == "Nome incompleto."){
    errorNome.innerHTML = "";
    inputnome.setAttribute('style', 'box-shadow: none; border: 1px solid rgb(220, 87, 103)')
  }

}

function validarTelefone(){
  let valTelefone = document.getElementById('inputtelefone')
  let errorTel = document.getElementById('msg-erro-telefone');
  if(!valTelefone.checkValidity()){
    errorTel.innerHTML = "Telefone inválido, o padrão correto é 99-99999-9999.";
  }
}

function redefinirTelMsg(){
  let errorTel = document.getElementById('msg-erro-telefone');
  if (errorTel.innerHTML == "Telefone inválido, o padrão correto é 99-99999-9999."){
    errorTel.innerHTML = "";
  }
}

function validarEmail(){
  let valEmail = document.getElementById('inputEmail4')
  let error = document.getElementById('error-email');

  if(!valEmail.checkValidity()){
    error.innerHTML = "Email inválido.";
  }
}

function emailIgual(){
  let banco_dados = JSON.parse(localStorage.getItem('dados_usuarios'))
  let email = document.getElementById('inputEmail4').value
  let emailcor = document.getElementById('inputEmail4')
  emailcor.setAttribute('style', 'border: ')
  banco_dados.forEach(i =>{
    if(email == i.email){
      var error = document.getElementById('error-email');
      error.innerHTML = "O e-mail já existe."
      emailcor.setAttribute('style', 'border: 1px solid rgb(220, 87, 103)')
    }
})
}

function redefinirMsg(){
  let error = document.getElementById('error-email');
  if (error.innerHTML == "Email inválido." || error.innerHTML == "O e-mail já existe."){
    error.innerHTML = "";
  }
}

function cadastrar() {
  let nome = document.getElementById('inputname').value
  let data = document.getElementById('inputdate').value
  let estado = document.getElementById('inputestado').value
  let cidade = document.getElementById('inputcidade').value
  let bairro = document.getElementById('inputbairro').value
  let telefone = document.getElementById('inputtelefone').value
  let msgCamposIncompletos = document.getElementById ('msg-campos-incompletos')
  let error = document.getElementById('error-email')
  let errorTel = document.getElementById('msg-erro-telefone')
  let errorNome = document.getElementById('msg-error-nome')
  

  let email = document.getElementById('inputEmail4').value
  let senha = document.getElementById('inputPassword4').value

  if(error.innerHTML == "Email inválido." || errorTel.innerHTML == "Telefone inválido, o padrão correto é 99-99999-9999." || errorNome.innerHTML == "Nome incompleto." || error.innerHTML == "O e-mail já existe.") {
    msgCamposIncompletos.setAttribute ('style', 'display:block')
    msgCamposIncompletos.innerHTML = 'Preencha corretamento todos os campos'
  }else{
    if(nome == '' || data == '' || estado == '' || cidade == '' || bairro == '' || telefone == '' || email == '' || senha == ''){
  
      msgCamposIncompletos.setAttribute ('style', 'display:block')
      msgCamposIncompletos.innerHTML = 'Preencha todos os campos'
  
    }else {
    let banco_dados = JSON.parse(localStorage.getItem('dados_usuarios'))
  
    if (banco_dados == null) {
      localStorage.setItem('dados_usuarios', '[]')
      banco_dados = []
    }
  
    let registro = {
      nome: nome,
      data: data,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      telefone: telefone,
      email: email,
      senha: senha
    }
  
    banco_dados.push(registro)
  
    localStorage.setItem('dados_usuarios', JSON.stringify(banco_dados))
  
    window.location.href = '../index.html'
    }
  } 
}

document.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    logar();
  }
}, false);

function logar() {

  let email = document.getElementById('email').value
  let senha = document.getElementById('senha').value
  let msgError = document.getElementById('msgError')
  let banco_dados = []
  banco_dados = JSON.parse(localStorage.getItem('dados_usuarios'))

  validaUsuario = {
    email: '',
    senha: ''
  }

  if (email == '' && senha == '' ||  banco_dados == null) {
    msgError.setAttribute ('style', 'display: block')
    msgError.innerHTML = 'Usuário e senha incompleto/inexistente'
}else{

  banco_dados.forEach(index_usuario => {

    if (email == index_usuario.email && senha == index_usuario.senha) {

      validaUsuario = {
        email: index_usuario.email,
        senha: index_usuario.senha,
        nome: index_usuario.nome,
        data: index_usuario.data,
        estado: index_usuario.estado,
        cidade: index_usuario.cidade,
        bairro: index_usuario.bairro,
        telefone: index_usuario.telefone
      }
    }
  })

  if (email == validaUsuario.email && senha == validaUsuario.senha) {


    let token = Math.random().toString(16).substr(2)
    localStorage.setItem('token', token)
    localStorage.setItem('usuario_atual', JSON.stringify(validaUsuario))
    window.location.href = './assets/home.html'
  }else {
    msgError.setAttribute ('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorreto/incompleto'
  }
}
}

function deslogar() {
  localStorage.removeItem('token')
  localStorage.removeItem('usuario_atual')
  localStorage.removeItem('med_user_atual')
  localStorage.removeItem('bd_imagem')

  window.location.href = '../index.html'
}

function validaUsuarioLogado() {
  if (localStorage.getItem('token') == null) {
    window.location.href = '../index.html'
  }
}

function exibeNomeUsuario() {
  let nome_usuario = JSON.parse(localStorage.getItem('usuario_atual'))
  let id_p_login_html = document.getElementById('login-cadastro')
  let arr = nome_usuario.nome.split(' ');
	let keep = arr[1][0].toUpperCase() != arr[1][0];
  id_p_login_html.innerHTML = arr.slice(0, keep ? 3 : 2).join(' ');
}

function cadastroMedicamento() {

  let nome = document.getElementById('nome').value
  let tipo_medicamento = document.getElementById('tipo').value
  let quantidade = document.getElementById('quantidade').value
  let data_validade = document.getElementById('data_validade').value
  let msgPreencherCampos = document.getElementById ('mgs_preencher_campos')

  let banco_medicamentos = JSON.parse(localStorage.getItem('bd_medicamentos'))
  let dados_usuario_atual = JSON.parse(localStorage.getItem('usuario_atual'))


  if (banco_medicamentos == null) {
    localStorage.setItem('bd_medicamentos', '[]')
    banco_medicamentos = []
  }

  imagem = localStorage.getItem('bd_imagem')

  if (nome == '' || tipo_medicamento == '' || quantidade == '' || data_validade == '' || imagem == null) {
    msgPreencherCampos.setAttribute ('style', 'display: block')
    msgPreencherCampos.innerHTML = 'Envie uma foto e preencha todos os campos.'
  }else{
    med = {
      email: dados_usuario_atual.email,
      telefone: dados_usuario_atual.telefone,
      nome_user: dados_usuario_atual.nome,
      nome: nome,
      tipo_medicamento: tipo_medicamento,
      quantidade: quantidade,
      data_validade: data_validade,
      imagem: imagem
    }
  
    banco_medicamentos.push(med)
  
    localStorage.setItem('bd_medicamentos', JSON.stringify(banco_medicamentos))

    localStorage.removeItem('bd_imagem')

    window.location.href = './medicamentos.html'
  }
}

function exibeDadosUsuarios() {
  let dados_pagina_usuario = JSON.parse(localStorage.getItem('usuario_atual'))
  //Nome Completo
  let nome = document.getElementById('textoBox1')
  nome.innerHTML = dados_pagina_usuario.nome
  //Estado
  let estado = document.getElementById('textoBox2')
  estado.innerHTML = dados_pagina_usuario.estado
  //Data de Nascimento
  let data = document.getElementById('textoBox3')
  data.innerHTML = dados_pagina_usuario.data
  //Cidade
  let cidade = document.getElementById('textoBox4')
  cidade.innerHTML = dados_pagina_usuario.cidade
  //E-mail
  let email = document.getElementById('textoBox5')
  email.innerHTML = dados_pagina_usuario.email
  //Bairro
  let bairro = document.getElementById('textoBox6')
  bairro.innerHTML = dados_pagina_usuario.bairro
  //Senha
  let senha = document.getElementById('textoBox7')
  senha.innerHTML = '**********'
  //Telefone
  let telefone = document.getElementById('textoBox8')
  telefone.innerHTML = dados_pagina_usuario.telefone
  //Telefone Contato
  let telefone_contato = document.getElementById('textoBox9')
  telefone_contato.innerHTML = dados_pagina_usuario.telefone
  //Email Contato
  let email_contato = document.getElementById('textoBox10')
  email_contato.innerHTML = dados_pagina_usuario.email
}

var select_div 
function addMedicamentos (){
  let bd_med = JSON.parse(localStorage.getItem('bd_medicamentos'))

  if(bd_med == null){
    let msgSemMedicamentos = document.getElementById('msg-sem-medicamentos')
    msgSemMedicamentos.setAttribute('style', 'display: block')
    msgSemMedicamentos.innerHTML = 'Ainda não possui medicamentos cadastrado para doação.'
  }else{
    bd_med.forEach(i =>{
      select_div = document.getElementById('nova_div')
      var caixa = document.createElement('div')
      caixa.setAttribute('class', 'caixa-medicamento')
      select_div.appendChild(caixa)
      
      let imagem_med = document.createElement('img')
      imagem_med.setAttribute('class', 'editar_imagem_med')
      imagem_med.setAttribute('src', i.imagem)
      caixa.appendChild(imagem_med)
      
      let nome_med = document.createElement('p')
      nome_med.setAttribute('class', 'nome_medicamento')
      if (i.nome.length>25) {
      nome_med.innerHTML = i.nome.substr(0,26) + "..."
      }else{
        nome_med.innerHTML = i.nome
      }
      caixa.appendChild(nome_med)
  
      let quantidade = document.createElement('p')
      quantidade.setAttribute('class', 'info_data')
      quantidade.innerHTML = i.quantidade + " " + "unidades"
      caixa.appendChild(quantidade)
  
      let tipo = document.createElement('p')
      tipo.setAttribute('class', 'info1')
      tipo.innerHTML = "Tipo:" + " " + i.tipo_medicamento
      caixa.appendChild(tipo)
  
      let validade = document.createElement('p')
      validade.setAttribute('class', 'info1')
      data_separada = i.data_validade.toString().split('-')
      validade.innerHTML = "Validade: " + data_separada[2] + "/" + data_separada[1] + "/" + data_separada[0]
      caixa.appendChild(validade)
  
      var caixa2 = document.createElement('div')
      caixa2.setAttribute('class', 'caixa-medicamento2')
      caixa.appendChild(caixa2)
  
      let info = document.createElement('p')
      info.setAttribute('class', 'titulo1')
      info.innerHTML = "Informações do Doador"
      caixa2.appendChild(info)
  
      let nome = document.createElement('p')
      nome.setAttribute('class', 'titulo2')
      nome.innerHTML = "Nome"
      caixa2.appendChild(nome)
  
      let nome_user = document.createElement('p')
      nome_user.setAttribute('class', 'info2')
      let arr = i.nome_user.split(' ');
      let keep = arr[1][0].toUpperCase() != arr[1][0];
      nome_user.innerHTML = arr.slice(0, keep ? 3 : 2).join(' ');
      caixa2.appendChild(nome_user)
  
      let telefone = document.createElement('p')
      telefone.setAttribute('class', 'titulo2')
      telefone.innerHTML = "Telefone"
      caixa2.appendChild(telefone)
  
      let telefone_user = document.createElement('p')
      telefone_user.setAttribute('class', 'info2')
      telefone_user.innerHTML = i.telefone
      caixa2.appendChild(telefone_user)
  
      let email = document.createElement('p')
      email.setAttribute('class', 'titulo2')
      email.innerHTML = "Email"
      caixa2.appendChild(email)
  
      let email_user = document.createElement('p')
      email_user.setAttribute('class', 'info2')
      email_user.innerHTML = i.email
      caixa2.appendChild(email_user)
  
    })
  }
}