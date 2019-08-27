<template id="desafios">
  <!--eslint-disable-->

<div class="container">
  <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
  <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
  <a class="btn btn-voltar" href="" role="button" placeholder="Digite o nome do contexto"></a> -->

  <div class="container2">
    <div class="row">
      <div class="col-sm">
        <a class="btn btn-voltar" href="/#/editarContexto" role="button" placeholder="Digite o nome do contexto"></a>
        <img src="../_imagens/letreca/desafios.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
      </div>
    </div> 
  </div>

  <div class="scroll">
    <div class="container-v3">
      <div class="row">
        <div class="col-auto" v-for="(item, index) in desafios" :key="index.id">
          <div class="card itens" style="width: 8rem;">
            <img v-bind:src="item.imagem" class="card-img-top" alt="Imagem de capa do card">
              <div class="card-body body">
                <h5 class="card-title text" style="text-align: center;">{{item.nome}}</h5>
                <audio v-bind:src="item.audio" class="audio" controls="controls">
                  <source type="audio/mp3">
                </audio>
                <a href="#" @click="apagarDesafio(item)" class="btn del-desafio"></a>
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
  template: "#desafios",
  data() {
    return {
      email: "",
      senha: "",
      desafios: []
    };
  },

  created: function() {
    let cat = this.$route.params.id;
    let url = "http://localhost:3000/desafios/"+cat+"/contexto";

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.desafios = response.data;
      })
      .catch(e => {
        console.log("erro");
      });
  },

  updated: function(l, a) {
    let cat = this.$route.params.id;
    let url = "http://localhost:3000/desafios/"+cat+"/contexto";

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.desafios = response.data;
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
    },

    apagarDesafio: function(item) {
      axios.delete("http://localhost:3000/desafios/" + item.id)
        .then(item => {
          console.log("indice = ");
          let indice = this.contextos.indexOf(item)
          this.contextos.splice(indice, 1)
          this.sucesso = 'Registro apagado com sucesso'
        })
        .catch(err => {
          this.erro = 'Erro ao apagar - ' + err
        })
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

.container-v3{
	background-color: none;
	padding-left: 5%;
	padding-bottom: 7%;
	height: 500px;
}

.content{
	position: relative;
	background-color: none;
	top: 0%;
}

/*.cadimg{
	position: absolute;
	width: 100%;
	top: 0%;
	left: 0%;
}*/
.scroll{
	overflow-x: hidden;
	overflow-y: auto;
}

.cadimg{
	position: relative;
	width: 75%;
	left: -3%;
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
	margin-top: 15%;
}

.del-desafio{
	background-image: url(../_imagens/letreca/del.png);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 2rem;
    width: 2rem;
    background-color: none;
    position: relative;
    bottom: 1rem;
}

.del-desafio:hover{
	border: 1px solid;
	border-color: #B22222;
	background-color: #B22222;
}

.text{
	font-size: 1.0rem;
}

.audio{
	width: 3rem;
	text-align: center;
	align-items: center;
	border-radius: 25% 25% 25% 25%;
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