<template id="engine">
  <!--eslint-disable-->
  <div class="container engine">
        
            
            <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg" alt="Imagem responsiva">
            <a class="btn btn-voltar" href="" role="button" placeholder="Digite o nome do contexto"></a> -->

          

            <!-- <form class="lista" method="post" accept-charset="utf-8">
                <input class="img-1" type="image" name="" src="../imagens/test.jpg"><br>
                <strong>Palavras diversas</strong>
            </form> -->
            <div class="row life">
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" class="img-fluid cadimg" alt="Imagem responsiva">
                  </div>
                </div>

                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" class="img-fluid cadimg" alt="Imagem responsiva">
                  </div>
                </div>

                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" class="img-fluid cadimg" alt="Imagem responsiva">
                  </div>
                </div>
                
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" class="img-fluid cadimg" alt="Imagem responsiva">
                  </div>
                </div>

                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" class="img-fluid cadimg" alt="Imagem responsiva">
                  </div>
                </div>
                
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" class="img-fluid cadimg" alt="Imagem responsiva">
                  </div>
                </div>
            </div>


            <div class="row palavra">
              
                <div class="col-auto ca" v-for="desafio in desafios" :key="desafio.id">
                    <div class="teclas tec">
                      <a class="font" style="position: relative; font-size: 1.8rem; left: 0%">{{desafio.nome}}</a>
                    </div>
                  </div>
              
            </div>
            
            <div class="container3">
                <img src="../_imagens/letreca/casa.png" class="img-fluid cadimg" alt="Imagem responsiva">
            </div>

            <div class="container2">
                <img src="../_imagens/letreca/paisagem2.png" class="img-fluid cadimg" alt="Imagem responsiva">
            </div>

            <div class="row container-teclado">
                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                      <a style="position: relative; font-size: 1.8rem; left: 0%">A</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">B</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">C</a>
                    </div>
                  </div>
                  
                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">D</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">E</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">F</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">G</a>
                    </div>
                  </div>
                  
                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">H</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">I</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">J</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">K</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">L</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">M</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">N</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">O</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                    <div class="teclas" style="width: 3rem">
                        <a style="position: relative; font-size: 1.8rem; left: 0%">P</a>
                    </div>
                  </div>

                  <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Q</a>
                      </div>
                    </div>
  
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">R</a>
                      </div>
                    </div>
  
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">S</a>
                      </div>
                    </div>

                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">T</a>
                      </div>
                    </div>
  
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">U</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">V</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">W</a>
                      </div>
                    </div>

                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">X</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Y</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Z</a>
                      </div>
                    </div>

                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Á</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">É</a>
                      </div>
                    </div>

                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Í</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Ó</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Ú</a>
                      </div>
                    </div>

                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Â</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Ê</a>
                      </div>
                    </div>

                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Ô</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Ã</a>
                      </div>
                    </div>
    
                    <div class="col-auto" style="width: 3.5rem">
                      <div class="teclas" style="width: 3rem">
                          <a style="position: relative; font-size: 1.8rem; left: 0%">Õ</a>
                      </div>
                    </div>



            </div>
             
           

            <!-- <div class="content">
                <div class="card itens" style="width: 10rem;">
                  <img class="card-img-top" src="../imagens/test.jpg" alt="Imagem de capa do card">
                  <div class="card-body body">
                    <h5 class="card-title text" style="text-align: center;">Palavras diversas</h5>
                </div>
            </div>
        </div> -->

       </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import { constants } from "crypto";

export default {

};
</script>

<style>
/* eslint-disable */

.container{
  background-position: center;
    background-repeat: no-repeat;
	position: relative;
	border: 2px solid;
	border-color: #A8D500;
	border-radius: 1%;
	box-shadow: 5px 5px;
	background-color: #A8D500;
	max-width: auto !important;
	border: none !important;
  height: 650px;
}

.engine{
  background-color: #2A7039;  
}

.container-teclado{
	background-color: #2A7039;
	position: relative;
	padding-left: 1.8%;
	margin-top: -1%;
	border-radius: 5px 5px 5px 5px;
}

.cadimg {
    position: relative;
    width: 100%;
    left: 0%;
}

