<template id="cadastroContexto">
  <!--eslint-disable-->
  <div class="container">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
    <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
    <!-- <img src="../imagens/cad-contexto.jpg" class="img-fluid cadimg-cadcontexto" alt="Imagem responsiva">
    <a class="btn btn-voltar-cadcontexto" href="../index.html" role="button" placeholder="Digite o nome do contexto"></a>-->
    <div class="container5">
      <div class="row">
        <div class="col-sm">
          <a class="btn btn-voltar-cadcontexto" href="/#/" role="button"></a>
          <img
            src="../_imagens/letreca/cad-contexto.jpg"
            class="img-fluid cadimg-cadcontexto"
            alt="Imagem responsiva"
          />
        </div>
      </div>
    </div>

    <div id="cadastro" class="content-cadastro">
      <form @submit="checkform" method="post" action>

        <label class="cacontexto" for="">
        </label>

        <input
          class="inp"
          type="text"
          v-model="nome"
          required="required"
          name="nome_contexto"
          placeholder="Digite aqui o nome do contexto"
        />
        
        <label class="cbcontexto" for="">
        </label>

        <img
          src="../_imagens/letreca/img-do-contexto.jpg"
          class="img-fluid mdc"
          for="nome"
          id="nome"
          alt="Imagem responsiva"
          style="display:none"
        />
       <!-- <input type="file" id="file" @change="uploadImagem" name="photo" accept="image/*" />
        <img :src="imageSrc" class="image" />
        <label class="label_contexto" for="file">
          <i class="material-icons">add_photo_alternate</i>
          Escolher foto
        </label> -->

        <div class="control">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">

            <input type="file" id="file" @change="uploadImagem" name="photo" accept="image/*" />
            <img :src="imageSrc" class="image" />
            <input class="file" id="file" type="file"/>
            <label @click="()=>brfr()" for="file">Escolher foto<span>0 Arquivo </span></label>
        </div>


        <!--<input class="inp-img-contexto" v-model="imagem" type="text" required="required" name="img_contexto" placeholder="Cole aqui a URL da imagem">-->
        <!--<a class="btn btn-cadastrar-contexto" type="submit" role="button" @click="()=>buscar(card)"></a>-->

        <p @click="checkform">
          <input class="btn_contexto" type="submit" value />
        </p>
      </form>
    </div>

    <div class="container6">
      <div class="row">
        <div class="col-sm">
          <a class="btn btn_listar" href="/#/editarContexto" role="button"></a>
        </div>

        <div class="col-sm btn_cd">
          <a class="btn btn_criarD" href="/#/cadastroDesafio" role="button"></a>
        </div>
      </div>
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
  template: "#cadastro",
  data() {
    return {
      imageSrc: null,
      vm: "",
      nome: "",
      imagem: ""
    };
  },

  methods: {
    checkform: function(e) {
      let payload = {
        nome: this.nome,
        imagem: this.imagem
      };

      axios.post("http://localhost:3000/contextos", payload).then(response => {
        console.log(response);
        this.buscar();
      });

      e.preventDefault();
    },

    buscar: function() {
      alert("Contexto Cadastrado");
      this.$router.push("/editarContexto/");
    },

    uploadImagem: function(event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.imagem = reader.result.split(",")[1];
        console.log(this.imagem);
      };    
    },

    brfr: function(){
        console.log("estou aqui");
        $('#file').change(function(e) {
        var filename = e.target.files[0].name
        console.log(filename);
        $('span').html(filename);
    });
    }

  }
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

/*.cadimg-cadcontexto{
	position: absolute;
	width: 100%;
	top: 0%;
	left: 0%;
}*/

.cadimg-cadcontexto {
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
/*.btn-voltar-cadcontexto{
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

.btn-voltar-cadcontexto {
  background-image: url(../_imagens/letreca/return.png);
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

.cacontexto {
  background-image: url(../_imagens/letreca/nome-do-contexto.jpg);
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

.cbcontexto {
  background-image: url(../_imagens/letreca/img-do-contexto.jpg);
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

.btn_contexto {
  background-image: url(../_imagens/letreca/cadastro.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  color: white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #267cb5;
  position: relative;
  margin: auto;
  top: 5rem;
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
