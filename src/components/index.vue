<template id="index">
  <!--eslint-disable-->
  <div class="container principal">
            <!--<img src="../_imagens/letreca/letreca2.jpg" class="img-fluid im" alt="Imagem responsiva">-->
            <a class="btn play" href="/#/contextos" role="button"></a>
            <a class="btn config" href="/#/login" role="button"></a>
       </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  template: "#index",
  data() {
    return {
      email: "",
      senha: ""
    };
  },

  methods: {
    checkform: function(e) {
      let payload = {
        email: this.email,
        senha: this.senha
      };

      axios.post("https://app.sisalfa.dcx.ufpb.br/letreca/v1/login", payload).then(response => {
        let token = response.data.token;
        window.localStorage.setItem("token", token);
        alert("Você está logado");
      });
      e.preventDefault();
    },

    ver: function(categoria) {
      this.$router.push("/teste/");
    },

  }
};
</script>

<style>
/* eslint-disable */
.container{
	position: relative;
	border: 2px solid;
	border-color: #A8D500;
	border-radius: 1%;
	box-shadow: 5px 5px;
	background-color: #A8D500;
  height: 650px;
}

.principal{
  background-image: url(../_imagens/letreca/letreca2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 85%;
}

.play{
	background-image: url(../_imagens/letreca/play1.png);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
	position: absolute;
	left: 38%;
	top: 70%;
	border: none;
	height: 10%;
	width: 10%;
	background-color: #2196f3;
}

.config{
	background-image: url(../_imagens/letreca/config.png);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 85%;
	position: absolute;
	left: 50%;
	top: 70%;
	height: 10%;
	width: 10%;
	background-color: #267cb5;
}

.im{
	position: relative;
	left: 0%;
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

@media (max-width: 574px){
  .play{
    left: 35%;
    top: 65%;
    height: 10%;
    width: 15%;
  }
  .config{
    left: 52%;
    top: 65%;
    height: 10%;
    width: 15%;
  }
}

@media (max-width: 499px){
  .play{
    left: 35%;
    top: 63%;
    height: 10%;
    width: 15%;
  }
  .config{
    left: 52%;
    top: 63%;
    height: 10%;
    width: 15%;
  }
}

@media (max-width: 360px){
  .play{
    left: 35%;
    top: 60%;
    height: 6%;
    width: 15%;
  }
  .config{
    left: 52%;
    top: 60%;
    height: 6%;
    width: 15%;
  }
}

</style>
