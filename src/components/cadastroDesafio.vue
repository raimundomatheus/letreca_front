<template id="cadastroDesafio">
  <!--eslint-disable-->
  <div class="container">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">

            <div class="container-d-5">
              <div class="row">
                <div class="col-sm">
                  <a class="btn btn-voltar-cadd" href="/#/cadastroContexto" role="button"></a>
                  <img src="../_imagens/letreca/cad-desafio.jpg" class="img-fluid cadimg-cadd" alt="Imagem responsiva">
                </div>

              </div> 
            </div>

            <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->

            <div class="content-desafio">
              <form @submit="checkform" method="post" action>
              <div class="container-d-1">
                <div class="row">
                  <div class="col-sm" >
                      <img src="../_imagens/letreca/select-contexto.jpg" class="img-fluid n" alt="Imagem responsiva">
                      <select class="sele-contexto" name="selecao-contexto" v-model="bola" placeholder="Contexto">
                          <option value="" disabled selected>Selecione o contexto</option>
                          <option v-for="contexto in contextos" :key="contexto.id" v-bind:src="contexto.id"  v-bind:value="contexto.id" placeholder="Contexto">{{contexto.nome}}</option> 
                      </select>
                  </div>

                  <div class="col-sm">
                      <img src="../_imagens/letreca/palavra-desafio.jpg" class="img-fluid n1" alt="Imagem responsiva">
                      <input class="palavraD" v-model="nome" required="required" type="text" name="palavra_desafio" placeholder="Ex: Abacaxi">
                  </div>

                </div> 
              </div>

              <div class="container-d-2">
                  <div class="row">
                    

                    <div class="control col-sm">
                        <img src="../_imagens/letreca/audio-desafio.jpg" class="img-fluid audio_desafio" alt="Imagem responsiva" >

                        <img :src="audioSrc" class="audio">
                        <input class="file" type="file" id="file_audio" @change="uploadAudio" name="audio" accept="audio/*">
                        <label @click="()=>brfra()" for="file_audio" style="top: 2.5rem; margin-bottom: 3rem;">Escolher áudio<h6 v-bind:value="audio.nome" style="color: #333; margin-top: 1rem; margin-bottom: 3rem; font-size: 12px">0 Arquivo </h6></label>
                        
                    </div>

                    <div class="control col-sm" id="editor">
                        <img src="../_imagens/letreca/img-desafio.jpg" class="img-fluid img_desafio" alt="Imagem responsiva" >

                        <img :src="imageSrc" class="image" />
                        <input class="file" type="file" id="file" @change="uploadImagem" name="photo" accept="image/*" />
                        <label class="bt1" @click="()=>brfr()" for="file" style="top: 2.5rem">Escolher foto<span>0 Arquivo </span></label>
                    </div>

                  </div>
              </div>
              <br><br><br>

                    <!--<p @click="()=>ret()">
                      <input class="" type="submit" value="v-model">
                    </p>-->
              
              <div class="container-d-4" style="">
                <div class="row">
                  <div class="col-sm">
                    <p @click="checkform">
                      <input class="btn_desafio" type="submit" value="">
                    </p>
                      <!--<a class="btn btn-cadastrar-desafio" href="" role="button"></a>-->
                  </div>
                </div> 
              </div>
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

/* eslint-disable */
export default {
  template: "#cadastroDesafio",
  data() {
    return {
      imageSrc: null,
      audioSrc: null,
      bola: "",
      contextos: [],
      nome: "",
      audio: "",
      imagem: ""
    };
  },

  methods: {
    checkform: function(e) {
      let payload = {
        nome: this.nome,
        audio: this.audio,
        imagem: this.imagem,
        contexto: this.bola
      };

      axios.post("https://app.sisalfa.dcx.ufpb.br/letreca/v1/desafios", payload).then(response => {
        console.log(response);
        this.buscar();
      });

      e.preventDefault();
    },
    buscar: function() {
      alert("Contexto Cadastrado");
      this.$router.push("/editarContexto/");
    },
    
    listar: function() {
      axios.get("https://app.sisalfa.dcx.ufpb.br/letreca/v1/contextos").then(response => {
        this.contextos = response.data;
        console.log(response);
      })
    },
    
    ret: function() {
      alert(this.bola);
    },

    uploadImagem: function(event){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload =  ()=>{
        this.imagem = reader.result.split(',')[1];
        console.log(this.imagem)
      }
    },

    uploadAudio: function(event){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload =  ()=>{
        this.audio = reader.result.split(',')[1];
        console.log(this.audio)
      }
    },

    brfra: function(){
        $('#file_audio').change(function(a) {
        var filename = a.target.files[0].name
        console.log(filename);
        $('h6').html(filename);
    });
    },

    brfr: function(){
        $('#file').change(function(e) {
        var filename = e.target.files[0].name
        console.log(filename);
        $('span').html(filename);
    });
    }

  },
  mounted(){
    this.listar();
  },

};
</script>

