<template id="contextos">
  <!--eslint-disable-->

<div class="container">
  <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
  <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg-contexto" alt="Imagem responsiva">
  <a class="btn btn-voltar-contexto" href="" role="button" placeholder="Digite o nome do contexto"></a> -->

  <div class="container2-contexto">
    <div class="row">
      <div class="col-sm">
        <a class="btn btn-voltar-contexto" href="/#/" role="button" placeholder="Digite o nome do contexto"></a>
        <img src="../_imagens/letreca/lista-contextos.jpg" class="img-fluid cadimg-contexto" alt="Imagem responsiva">
      </div>
    </div> 
  </div>

  <div class="scroll">
    <div class="container-list3">
      <div class="row">
        <div class="col-auto" v-for="contexto in contextos" :key="contexto.id">
          <div class="card itens" style="width: 10rem;">
            <a href="#" @click="()=>ver(contexto.id)">
            <img v-bind:src="contexto.imagem" class="card-img-top" alt="Imagem de capa do card"> 
            </a>
            <div class="card-body body">
              <h5 class="card-title text" style="text-align: center;">{{contexto.nome}}</h5> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <a href="/#/cadastroContexto">Cadastrar contexto</a>
</div>


 <!--  
  -->

</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  template: "#contextos",
  data() {
    return {
      email: "",
      senha: "",
      contextos: []
    };
  },

  created: function() {
    let cat = this.$route.params.id;
    let url = "http://localhost:3000/contextos/";
    if (cat !== undefined) {
      url += cat;
    }

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.contextos = response.data;
      })
      .catch(e => {
        console.log("erro");
      });
  },

  updated: function(l, a) {
    let cat = this.$route.params.id;
    let url = "http://localhost:3000/contextos/";
    if (cat !== undefined) {
      url += cat;
    }

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.contextos = response.data;
      })
      .catch(e => {
        console.log("erro");
      });
  },

  methods: {
    checkform: function(e) {
      let payload = {
        email: this.email,
        senha: this.senha
      };

      axios.post("http://localhost:3000/login", payload).then(response => {
        let token = response.data.token;
        window.localStorage.setItem("token", token);
        alert("Você está logado");
      });
      e.preventDefault();
    },

    ver: function(id){
      this.$router.push("/engine/"+id)
    },

    comprar: function(){
      this.$router.push("/cadastroContexto")
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
  height: 650px;
}


/*.cadimg-contexto{
	position: absolute;
	width: 100%;
	top: 0%;
	left: 0%;
}*/
.cadimg-contexto{
	position: relative;
	width: 75%;
	left: -3%;
}

.container-list3{
	position: relative;
	background-color: none;
	padding-left: 10%;
	padding-bottom: 2.5%;
	height: 500px;
}

.scroll{
	overflow-x: hidden;
	overflow-y: auto;
}

/*.btn-voltar-contexto{
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
}
*/
.btn-voltar-contexto{
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

.lista{
	background-color: red;
	position: absolute;
	top: 20%;
}

.img-1{
	height: 40%;
	width: 30%;
}

.itens{
	margin-top: 5%;
}

/*.body{
	height: 4rem;
}*/

.body{
	margin-top: -5%;
	margin-bottom: -5%;
}


.text{
	font-size: 1.0rem;
}

@media (min-width: 700px) {
    .container{
        max-width: 700px !important;
    }
}

@media (min-width: 576px) {
  .container {
    max-width: 700px !important;
  }
}


</style>
