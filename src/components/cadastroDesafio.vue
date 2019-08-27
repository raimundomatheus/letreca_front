<template id="cadastroDesafio">
  <!--eslint-disable-->
  <div class="container">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div class="container-d-5">
              <div class="row">
                <div class="col-sm">
                  <a class="btn btn-voltar" href="/#/cadastroContexto" role="button"></a>
                  <img src="../_imagens/letreca/cad-desafio.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
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
                          <option value="" disabled selected>Selecione...</option>
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
                    

                    <div class="col-sm">
                        <img src="../_imagens/letreca/audio-desafio.jpg" class="img-fluid img-audio-desafio" alt="Imagem responsiva">
                        <!--<input class="inp-audio-desafio" type="file" name="audio_desafio">-->
                        <input class="inp-audio-desafio" v-model="audio" type="text" required="required" name="audio_desafio" placeholder="Cole aqui a URL do áudio">
                    </div>

                    <div id="editor" class="col-sm">
                        <img src="../_imagens/letreca/img-desafio.jpg" class="img-fluid img-desafio" alt="Imagem responsiva" style="display:none">
                        <!--<input class="inp-img-desafio" type="file" name="img_desafio">
                        <input class="inp-img-desafio" v-model="imagem" type="file" required="required" name="img_desafio" placeholder="Cole aqui a URL da imagem">-->
                        <input type="file" id="file" @change="uploadImagem" ame="photo" accept="image/*">
                        <img :src="imageSrc" class="image">
                        <label class="label_desafio" for="file">
                          <i class="material-icons">
                            add_photo_alternate
                          </i>
                          Escolher foto
                        </label>
                    </div>
                  </div>
              </div>

                    <!--<p @click="()=>ret()">
                      <input class="" type="submit" value="v-model">
                    </p>-->
              
              <div class="container-d-4">
                <div class="row">
                  <div class="col-sm">
                    <p @click="()=>buscar(desafios)">
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
import axios from "axios";

/* eslint-disable */
export default {
  template: "#cadastroDesafio",
  data() {
    return {
      imageSrc: null,
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

      axios.post("http://localhost:3000/desafios", payload).then(response => {
        console.log(response);
      });

      e.preventDefault();
    },
    buscar: function(categoria) {
      alert("Contexto Cadastrado");
      this.$router.push("/editarContexto/");
    },
    
    listar: function() {
      axios.get("http://localhost:3000/contextos").then(response => {
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


.cadimg{
	position: relative;
	width: 75%;
	left: -3%;
}

.btn-voltar{
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
	top: 2%;
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
	top: 2%;
}

.img-desafio{
	position: relative;
	top: 2%;
	border-radius: 50%;
}

.img-audio-desafio{
	position: relative;
	top: 2%;
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
  background-color: #f5af09;
  position: absolute;
  margin: auto;
  top: 1.6rem;
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
  background-size: 120%;
  color:white;
  height: 3rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #267cb5;
  position: absolute;
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

@media (min-width: 700px) {
    .container{
        max-width: 700px;
    }
}

@media (min-width: 576px) {
  .container {
    max-width: 700px;
  }
}


</style>
