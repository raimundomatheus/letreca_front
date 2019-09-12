<template id="login">
  <!--eslint-disable-->
  <div class="container">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
    <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
    <!-- <img src="../imagens/cad-contexto.jpg" class="img-fluid cadimg-login" alt="Imagem responsiva">
    <a class="btn btn-voltar-login" href="../index.html" role="button" placeholder="Digite o nome do contexto"></a>-->
    <div class="container5">
      <div class="row">
        <div class="col-sm">
          <a class="btn btn-voltar-login" href="/#/" role="button"></a>
          <img
            src="../_imagens/letreca/login.png"
            class="img-fluid cadimg-login"
            alt="Imagem responsiva"
          />
        </div>
      </div>
    </div>

    <div id="login" class="content-cadastro">
      <form @submit="checkform" method="post" action="">
        
        <p>
          <label class="ctc" id="email" for="email_login"> </label>
          <input class="inp" type="email" v-model="email" required="required" name="email_usuario" placeholder="Digite seu e-mail" />
        </p>

        <p>
          <label class="ctb" id="senha_login" for="senha"></label>
          <input class="inp" v-model="senha" required="required" type="password" placeholder="********" style="margin-top: 1rem">
        </p>

        <p class="btn_login">
          <input class="btn_fzrlogin" type="submit" value=""/>
        </p>
                     
        <a id="cad" href="/#/cadastroUsuario">Quero me cadastrar!</a>

      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios"
import jquery from "jquery"
import $ from "jquery"
import js from "jquery"

export default {
    template: "#login",
    data() {
       return {
        email: "",
        senha: ""
        };
    },
    methods:{
        checkform: function (e) {
            let payload = {
                    email: this.email,
                    senha: this.senha,
            };
            axios.post("https://app.sisalfa.dcx.ufpb.br/letreca/v1/login", payload).then((response)=>{
                let token = response.data.token
                window.localStorage.setItem("token", token)
                console.log(token);
                this.$router.push({name: 'cadastroContexto'});
            })
            .catch(function(error){
              console.log(error);
              alert("E-mail ou senha incorretos");
            });
            e.preventDefault();
        },
    },

    /*methods:{
    cadastroClick: () => {
        router.push({name: '/cadastroContexto'})
        }
    }*/
};
</script>

<style>
/* eslint-disable */

.container {
  /*background-image: url("../imagens/telaPrincipal.png");*/
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 2px solid;
  border-color: #a8d500;
  border-radius: 1%;
  box-shadow: 5px 5px;
  background-color: #a8d500;
  height: 650px;
}

/*.cadimg-login{
	position: absolute;
	width: 100%;
	top: 0%;
	left: 0%;
}*/

.cadimg-login {
  position: relative;
  width: 75%;
  left: -3%;
  
}

.container6 {
  position: relative;
  width: 80%;
  align-items: center;
  text-align: center;
  left: 10%;
  margin-bottom: 10%;
  margin-top: 4%;
}
/*.btn-voltar-login{
	background-image: url("../imagens/voltar-icone.png");
	background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
	position: absolute;
	left: 3%;
	top: 4.5%;
	border: none;
	height: 8%;
	width: 8%;
}*/

.btn-voltar-login {
  background-image: url(../_imagens/letreca/voltar-icone.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  width: 7%;
  height: 3rem;
  z-index: 2;
  left: -8%;
}

.content-cadastro {
  position: relative;
  background-color: #fff;
  height: 50%;
  width: 80%;
  left: 10%;
  border-radius: 2%;
  text-align: center;
  padding-top: 0%;
  margin-top: 4rem;
}

.btn-listar {
  background-image: url(../_imagens/letreca/listar.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  border: none;
  height: 3rem;
  width: 100%;
  background-color: #2196f3;
}

.btn-criarD {
  background-image: url(../_imagens/letreca/criar.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  height: 3rem;
  width: 100%;
  background-color: #267cb5;
}

.inp {
  width: 75%;
  height: 10% !important;
  margin-top: 0.8rem;
  border:none;
  background-color: rgba(155, 155, 155, 0.2);
}

.inp-img-contexto {
  width: 75%;
  height: 30%;
  left: 50%;
  align-items: center;
}

.btn_cadastroContexto {
  background-color: none;
  background-image: url(../_imagens/letreca/cadastro.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 130%;
  border-radius: 7px 7px 7px 7px;
  position: relative;
  border: none;
  width: 30%;
  height: 2.8rem;
  top: 6rem;
  left: 0;
  right: 0;
  margin-bottom: 6%;
}

.ctb {
  background-image: url(../_imagens/letreca/senha.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #fff;
  position: relative;
  margin: auto;
  top: 0.8rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

.ctc {
  background-image: url(../_imagens/letreca/email.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #fff;
  position: relative;
  margin: auto;
  top: 0.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

input[type="file"] {
  display: none;
}

.label_contexto {
  color: white;
  height: 2.5rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  background-color: #a8d500;
  position: absolute;
  margin: auto;
  top: 1.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

.btn_fzrlogin {
  background-image: url(../_imagens/letreca/entrar.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #267cb5;
  position: relative;
  margin: auto;
  top: 0rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

.btn_listar {
  background-image: url(../_imagens/letreca/listar.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #2196f3;
  position: relative;
  margin: auto;
  top: 0rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 4%;
}

.btn_criarD {
  background-image: url(../_imagens/letreca/criar.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  color: white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #267cb5;
  position: relative;
  margin: auto;
  top: 0rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

@import url(https://fonts.googleapis.com/css?family=Fjalla+One);
*:after,
*:before,
* {
  box-sizing: border-box;
}

.control {
  position: relative;
}
.control .file {
  display: none;
  color: white;
  position: absolute;
}
.control .file + label {
  top: 0.5rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  font-family: "Fjalla One", sans-serif;
  font-size: 22px;
  color: #fff;
  width: 200px;
  height: 50px;
  background: lightgreen;
  text-align: center;
  vertical-align: text-top;
  padding-top: 10px;
  position: absolute;
  transition: 0.2s all;
  border-radius: 5px 5px 5px 5px;
}
.control .file + label:after {
  transition: 0.2s all;
  position: absolute;
  left: 40px;
  opacity: 0;
  content: " \f093";
  font-family: "FontAwesome";
}
.control .file + label:hover {
  cursor: pointer;
}
.control .file + label:hover:after {
  opacity: 1;
  -webkit-transform: translateX(-30px);
          transform: translateX(-30px);
}
.control .file + label span {
  font-size: 12px;
  position: absolute;
  top: 60px;
  width: 200px;
  text-align: center;
  left: 0;
  color: #000;
}

.btn_login{
  margin-top: 1.5rem;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  text-align: center;
}
::-moz-placeholder { /* Firefox 19+ */
  text-align: center;
}
:-ms-input-placeholder { /* IE 10+ */
  text-align: center;
}
:-moz-placeholder { /* Firefox 18- */
  text-align: center;
}

input[type=text]{
  text-align: center;
}

input[type=password]{
  text-align: center;
}

input[type=email]{
  text-align: center;
}

@media (min-width: 700px) {
  .container {
    max-width: 700px;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 700px;
  }
}
</style>