.teclas{
	position: relative;
	width: 3.2rem;
	background-color: #A2D048;
	margin-left: -0.66rem;
	color: aliceblue;
	border-radius: 7px 7px 7px 7px;
}

.palavra{
	position: absolute;
	z-index: 999;
	top: 22%;
	left: 5%;
}

.col-auto{
	margin-top: 0%;
	margin-bottom: 2%;
}

.container2{
	position: relative;
	margin-right: -15px;
	margin-left: -15px;
	border-radius: 5px 5px 5px 5px;
}

.container3{
	position: absolute;
	z-index: 999999;
	width: 40%;
	left: 50%;
	top: 29%;
}

.life{
	position: absolute;
	z-index: 999;
	top: 10%;
	left: 51%;
}

.ac{
	width: 3rem !important;
}

/*col-auto das palavras*/
.ca{
	width: 3.5rem !important;
}

/*style das letras*/
.tec{
	width: 3rem !important;
}

@media (max-width: 699px){
	.container{
		max-width: auto !important;
	}

	.container-teclado{
		background-color: #2A7039;
		padding-left: 2%;
	}

	.col-auto{
		margin-top: 2%;
	}


	.ca{
		width: 2.2rem !important;
	}
	
	/*style das letras*/
	.tec{
		width: 2rem !important;
		/*background-color: #2A7039;*/
	}

	.font{
		font-size: 1.5rem !important;
	}

	.container3{
		width: 40%;
		left: 50%;
		top: 25%;
	}

	.palavra{
		top: 16%;
		left: 10%;
	}

	.life{
		top: 5%;
		left: 40%;
	}
}

@media (max-width: 574px){
	.container-teclado{
		background-color: #2A7039;
		padding-left: 2%;
	}

	.col-auto{
		margin-top: 2%;
	}


	.ca{
		width: 2.2rem !important;
	}
	
	/*style das letras*/
	.tec{
		width: 2rem !important;
		/*background-color: #2A7039;*/
	}

	.font{
		font-size: 1.5rem !important;
	}

	.container3{
		width: 40%;
		left: 50%;
		top: 25%;
	}

	.palavra{
		top: 16%;
		left: 10%;
	}

	.life{
		top: 5%;
		left: 40%;
	}
}


@media (max-width: 499px){
	.container-teclado{
		background-color: #2A7039;
		padding-left: 4.5%;
	}

	.col-auto{
		margin-top: 2%;
	}

	.ca{
		width: 2.2rem !important;
	}
	
	/*style das letras*/
	.tec{
		width: 2rem !important;
		/*background-color: #2A7039;*/
	}

	.font{
		font-size: 1.5rem !important;
	}

	.container3{
		width: 40%;
		left: 45%;
		top: 18%;
	}

	.palavra{
		top: 10%;
		left: 10%;
	}

	.life{
		top: 2%;
		left: 20%;
	}
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

@media (max-width: 399px){
	.container-teclado{
		background-color: #2A7039;
		padding-left: 2.5%;
	}

	.col-auto{
		margin-top: 2%;
	}


	.ca{
		width: 2.2rem !important;
	}
	
	/*style das letras*/
	.tec{
		width: 2rem !important;
		/*background-color: #2A7039;*/
	}

	.font{
		font-size: 1.5rem !important;
	}

	.container3{
		width: 40%;
		left: 45%;
		top: 18%;
	}

	.palavra{
		top: 10%;
		left: 10%;
	}

	.life{
		top: 2%;
		left: 20%;
	}
}

@media (max-width: 360px){
	.container-teclado{
		background-color: #2A7039;
		padding-left: 2.5%;
	}

	.col-auto{
		margin-top: 2%;
	}

	.ca{
		width: 2.2rem !important;
	}
	
	/*style das letras*/
	.tec{
		width: 2rem !important;
		/*background-color: #2A7039;*/
	}

	.font{
		font-size: 1.5rem !important;
	}

	.container3{
		width: 40%;
		left: 45%;
		top: 18%;
	}

	.palavra{
		top: 10%;
		left: 10%;
	}

	.life{
		top: 2%;
		left: 20%;
	}
}
</style>
