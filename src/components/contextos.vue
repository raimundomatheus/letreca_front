<template id="contextos">
  <!--eslint-disable-->

<div class="container">
  <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
  <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
  <a class="btn btn-voltar" href="" role="button" placeholder="Digite o nome do contexto"></a> -->

  <div class="container2">
    <div class="row">
      <div class="col-sm">
        <a class="btn btn-voltar" href="/#/" role="button" placeholder="Digite o nome do contexto"></a>
        <img src="../_imagens/letreca/lista-contextos.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
      </div>
    </div> 
  </div>

  <div class="scroll">
    <div class="container-list3">
      <div class="row">
        <div class="col-auto" v-for="contexto in contextos" :key="contexto.id">
          <div class="card itens" style="width: 10rem;">
            <a href="/#/engine"> 
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

</div>


 <!--  <div id="row" class="row">
      <div class="col-sm-3"  v-for="produto in produtos" :key="produto.id" >
        <div class="card">
          <a href="#">
            <img v-bind:src="produto.imagem" class="card-img-top" alt>
          </a>
          <div class="card-body">
            <a href="">
            <h6 class="card-title text-muted">{{produto.categoria}}</h6>
            </a>
            <p class="card-text">{{produto.nome}}</p>
            <h6 class>R$ {{produto.valor}}</h6>
            <a href="#" class="btn btn-primary" @click="()=>comprar(produto.id)">COMPRAR</a>
          </div>
      </div>
    </div>
  </div>
  <a id href="/#/cadastroProdutos">Cadastrar Produtos</a>
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

    comprar: function(id){
      this.$router.push("/cardItem/"+id)
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
}
*/
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
        max-width: 700px;
    }
}

@media (min-width: 576px) {
  .container {
    max-width: 700px;
  }
}


</style>
