<template id="editarContexto">
  <!--eslint-disable-->

<div class="container">
  <!-- <img src="../imagens/fundo.jpg" class="img-fluid im" alt="Imagem responsiva"> -->
  <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
  <a class="btn btn-voltar" href="" role="button" placeholder="Digite o nome do contexto"></a> -->

  <div class="container2">
    <div class="row">
      <div class="col-sm">
        <a class="btn btn-voltar" href="/#/cadastroContexto" role="button" placeholder="Digite o nome do contexto"></a>
        <img src="../_imagens/letreca/lista-contextos.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
      </div>
    </div> 
  </div>

  <div class="scroll">
    <div class="container-view3">
      <form @submit="checkform" method="delete" action>
        <div class="row">
          <div class="col-auto" v-for="(item, index) in contextos" :key="index.id">
            <div class="card itens" style="width: 10rem;">
              <img v-bind:src="item.imagem" class="card-img-top" alt="Imagem de capa do card">
              <div class="card-body body">
                <h5 class="card-title text" style="text-align: center;">{{item.nome}}</h5>
                <a href="#" @click="()=>ver(item.id)" class="btn ver"></a>
                <a href="#" @click="apagarContexto(item)" class="btn del"></a>
                <!--<p @click="()=>deletar(editarContexto)">
                  <input class="btn_cadastroContexto" type="submit" value="">
                </p>-->
              </div>
            </div>
          </div>
        </div>
      </form>
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
  template: "#editarContexto",
  data() {
    return {
      id: "",
      email: "",
      senha: "",
      contextos: [],
      dados: "",
      sucesso: "",
      erro: "",
      test_room: {},
      test_id: ''
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
        senha: this.senha,
        contexto: this.dados,
        id: this.id,
        sucesso: this.sucesso,
        erro: this.erro
      };

      axios.delete("http://localhost:3000/editarContextos", payload).then(response => {
        console.log(response);
        console.log("Estou aqui");
      });

      e.preventDefault();
    },

    deletar: function(id){
      this.$router.push("/editarContexto/")
    },

    ver: function(id){
      this.$router.push("/desafios/"+id)
    },

    apagar(contextos, id1) {
      $("#my-modal").modal('show');
      this.test_room = contextos;
      this.test_id = id1;
    },
    apagarData(contextos, id){
      axios.delete("http://localhost:3000/editarContextos/" + id)
      .then(response => this.contextos.splice(index, 1));
      window.location.reload();
    },

    apagarContexto: function(item) {
      axios.delete("http://localhost:3000/contextos/" + item.id)
        .then(item => {
          console.log("indice = ");
          let indice = this.contextos.indexOf(item)
          this.contextos.splice(indice, 1)
          this.sucesso = 'Registro apagado com sucesso'
        })
        .catch(err => {
          this.erro = 'Erro ao apagar - ' + err
        })
    },

    apagou(item){
      this.contextos.splice(this.contextos.indexOf(item), 1)
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

.container2{
	background-color: none;
}

.container-view3{
	position: relative;
	background-color: none;
	left: 10%;
	padding-bottom: 2.5%;
	height: 540px;
}

.content{
	position: relative;
	background-color: none;
	top: 0%;
}

.scroll{
	overflow-x: hidden;
	overflow-y: auto;
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
	margin-top: 5%;
}

.body{
	margin-top: -5%;
	margin-bottom: -5%;
}


.ver{
	background-image: url(../_imagens/letreca/ver.png);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 2rem;
    width: 2rem;
    margin-left: 0%;
}

.ver:hover{
	border: 1px solid rgba(155, 155, 155, 0.4);
  background-color: rgba(155, 155, 155, 0.4);
}

.del{
	background-image: url(../_imagens/letreca/del.png);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 2rem;
    width: 2rem;
    background-color: none;
}

.del:hover{
	border: 1px solid;
	border-color: #c83535;
	background-color: #c83535;
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