<style>
/* eslint-disable */

.container{
	/*background-image: url("../imagens/telaPrincipal.png");*/
	background-position: center;
  background-repeat: no-repeat;
	position: relative;
	border: 2px solid;
	border-color: #A8D500;
	border-radius: 1%;
	box-shadow: 5px 5px;
	background-color: #A8D500;
  height: 650px;
}

.container-d-1{
	background-color: none;
	padding-top: 3%;
}

.container-d-2{
	background-color: none;
	margin-top: 10%;
}

.container-d-3{
	background-color: none;
	align-items: center;
	text-align: center;
}

.container-d-4{
	position: relative;
	margin-top: 1rem;
	background-color: none;
	width: 100%;
}

.container-d-5{
	background-color: none;
}


.cadimg-cadd{
	position: relative;
	width: 75%;
	left: -3%;
}

.btn-voltar-cadd{
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

.content-desafio{
	position: relative;
	background-color: #fff;
	width: 80%;
	margin-top: 10%;
	left: 10%;
	margin-bottom: 20%;
	border-radius: 2%;
	text-align: left;
	padding-top: 0%;
}


.inp{
	width: 75%;
	height: 100%;
}

.inp-img-desafio{
	position: relative;
	width: 80%;
	left: 10%;
}

.inp-audio-desafio{
	position: relative;
	width: 80%;
	left: 10%;
}

.btn-cadastrar-desafio{
	background-image: url(../_imagens/letreca/cadastro.jpg);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 140%;
	position: relative;
	border: none;
	width: 30%;
	height: 2.3rem;
	top: 0%;
	left: 35%;
	margin-bottom: 5%;
  margin-top: 5%;
	border-radius: 5px 5px 5px 5px;

}

.n{
	width: 100% !important;
	margin-top: 2%;
}

.n{
	position: relative;
	top: 2%;
	border-radius: 50%;
}

/*.n1{
	width: 50%;
	margin-top: 2%;
	position: absolute;
}*/

.n1{
	position: relative;
	top: 12%;
	border-radius: 50%;
}

/*.sele-contexto{
	position: absolute;
	left: 12%;
}*/

.sele-contexto{
	position: relative;
	left: 10%;
  width: 80%;
	top: 2%;
}

/*.palavraD{
	position: absolute;
	left: 60.5%;
	top: 11%;
	width: 10rem;
}*/

.palavraD{
	position: relative;
	width: 80%;
	left: 10.2%;
	top: 12%;
}

.img-desafio{
	position: relative;
	top: 0%;
	border-radius: 50%;
}

.img-audio-desafio{
	position: relative;
	top: 0%;
	border-radius: 50%;
}

.img-dificuldade{
	position: relative;
	top: 10%;
	width: 50%;
	border-radius: 50%;
}

.facil{
	position: relative;
}

.medio{
	position: relative;
}

.dificil{
	position: relative;
}

input[type="file"]{
  display: none;
}

.label_desafio{
  color:white;
  height: 2rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  background-color: #a8d500;
  position: relative;
  margin: auto;
  top: -1.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}

.btn_desafio{
  background-image: url(../_imagens/letreca/cadastro.jpg);
	background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color:white;
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

.sec_desafio{
  background-image: url(../_imagens/letreca/img-desafio.jpg);
	background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  color:white;
  height: 3rem;
  width: 20rem;
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

.img_desafio{
  background-image: url(../_imagens/letreca/img-desafio.jpg);
	background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  color:white;
  height: 3rem;
  width: 20rem;
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

.audio_desafio{
  background-image: url(../_imagens/letreca/audio-desafio.jpg);
	background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  color:white;
  height: 2.2rem;
  width: 20rem;
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

.img_desafio{
  background-image: url(../_imagens/letreca/img-desafio.jpg);
	background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  color:white;
  height: 2.2rem;
  width: 20rem;
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

.control .file + label h6 {
  font-size: 12px;
  position: absolute;
  top: 45px;
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

@media (max-width: 576px) {
  .container {
    max-width: 700px !important;
  }
  .img_desafio{
      margin-top: 3.5rem;
  }
  .bt1{
    margin-top: 3.5rem;
  }
}


@media (min-width: 576px) {
  .container {
    max-width: 700px !important;
  }

}

@media (min-width: 700px) {
    .container{
        max-width: 700px !important;
    }

}

@media (min-width: 768px) {
  .container{
      max-width: 768px !important;
  }
}



</style>
