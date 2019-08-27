<template id="cadastroContexto">
  <!--eslint-disable-->
<div class="container">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
    <!-- <img src="../imagens/cad-contexto.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
    <a class="btn btn-voltar" href="../index.html" role="button" placeholder="Digite o nome do contexto"></a> -->
    <div class="container5">
      <div class="row">
        <div class="col-sm">
          <a class="btn btn-voltar" href="/#/" role="button"></a>
          <img src="../_imagens/letreca/cad-contexto.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
        </div>
      </div> 
    </div>

    <div id="cadastro" class="content-cadastro">
      <form @submit="checkform" method="post" action>
      <img src="../_imagens/letreca/nome-do-contexto.jpg" class="img-fluid mdc" for="nome" id="nome" alt="Imagem responsiva">

      <input class="inp" type="text" v-model="nome" required="required" name="nome_contexto" placeholder="Digite aqui o nome do contexto">
      
      <img src="../_imagens/letreca/img-do-contexto.jpg" class="img-fluid mdc" for="nome" id="nome" alt="Imagem responsiva" style="display:none"><br>
      <input type="file" id="file" @change="uploadImagem" name="photo" accept="image/*">
      <img :src="imageSrc" class="image">
      <label class="label_contexto" for="file">
        <i class="material-icons">
          add_photo_alternate
        </i>
        Escolher foto
      </label>
      <!--<input class="inp-img-contexto" v-model="imagem" type="text" required="required" name="img_contexto" placeholder="Cole aqui a URL da imagem">-->
      <!--<a class="btn btn-cadastrar-contexto" type="submit" role="button" @click="()=>buscar(card)"></a>-->

      <p @click="()=>buscar(editarContexto)">
        <input class="btn_contexto" type="submit" value="">
      </p>
      
      </form>
    </div>

    <div class="container6">
      <div class="row">

        <div class="col-sm">
          <a class="btn btn-listar" href="/#/editarContexto" role="button"></a>
        </div>

        <div class="col-sm btn_cd">
            <a class="btn btn-criarD" href="/#/cadastroDesafio" role="button"></a>
        </div>

      </div> 
    </div>
</div>
</template>

<script>
/* eslint-disable */

import axios from "axios";

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
      });

      e.preventDefault();
    },

    buscar: function(categoria) {
      alert("Contexto Cadastrado");
      this.$router.push("/editarContexto/");
    },

    uploadImagem: function(event){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload =  ()=>{
        this.imagem = reader.result.split(',')[1];
        console.log(this.imagem)
      }
    }
  }
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

/*.cadimg{
	position: absolute;
	width: 100%;
	top: 0%;
	left: 0%;
}*/

.cadimg{
	position: relative;
	width: 75%;
	left: -3%;
}


.container6{

	position: relative;
	width: 80%;
	align-items: center;
	text-align: center;
	left: 10%;
	margin-bottom: 10%;
	margin-top: 4%;
}
/*.btn-voltar{
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

.content-cadastro{
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

.btn-listar{
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

.btn-criarD{
	background-image: url(../_imagens/letreca/criar.jpg);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
	position: relative;

	height: 3rem;
	width: 100%;
	background-color: #267cb5;

}

.inp{
	width: 75%;
	height: 10% !important;
}

.inp-img-contexto{
	width: 75%;
	height: 30%;
	left: 50%;
	align-items: center;
}

.btn_cadastroContexto{
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

.mdc{
  width: 50% !important;
  margin-top: 4%;
}

input[type="file"]{
  display: none;
}

.label_contexto{
  color:white;
  height: 2rem;
  width: 13rem;
  border-radius: 5px 5px 5px 5px;
  background-color: #A8D500;
  position: absolute;
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

.btn_contexto{
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
  top: 11rem;
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
